import "server-only";

import { createHmac, randomInt, timingSafeEqual } from "node:crypto";
import { Resend } from "resend";
import { query } from "@/lib/db";
import { nowSql } from "@/lib/sqlHelpers";

function getOtpHash(otp) {
  const secret = process.env.OTP_SECRET;

  if (!secret || secret.length < 32) {
    throw new Error("OTP_SECRET must be configured with at least 32 characters.");
  }

  return createHmac("sha256", secret).update(otp).digest("hex");
}

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY is not configured.");
  return new Resend(apiKey);
}

export async function sendOwnerVerificationCode(email) {
  const cleanEmail = String(email || "").trim().toLowerCase();

  const owners = await query(
    "SELECT id, email, emailVerified FROM owners WHERE email = ? LIMIT 1",
    [cleanEmail]
  );

  const owner = owners[0];
  if (!owner) return { error: "auth/user-not-found" };
  if (Number(owner.emailVerified) === 1) return { ok: true, alreadyVerified: true };

  const existingRows = await query(
    `SELECT sendCount,
            (TIMESTAMPDIFF(SECOND, lastSentAt, UTC_TIMESTAMP())) AS secondsSinceSent,
            (windowStartedAt > DATE_SUB(UTC_TIMESTAMP(), INTERVAL 1 HOUR)) AS withinWindow
     FROM owner_email_verifications
     WHERE ownerId = ?
     LIMIT 1`,
    [owner.id]
  );

  const existing = existingRows[0];

  if (existing && Number(existing.secondsSinceSent) < 60) {
    return {
      error: "auth/verification-cooldown",
      retryAfter: 60 - Number(existing.secondsSinceSent),
    };
  }

  if (
    existing &&
    Number(existing.withinWindow) === 1 &&
    Number(existing.sendCount) >= 5
  ) {
    return { error: "auth/verification-hourly-limit" };
  }

  const otp = String(randomInt(0, 1000000)).padStart(6, "0");
  const otpHash = getOtpHash(otp);
  const now = nowSql();

  await query(
    `INSERT INTO owner_email_verifications
      (ownerId, otpHash, expiresAt, attempts, lastSentAt,
       windowStartedAt, sendCount, createdAt, updatedAt)
     VALUES (?, ?, DATE_ADD(UTC_TIMESTAMP(), INTERVAL 10 MINUTE), 0, ?,
             ?, 1, ?, ?)
     ON DUPLICATE KEY UPDATE
       otpHash = VALUES(otpHash),
       expiresAt = VALUES(expiresAt),
       attempts = 0,
       sendCount = IF(
         windowStartedAt > DATE_SUB(UTC_TIMESTAMP(), INTERVAL 1 HOUR),
         sendCount + 1,
         1
       ),
       windowStartedAt = IF(
         windowStartedAt > DATE_SUB(UTC_TIMESTAMP(), INTERVAL 1 HOUR),
         windowStartedAt,
         VALUES(windowStartedAt)
       ),
       lastSentAt = VALUES(lastSentAt),
       updatedAt = VALUES(updatedAt)`,
    [owner.id, otpHash, now, now, now, now]
  );

  try {
    const resend = getResendClient();
    const from = process.env.RESEND_FROM_EMAIL;

    if (!from) throw new Error("RESEND_FROM_EMAIL is not configured.");

    const result = await resend.emails.send({
      from,
      to: [cleanEmail],
      subject: "Verify your LocalKokani owner account",
      text: `Your LocalKokani verification code is ${otp}. It expires in 10 minutes. If you did not request this code, you can ignore this email.`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:520px;margin:auto;padding:24px;color:#222">
          <h2>Verify your LocalKokani account</h2>
          <p>Use this verification code to complete your owner registration:</p>
          <div style="font-size:32px;font-weight:bold;letter-spacing:8px;padding:18px;background:#f4f4f4;border-radius:8px;text-align:center">
            ${otp}
          </div>
          <p>This code expires in <strong>10 minutes</strong>.</p>
          <p>If you did not request this code, you can ignore this email.</p>
          <p>— LocalKokani</p>
        </div>
      `,
    });

    if (result.error) {
      console.error("Resend email error:", result.error.message);
      return { error: "auth/email-send-failed" };
    }

    return { ok: true };
  } catch (error) {
    console.error("Owner verification email failed:", error.message);
    return { error: "auth/email-send-failed" };
  }
}

export async function verifyOwnerOtp(ownerId, submittedOtp) {
  const otp = String(submittedOtp || "").trim();

  if (!/^\d{6}$/.test(otp)) {
    return { error: "auth/invalid-verification-code" };
  }

  const rows = await query(
    `SELECT otpHash,
            (expiresAt > UTC_TIMESTAMP()) AS notExpired
     FROM owner_email_verifications
     WHERE ownerId = ?
     LIMIT 1`,
    [ownerId]
  );

  const verification = rows[0];

  if (!verification) return { error: "auth/verification-not-found" };

  if (Number(verification.notExpired) !== 1) {
    await query(
      "DELETE FROM owner_email_verifications WHERE ownerId = ?",
      [ownerId]
    );
    return { error: "auth/verification-expired" };
  }

  // Reserve one attempt atomically BEFORE comparing, so parallel requests
  // cannot sneak in extra guesses. Allows at most 5 guesses per code.
  const reserved = await query(
    `UPDATE owner_email_verifications
     SET attempts = attempts + 1, updatedAt = ?
     WHERE ownerId = ? AND attempts < 5`,
    [nowSql(), ownerId]
  );

  if (reserved.affectedRows !== 1) {
    return { error: "auth/verification-too-many-attempts" };
  }

  const submittedHash = Buffer.from(getOtpHash(otp), "hex");
  const storedHash = Buffer.from(verification.otpHash, "hex");

  const matches =
    submittedHash.length === storedHash.length &&
    timingSafeEqual(submittedHash, storedHash);

  if (!matches) {
    return { error: "auth/invalid-verification-code" };
  }

  await query(
    `UPDATE owners
     SET emailVerified = 1,
         emailVerifiedAt = UTC_TIMESTAMP(),
         updatedAt = ?
     WHERE id = ?`,
    [nowSql(), ownerId]
  );

  await query(
    "DELETE FROM owner_email_verifications WHERE ownerId = ?",
    [ownerId]
  );

  return { ok: true };
}