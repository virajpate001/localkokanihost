// src/app/api/cron/process-promotions/route.js
// Runs daily (see vercel.json/hPanel cron) to flip promotions on/off by date.
// Reuses the exact same logic the admin panel calls on page load, so there is
// only one place that implements "what happens when a promotion expires".
import { NextResponse } from "next/server";
import { expireOutdatedPromotions, activateScheduledPromotions } from "@/lib/services/promotionService";
import { query } from "@/lib/db";
import { nowSql } from "@/lib/sqlHelpers";

function todayString() {
  return new Date().toISOString().split("T")[0];
}

export async function GET(request) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let expiredCount = 0;
  let activatedCount = 0;
  let errorMessage = null;

  try {
    expiredCount = await expireOutdatedPromotions();
    const activated = await activateScheduledPromotions();
    activatedCount = activated.length;
  } catch (error) {
    console.error("Cron promotion processing error:", error);
    errorMessage = error.message;
  }

  const today = todayString();
  await query(
    `INSERT INTO settings (k, data, updatedAt) VALUES ('systemStatus:promotionCron', ?, ?)
     ON DUPLICATE KEY UPDATE data = VALUES(data), updatedAt = VALUES(updatedAt)`,
    [
      JSON.stringify({ lastRunDate: today, expiredCount, activatedCount, success: !errorMessage, errorMessage }),
      nowSql(),
    ]
  );

  return NextResponse.json({ expiredCount, activatedCount, ranAt: today, success: !errorMessage });
}
