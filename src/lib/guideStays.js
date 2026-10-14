// src/lib/guideStays.js
// Server-only data access for the guide pages: the real hotels of a destination,
// reduced to the small DTO the client chooser needs.
import { cache } from "react";
import { getDestinationBySlug } from "@/lib/services/destinationService";
import { getHotelsByDestination } from "@/lib/services/hotelService";
import { toStayDto } from "@/lib/stayFacts";

// React `cache` de-duplicates this within one render, so several blocks (or
// pages) asking for the same destination hit the database once.
export const getGuideStays = cache(async (destinationSlug) => {
  try {
    const destination = await getDestinationBySlug(destinationSlug);
    if (!destination) return [];
    const hotels = await getHotelsByDestination(destination.id);
    return hotels.map((h) => toStayDto(h, destination.name));
  } catch (error) {
    // A database hiccup must never turn an SEO page into a 500 — render the
    // guide with an empty stay list instead.
    console.error("getGuideStays failed:", error);
    return [];
  }
});