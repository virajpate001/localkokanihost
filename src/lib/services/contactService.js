"use server";

// src/lib/services/contactService.js
import { query } from "@/lib/db";
import { rowsToDocs, insertDocRow, updateDocRow, deleteDocRow } from "@/lib/sqlHelpers";
import { requireAdmin } from "@/lib/auth";
import { rateLimitByIp, cleanText, cleanEmail } from "@/lib/security";

const TABLE = "contactMessages";

// Public — submitted from /contact, no login required.
export async function createContactMessage(data = {}) {
  const rl = await rateLimitByIp("contact", 3, 10 * 60 * 1000);
  if (!rl.allowed) throw new Error("RATE_LIMITED");

  const name = cleanText(data.name, 80);
  const email = cleanEmail(data.email);
  const message = cleanText(data.message, 3000);
  if (name.length < 2 || !email || message.length < 5) throw new Error("INVALID_INPUT");

  await insertDocRow(
    TABLE,
    { name, email, subject: cleanText(data.subject, 150) || "General Enquiry", message, status: "new" },
    { status: "new" }
  );
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
