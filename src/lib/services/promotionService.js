"use server";

// src/lib/services/promotionService.js
import { query } from "@/lib/db";
import { rowToDoc, rowsToDocs, insertDocRow, updateDocRow, nowSql } from "@/lib/sqlHelpers";
import { requireAdmin, requireOwner, requireAdminOrOwnerSelf } from "@/lib/auth";
import { updateHotel } from "./hotelService";
import { updateRestaurant } from "./restaurantService";

import { DURATIONS, addDays } from "@/lib/promotionConstants";
const PRICING_KEY = "promotionPricing:config";
const CRON_STATUS_KEY = "systemStatus:promotionCron";

const DEFAULT_PRICING = {
  sponsored: { week1: 1500, week2: 2700, week3: 3900, month1: 4500 },
  featured: { week1: 1000, week2: 1700, week3: 2500, month1: 3000 },
};

function todayString() {
  return new Date().toISOString().split("T")[0];
}

// ───────── PRICING (public — shown on the owner "promote" page) ─────────

export async function getPromotionPricing() {
  const rows = await query("SELECT data FROM settings WHERE k = ? LIMIT 1", [PRICING_KEY]);
  return rows.length ? JSON.parse(rows[0].data) : DEFAULT_PRICING;
}

export async function updatePromotionPricing(pricing) {
  await requireAdmin();
  await query(
    `INSERT INTO settings (k, data, updatedAt) VALUES (?, ?, ?)
     ON DUPLICATE KEY UPDATE data = VALUES(data), updatedAt = VALUES(updatedAt)`,
    [PRICING_KEY, JSON.stringify(pricing), nowSql()]
  );
}

// ───────── REQUESTS ─────────

export async function createPromotionRequest(data) {
  const session = await requireOwner();
  if (session.uid !== data.ownerId) throw new Error("UNAUTHORIZED");

  const durationConfig = DURATIONS.find((d) => d.key === data.duration);
  const endDate = addDays(data.startDate, durationConfig.days);
  const payload = {
    ...data,
    durationLabel: durationConfig.label,
    durationDays: durationConfig.days,
    endDate,
    status: "pending_payment",
    adminNotes: "",
    approvedAt: null,
  };
  await insertDocRow(TABLE, payload, {
    ownerId: data.ownerId,
    entityId: data.entityId,
    entityType: data.entityType,
    promotionType: data.promotionType,
    status: "pending_payment",
    startDate: data.startDate,
    endDate,
  });
}

export async function getAllPromotionRequestsAdmin() {
  await requireAdmin();
  const rows = await query(`SELECT * FROM ${TABLE} ORDER BY createdAt DESC`);
  return rowsToDocs(rows);
}

export async function getPromotionRequestsByOwner(ownerId) {
  await requireAdminOrOwnerSelf(ownerId);
  const rows = await query(`SELECT * FROM ${TABLE} WHERE ownerId = ? ORDER BY createdAt DESC`, [ownerId]);
  return rowsToDocs(rows);
}

// Approve — confirms payment received, activates the promotion on the actual listing
export async function approvePromotionRequest(requestId, request, adminNotes = "") {
  await requireAdmin();

  const conflicts = await query(
    `SELECT * FROM ${TABLE} WHERE entityId = ? AND promotionType = ? AND status IN ('scheduled','active') AND id != ?`,
    [request.entityId, request.promotionType, requestId]
  );
  const hasRealOverlap = conflicts.some(
    (other) => request.startDate <= other.endDate && request.endDate >= other.startDate
  );
  if (hasRealOverlap) {
    throw new Error("This listing already has an overlapping active or scheduled promotion of this type.");
  }

  const today = todayString();
  const isStartingNow = request.startDate <= today;
  const now = nowSql();

  await updateDocRow(
    TABLE, requestId,
    { status: isStartingNow ? "active" : "scheduled", adminNotes, approvedAt: now },
    { status: isStartingNow ? "active" : "scheduled" }
  );

  if (isStartingNow) {
    const untilField = request.promotionType === "featured" ? "featuredUntil" : "sponsoredUntil";
    const promotedAtField = request.promotionType === "featured" ? "featuredPromotedAt" : "sponsoredPromotedAt";
    const flagField = request.promotionType;
    const updateFn = request.entityType === "hotel" ? updateHotel : updateRestaurant;
    await updateFn(request.entityId, { [flagField]: true, [untilField]: request.endDate, [promotedAtField]: now });
  }

  return isStartingNow ? "active" : "scheduled";
}

