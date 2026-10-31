"use server";

// Admin-only tracking of Premium subscriptions and renewals.
// This records who paid, for how long, and when it ends. It does not move money
// and it does not change a listing's plan automatically.
import { query } from "@/lib/db";
import { rowsToDocs, insertDocRow, updateDocRow, deleteDocRow } from "@/lib/sqlHelpers";
import { requireAdmin } from "@/lib/auth";
import { cleanText, cleanDate } from "@/lib/security";
import { getEntityBasics } from "@/lib/leadLookup";

const TABLE = "subscriptions";
const PERIODS = [1, 3, 6, 12];

function addMonths(isoDate, months) {
  const d = new Date(`${isoDate}T00:00:00Z`);
  d.setUTCMonth(d.getUTCMonth() + months);
  return d.toISOString().slice(0, 10);
}

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

function withLiveStatus(doc) {
  // A stored "active" subscription whose end date has passed is shown as expired.
  const expired = doc.status === "active" && doc.endDate && doc.endDate < todayIso();
  return { ...doc, status: expired ? "expired" : doc.status };
}

export async function getAllSubscriptions() {
  await requireAdmin();
  const rows = await query(`SELECT * FROM ${TABLE} ORDER BY endDate ASC`);
  return rowsToDocs(rows).map(withLiveStatus);
}

export async function createSubscription(input = {}) {
  await requireAdmin();
  const entityType = input.entityType === "restaurant" ? "restaurant" : "hotel";
  const entity = await getEntityBasics(entityType, input.entityId);
  if (!entity) throw new Error("Listing not found");

  const startDate = cleanDate(input.startDate) || todayIso();
  const periodMonths = PERIODS.includes(Number(input.periodMonths)) ? Number(input.periodMonths) : 1;
  const amount = Number(input.amount);
  if (!Number.isFinite(amount) || amount < 0 || amount > 1_000_000) throw new Error("Invalid amount");

  const endDate = cleanDate(input.endDate) || addMonths(startDate, periodMonths);
  const payment = {
    paidOn: startDate,
    amount,
    periodMonths,
    paymentRef: cleanText(input.paymentRef, 80),
    periodEnd: endDate,
  };

  return insertDocRow(
    TABLE,
    {
      entityType,
      entityId: entity.id,
      entityName: entity.name,
      plan: "premium",
      status: "active",
      startDate,
      endDate,
      periodMonths,
      amount,
      notes: cleanText(input.notes, 500),
      payments: [payment],
    },
    { entityType, entityId: entity.id, status: "active", endDate }
  );
}

// Extend from today or the current end date, whichever is later, and log the payment.
export async function renewSubscription(id, input = {}) {
  await requireAdmin();
  const rows = await query(`SELECT data FROM ${TABLE} WHERE id = ? LIMIT 1`, [id]);
  if (!rows.length) throw new Error("Subscription not found");
  const current = JSON.parse(rows[0].data);

  const periodMonths = PERIODS.includes(Number(input.periodMonths)) ? Number(input.periodMonths) : current.periodMonths || 1;
  const amount = Number(input.amount ?? current.amount);
  if (!Number.isFinite(amount) || amount < 0 || amount > 1_000_000) throw new Error("Invalid amount");

  const base = current.endDate && current.endDate > todayIso() ? current.endDate : todayIso();
  const endDate = addMonths(base, periodMonths);
  const payments = [
    ...(current.payments || []),
    { paidOn: todayIso(), amount, periodMonths, paymentRef: cleanText(input.paymentRef, 80), periodEnd: endDate },
  ];

  const updated = await updateDocRow(
    TABLE,
    id,
    { endDate, periodMonths, amount, status: "active", payments },
    { status: "active", endDate }
  );
  return withLiveStatus(updated);
}

export async function cancelSubscription(id) {
  await requireAdmin();
  const updated = await updateDocRow(TABLE, id, { status: "cancelled" }, { status: "cancelled" });
  return withLiveStatus(updated);
}

export async function deleteSubscription(id) {
  await requireAdmin();
  await deleteDocRow(TABLE, id);
}