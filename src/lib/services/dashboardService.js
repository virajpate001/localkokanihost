"use server";

// src/lib/services/dashboardService.js
import { query } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import { getAllLeads } from "./leadService";

export async function getDashboardStats() {
  await requireAdmin();
  const [[dest], [hotels], [rest], [leads]] = await Promise.all([
    query("SELECT COUNT(*) as c FROM destinations"),
    query("SELECT COUNT(*) as c FROM hotels"),
    query("SELECT COUNT(*) as c FROM restaurants"),
    query("SELECT COUNT(*) as c FROM leads"),
  ]);

  return {
    destinations: dest.c,
    hotels: hotels.c,
    restaurants: rest.c,
    leads: leads.c,
  };
}

export async function getRecentLeads(limitCount = 5) {
  await requireAdmin();
  const allLeads = await getAllLeads(); // already sorted by createdAt desc
  return allLeads.slice(0, limitCount);
}

export async function getNewLeadsCount() {
  await requireAdmin();
  const allLeads = await getAllLeads();
  return allLeads.filter((lead) => lead.status === "new").length;
}
