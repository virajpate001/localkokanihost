"use server";

// src/lib/services/reviewService.js
import { query } from "@/lib/db";
import { rowsToDocs, insertDocRow, updateDocRow, deleteDocRow } from "@/lib/sqlHelpers";
import { requireAdmin } from "@/lib/auth";
import { updateHotel } from "./hotelService";
import { updateRestaurant } from "./restaurantService";
import { rateLimitByIp, cleanText, cleanInt } from "@/lib/security";
import { getEntityBasics, findLeadByBookingCode, bookingCodeUsedByReview } from "@/lib/leadLookup";
import { normalizeBookingCode, isValidBookingCode } from "@/utils/bookingCode";

const TABLE = "reviews";

// Public: only approved reviews for a specific entity (hotel OR restaurant), newest first
export async function getApprovedReviewsForEntity(entityType, entityId) {
  const rows = await query(
    `SELECT * FROM ${TABLE} WHERE entityType = ? AND entityId = ? AND approved = 1 ORDER BY createdAt DESC`,
    [entityType, entityId]
  );
  return rowsToDocs(rows);
}

export async function getApprovedReviewsForHotel(hotelId) {
  return getApprovedReviewsForEntity("hotel", hotelId);
}

export async function getApprovedReviewsForRestaurant(restaurantId) {
  return getApprovedReviewsForEntity("restaurant", restaurantId);
}

// Admin: all reviews regardless of approval status, across both entity types
export async function getAllReviewsAdmin() {
  await requireAdmin();
  const rows = await query(`SELECT * FROM ${TABLE} ORDER BY createdAt DESC`);
  return rowsToDocs(rows).map((data) => ({
    id: data.id,
    entityType: data.entityType || "hotel",
    entityId: data.entityId || data.hotelId,
    entitySlug: data.entitySlug || data.hotelSlug,
    entityName: data.entityName || data.hotelName,
    guestName: data.guestName,
    rating: data.rating,
    comment: data.comment,
    approved: !!data.approved,
    createdAt: data.createdAt,
  }));
}

// Public — submitted from the review form on hotel/restaurant pages.
export async function createReview(data = {}) {
  try {
    const rl = await rateLimitByIp("review", 3, 10 * 60 * 1000);
    if (!rl.allowed) return { ok: false, error: "Too many attempts. Please try again in a few minutes." };

    const entityType = data.entityType === "restaurant" ? "restaurant" : data.entityType === "hotel" ? "hotel" : null;
    const entity = entityType ? await getEntityBasics(entityType, data.entityId) : null;
    if (!entity) return { ok: false, error: "This listing no longer exists." };

    const guestName = cleanText(data.guestName, 80);
    const comment = cleanText(data.comment, 2000);
    const rating = cleanInt(data.rating, 1, 5, 0);
    if (guestName.length < 2 || comment.length < 10 || rating < 1) {
      return { ok: false, error: "Please fill in your name, rating and a short comment." };
    }

    const code = normalizeBookingCode(data.bookingCode);
    if (!isValidBookingCode(code)) {
      return { ok: false, error: "Please enter the booking code from your enquiry (looks like LK-7QH3MX)." };
    }
    const lead = await findLeadByBookingCode(code);
    if (!lead || lead.stage !== "stayed" || lead.entityType !== entityType || lead.entityId !== entity.id) {
      return { ok: false, error: "We couldn't match this code to a completed stay at this place yet. Reviews open after your stay is confirmed." };
    }
    if (await bookingCodeUsedByReview(code)) {
      return { ok: false, error: "A review has already been submitted for this booking." };
    }

    await insertDocRow(
      TABLE,
      {
        entityType,
        entityId: entity.id,
        entitySlug: entity.slug,
        entityName: entity.name,
        guestName,
        rating,
        comment,
        bookingCode: code,
        verifiedStay: true,
        approved: false,
      },
      { entityType, entityId: entity.id, approved: 0 }
    );
    return { ok: true };
  } catch (error) {
    console.error("createReview failed:", error);
    return { ok: false, error: "Failed to submit review. Please try again." };
  }
}

export async function approveReview(reviewId, entityType, entityId) {
  await requireAdmin();
  await updateDocRow(TABLE, reviewId, { approved: true }, { approved: 1 });
  await recalculateEntityRating(entityType, entityId);
}

export async function rejectReview(reviewId, entityType, entityId) {
  await requireAdmin();
  await deleteDocRow(TABLE, reviewId);
  await recalculateEntityRating(entityType, entityId);
}

export async function deleteReview(reviewId) {
  await requireAdmin();
  // Look up the owner of this review first so the hotel/restaurant rating is recalculated afterwards.
  const rows = await query(`SELECT entityType, entityId FROM ${TABLE} WHERE id = ? LIMIT 1`, [reviewId]);
  await deleteDocRow(TABLE, reviewId);
  if (rows.length) await recalculateEntityRating(rows[0].entityType, rows[0].entityId);
}

// Recalculates rating/reviewCount for either a hotel or a restaurant.
// `rating` lives inside each review's JSON `data` blob (there is no real
// `rating` column on the `reviews` table — only entityType/entityId/approved
// are mirrored), so it has to be read back out of `data`, not selected directly.
export async function recalculateEntityRating(entityType, entityId) {
  await requireAdmin();
  const rows = await query(
    `SELECT data FROM ${TABLE} WHERE entityType = ? AND entityId = ? AND approved = 1`,
    [entityType, entityId]
  );
  const ratings = rows.map((row) => Number(JSON.parse(row.data).rating) || 0);
  const reviewCount = ratings.length;
  const updates = reviewCount === 0
    ? { rating: 0, reviewCount: 0 }
    : {
        rating: Math.round((ratings.reduce((sum, r) => sum + r, 0) / reviewCount) * 10) / 10,
        reviewCount,
      };

  if (entityType === "hotel") {
    await updateHotel(entityId, updates);
  } else if (entityType === "restaurant") {
    await updateRestaurant(entityId, updates);
  }
}