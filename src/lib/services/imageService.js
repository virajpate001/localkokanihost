"use server";

// src/lib/services/imageService.js
// Replaces src/lib/cloudinary.js. Images are written to a persistent folder
// OUTSIDE the Git-deployed project directory (set via UPLOADS_DIR), and
// served back out through /api/serve-upload (see next.config.js rewrite).
//
// Why not /public/uploads? Because a Git-based auto-deploy (GitHub → Hostinger)
// does a clean checkout of the repo on every push. Anything written to disk
// that isn't tracked by Git — including every uploaded image — gets wiped the
// next time you push code. Writing outside the repo entirely means a new
// deployment can never touch it.
import fs from "fs/promises";
import path from "path"; 
import { randomUUID } from "crypto";
import { getAdminSession, getOwnerSession } from "@/lib/auth";

const ALLOWED_TYPES = new Set(["image/jpeg", "image/png", "image/webp", "image/gif", "image/avif"]);
const MAX_BYTES = 8 * 1024 * 1024; // 8MB server-side ceiling (UI already warns at 5MB)

function uploadRoot() {
  const dir = process.env.UPLOADS_DIR;
  if (!dir) {
    throw new Error(
      "UPLOADS_DIR is not set. Point it at a persistent folder OUTSIDE your Git-deployed app directory " +
      "(see DEPLOY.md → 'Persistent image uploads') — otherwise every upload will be deleted on your next deploy."
    );
  }
  return dir;
}

async function requireAnySession() {
  const admin = await getAdminSession();
  if (admin) return admin;
  const owner = await getOwnerSession();
  if (owner) return owner;
  throw new Error("UNAUTHORIZED");
}

function safeFolder(folder = "general") {
  return String(folder).replace(/[^a-zA-Z0-9/_-]/g, "").replace(/\.\./g, "") || "general";
}

function extFromType(type) {
  return { "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp", "image/gif": "gif", "image/avif": "avif" }[type] || "jpg";
}

export async function uploadImage(formData, folder = "general") {
  await requireAnySession();
  const root = uploadRoot();

  const file = formData.get("file");
  if (!file || typeof file === "string") throw new Error("No file provided");
  if (!ALLOWED_TYPES.has(file.type)) throw new Error("Unsupported image type");
  if (file.size > MAX_BYTES) throw new Error("Image too large");

  const safeSub = safeFolder(folder);
  const dir = path.join(root, safeSub);
  await fs.mkdir(dir, { recursive: true });

  const fileName = `${Date.now()}-${randomUUID().slice(0, 8)}.${extFromType(file.type)}`;
  const filePath = path.join(dir, fileName);
  const buffer = Buffer.from(await file.arrayBuffer());
  await fs.writeFile(filePath, buffer);

  const publicId = `${safeSub}/${fileName}`;
  return { url: `/uploads/${publicId}`, publicId };
}

export async function deleteImage(publicId) {
  await requireAnySession();
  if (!publicId) return;
  const root = uploadRoot();

  const filePath = path.join(root, publicId);
  if (!filePath.startsWith(path.resolve(root))) throw new Error("Invalid path");

  try {
    await fs.unlink(filePath);
  } catch {
    // Already gone — non-critical.
  }
}