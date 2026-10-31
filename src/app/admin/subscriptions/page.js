"use client";

import { useState, useEffect, useMemo } from "react";
import { FiLoader, FiRefreshCw, FiPlus, FiX, FiTrash2 } from "react-icons/fi";
import toast from "react-hot-toast";
import {
  getAllSubscriptions,
  createSubscription,
  renewSubscription,
  cancelSubscription,
  deleteSubscription,
} from "@/lib/services/subscriptionService";
import { getAllHotelsAdmin } from "@/lib/services/hotelService";
import { getAllRestaurantsAdmin } from "@/lib/services/restaurantService";
import ConfirmDialog from "@/components/admin/ConfirmDialog";

const inr = (n) => `₹${Number(n || 0).toLocaleString("en-IN")}`;
const todayIso = () => new Date().toISOString().slice(0, 10);

function daysLeft(endDate) {
  if (!endDate) return null;
  return Math.ceil((new Date(`${endDate}T00:00:00Z`) - new Date(`${todayIso()}T00:00:00Z`)) / 86400000);
}

const statusStyle = {
  active: "bg-accent/10 text-accent",
  expired: "bg-red-50 text-red-500",
  cancelled: "bg-gray-100 text-gray-500 dark:bg-gray-800",
};

const emptyForm = { entityType: "hotel", entityId: "", amount: "", periodMonths: 1, startDate: todayIso(), paymentRef: "", notes: "" };

