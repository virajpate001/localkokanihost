"use server";

import { query } from "@/lib/db";
import { rowsToDocs, insertDocRow, updateDocRow, deleteDocRow } from "@/lib/sqlHelpers";
import { requireAdmin } from "@/lib/auth";
import { rateLimitByIp, cleanText, cleanPhone, cleanEmail, cleanDate, cleanInt } from "@/lib/security";
import { getEntityBasics, findLeadByBookingCode } from "@/lib/leadLookup";
import { generateBookingCode, normalizeBookingCode, isValidBookingCode } from "@/utils/bookingCode";
import { DEFAULT_COMMISSION_INR } from "@/lib/siteConfig";

const TABLE = "leads";
const STAGES = ["enquiry", "confirmed", "stayed", "cancelled", "lost"];
const COMMISSION_STATUSES = ["none", "due", "paid", "waived"];
const ALLOWED_SOURCES = ["hotel_page", "restaurant_page"];

export async function getNewLeadsCount() {
  await requireAdmin();
  const rows = await query(`SELECT COUNT(*) as c FROM ${TABLE} WHERE status = 'new'`);
  return rows[0].c;
}

// Public — submitted from the hotel/restaurant enquiry forms, no login required.
// Returns { ok: true, bookingCode } or { ok: false, error }. It never throws to the browser.
export async function createLead(input = {}) {
  try {
    const rl = await rateLimitByIp("lead", 5, 10 * 60 * 1000);
    if (!rl.allowed) {
      return { ok: false, error: "Too many enquiries from your connection. Please try again in a few minutes." };
    }

    const entityType = input.entityType === "restaurant" ? "restaurant" : input.entityType === "hotel" ? "hotel" : null;
    if (!entityType) return { ok: false, error: "Invalid enquiry." };

    const entity = await getEntityBasics(entityType, input.entityId);
    if (!entity) return { ok: false, error: "This listing no longer exists." };

    const name = cleanText(input.name, 80);
    const phone = cleanPhone(input.phone);
    const email = cleanEmail(input.email);
    const checkIn = cleanDate(input.checkIn);
    const checkOut = cleanDate(input.checkOut);
    const date = cleanDate(input.date);
    const time = /^\d{2}:\d{2}$/.test(cleanText(input.time, 5)) ? cleanText(input.time, 5) : "";

    if (name.length < 2) return { ok: false, error: "Please enter your name." };
    if (!phone) return { ok: false, error: "Please enter a valid phone number." };
    if (email === null) return { ok: false, error: "Please enter a valid email address." };
    if (checkIn === null || checkOut === null || date === null) return { ok: false, error: "Invalid date." };
    if (checkIn && checkOut && Date.parse(checkOut) <= Date.parse(checkIn)) {
      return { ok: false, error: "Check-out must be after check-in." };
    }

    // Idempotent on the booking code: a retry/double-submit never creates a second lead.
    const suppliedCode = normalizeBookingCode(input.bookingCode);
    const bookingCode = isValidBookingCode(suppliedCode) ? suppliedCode : generateBookingCode();
    const existing = await findLeadByBookingCode(bookingCode);
    if (existing) return { ok: true, bookingCode, duplicate: true };

    const doc = {
      entityType,
      entityId: entity.id,
      entitySlug: entity.slug,
      entityName: entity.name,
      name,
      phone,
      email,
      checkIn,
      checkOut,
      date,
      time,
      guests: cleanInt(input.guests, 1, 50, 1),
      message: cleanText(input.message, 1000),
      source: ALLOWED_SOURCES.includes(input.source) ? input.source : "web",
      utmSource: cleanText(input.utmSource, 60),
      utmMedium: cleanText(input.utmMedium, 60),
      utmCampaign: cleanText(input.utmCampaign, 80),
      referrer: cleanText(input.referrer, 100),
      bookingCode,
      stage: "enquiry",
      commissionStatus: "none",
      status: "new",
    };
    if (entityType === "hotel") {
      doc.hotelId = entity.id; // legacy fields still read by older code paths
      doc.hotelName = entity.name;
    }

    await insertDocRow(TABLE, doc, { status: "new" });
    return { ok: true, bookingCode };
  } catch (error) {
    console.error("createLead failed:", error);
    return { ok: false, error: "We couldn't save your enquiry. Your WhatsApp message is still the main channel." };
  }
}

