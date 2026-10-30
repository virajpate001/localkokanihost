// src/lib/security.js
// Server-only helpers: IP detection, a small in-memory rate limiter, and input cleaners.
//
// NOTE: counters live in this Node process's memory. That is enough to stop casual
// spam/brute force on a single Hostinger Node app, but they reset when the app
// restarts and are not shared between multiple instances.
import "server-only";
import { headers } from "next/headers";

const buckets = new Map(); // key -> { count, resetAt }
let lastSweep = 0;

function sweep(now) {
  if (now - lastSweep < 60_000) return;
  lastSweep = now;
  for (const [k, v] of buckets) if (v.resetAt <= now) buckets.delete(k);
}

export async function getClientIp() {
  try {
    const h = await headers();
    const fwd = h.get("x-forwarded-for");
    if (fwd) return fwd.split(",")[0].trim();
    return h.get("x-real-ip") || "unknown";
  } catch {
    return "unknown";
  }
}

// Returns { allowed, retryAfterSec }. Counts every call, allowed or not.
export function rateLimit(key, limit, windowMs) {
  const now = Date.now();
  sweep(now);
  const entry = buckets.get(key);
  if (!entry || entry.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, retryAfterSec: 0 };
  }
  entry.count += 1;
  if (entry.count > limit) {
    return { allowed: false, retryAfterSec: Math.ceil((entry.resetAt - now) / 1000) };
  }
  return { allowed: true, retryAfterSec: 0 };
}

export async function rateLimitByIp(scope, limit, windowMs, extra = "") {
  const ip = await getClientIp();
  return rateLimit(`${scope}:${ip}:${extra}`, limit, windowMs);
}

// ───────── Input cleaners ─────────

// Trim, strip control characters, cap length.
export function cleanText(value, max = 500) {
  if (value === undefined || value === null) return "";
  return String(value)
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .trim()
    .slice(0, max);
}

export function cleanPhone(value) {
  const raw = cleanText(value, 25);
  const digits = raw.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 13) return null;
  return raw.replace(/[^\d+\s-]/g, "");
}

export function cleanEmail(value) {
  const v = cleanText(value, 120);
  if (!v) return "";
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? v : null;
}

export function cleanDate(value) {
  const v = cleanText(value, 10);
  if (!v) return "";
  return /^\d{4}-\d{2}-\d{2}$/.test(v) && !Number.isNaN(Date.parse(v)) ? v : null;
}

export function cleanInt(value, min, max, fallback) {
  const n = Math.round(Number(value));
  if (!Number.isFinite(n)) return fallback;
  return Math.min(max, Math.max(min, n));
}