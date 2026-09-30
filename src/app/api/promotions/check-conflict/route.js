// src/app/api/promotions/check-conflict/route.js
import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function POST(request) {
  try {
    const { entityId, promotionType } = await request.json();

    if (!entityId || !promotionType) {
      return NextResponse.json({ error: "entityId and promotionType are required" }, { status: 400 });
    }

    const rows = await query(
      `SELECT id FROM promotionRequests
       WHERE entityId = ? AND promotionType = ? AND status IN ('pending_payment','scheduled','active')
       LIMIT 1`,
      [entityId, promotionType]
    );

    return NextResponse.json({ hasConflict: rows.length > 0 });
  } catch (error) {
    console.error("Promotion conflict check error:", error);
    return NextResponse.json({ error: "Check failed" }, { status: 500 });
  }
}
