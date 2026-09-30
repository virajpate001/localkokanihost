// src/lib/auth.js
// Replaces Firebase Auth. Sessions are a signed JWT stored in an httpOnly
// cookie — no client SDK, no separate auth provider needed.
import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const ADMIN_COOKIE = "lk_admin_session";
const OWNER_COOKIE = "lk_owner_session";
const MAX_AGE = 60 * 60 * 24 * 30; // 30 days

function secretKey() {
  const secret = process.env.SESSION_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error(
      "SESSION_SECRET is missing or too short. Set a random 32+ character string in your .env / Hostinger env vars."
    );
  }
  return new TextEncoder().encode(secret);
}

async function sign(payload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${MAX_AGE}s`)
    .sign(secretKey());
}

async function verify(token) {
  try {
    const { payload } = await jwtVerify(token, secretKey());
    return payload;
  } catch {
    return null;
  }
}

// ───────── Admin session ─────────

export async function createAdminSession(admin) {
  const token = await sign({ role: "admin", uid: admin.id, email: admin.email });
  const store = await cookies();
  store.set(ADMIN_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: MAX_AGE,
  });
}

export async function destroyAdminSession() {
  const store = await cookies();
  store.delete(ADMIN_COOKIE);
}

// Returns { uid, email } if the current request has a valid admin session, else null.
export async function getAdminSession() {
  const store = await cookies();
  const token = store.get(ADMIN_COOKIE)?.value;
  if (!token) return null;
  const payload = await verify(token);
  return payload?.role === "admin" ? payload : null;
}

// Call at the top of every admin-only Server Action. Throws if not logged in.
export async function requireAdmin() {
  const session = await getAdminSession();
  if (!session) throw new Error("UNAUTHORIZED");
  return session;
}

// For plain Route Handlers (Request object available) — used by /api/cron etc.
export async function requireAdminFromRequest() {
  return requireAdmin(); // cookies() reads from the current request context either way
}

// ───────── Owner session ─────────

export async function createOwnerSession(owner) {
  const token = await sign({ role: "owner", uid: owner.id, email: owner.email });
  const store = await cookies();
  store.set(OWNER_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: MAX_AGE,
  });
}

export async function destroyOwnerSession() {
  const store = await cookies();
  store.delete(OWNER_COOKIE);
}

export async function getOwnerSession() {
  const store = await cookies();
  const token = store.get(OWNER_COOKIE)?.value;
  if (!token) return null;
  const payload = await verify(token);
  return payload?.role === "owner" ? payload : null;
}

export async function requireOwner() {
  const session = await getOwnerSession();
  if (!session) throw new Error("UNAUTHORIZED");
  return session;
}

// For data that both the admin panel AND the owner who owns it may view
// (e.g. an owner's own applications/listings). Passes if either an admin
// session exists, or an owner session exists whose uid matches ownerId.
export async function requireAdminOrOwnerSelf(ownerId) {
  const admin = await getAdminSession();
  if (admin) return admin;
  const owner = await getOwnerSession();
  if (owner && owner.uid === ownerId) return owner;
  throw new Error("UNAUTHORIZED");
}
