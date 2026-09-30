"use server";

// src/lib/services/contactService.js
import { query } from "@/lib/db";
import { rowsToDocs, insertDocRow, updateDocRow, deleteDocRow } from "@/lib/sqlHelpers";
import { requireAdmin } from "@/lib/auth";

const TABLE = "contactMessages";

// Public — submitted from /contact, no login required.
export async function createContactMessage(data) {
  await insertDocRow(TABLE, { ...data, status: "new" }, { status: "new" });
}

export async function getAllContactMessagesAdmin() {
  await requireAdmin();
  const rows = await query(`SELECT * FROM ${TABLE} ORDER BY createdAt DESC`);
  return rowsToDocs(rows);
}

export async function getNewContactMessagesCount() {
  await requireAdmin();
  const rows = await query(`SELECT COUNT(*) as c FROM ${TABLE} WHERE status = 'new'`);
  return rows[0].c;
}

export async function updateContactMessageStatus(id, status) {
  await requireAdmin();
  return updateDocRow(TABLE, id, { status }, { status });
}

export async function deleteContactMessage(id) {
  await requireAdmin();
  await deleteDocRow(TABLE, id);
}