// Normalizes old-format hotel leads (hotelId/hotelName) alongside new generalized ones
export async function getAllLeads() {
  await requireAdmin();
  const rows = await query(`SELECT * FROM ${TABLE} ORDER BY createdAt DESC`);
  return rowsToDocs(rows).map((data) => ({
    id: data.id,
    entityType: data.entityType || "hotel",
    entityId: data.entityId || data.hotelId,
    entitySlug: data.entitySlug || data.hotelSlug,
    entityName: data.entityName || data.hotelName,
    name: data.name,
    phone: data.phone,
    email: data.email || "",
    checkIn: data.checkIn || "",
    checkOut: data.checkOut || "",
    date: data.date || "",
    time: data.time || "",
    guests: data.guests,
    message: data.message || "",
    status: data.status,
    source: data.source,
    createdAt: data.createdAt,
    // booking ledger
    bookingCode: data.bookingCode || "",
    stage: data.stage || "enquiry",
    bookingValue: data.bookingValue ?? null,
    commissionDue: data.commissionDue ?? null,
    commissionStatus: data.commissionStatus || "none",
    paidAt: data.paidAt || null,
    paymentRef: data.paymentRef || "",
    adminNotes: data.adminNotes || "",
    // attribution
    utmSource: data.utmSource || "",
    utmMedium: data.utmMedium || "",
    utmCampaign: data.utmCampaign || "",
    referrer: data.referrer || "",
  }));
}

export async function updateLeadStatus(id, status) {
  await requireAdmin();
  return updateDocRow(TABLE, id, { status }, { status });
}

// Admin: update the booking ledger fields of one lead.
export async function updateLeadBooking(id, patch = {}) {
  await requireAdmin();
  const rows = await query(`SELECT data FROM ${TABLE} WHERE id = ? LIMIT 1`, [id]);
  if (!rows.length) throw new Error("Lead not found");
  const current = JSON.parse(rows[0].data);

  const next = {
    stage: current.stage || "enquiry",
    bookingValue: current.bookingValue ?? null,
    commissionDue: current.commissionDue ?? null,
    commissionStatus: current.commissionStatus || "none",
    paidAt: current.paidAt || null,
    paymentRef: current.paymentRef || "",
    adminNotes: current.adminNotes || "",
  };

  if (patch.stage !== undefined) {
    if (!STAGES.includes(patch.stage)) throw new Error("Invalid stage");
    next.stage = patch.stage;
  }
  if (patch.bookingValue !== undefined) {
    const v = patch.bookingValue === "" || patch.bookingValue === null ? null : Number(patch.bookingValue);
    if (v !== null && (!Number.isFinite(v) || v < 0 || v > 10_000_000)) throw new Error("Invalid booking value");
    next.bookingValue = v;
  }
  if (patch.commissionDue !== undefined) {
    const v = patch.commissionDue === "" || patch.commissionDue === null ? null : Number(patch.commissionDue);
    if (v !== null && (!Number.isFinite(v) || v < 0 || v > 1_000_000)) throw new Error("Invalid commission amount");
    next.commissionDue = v;
  }
  if (patch.commissionStatus !== undefined) {
    if (!COMMISSION_STATUSES.includes(patch.commissionStatus)) throw new Error("Invalid commission status");
    next.commissionStatus = patch.commissionStatus;
  }
  if (patch.paymentRef !== undefined) next.paymentRef = cleanText(patch.paymentRef, 80);
  if (patch.adminNotes !== undefined) next.adminNotes = cleanText(patch.adminNotes, 1000);

  // Business rules
  if (next.stage === "confirmed" || next.stage === "stayed") {
    if (next.commissionDue === null) next.commissionDue = DEFAULT_COMMISSION_INR;
  }
  if (next.stage === "stayed" && next.commissionStatus === "none") next.commissionStatus = "due";
  if ((next.stage === "cancelled" || next.stage === "lost") && next.commissionStatus === "due") {
    next.commissionStatus = "none";
  }
  if (next.commissionStatus === "paid") {
    if (!next.paidAt) next.paidAt = new Date().toISOString();
  } else {
    next.paidAt = null;
  }

  return updateDocRow(TABLE, id, next);
}

export async function deleteLead(id) {
  await requireAdmin();
  await deleteDocRow(TABLE, id);
}