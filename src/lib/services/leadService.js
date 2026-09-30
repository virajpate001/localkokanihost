"use server";

// src/lib/services/leadService.js
import { query } from "@/lib/db";
import { rowsToDocs, insertDocRow, updateDocRow, deleteDocRow } from "@/lib/sqlHelpers";
import { requireAdmin } from "@/lib/auth";

const TABLE = "leads";

export async function getNewLeadsCount() {
  await requireAdmin();
  const rows = await query(`SELECT COUNT(*) as c FROM ${TABLE} WHERE status = 'new'`);
  return rows[0].c;
}

// Public — submitted from the hotel/restaurant enquiry forms, no login required.
export async function createLead(data) {
  await insertDocRow(TABLE, { ...data, status: "new" }, { status: "new" });
}

// Normalizes old-format hotel leads (hotelId/hotelName) alongside new generalized ones
export async function getAllLeads() {
  await requireAdmin();
  const rows = await query(`SELECT * FROM ${TABLE} ORDER BY createdAt DESC`);
  return rowsToDocs(rows).map((data) => ({
    id: data.id,
    entityType: data.entityType || "hotel",
    entityId: data.entityId || data.hotelId,
    entitySlug: data.entitySlug || data.hotelSlug,
    entityName: data.entityName || data.hotelName,
    name: data.name,
    phone: data.phone,
    email: data.email || "",
    checkIn: data.checkIn || "",
    checkOut: data.checkOut || "",
    date: data.date || "",
    time: data.time || "",
    guests: data.guests,
    message: data.message || "",
    status: data.status,
    source: data.source,
    createdAt: data.createdAt,
  }));
}

export async function updateLeadStatus(id, status) {
  await requireAdmin();
  return updateDocRow(TABLE, id, { status }, { status });
}

export async function deleteLead(id) {
  await requireAdmin();
  await deleteDocRow(TABLE, id);
}
