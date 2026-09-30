"use server";

// src/lib/services/authService.js
// Replaces firebase/auth's signInWithEmailAndPassword / createUserWithEmailAndPassword / signOut.
import bcrypt from "bcryptjs";
import { query } from "@/lib/db";
import { newId, nowSql, rowToDoc } from "@/lib/sqlHelpers";
import {
  createAdminSession, destroyAdminSession, getAdminSession,
  createOwnerSession, destroyOwnerSession, getOwnerSession,
} from "@/lib/auth";

// ───────── Admin ─────────

export async function adminLogin(email, password) {
  const rows = await query("SELECT * FROM admins WHERE email = ? LIMIT 1", [email.trim().toLowerCase()]);
  const admin = rows[0];
  if (!admin) return { error: "auth/user-not-found" };

  const ok = await bcrypt.compare(password, admin.passwordHash);
  if (!ok) return { error: "auth/wrong-password" };

  await createAdminSession(admin);
  return { user: { uid: admin.id, email: admin.email, name: admin.name } };
}

export async function adminLogout() {
  await destroyAdminSession();
  return { ok: true };
}

// Used by the client AuthContext on mount to restore session state.
export async function getCurrentAdmin() {
  const session = await getAdminSession();
  if (!session) return null;
  return { uid: session.uid, email: session.email };
}

// ───────── Owner ─────────

export async function ownerSignup({ fullName, email, mobile, whatsapp, password }) {
  const cleanEmail = email.trim().toLowerCase();
  const existing = await query("SELECT id FROM owners WHERE email = ? LIMIT 1", [cleanEmail]);
  if (existing.length) return { error: "auth/email-already-in-use" };

  const id = newId();
  const passwordHash = await bcrypt.hash(password, 10);
  const now = nowSql();
  const profile = { uid: id, fullName, email: cleanEmail, mobile, whatsapp };

  await query(
    "INSERT INTO owners (id, email, passwordHash, data, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?)",
    [id, cleanEmail, passwordHash, JSON.stringify(profile), now, now]
  );

  await createOwnerSession({ id, email: cleanEmail });
  return { user: { uid: id, email: cleanEmail } };
}

export async function ownerLogin(email, password) {
  const cleanEmail = email.trim().toLowerCase();
  const rows = await query("SELECT * FROM owners WHERE email = ? LIMIT 1", [cleanEmail]);
  const owner = rows[0];
  if (!owner) return { error: "auth/user-not-found" };

  const ok = await bcrypt.compare(password, owner.passwordHash);
  if (!ok) return { error: "auth/wrong-password" };

  await createOwnerSession(owner);
  return { user: { uid: owner.id, email: owner.email }, profile: rowToDoc(owner) };
}

export async function ownerLogout() {
  await destroyOwnerSession();
  return { ok: true };
}

export async function getCurrentOwner() {
  const session = await getOwnerSession();
  if (!session) return null;
  const rows = await query("SELECT * FROM owners WHERE id = ? LIMIT 1", [session.uid]);
  if (!rows.length) return null;
  return { user: { uid: session.uid, email: session.email }, profile: rowToDoc(rows[0]) };
}
