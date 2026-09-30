"use server";

// src/lib/services/destinationService.js
import { query } from "@/lib/db";
import { rowToDoc, rowsToDocs, insertDocRow, updateDocRow, deleteDocRow, nowSql } from "@/lib/sqlHelpers";
import { requireAdmin } from "@/lib/auth";

const TABLE = "destinations";

export async function getAllDestinations() {
  const rows = await query(`SELECT * FROM ${TABLE} WHERE archived = 0 ORDER BY name ASC`);
  return rowsToDocs(rows).map((d) => ({
    ...d,
    hotelCount: d.hotelCount || 0,
    restaurantCount: d.restaurantCount || 0,
  }));
}

export async function getFeaturedDestinations(limitCount = 4) {
  const rows = await query(
    `SELECT * FROM ${TABLE} WHERE featured = 1 AND archived = 0 LIMIT ?`,
    [limitCount]
  );
  return rowsToDocs(rows);
}

export async function getDestinationBySlug(slug) {
  const rows = await query(`SELECT * FROM ${TABLE} WHERE slug = ? LIMIT 1`, [slug]);
  return rows.length ? rowToDoc(rows[0]) : null;
}

export async function getDestinationById(id) {
  const rows = await query(`SELECT * FROM ${TABLE} WHERE id = ? LIMIT 1`, [id]);
  return rows.length ? rowToDoc(rows[0]) : null;
}

export async function createDestination(data) {
  await requireAdmin();
  const payload = { ...data, hotelCount: 0, restaurantCount: 0 };
  const doc = await insertDocRow(TABLE, payload, {
    slug: data.slug,
    name: data.name || null,
    featured: data.featured ? 1 : 0,
    archived: 0,
  });
  return { id: doc.id };
}

export async function updateDestination(id, data) {
  await requireAdmin();
  const mirror = {};
  if (data.slug !== undefined) mirror.slug = data.slug;
  if (data.name !== undefined) mirror.name = data.name;
  if (data.featured !== undefined) mirror.featured = data.featured ? 1 : 0;
  if (data.archived !== undefined) mirror.archived = data.archived ? 1 : 0;
  return updateDocRow(TABLE, id, data, mirror);
}

export async function deleteDestination(id) {
  await requireAdmin();
  await deleteDocRow(TABLE, id);
}

export async function incrementHotelCount(destinationId, amount = 1) {
  await requireAdmin();
  await query(
    `UPDATE ${TABLE} SET data = JSON_SET(data, '$.hotelCount', GREATEST(COALESCE(JSON_EXTRACT(data,'$.hotelCount'),0) + ?, 0)), updatedAt = ? WHERE id = ?`,
    [amount, nowSql(), destinationId]
  );
}

export async function incrementRestaurantCount(destinationId, amount = 1) {
  await requireAdmin();
  await query(
    `UPDATE ${TABLE} SET data = JSON_SET(data, '$.restaurantCount', GREATEST(COALESCE(JSON_EXTRACT(data,'$.restaurantCount'),0) + ?, 0)), updatedAt = ? WHERE id = ?`,
    [amount, nowSql(), destinationId]
  );
}

export async function archiveDestination(id) {
  await requireAdmin();
  return updateDocRow(TABLE, id, { archived: true, featured: false }, { archived: 1, featured: 0 });
}

export async function restoreDestination(id) {
  await requireAdmin();
  return updateDocRow(TABLE, id, { archived: false }, { archived: 0 });
}
