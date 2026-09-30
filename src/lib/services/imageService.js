"use server";

// src/lib/services/imageService.js
// Replaces src/lib/cloudinary.js. Images are written straight to
// /public/uploads on the Hostinger app's own disk and served as normal
// static files — no third-party image host needed.
import fs from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";
import { getAdminSession, getOwnerSession } from "@/lib/auth";

const UPLOAD_ROOT = path.join(process.cwd(), "public", "uploads");
const ALLOWED_TYPES = new Set(["image/jpeg", "image/png", "image/webp", "image/gif", "image/avif"]);
const MAX_BYTES = 8 * 1024 * 1024; // 8MB server-side ceiling (UI already warns at 5MB)

async function requireAnySession() {
  const admin = await getAdminSession();
  if (admin) return admin;
  const owner = await getOwnerSession();
  if (owner) return owner;
  throw new Error("UNAUTHORIZED");
}

function safeFolder(folder = "general") {
  // Prevent path traversal — folder becomes a literal subdirectory name only.
  return String(folder).replace(/[^a-zA-Z0-9/_-]/g, "").replace(/\.\./g, "") || "general";
}

function extFromType(type) {
  return { "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp", "image/gif": "gif", "image/avif": "avif" }[type] || "jpg";
}

// formData must contain a File under the "file" field.
export async function uploadImage(formData, folder = "general") {
  await requireAnySession();

  const file = formData.get("file");
  if (!file || typeof file === "string") throw new Error("No file provided");
  if (!ALLOWED_TYPES.has(file.type)) throw new Error("Unsupported image type");
  if (file.size > MAX_BYTES) throw new Error("Image too large");

  const safeSub = safeFolder(folder);
  const dir = path.join(UPLOAD_ROOT, safeSub);
  await fs.mkdir(dir, { recursive: true });

  const fileName = `${Date.now()}-${randomUUID().slice(0, 8)}.${extFromType(file.type)}`;
  const filePath = path.join(dir, fileName);
  const buffer = Buffer.from(await file.arrayBuffer());
  await fs.writeFile(filePath, buffer);

  const publicId = `${safeSub}/${fileName}`; // used later to delete the file
  return { url: `/uploads/${publicId}`, publicId };
}

export async function deleteImage(publicId) {
  await requireAnySession();
  if (!publicId) return;

  const filePath = path.join(UPLOAD_ROOT, publicId);
  // Guard against escaping the uploads directory via a crafted publicId.
  if (!filePath.startsWith(UPLOAD_ROOT)) throw new Error("Invalid path");

  try {
    await fs.unlink(filePath);
  } catch {
    // Already gone — non-critical, same as the old Cloudinary behavior.
  }
}

