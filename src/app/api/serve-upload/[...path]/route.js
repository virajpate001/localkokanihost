// src/app/api/serve-upload/[...path]/route.js
// Serves files from UPLOADS_DIR (a persistent folder OUTSIDE the Git-deployed
// project). Reached via the /uploads/:path* rewrite in next.config.js, so
// every existing `/uploads/...` URL already saved in the database keeps
// working unchanged — only where the bytes physically live has moved.
import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { getAdminSession, getOwnerSession } from "@/lib/auth";

// Folders whose files must never be public (ID / ownership proof from partners).
const PRIVATE_FOLDERS = new Set(["partner-verification"]);

const MIME_TYPES = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".avif": "image/avif",
};

export async function GET(request, { params }) {
  const root = process.env.UPLOADS_DIR;
  if (!root) {
    return NextResponse.json({ error: "UPLOADS_DIR is not configured on the server." }, { status: 500 });
  }

  const { path: segments = [] } = await params;

  if (segments.some((s) => s.includes("..") || s.includes("/") || s.includes("\\"))) {
    return NextResponse.json({ error: "Invalid path" }, { status: 400 });
  }

    // Private folders: only a logged-in admin or partner (owner) may read them.
  const isPrivate = PRIVATE_FOLDERS.has(segments[0]);
  if (isPrivate) {
    const allowed = (await getAdminSession()) || (await getOwnerSession());
    if (!allowed) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
  }


  const resolvedRoot = path.resolve(root);
  const filePath = path.join(resolvedRoot, ...segments);
  
   if (filePath !== resolvedRoot && !filePath.startsWith(resolvedRoot + path.sep)) {
    return NextResponse.json({ error: "Invalid path" }, { status: 400 });
  }

  try {
    const fileBuffer = await fs.readFile(filePath);
    const ext = path.extname(filePath).toLowerCase();
    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": MIME_TYPES[ext] || "application/octet-stream",
        "Cache-Control": isPrivate
          ? "private, no-store"
          : "public, max-age=31536000, immutable",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}