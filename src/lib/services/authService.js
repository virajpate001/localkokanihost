"use server";

// src/lib/services/authService.js
// Replaces firebase/auth's signInWithEmailAndPassword / createUserWithEmailAndPassword / signOut.
import bcrypt from "bcryptjs";
import { query } from "@/lib/db";
import { newId, nowSql, rowToDoc } from "@/lib/sqlHelpers";
import {
  createAdminSession,
  destroyAdminSession,
  getAdminSession,
  createOwnerSession,
  destroyOwnerSession,
  getOwnerSession,
} from "@/lib/auth";
import { rateLimitByIp } from "@/lib/security";

// ───────── Admin ─────────

export async function adminLogin(email, password) {
  // Brute-force protection: 8 attempts per 15 minutes per IP + email
  const cleanEmail = String(email || "")
    .trim()
    .toLowerCase()
    .slice(0, 120);
  const rl = await rateLimitByIp("admin-login", 8, 15 * 60 * 1000, cleanEmail);
  if (!rl.allowed) return { error: "auth/too-many-requests" };

  const rows = await query("SELECT * FROM admins WHERE email = ? LIMIT 1", [
    cleanEmail,
  ]);
  const admin = rows[0];

  // Same error for "no such user" and "wrong password" so attackers can't tell which emails exist.
  if (!admin) return { error: "auth/invalid-credential" };

  const ok = await bcrypt.compare(String(password || ""), admin.passwordHash);
  if (!ok) return { error: "auth/invalid-credential" };

  await createAdminSession(admin);
  return { user: { uid: admin.id, email: admin.email, name: admin.name } };
}

export async function adminLogout() {
  await destroyAdminSession();
  return { ok: true };
}

// Used by the client AuthContext on mount to restore session state.
export async function getCurrentAdmin() {
  const session = await getAdminSession();
  if (!session) return null;
  return { uid: session.uid, email: session.email };
}

// ───────── Owner ─────────

export async function ownerSignup({
  fullName,
  email,
  mobile,
  whatsapp,
  password,
}) {

   // 5 signups per hour per IP
  const rl = await rateLimitByIp("owner-signup", 5, 60 * 60 * 1000);
  if (!rl.allowed) return { error: "auth/too-many-requests" };
  if (typeof password !== "string" || password.length < 8 || password.length > 128) {
    return { error: "auth/weak-password" };
  }

  const cleanEmail = String(email || "").trim().toLowerCase().slice(0, 120);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) return { error: "auth/invalid-email" };

  const existing = await query(
    "SELECT id FROM owners WHERE email = ? LIMIT 1",
    [cleanEmail],
  );
  if (existing.length) return { error: "auth/email-already-in-use" };

  const id = newId();
  const passwordHash = await bcrypt.hash(password, 10);
  const now = nowSql();
  const profile = { uid: id, fullName, email: cleanEmail, mobile, whatsapp };

  await query(
    "INSERT INTO owners (id, email, passwordHash, data, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?)",
    [id, cleanEmail, passwordHash, JSON.stringify(profile), now, now],
  );

  await createOwnerSession({ id, email: cleanEmail });
  return { user: { uid: id, email: cleanEmail } };
}

export async function ownerLogin(email, password) {
  const cleanEmail = String(email || "").trim().toLowerCase().slice(0, 120);
  const rl = await rateLimitByIp("owner-login", 8, 15 * 60 * 1000, cleanEmail);
   if (!rl.allowed) return { error: "auth/too-many-requests" };
  const rows = await query("SELECT * FROM owners WHERE email = ? LIMIT 1", [cleanEmail]);
  const owner = rows[0];
  if (!owner) return { error: "auth/invalid-credential" };

  const ok = await bcrypt.compare(String(password || ""), owner.passwordHash);
  if (!ok) return { error: "auth/invalid-credential" };

  await createOwnerSession(owner);
  return {
    user: { uid: owner.id, email: owner.email },
    profile: rowToDoc(owner),
  };
}

export async function ownerLogout() {
  await destroyOwnerSession();
  return { ok: true };
}

export async function getCurrentOwner() {
  const session = await getOwnerSession();
  if (!session) return null;
  const rows = await query("SELECT * FROM owners WHERE id = ? LIMIT 1", [
    session.uid,
  ]);
  if (!rows.length) return null;
  return {
    user: { uid: session.uid, email: session.email },
    profile: rowToDoc(rows[0]),
  };
}
