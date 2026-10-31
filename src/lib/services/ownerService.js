
"use server";

// src/lib/services/ownerService.js

import bcrypt from "bcryptjs";
import { query } from "@/lib/db";
import { rowToDoc, rowsToDocs, nowSql } from "@/lib/sqlHelpers";
import { requireAdmin } from "@/lib/auth";
import { getApplicationsByOwner } from "./partnerService";

const TABLE = "owners";

// ─────────────────────────────────────────────
// GET ALL OWNERS (ADMIN)
// ─────────────────────────────────────────────

export async function getAllOwnersAdmin() {
  await requireAdmin();

  // Never send passwordHash to the frontend.
  const rows = await query(
    `SELECT id, email, data, createdAt, updatedAt
     FROM ${TABLE}
     ORDER BY createdAt DESC`
  );

  return rowsToDocs(rows);
}

// ─────────────────────────────────────────────
// GET OWNER BY ID (ADMIN)
// ─────────────────────────────────────────────

export async function getOwnerById(uid) {
  await requireAdmin();

  const rows = await query(
    `SELECT id, email, data, createdAt, updatedAt
     FROM ${TABLE}
     WHERE id = ?
     LIMIT 1`,
    [uid]
  );

  return rows.length ? rowToDoc(rows[0]) : null;
}

// ─────────────────────────────────────────────
// GET ALL OWNERS WITH APPLICATION STATISTICS
// ─────────────────────────────────────────────

export async function getAllOwnersWithStats() {
  await requireAdmin();

  const owners = await getAllOwnersAdmin();

  const enriched = await Promise.all(
    owners.map(async (owner) => {
      const applications = await getApplicationsByOwner(
        owner.uid || owner.id
      );

      return {
        ...owner,
        applicationCount: applications.length,
        approvedCount: applications.filter(
          (a) => a.status === "approved"
        ).length,
        pendingCount: applications.filter(
          (a) => a.status === "pending"
        ).length,
        rejectedCount: applications.filter(
          (a) => a.status === "rejected"
        ).length,
        latestApplication: applications[0] || null,
      };
    })
  );

  return enriched;
}

// ─────────────────────────────────────────────
// RESET OWNER PASSWORD (ADMIN)
// ─────────────────────────────────────────────

export async function resetOwnerPassword(ownerId, newPassword) {
  // Only authenticated admins can reset owner passwords.
  await requireAdmin();

  // Validate input.
  if (
    typeof ownerId !== "string" ||
    !ownerId.trim() ||
    typeof newPassword !== "string" ||
    newPassword.length < 8
  ) {
    return {
      success: false,
      message: "Password must be at least 8 characters.",
    };
  }

  // bcrypt only uses the first 72 bytes of a password.
  if (Buffer.byteLength(newPassword, "utf8") > 72) {
    return {
      success: false,
      message: "Password must not exceed 72 bytes.",
    };
  }

  // Check whether the owner exists.
  const existing = await query(
    `SELECT id FROM ${TABLE} WHERE id = ? LIMIT 1`,
    [ownerId]
  );

  if (!existing.length) {
    return {
      success: false,
      message: "Owner not found.",
    };
  }

  // Generate a secure bcrypt password hash.
  const passwordHash = await bcrypt.hash(newPassword, 10);

  // Update password hash and timestamp.
  await query(
    `UPDATE ${TABLE}
     SET passwordHash = ?, updatedAt = ?
     WHERE id = ?`,
    [passwordHash, nowSql(), ownerId]
  );

  return {
    success: true,
    message: "Owner password updated successfully.",
  };
}
