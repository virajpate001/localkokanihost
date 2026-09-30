"use server";

// src/lib/services/reviewService.js
import { query } from "@/lib/db";
import { rowsToDocs, insertDocRow, updateDocRow, deleteDocRow } from "@/lib/sqlHelpers";
import { requireAdmin } from "@/lib/auth";
import { updateHotel } from "./hotelService";
import { updateRestaurant } from "./restaurantService";

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
export async function createReview(data) {
  await insertDocRow(TABLE, { ...data, approved: false }, {
    entityType: data.entityType,
    entityId: data.entityId,
    approved: 0,
  });
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
  await deleteDocRow(TABLE, reviewId);
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