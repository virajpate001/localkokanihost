"use server";

// src/lib/services/restaurantService.js
import { query } from "@/lib/db";
import { rowToDoc, rowsToDocs, insertDocRow, updateDocRow, deleteDocRow, nowSql } from "@/lib/sqlHelpers";
import { requireAdmin, requireAdminOrOwnerSelf } from "@/lib/auth";

const TABLE = "restaurants";

function mirrorFromPayload(data) {
  const m = {};
  if (data.slug !== undefined) m.slug = data.slug;
  if (data.status !== undefined) m.status = data.status;
  if (data.destinationId !== undefined) m.destinationId = data.destinationId;
  if (data.ownerId !== undefined) m.ownerId = data.ownerId;
  if (data.featured !== undefined) m.featured = data.featured ? 1 : 0;
  if (data.sponsored !== undefined) m.sponsored = data.sponsored ? 1 : 0;
  if (data.rating !== undefined) m.rating = data.rating;
  if (data.featuredPromotedAt !== undefined) m.featuredPromotedAt = data.featuredPromotedAt ? nowSql() : null;
  if (data.sponsoredPromotedAt !== undefined) m.sponsoredPromotedAt = data.sponsoredPromotedAt ? nowSql() : null;
  return m;
}

// ───────── PUBLIC READ QUERIES ─────────

export async function getAllRestaurants() {
  const rows = await query(`SELECT * FROM ${TABLE} WHERE status = 'active' ORDER BY createdAt DESC`);
  return rowsToDocs(rows);
}

export async function getFeaturedRestaurants(limitCount = 8) {
  const rows = await query(
    `SELECT * FROM ${TABLE} WHERE featured = 1 AND status = 'active' ORDER BY featuredPromotedAt DESC LIMIT ?`,
    [limitCount]
  );
  return rowsToDocs(rows);
}

export async function getRestaurantsByDestination(destinationId) {
  const rows = await query(
    `SELECT * FROM ${TABLE} WHERE destinationId = ? AND status = 'active' ORDER BY rating DESC`,
    [destinationId]
  );
  return rowsToDocs(rows);
}

export async function getRestaurantBySlug(slug) {
  const rows = await query(`SELECT * FROM ${TABLE} WHERE slug = ? LIMIT 1`, [slug]);
  return rows.length ? rowToDoc(rows[0]) : null;
}

export async function getRestaurantById(id) {
  const rows = await query(`SELECT * FROM ${TABLE} WHERE id = ? LIMIT 1`, [id]);
  return rows.length ? rowToDoc(rows[0]) : null;
}

// ───────── ADMIN QUERIES ─────────

export async function getAllRestaurantsAdmin() {
  await requireAdmin();
  const rows = await query(`SELECT * FROM ${TABLE} ORDER BY createdAt DESC`);
  return rowsToDocs(rows);
}

// ───────── WRITE OPERATIONS ─────────

export async function createRestaurant(data) {
  await requireAdmin();
  const payload = { ...data, rating: data.rating || 0, reviewCount: 0, status: data.status || "active" };
  const doc = await insertDocRow(TABLE, payload, {
    slug: data.slug,
    status: payload.status,
    destinationId: data.destinationId || null,
    ownerId: data.ownerId || null,
    featured: data.featured ? 1 : 0,
    sponsored: data.sponsored ? 1 : 0,
    rating: payload.rating,
  });
  return { id: doc.id };
}

export async function updateRestaurant(id, data) {
  await requireAdmin();
  return updateDocRow(TABLE, id, data, mirrorFromPayload(data));
}

export async function deleteRestaurant(id) {
  await requireAdmin();
  await deleteDocRow(TABLE, id);
}

export async function archiveRestaurant(id) {
  await requireAdmin();
  return updateDocRow(TABLE, id, { status: "archived" }, { status: "archived" });
}

export async function restoreRestaurant(id) {
  await requireAdmin();
  return updateDocRow(TABLE, id, { status: "active" }, { status: "active" });
}

export async function getSponsoredRestaurantsByDestination(destinationId, limitCount = 8) {
  const rows = await query(
    `SELECT * FROM ${TABLE} WHERE destinationId = ? AND sponsored = 1 AND status = 'active' ORDER BY sponsoredPromotedAt DESC LIMIT ?`,
    [destinationId, limitCount]
  );
  return rowsToDocs(rows);
}

export async function getRestaurantsByOwner(ownerId) {
  await requireAdminOrOwnerSelf(ownerId);
  const rows = await query(`SELECT * FROM ${TABLE} WHERE ownerId = ? ORDER BY createdAt DESC`, [ownerId]);
  return rowsToDocs(rows);
}
