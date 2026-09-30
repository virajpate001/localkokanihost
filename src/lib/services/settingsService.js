"use server";

// src/lib/services/settingsService.js
import { query } from "@/lib/db";
import { nowSql } from "@/lib/sqlHelpers";
import { requireAdmin } from "@/lib/auth";

const KEY = "siteSettings:homepage";

export async function getSiteSettings() {
  const rows = await query("SELECT data FROM settings WHERE k = ? LIMIT 1", [KEY]);
  if (!rows.length) return { heroImage: null, logo: null };
  return { id: "homepage", ...JSON.parse(rows[0].data) };
}

export async function updateSiteSettings(data) {
  await requireAdmin();
  const existingRows = await query("SELECT data FROM settings WHERE k = ? LIMIT 1", [KEY]);
  const merged = { ...(existingRows.length ? JSON.parse(existingRows[0].data) : {}), ...data };
  await query(
    `INSERT INTO settings (k, data, updatedAt) VALUES (?, ?, ?)
     ON DUPLICATE KEY UPDATE data = VALUES(data), updatedAt = VALUES(updatedAt)`,
    [KEY, JSON.stringify(merged), nowSql()]
  );
}
