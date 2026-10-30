import "server-only";
import { query } from "@/lib/db";
import { rowToDoc } from "@/lib/sqlHelpers";
import { BOOKING_CODE_REGEX } from "@/utils/bookingCode";

const ENTITY_TABLES = { hotel: "hotels", restaurant: "restaurants" };

// Returns { id, name, slug } straight from the DB, or null. Never trust name/slug from the browser.
export async function getEntityBasics(entityType, entityId) {
  const table = ENTITY_TABLES[entityType];
  if (!table || !entityId || typeof entityId !== "string" || entityId.length > 64) return null;
  const rows = await query(`SELECT id, data FROM ${table} WHERE id = ? LIMIT 1`, [entityId]);
  if (!rows.length) return null;
  const data = JSON.parse(rows[0].data || "{}");
  return { id: rows[0].id, name: data.name || "", slug: data.slug || "" };
}

// Finds the lead (as a flat doc) that carries this booking code, or null.
export async function findLeadByBookingCode(code) {
  if (!BOOKING_CODE_REGEX.test(code)) return null;
  const rows = await query("SELECT * FROM leads WHERE data LIKE ? LIMIT 1", [`%"bookingCode":"${code}"%`]);
  return rows.length ? rowToDoc(rows[0]) : null;
}

// True if a review already used this booking code.
export async function bookingCodeUsedByReview(code) {
  if (!BOOKING_CODE_REGEX.test(code)) return true;
  const rows = await query("SELECT id FROM reviews WHERE data LIKE ? LIMIT 1", [`%"bookingCode":"${code}"%`]);
  return rows.length > 0;
}