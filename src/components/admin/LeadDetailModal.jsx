// src/components/admin/LeadDetailModal.jsx
"use client";

import { useState } from "react";
import {
  FiX, FiPhone, FiMail, FiCalendar, FiClock, FiUsers,
  FiMessageSquare, FiHome, FiCoffee, FiTag,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const statusOptions = [
  { value: "new", label: "New", color: "bg-secondary/10 text-secondary" },
  { value: "contacted", label: "Contacted", color: "bg-accent/10 text-accent-dark" },
  { value: "closed", label: "Closed", color: "dark:bg-gray-800 dark:text-gray-500" },
];

const stageOptions = [
  { value: "enquiry", label: "Enquiry" },
  { value: "confirmed", label: "Confirmed" },
  { value: "stayed", label: "Stayed" },
  { value: "cancelled", label: "Cancelled" },
  { value: "lost", label: "Lost" },
];

const commissionOptions = [
  { value: "none", label: "Not applicable" },
  { value: "due", label: "Due" },
  { value: "paid", label: "Paid" },
  { value: "waived", label: "Waived" },
];

function formatDate(isoString) {
  if (!isoString) return "—";
  return new Date(isoString).toLocaleString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function LeadDetailModal({ lead, onClose, onStatusChange, onBookingUpdate }) {
  const [bookingValue, setBookingValue] = useState(lead?.bookingValue ?? "");
  const [commissionDue, setCommissionDue] = useState(lead?.commissionDue ?? "");
  const [commissionStatus, setCommissionStatus] = useState(lead?.commissionStatus || "none");
  const [paymentRef, setPaymentRef] = useState(lead?.paymentRef || "");
  const [adminNotes, setAdminNotes] = useState(lead?.adminNotes || "");
  const [saving, setSaving] = useState(false);

  if (!lead) return null;

  const saveLedger = async () => {
    setSaving(true);
    await onBookingUpdate?.(lead.id, { bookingValue, commissionDue, commissionStatus, paymentRef, adminNotes });
    setSaving(false);
  };


  const isRestaurant = lead.entityType === "restaurant";
  const whatsappNumber = lead.phone?.replace(/\D/g, "");
  const whatsappMessage = encodeURIComponent(
    isRestaurant
      ? `Hi ${lead.name}, thanks for your reservation request at ${lead.entityName}! Confirming your table now.`
      : `Hi ${lead.name}, thanks for your enquiry about ${lead.entityName}! How can we help?`
  );

  return (
    <div className="fixed inset-0 z-[100] bg-black/50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="bg-white dark:bg-gray-900 w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl p-6 animate-slide-up max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-display font-bold text-xl text-primary dark:text-white">
            {isRestaurant ? "Reservation Details" : "Enquiry Details"}
          </h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full dark:bg-gray-800 flex items-center justify-center dark:text-gray-500 hover:bg-gray-200"
            aria-label="Close"
          >
            <FiX />
          </button>
        </div>

        {/* Status selector */}
        <div className="flex gap-2 mb-6">
          {statusOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => onStatusChange(lead.id, opt.value)}
              className={`flex-1 text-sm font-medium py-2 rounded-lg transition-all ${
                lead.status === opt.value
                  ? opt.color + " ring-2 ring-offset-1 ring-current"
                  : "bg-gray-50 dark:bg-gray-950 dark:text-gray-500 hover:dark:bg-gray-800"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {/* Entity (hotel or restaurant) */}
          <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-950 rounded-xl p-4">
            <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              {isRestaurant ? (
                <FiCoffee className="text-primary dark:text-white" />
              ) : (
                <FiHome className="text-primary dark:text-white" />
              )}
            </div>
            <div>
              <p className="dark:text-gray-500 text-xs">
                {isRestaurant ? "Restaurant" : "Hotel"}
              </p>
              <p className="font-medium text-primary dark:text-white">{lead.entityName}</p>
            </div>
          </div>

          {/* Contact info */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2.5">
              <FiPhone className="text-secondary shrink-0" />
              <div className="min-w-0">
                <p className="dark:text-gray-500 text-xs">Phone</p>
                <p className="font-medium text-primary dark:text-white text-sm truncate">{lead.phone}</p>
              </div>
            </div>
            {lead.email && (
              <div className="flex items-center gap-2.5">
                <FiMail className="text-secondary shrink-0" />
                <div className="min-w-0">
                  <p className="dark:text-gray-500 text-xs">Email</p>
                  <p className="font-medium text-primary dark:text-white text-sm truncate">{lead.email}</p>
                </div>
              </div>
            )}
          </div>

          {/* Dates — different fields for hotel (check-in/out) vs restaurant (date/time) */}
          {isRestaurant ? (
            (lead.date || lead.time) && (
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2.5">
                  <FiCalendar className="text-secondary shrink-0" />
                  <div>
                    <p className="dark:text-gray-500 text-xs">Date</p>
                    <p className="font-medium text-primary dark:text-white text-sm">{lead.date || "—"}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <FiClock className="text-secondary shrink-0" />
                  <div>
                    <p className="dark:text-gray-500 text-xs">Time</p>
                    <p className="font-medium text-primary dark:text-white text-sm">{lead.time || "—"}</p>
                  </div>
                </div>
              </div>
            )
          ) : (
            (lead.checkIn || lead.checkOut) && (
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2.5">
                  <FiCalendar className="text-secondary shrink-0" />
                  <div>
                    <p className="dark:text-gray-500 text-xs">Check-in</p>
                    <p className="font-medium text-primary dark:text-white text-sm">{lead.checkIn || "—"}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <FiCalendar className="text-secondary shrink-0" />
                  <div>
                    <p className="dark:text-gray-500 text-xs">Check-out</p>
                    <p className="font-medium text-primary dark:text-white text-sm">{lead.checkOut || "—"}</p>
                  </div>
                </div>
              </div>
            )
          )}

          {/* Guests */}
          <div className="flex items-center gap-2.5">
            <FiUsers className="text-secondary shrink-0" />
            <div>
              <p className="dark:text-gray-500 text-xs">Guests</p>
              <p className="font-medium text-primary dark:text-white text-sm">{lead.guests}</p>
            </div>
          </div>

          {/* Message (only present on hotel enquiries) */}
          {lead.message && (
            <div className="flex items-start gap-2.5">
              <FiMessageSquare className="text-secondary shrink-0 mt-0.5" />
              <div>
                <p className="dark:text-gray-500 text-xs">Message</p>
                <p className="dark:text-gray-300 text-sm">{lead.message}</p>
              </div>
            </div>
          )}

          <p className="dark:text-gray-500 text-xs pt-3 border-t dark:border-gray-800">
            Submitted on {formatDate(lead.createdAt)}
            {lead.utmSource || lead.referrer
              ? ` · from ${[lead.utmSource, lead.utmMedium, lead.referrer].filter(Boolean).join(" / ")}`
              : ""}
          </p>

          {/* Booking & commission ledger */}
          <div className="border dark:border-gray-800 rounded-xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <p className="font-medium text-primary dark:text-white text-sm">Booking &amp; commission</p>
              {lead.bookingCode && (
                <span className="flex items-center gap-1 text-xs font-semibold tracking-wide bg-secondary/10 text-secondary px-2 py-1 rounded-lg">
                  <FiTag /> {lead.bookingCode}
                </span>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {stageOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => onBookingUpdate?.(lead.id, { stage: opt.value })}
                  className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-all ${
                    lead.stage === opt.value
                      ? "bg-primary text-white"
                      : "bg-gray-50 dark:bg-gray-950 dark:text-gray-500 hover:dark:bg-gray-800"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            <p className="dark:text-gray-500 text-xs">
              Mark <b>Stayed</b> only after the owner or guest confirms the guest checked in. That makes the commission due and lets the guest leave a verified review.
            </p>

            <div className="grid grid-cols-2 gap-3">
              <label className="text-xs dark:text-gray-500">
                Booking value (₹)
                <input
                  type="number"
                  min="0"
                  value={bookingValue}
                  onChange={(e) => setBookingValue(e.target.value)}
                  className="mt-1 w-full px-3 py-2 rounded-lg border dark:border-gray-800 dark:bg-gray-900 dark:text-white text-sm outline-none focus:border-secondary"
                />
              </label>
              <label className="text-xs dark:text-gray-500">
                Commission (₹)
                <input
                  type="number"
                  min="0"
                  value={commissionDue}
                  onChange={(e) => setCommissionDue(e.target.value)}
                  className="mt-1 w-full px-3 py-2 rounded-lg border dark:border-gray-800 dark:bg-gray-900 dark:text-white text-sm outline-none focus:border-secondary"
                />
              </label>
              <label className="text-xs dark:text-gray-500">
                Commission status
                <select
                  value={commissionStatus}
                  onChange={(e) => setCommissionStatus(e.target.value)}
                  className="mt-1 w-full px-3 py-2 rounded-lg border dark:border-gray-800 dark:bg-gray-900 dark:text-white text-sm outline-none focus:border-secondary"
                >
                  {commissionOptions.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </label>
              <label className="text-xs dark:text-gray-500">
                UPI / payment ref
                <input
                  type="text"
                  maxLength={80}
                  value={paymentRef}
                  onChange={(e) => setPaymentRef(e.target.value)}
                  className="mt-1 w-full px-3 py-2 rounded-lg border dark:border-gray-800 dark:bg-gray-900 dark:text-white text-sm outline-none focus:border-secondary"
                />
              </label>
            </div>
            <label className="text-xs dark:text-gray-500 block">
              Internal notes
              <textarea
                rows={2}
                maxLength={1000}
                value={adminNotes}
                onChange={(e) => setAdminNotes(e.target.value)}
                className="mt-1 w-full px-3 py-2 rounded-lg border dark:border-gray-800 dark:bg-gray-900 dark:text-white text-sm outline-none focus:border-secondary resize-none"
              />
            </label>
            <button
              onClick={saveLedger}
              disabled={saving}
              className="btn-primary w-full text-sm disabled:opacity-60"
            >
              {saving ? "Saving..." : "Save booking details"}
            </button>
            {lead.paidAt && (
              <p className="dark:text-gray-500 text-xs">Commission paid on {formatDate(lead.paidAt)}</p>
            )}
          </div>
        </div>

        {whatsappNumber && (
          <Link
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent w-full flex items-center justify-center gap-2 mt-6"
          >
            <FaWhatsapp className="text-lg" /> Reply on WhatsApp
          </Link>
        )}
      </div>
    </div>
  );
}