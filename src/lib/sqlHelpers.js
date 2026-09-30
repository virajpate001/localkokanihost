// src/lib/sqlHelpers.js
// Shared helpers for the MySQL-backed service layer.
// Every content table = a few real (indexed) columns + a `data` JSON column
// holding the rest of the document. This keeps every existing component
// working unchanged: it still receives a plain object with the same shape
// Firestore used to hand back.
import "server-only";
import { randomUUID } from "crypto";
import { query } from "@/lib/db";

export function newId() {
  return randomUUID();
}

// MySQL DATETIME string in UTC, e.g. "2026-09-29 10:15:00"
export function nowSql() {
  return new Date().toISOString().slice(0, 19).replace("T", " ");
}

export function toSql(dateLike) {
  if (!dateLike) return null;
  const d = new Date(dateLike);
  return d.toISOString().slice(0, 19).replace("T", " ");
}

// Converts a DB row (real columns + JSON `data`) into the flat document
// shape every service/component already expects: { id, ...data, createdAt, updatedAt }
export function rowToDoc(row) {
  if (!row) return null;
  const { id, data, createdAt, updatedAt, ...rest } = row;
  const parsed = data ? JSON.parse(data) : {};
  const doc = { id, ...parsed };
  // Real (indexed) columns always win over any stale copy inside `data`,
  // and dates are serialized to ISO strings — exactly what serializeDoc()
  // used to produce from a Firestore Timestamp.
  for (const [k, v] of Object.entries(rest)) {
    if (v !== undefined) doc[k] = typeof v === "boolean" ? v : v;
  }
  if (createdAt !== undefined) doc.createdAt = createdAt instanceof Date ? createdAt.toISOString() : createdAt;
  if (updatedAt !== undefined) doc.updatedAt = updatedAt instanceof Date ? updatedAt.toISOString() : updatedAt;
  return doc;
}

export function rowsToDocs(rows) {
  return rows.map(rowToDoc);
}

// Booleans come back from MySQL as 0/1 — normalize the ones the UI treats as real booleans.
export function bool(v) {
  return v === 1 || v === true;
}

// Insert a new "document": full JSON payload in `data`, plus any indexed
// columns you want to filter/sort on later mirrored alongside it.
// mirror = { columnName: value, ... }
export async function insertDocRow(table, payload, mirror = {}) {
  const id = payload.id || newId();
  const now = nowSql();
  const full = { ...payload, id };
  delete full.createdAt;
  delete full.updatedAt;

  const columns = ["id", "data", "createdAt", "updatedAt"];
  const values = [id, JSON.stringify(full), now, now];
  for (const [col, val] of Object.entries(mirror)) {
    columns.push(col);
    values.push(val === undefined ? null : val);
  }

  const placeholders = columns.map(() => "?").join(", ");
  const colList = columns.map((c) => `\`${c}\``).join(", ");
  await query(`INSERT INTO \`${table}\` (${colList}) VALUES (${placeholders})`, values);

  return { id, ...full, createdAt: now, updatedAt: now };
}

// Shallow-merges `patch` into the existing JSON document (same semantics as
// Firestore's updateDoc: top-level keys are overwritten, explicit null is
// kept as null, arrays/objects are replaced wholesale — not deep-merged).
export async function updateDocRow(table, id, patch, mirror = {}) {
  const rows = await query(`SELECT data FROM \`${table}\` WHERE id = ? LIMIT 1`, [id]);
  if (!rows.length) throw new Error(`${table}/${id} not found`);

  const merged = { ...JSON.parse(rows[0].data), ...patch };
  delete merged.createdAt;
  delete merged.updatedAt;
  const now = nowSql();

  const sets = ["data = ?", "updatedAt = ?"];
  const values = [JSON.stringify(merged), now];
  for (const [col, val] of Object.entries(mirror)) {
    sets.push(`\`${col}\` = ?`);
    values.push(val === undefined ? null : val);
  }
  values.push(id);

  await query(`UPDATE \`${table}\` SET ${sets.join(", ")} WHERE id = ?`, values);
  return { id, ...merged, updatedAt: now };
}

export async function deleteDocRow(table, id) {
  await query(`DELETE FROM \`${table}\` WHERE id = ?`, [id]);
}