export default function AdminSubscriptionsPage() {
  const [subs, setSubs] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const load = async () => {
    setLoading(true);
    try {
      const [s, h, r] = await Promise.all([getAllSubscriptions(), getAllHotelsAdmin(), getAllRestaurantsAdmin()]);
      setSubs(s);
      setHotels(h);
      setRestaurants(r);
    } catch (error) {
      console.error("Load subscriptions error:", error);
      toast.error("Failed to load subscriptions");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const summary = useMemo(() => {
    const active = subs.filter((s) => s.status === "active");
    return {
      active: active.length,
      expiring: active.filter((s) => daysLeft(s.endDate) <= 14).length,
      expired: subs.filter((s) => s.status === "expired").length,
      // Monthly recurring revenue = each active plan's amount spread over its period
      mrr: active.reduce((sum, s) => sum + Number(s.amount || 0) / (s.periodMonths || 1), 0),
    };
  }, [subs]);

  const options = form.entityType === "restaurant" ? restaurants : hotels;

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!form.entityId) return toast.error("Choose a listing");
    if (form.amount === "") return toast.error("Enter the amount received");
    setSaving(true);
    try {
      await createSubscription(form);
      toast.success("Subscription recorded");
      setShowForm(false);
      setForm({ ...emptyForm, startDate: todayIso() });
      await load();
    } catch (error) {
      console.error("Create subscription error:", error);
      toast.error("Could not save subscription");
    } finally {
      setSaving(false);
    }
  };

  const handleRenew = async (sub) => {
    const input = window.prompt(`Renew ${sub.entityName}. Amount received (₹):`, String(sub.amount ?? ""));
    if (input === null) return;
    try {
      await renewSubscription(sub.id, { amount: input, periodMonths: sub.periodMonths });
      toast.success("Renewed");
      await load();
    } catch (error) {
      console.error("Renew error:", error);
      toast.error("Could not renew");
    }
  };

  const handleCancel = async (sub) => {
    try {
      await cancelSubscription(sub.id);
      toast.success("Marked cancelled");
      await load();
    } catch (error) {
      console.error("Cancel error:", error);
      toast.error("Could not cancel");
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    try {
      await deleteSubscription(deleteTarget.id);
      setSubs((prev) => prev.filter((s) => s.id !== deleteTarget.id));
      toast.success("Deleted");
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Could not delete");
    } finally {
      setDeleteTarget(null);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {[
          { label: "Active Premium", value: summary.active },
          { label: "Ending in 14 days", value: summary.expiring },
          { label: "Expired (needs action)", value: summary.expired },
          { label: "Est. monthly recurring", value: inr(Math.round(summary.mrr)) },
        ].map((c) => (
          <div key={c.label} className="card p-4">
            <p className="dark:text-gray-500 text-xs">{c.label}</p>
            <p className="font-display font-bold text-xl text-primary dark:text-white mt-1">{c.value}</p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mb-4">
        <p className="dark:text-gray-500 text-sm">
          Record each Premium payment here. When a subscription expires, also switch that listing&apos;s partner plan back to Basic.
        </p>
        <button onClick={() => setShowForm((v) => !v)} className="btn-primary flex items-center gap-2 text-sm shrink-0">
          {showForm ? <FiX /> : <FiPlus />} {showForm ? "Close" : "Add subscription"}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleCreate} className="card p-5 mb-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <label className="text-xs dark:text-gray-500">
            Type
            <select
              value={form.entityType}
              onChange={(e) => setForm({ ...form, entityType: e.target.value, entityId: "" })}
              className="mt-1 w-full px-3 py-2 rounded-lg border dark:border-gray-800 dark:bg-gray-900 dark:text-white text-sm"
            >
              <option value="hotel">Hotel / stay</option>
              <option value="restaurant">Restaurant</option>
            </select>
          </label>
          <label className="text-xs dark:text-gray-500 sm:col-span-2">
            Listing
            <select
              value={form.entityId}
              onChange={(e) => setForm({ ...form, entityId: e.target.value })}
              className="mt-1 w-full px-3 py-2 rounded-lg border dark:border-gray-800 dark:bg-gray-900 dark:text-white text-sm"
            >
              <option value="">Select...</option>
              {options.map((o) => (
                <option key={o.id} value={o.id}>{o.name}</option>
              ))}
            </select>
          </label>
          <label className="text-xs dark:text-gray-500">
            Amount received (₹)
            <input type="number" min="0" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })}
              className="mt-1 w-full px-3 py-2 rounded-lg border dark:border-gray-800 dark:bg-gray-900 dark:text-white text-sm" />
          </label>
          <label className="text-xs dark:text-gray-500">
            Period
            <select value={form.periodMonths} onChange={(e) => setForm({ ...form, periodMonths: Number(e.target.value) })}
              className="mt-1 w-full px-3 py-2 rounded-lg border dark:border-gray-800 dark:bg-gray-900 dark:text-white text-sm">
              {[1, 3, 6, 12].map((m) => (<option key={m} value={m}>{m} month{m > 1 ? "s" : ""}</option>))}
            </select>
          </label>
          <label className="text-xs dark:text-gray-500">
            Start date
            <input type="date" value={form.startDate} onChange={(e) => setForm({ ...form, startDate: e.target.value })}
              className="mt-1 w-full px-3 py-2 rounded-lg border dark:border-gray-800 dark:bg-gray-900 dark:text-white text-sm" />
          </label>
          <label className="text-xs dark:text-gray-500">
            UPI / payment ref
            <input type="text" maxLength={80} value={form.paymentRef} onChange={(e) => setForm({ ...form, paymentRef: e.target.value })}
              className="mt-1 w-full px-3 py-2 rounded-lg border dark:border-gray-800 dark:bg-gray-900 dark:text-white text-sm" />
          </label>
          <label className="text-xs dark:text-gray-500 sm:col-span-2">
            Notes
            <input type="text" maxLength={500} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })}
              className="mt-1 w-full px-3 py-2 rounded-lg border dark:border-gray-800 dark:bg-gray-900 dark:text-white text-sm" />
          </label>
          <div className="sm:col-span-3">
            <button type="submit" disabled={saving} className="btn-primary text-sm disabled:opacity-60">
              {saving ? "Saving..." : "Save subscription"}
            </button>
          </div>
        </form>
      )}

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <FiLoader className="animate-spin text-2xl text-primary dark:text-white" />
        </div>
      ) : subs.length === 0 ? (
        <div className="card p-12 text-center dark:text-gray-500">No subscriptions recorded yet</div>
      ) : (
        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-950 dark:text-gray-500 text-left">
                <tr>
                  <th className="px-5 py-3.5 font-medium">Listing</th>
                  <th className="px-5 py-3.5 font-medium">Period</th>
                  <th className="px-5 py-3.5 font-medium">Paid</th>
                  <th className="px-5 py-3.5 font-medium">Status</th>
                  <th className="px-5 py-3.5 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {subs.map((s) => {
                  const left = daysLeft(s.endDate);
                  return (
                    <tr key={s.id}>
                      <td className="px-5 py-3.5">
                        <p className="font-medium text-primary dark:text-white">{s.entityName}</p>
                        <p className="dark:text-gray-500 text-xs capitalize">{s.entityType}</p>
                      </td>
                      <td className="px-5 py-3.5 text-xs dark:text-gray-300">
                        {s.startDate} → {s.endDate}
                        {s.status === "active" && left !== null && (
                          <span className={`block ${left <= 14 ? "text-red-500" : "dark:text-gray-500"}`}>{left} days left</span>
                        )}
                      </td>
                      <td className="px-5 py-3.5 dark:text-gray-300">
                        {inr(s.amount)}
                        <span className="block text-xs dark:text-gray-500">{s.periodMonths} mo · {(s.payments || []).length} payment(s)</span>
                      </td>
                      <td className="px-5 py-3.5">
                        <span className={`text-xs font-medium px-2.5 py-1 rounded-lg capitalize ${statusStyle[s.status] || ""}`}>{s.status}</span>
                      </td>
                      <td className="px-5 py-3.5">
                        <div className="flex items-center justify-end gap-2">
                          <button onClick={() => handleRenew(s)} className="flex items-center gap-1 text-xs font-medium text-secondary hover:underline">
                            <FiRefreshCw /> Renew
                          </button>
                          {s.status === "active" && (
                            <button onClick={() => handleCancel(s)} className="text-xs dark:text-gray-500 hover:underline">Cancel</button>
                          )}
                          <button onClick={() => setDeleteTarget(s)} aria-label="Delete" className="w-8 h-8 rounded-lg flex items-center justify-center dark:text-gray-500 hover:bg-red-50 hover:text-red-500">
                            <FiTrash2 className="text-sm" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <ConfirmDialog
        isOpen={!!deleteTarget}
        title="Delete subscription record?"
        message={`Delete the record for "${deleteTarget?.entityName}"? This cannot be undone.`}
        confirmLabel="Delete"
        isDangerous
        onConfirm={handleDelete}
        onCancel={() => setDeleteTarget(null)}
      />
    </div>
  );
}