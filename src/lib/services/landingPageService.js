"use server";

// src/lib/services/landingPageService.js
import { query } from "@/lib/db";
import { rowToDoc, rowsToDocs, insertDocRow, updateDocRow, deleteDocRow } from "@/lib/sqlHelpers";
import { requireAdmin } from "@/lib/auth";

const TABLE = "landingPages";

export async function getPublishedLandingPageBySlug(slug) {
  const rows = await query(`SELECT * FROM ${TABLE} WHERE slug = ? AND published = 1 LIMIT 1`, [slug]);
  return rows.length ? rowToDoc(rows[0]) : null;
}

export async function getAllPublishedLandingPages() {
  const rows = await query(`SELECT * FROM ${TABLE} WHERE published = 1`);
  return rowsToDocs(rows);
}

export async function getAllLandingPagesAdmin() {
  await requireAdmin();
  const rows = await query(`SELECT * FROM ${TABLE} ORDER BY createdAt DESC`);
  return rowsToDocs(rows);
}

export async function getLandingPageById(id) {
  await requireAdmin();
  const rows = await query(`SELECT * FROM ${TABLE} WHERE id = ? LIMIT 1`, [id]);
  return rows.length ? rowToDoc(rows[0]) : null;
}

export async function createLandingPage(data) {
  await requireAdmin();
  const doc = await insertDocRow(TABLE, data, {
    slug: data.slug,
    published: data.published ? 1 : 0,
  });
  return { id: doc.id };
}

export async function updateLandingPage(id, data) {
  await requireAdmin();
  const mirror = {};
  if (data.slug !== undefined) mirror.slug = data.slug;
  if (data.published !== undefined) mirror.published = data.published ? 1 : 0;
  return updateDocRow(TABLE, id, data, mirror);
}

export async function deleteLandingPage(id) {
  await requireAdmin();
  await deleteDocRow(TABLE, id);
}

// Helper: resolve a list of entity IDs into full documents, preserving order,
// silently skipping any that were deleted since being referenced.
export async function resolveEntities(ids = [], getByIdFn) {
  const results = await Promise.all(ids.map((id) => getByIdFn(id).catch(() => null)));
  return results.filter(Boolean);
}

export async function resolveAttractionsSection(attractionsSection, getDestinationByIdFn) {
  if (attractionsSection?.sourceDestinationId) {
    const destination = await getDestinationByIdFn(attractionsSection.sourceDestinationId);
    if (destination?.touristPlaces?.length > 0) {
      return {
        heading: attractionsSection.heading,
        attractions: destination.touristPlaces
          .filter((p) => p.name?.trim())
          .map((p) => ({ name: p.name, image: p.image, description: p.description, category: p.category })),
        sourceDestinationName: destination.name,
      };
    }
  }

  return {
    heading: attractionsSection?.heading,
    attractions: attractionsSection?.attractions || [],
  };
}