export async function activateScheduledPromotions() {
  const scheduled = await query(`SELECT * FROM ${TABLE} WHERE status = 'scheduled'`);
  const today = todayString();
  const dueToStart = rowsToDocs(scheduled).filter((r) => r.startDate <= today);

  for (const request of dueToStart) {
    const untilField = request.promotionType === "featured" ? "featuredUntil" : "sponsoredUntil";
    const promotedAtField = request.promotionType === "featured" ? "featuredPromotedAt" : "sponsoredPromotedAt";
    const flagField = request.promotionType;
    const updateFn = request.entityType === "hotel" ? updateHotel : updateRestaurant;
    const now = nowSql();

    await updateFn(request.entityId, { [flagField]: true, [untilField]: request.endDate, [promotedAtField]: now });
    await updateDocRow(TABLE, request.id, { status: "active" }, { status: "active" });
  }

  return dueToStart;
}

export async function rejectPromotionRequest(requestId, adminNotes = "") {
  await requireAdmin();
  return updateDocRow(TABLE, requestId, { status: "rejected", adminNotes }, { status: "rejected" });
}

// Owner-initiated — only allowed while still pending payment/approval
export async function cancelPromotionRequest(requestId) {
  const session = await requireOwner();
  const rows = await query(`SELECT ownerId FROM ${TABLE} WHERE id = ? LIMIT 1`, [requestId]);
  if (!rows.length || rows[0].ownerId !== session.uid) throw new Error("UNAUTHORIZED");
  return updateDocRow(TABLE, requestId, { status: "cancelled" }, { status: "cancelled" });
}

// Manually end an active promotion early (admin override)
export async function endPromotionEarly(requestId, request) {
  await requireAdmin();
  await updateDocRow(TABLE, requestId, { status: "completed" }, { status: "completed" });

  const untilField = request.promotionType === "featured" ? "featuredUntil" : "sponsoredUntil";
  const flagField = request.promotionType;
  const updateFn = request.entityType === "hotel" ? updateHotel : updateRestaurant;
  await updateFn(request.entityId, { [flagField]: false, [untilField]: null });
}

// Lazy expiry — call this whenever the admin promotions page loads.
export async function expireOutdatedPromotions() {
  const active = await query(`SELECT * FROM ${TABLE} WHERE status = 'active'`);
  const today = todayString();
  const expired = rowsToDocs(active).filter((r) => r.endDate < today);

  for (const request of expired) {
    const untilField = request.promotionType === "featured" ? "featuredUntil" : "sponsoredUntil";
    const flagField = request.promotionType;
    const updateFn = request.entityType === "hotel" ? updateHotel : updateRestaurant;

    await updateFn(request.entityId, { [flagField]: false, [untilField]: null });
    await updateDocRow(TABLE, request.id, { status: "completed" }, { status: "completed" });
  }

  return expired.length;
}

// Runs as a Server Action now, so it queries directly rather than
// round-tripping through the /api/promotions/check-conflict route (which is
// kept only for any external/legacy caller that still hits it over HTTP).
export async function hasActiveOrScheduledPromotion(entityId, promotionType) {
  try {
    const rows = await query(
      `SELECT id FROM ${TABLE} WHERE entityId = ? AND promotionType = ? AND status IN ('pending_payment','scheduled','active') LIMIT 1`,
      [entityId, promotionType]
    );
    return rows.length > 0;
  } catch (error) {
    console.error("Conflict check failed:", error);
    return false; // fail-open — admin-side approval check still catches real conflicts
  }
}

export async function getPendingPromotionRequestsCount() {
  await requireAdmin();
  const rows = await query(`SELECT COUNT(*) as c FROM ${TABLE} WHERE status = 'pending_payment'`);
  return rows[0].c;
}

export async function getExtendableRequestsByOwner(ownerId) {
  await requireAdminOrOwnerSelf(ownerId);
  const rows = await query(
    `SELECT * FROM ${TABLE} WHERE ownerId = ? AND status IN ('scheduled','active') ORDER BY createdAt DESC`,
    [ownerId]
  );
  return rowsToDocs(rows);
}

export async function getCronRunStatus() {
  await requireAdmin();
  const rows = await query("SELECT data FROM settings WHERE k = ? LIMIT 1", [CRON_STATUS_KEY]);
  return rows.length ? JSON.parse(rows[0].data) : null;
}
