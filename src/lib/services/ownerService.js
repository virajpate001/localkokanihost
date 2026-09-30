"use server";

// src/lib/services/ownerService.js
import { query } from "@/lib/db";
import { rowToDoc, rowsToDocs } from "@/lib/sqlHelpers";
import { requireAdmin } from "@/lib/auth";
import { getApplicationsByOwner } from "./partnerService";

const TABLE = "owners";

export async function getAllOwnersAdmin() {
  await requireAdmin();
  const rows = await query(`SELECT * FROM ${TABLE} ORDER BY createdAt DESC`);
  return rowsToDocs(rows);
}

export async function getOwnerById(uid) {
  await requireAdmin();
  const rows = await query(`SELECT * FROM ${TABLE} WHERE id = ? LIMIT 1`, [uid]);
  return rows.length ? rowToDoc(rows[0]) : null;
}

// Combines an owner's profile with a summary of their applications —
// used to enrich the admin list view without a separate query per row for the count badge.
export async function getAllOwnersWithStats() {
  await requireAdmin();
  const owners = await getAllOwnersAdmin();

  const enriched = await Promise.all(
    owners.map(async (owner) => {
      const applications = await getApplicationsByOwner(owner.uid || owner.id);
      return {
        ...owner,
        applicationCount: applications.length,
        approvedCount: applications.filter((a) => a.status === "approved").length,
        pendingCount: applications.filter((a) => a.status === "pending").length,
        rejectedCount: applications.filter((a) => a.status === "rejected").length,
        latestApplication: applications[0] || null,
      };
    })
  );

  return enriched;
}
