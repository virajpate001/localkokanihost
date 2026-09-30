// src/app/sitemap.js
import { query } from "@/lib/db";
import { getAllPublishedLandingPages } from "@/lib/services/landingPageService";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.localkokani.com";

export default async function sitemap() {
  const staticRoutes = [
    { url: `${BASE_URL}/`, changeFrequency: "daily", priority: 1, lastModified: new Date() },
    { url: `${BASE_URL}/destinations`, changeFrequency: "daily", priority: 0.9, lastModified: new Date() },
    { url: `${BASE_URL}/hotels`, changeFrequency: "daily", priority: 0.9, lastModified: new Date() },
    { url: `${BASE_URL}/restaurants`, changeFrequency: "daily", priority: 0.9, lastModified: new Date() },
    { url: `${BASE_URL}/blog`, changeFrequency: "weekly", priority: 0.7, lastModified: new Date() },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.5, lastModified: new Date() },
    { url: `${BASE_URL}/contact`, changeFrequency: "monthly", priority: 0.5, lastModified: new Date() },
    { url: `${BASE_URL}/privacy-policy`, changeFrequency: "yearly", priority: 0.3, lastModified: new Date() },
    { url: `${BASE_URL}/terms`, changeFrequency: "yearly", priority: 0.3, lastModified: new Date() },
    { url: `${BASE_URL}/partner-with-us`, changeFrequency: "monthly", priority: 0.5, lastModified: new Date() },
  ];

  let destinationRoutes = [];
  let hotelRoutes = [];
  let restaurantRoutes = [];
  let blogRoutes = [];

  try {
    const destRows = await query("SELECT slug, updatedAt FROM destinations WHERE archived = 0");
    destinationRoutes = destRows.map((d) => ({
      url: `${BASE_URL}/destinations/${d.slug}`,
      changeFrequency: "weekly",
      priority: 0.8,
      lastModified: d.updatedAt || new Date(),
    }));

    const hotelRows = await query("SELECT slug, updatedAt FROM hotels WHERE status = 'active'");
    hotelRoutes = hotelRows.map((h) => ({
      url: `${BASE_URL}/hotels/${h.slug}`,
      changeFrequency: "weekly",
      priority: 0.8,
      lastModified: h.updatedAt || new Date(),
    }));

    const restaurantRows = await query("SELECT slug, updatedAt FROM restaurants WHERE status = 'active'");
    restaurantRoutes = restaurantRows.map((r) => ({
      url: `${BASE_URL}/restaurants/${r.slug}`,
      changeFrequency: "weekly",
      priority: 0.7,
      lastModified: r.updatedAt || new Date(),
    }));

    const postRows = await query("SELECT slug, updatedAt FROM posts WHERE published = 1");
    blogRoutes = postRows.map((p) => ({
      url: `${BASE_URL}/blog/${p.slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
      lastModified: p.updatedAt || new Date(),
    }));
  } catch (err) {
    console.error("Sitemap generation error:", err);
  }

  const landingPages = await getAllPublishedLandingPages();
  const landingRoutes = landingPages.map((p) => ({
    url: `${BASE_URL}/${p.slug}`,
    changeFrequency: "monthly",
    priority: 0.85,
    lastModified: p.updatedAt ? new Date(p.updatedAt) : new Date(),
  }));

  return [
    ...staticRoutes,
    ...destinationRoutes,
    ...hotelRoutes,
    ...restaurantRoutes,
    ...blogRoutes,
    ...landingRoutes,
  ];
}
