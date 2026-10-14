// src/lib/guideLinks.js
// Which internal guide slugs are "live"? A link to a page that doesn't exist yet
// renders as plain text instead of a 404. A slug is live if it's one of the
// code-defined guides OR a published landing page created in the admin panel.
import { cache } from "react";
import { getAllGuideSlugs } from "@/content/seo-guides";
import { getAllPublishedLandingPages } from "@/lib/services/landingPageService";

export const getLiveSlugs = cache(async () => {
  const live = new Set(getAllGuideSlugs());
  try {
    const pages = await getAllPublishedLandingPages();
    pages.forEach((p) => live.add(p.slug));
  } catch (error) {
    console.error("getLiveSlugs failed:", error);
  }
  return live;
});