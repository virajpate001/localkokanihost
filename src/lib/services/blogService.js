"use server";

// src/lib/services/blogService.js
import { query } from "@/lib/db";
import { rowToDoc, rowsToDocs, insertDocRow, updateDocRow, deleteDocRow, nowSql } from "@/lib/sqlHelpers";
import { requireAdmin } from "@/lib/auth";

const TABLE = "posts";

export async function getAllPublishedPosts() {
  const rows = await query(`SELECT * FROM ${TABLE} WHERE published = 1 ORDER BY publishedAt DESC`);
  return rowsToDocs(rows);
}

export async function getPublishedPostBySlug(slug) {
  const rows = await query(`SELECT * FROM ${TABLE} WHERE slug = ? AND published = 1 LIMIT 1`, [slug]);
  return rows.length ? rowToDoc(rows[0]) : null;
}

export async function getRelatedPosts(destinationSlug, excludeId, limitCount = 3) {
  if (!destinationSlug) return [];
  const rows = await query(
    `SELECT * FROM ${TABLE} WHERE destinationSlug = ? AND published = 1 AND id != ? LIMIT ?`,
    [destinationSlug, excludeId || "", limitCount]
  );
  return rowsToDocs(rows);
}

export async function getAllPostsAdmin() {
  await requireAdmin();
  const rows = await query(`SELECT * FROM ${TABLE} ORDER BY createdAt DESC`);
  return rowsToDocs(rows);
}

export async function getPostById(id) {
  await requireAdmin();
  const rows = await query(`SELECT * FROM ${TABLE} WHERE id = ? LIMIT 1`, [id]);
  return rows.length ? rowToDoc(rows[0]) : null;
}

export async function createPost(data) {
  await requireAdmin();
  const publishedAt = data.published ? nowSql() : null;
  const payload = { ...data, publishedAt };
  const doc = await insertDocRow(TABLE, payload, {
    slug: data.slug,
    published: data.published ? 1 : 0,
    destinationSlug: data.destinationSlug || null,
    publishedAt,
  });
  return { id: doc.id };
}

export async function updatePost(id, data, wasPublished) {
  await requireAdmin();
  const patch = { ...data };
  const mirror = {};
  if (data.slug !== undefined) mirror.slug = data.slug;
  if (data.destinationSlug !== undefined) mirror.destinationSlug = data.destinationSlug;
  if (data.published !== undefined) {
    mirror.published = data.published ? 1 : 0;
    if (data.published && !wasPublished) {
      patch.publishedAt = nowSql();
      mirror.publishedAt = patch.publishedAt;
    }
  }
  return updateDocRow(TABLE, id, patch, mirror);
}

export async function deletePost(id) {
  await requireAdmin();
  await deleteDocRow(TABLE, id);
}
