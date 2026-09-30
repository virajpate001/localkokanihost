"use server";

// src/lib/services/partnerService.js
import { query } from "@/lib/db";
import { rowToDoc, rowsToDocs, insertDocRow, updateDocRow, deleteDocRow, nowSql } from "@/lib/sqlHelpers";
import { requireAdmin, requireOwner, requireAdminOrOwnerSelf } from "@/lib/auth";

const TABLE = "partnerApplications";

function generateRegistrationId() {
  const ts = Date.now().toString(36).toUpperCase();
  const rand = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `REG-${ts}-${rand}`;
}

function generatePartnerId() {
  const ts = Date.now().toString(36).toUpperCase();
  return `PTR-${ts}`;
}

// Owner must be logged in and can only file an application under their own uid.
export async function createPartnerApplication(data, ownerId) {
  const session = await requireOwner();
  if (session.uid !== ownerId) throw new Error("UNAUTHORIZED");

  const registrationId = generateRegistrationId();
  const payload = {
    ...data,
    ownerId,
    registrationId,
    partnerId: null,
    status: "pending",
    submittedAt: nowSql(),
    reviewedAt: null,
    reviewNotes: "",
  };
  const doc = await insertDocRow(TABLE, payload, {
    ownerId,
    status: "pending",
    registrationId,
  });
  return { id: doc.id, registrationId };
}

export async function getAllPartnerApplicationsAdmin() {
  await requireAdmin();
  const rows = await query(`SELECT * FROM ${TABLE} ORDER BY createdAt DESC`);
  return rowsToDocs(rows);
}

export async function getPartnerApplicationsByStatus(status) {
  await requireAdmin();
  const rows = await query(`SELECT * FROM ${TABLE} WHERE status = ? ORDER BY createdAt DESC`, [status]);
  return rowsToDocs(rows);
}

export async function getPartnerApplicationById(id) {
  await requireAdmin();
  const rows = await query(`SELECT * FROM ${TABLE} WHERE id = ? LIMIT 1`, [id]);
  return rows.length ? rowToDoc(rows[0]) : null;
}

export async function approvePartnerApplication(id, reviewNotes = "") {
  await requireAdmin();
  const partnerId = generatePartnerId();
  await updateDocRow(
    TABLE, id,
    { status: "approved", partnerId, reviewNotes, reviewedAt: nowSql() },
    { status: "approved" }
  );
  return partnerId;
}

export async function rejectPartnerApplication(id, reviewNotes = "") {
  await requireAdmin();
  return updateDocRow(
    TABLE, id,
    { status: "rejected", reviewNotes, reviewedAt: nowSql() },
    { status: "rejected" }
  );
}

export async function getPendingPartnerApplicationsCount() {
  await requireAdmin();
  const rows = await query(`SELECT COUNT(*) as c FROM ${TABLE} WHERE status = 'pending'`);
  return rows[0].c;
}

export async function deletePartnerApplication(id) {
  await requireAdmin();
  await deleteDocRow(TABLE, id);
}

// Viewable by the admin panel (any owner) or by the owner themself (their own applications).
export async function getApplicationsByOwner(ownerId) {
  await requireAdminOrOwnerSelf(ownerId);
  const rows = await query(`SELECT * FROM ${TABLE} WHERE ownerId = ? ORDER BY createdAt DESC`, [ownerId]);
  return rowsToDocs(rows);
}
