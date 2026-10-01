// src/app/api/serve-upload/[...path]/route.js
// Serves files from UPLOADS_DIR (a persistent folder OUTSIDE the Git-deployed
// project). Reached via the /uploads/:path* rewrite in next.config.js, so
// every existing `/uploads/...` URL already saved in the database keeps
// working unchanged — only where the bytes physically live has moved.
import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

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

  const resolvedRoot = path.resolve(root);
  const filePath = path.join(resolvedRoot, ...segments);
  if (!filePath.startsWith(resolvedRoot)) {
    return NextResponse.json({ error: "Invalid path" }, { status: 400 });
  }

  try {
    const fileBuffer = await fs.readFile(filePath);
    const ext = path.extname(filePath).toLowerCase();
    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": MIME_TYPES[ext] || "application/octet-stream",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}