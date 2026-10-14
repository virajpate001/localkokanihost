// src/lib/stayFacts.js
//
// Turns a real hotel record into the small set of "facts" the SEO guide pages
// filter and compare on (pool type, beach access, family features, ...).
//
// THE RULE: never invent a fact. A fact is either a positive value derived from
// text the property/admin actually entered, or `null` ("unknown — ask the
// hotel"). We never derive `false`, because "the amenity list doesn't mention a
// pool" does not mean "there is no pool".
//
// To make a hotel show up under a filter, add the matching amenity in the admin
// hotel form (e.g. "Swimming Pool", "Beachfront", "Family Room"). The keyword
// patterns below are the single place that maps amenity wording → facts.

const PATTERNS = {
  privatePool: /private\s+pool|plunge\s+pool|pool\s+villa/,
  pool: /\bpool\b/,
  kidsPool: /(kid|child|baby|toddler)s?'?\s*(swimming\s*)?pool|pool.{0,12}(kid|child)/,
  beachfront: /beach\s*-?\s*front|on\s+the\s+beach|on\s*-?\s*beach|private\s+beach/,
  beachDrive: /(drive|ride|transport|shuttle).{0,25}beach|beach.{0,25}(drive|ride|shuttle)/,
  // Only wording that actually says "close / walkable". A bare "Beach View" or
  // "Beach Towels" amenity must NOT be read as a walking distance.
  beachWalk: /beach\s*access|walk(ing)?.{0,20}beach|beach.{0,20}walk|(near(by)?|close\s+to)\s+(the\s+)?beach|\d+\s*(min|minute)s?.{0,12}beach/,
  seaView: /sea\s*-?\s*(view|facing)|ocean\s*-?\s*view/,
  restaurant: /restaurant|dining|in\s*-?\s*house\s+(food|kitchen)/,
  spa: /\bspa\b|massage|wellness/,
  parking: /parking/,
  familyRoom: /family\s+(room|suite|cottage)|connecting\s+rooms?/,
  kidMeals: /(kid|child)s?'?\s*(meal|menu|food)|(meal|menu|food).{0,12}(kid|child)/,
  turtle: /turtle/,
  // Deliberately strict: "Garden" alone is not a nature stay.
  nature: /nature|eco\s*-?\s*(stay|friendly|resort|lodge)|farm\s*-?\s*stay|forest|wildlife|bird\s*-?\s*watching|mangrove/,
  villa: /\bvillas?\b/,
  boutique: /boutique/,
  resort: /\bresort\b/,
};

const PREMIUM_RANGES = ["$$$", "$$$$"]; // admin-set "Premium" / "Luxury" in the hotel form

export function deriveStayFacts(hotel) {
  const raw = (hotel.amenities || []).map((a) => String(a));
  const lower = raw.map((a) => a.toLowerCase());
  const name = String(hotel.name || "").toLowerCase();

  const find = (re) => lower.findIndex((a) => re.test(a));
  const has = (re) => find(re) !== -1;
  const flag = (re) => (has(re) ? true : null);

  const pool = has(PATTERNS.privatePool) ? "private" : has(PATTERNS.pool) ? "shared" : null;

  const beach = has(PATTERNS.beachfront)
    ? "beachfront"
    : has(PATTERNS.beachDrive)
      ? "drive"
      : has(PATTERNS.beachWalk)
        ? "walk"
        : null;

  const turtle = has(PATTERNS.turtle);
  const nature = turtle || has(PATTERNS.nature);

  const type =
    PATTERNS.villa.test(name) || has(PATTERNS.villa)
      ? "villa"
      : PATTERNS.boutique.test(name) || has(PATTERNS.boutique)
        ? "boutique"
        : PATTERNS.resort.test(name) || has(PATTERNS.resort)
          ? "resort"
          : null;

  const familyRoom = flag(PATTERNS.familyRoom);
  const kidsPool = flag(PATTERNS.kidsPool);
  const kidMeals = flag(PATTERNS.kidMeals);
  const premium = PREMIUM_RANGES.includes(hotel.priceRange) ? true : null;
  const nearBeach = beach === "beachfront" || beach === "walk" ? true : null;

  // Coarse tags used by the "best hotels" chooser.
  const tags = [];
  if (nearBeach) tags.push("beach");
  if (premium) tags.push("luxury");
  if (pool) tags.push("pool");
  if (familyRoom || kidsPool || kidMeals) tags.push("family");
  if (nature) tags.push("nature");

  // The exact amenity wording that triggered a turtle/nature claim, so the page
  // can show "what the property listed" instead of paraphrasing it.
  const listed = raw
    .filter((a) => PATTERNS.turtle.test(a.toLowerCase()) || PATTERNS.nature.test(a.toLowerCase()))
    .slice(0, 3);

  return {
    facts: {
      pool,
      kidsPool,
      beach,
      nearBeach,
      seaView: flag(PATTERNS.seaView),
      restaurant: flag(PATTERNS.restaurant),
      spa: flag(PATTERNS.spa),
      parking: flag(PATTERNS.parking),
      familyRoom,
      kidMeals,
      turtle: turtle ? true : null,
      nature: nature ? true : null,
      claim: turtle ? "turtle" : nature ? "nature" : null,
      type,
      premium,
      tags,
    },
    listed,
  };
}

function truncate(text, max) {
  const clean = String(text || "").replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  return clean.slice(0, max).replace(/\s+\S*$/, "") + "\u2026";
}

// The minimal, serializable shape handed to the client chooser. Deliberately
// excludes ownerId, partner plan, etc. — only what the card renders.
export function toStayDto(hotel, fallbackTown) {
  const { facts, listed } = deriveStayFacts(hotel);
  const price = Number(hotel.price);
  const rating = Number(hotel.rating);
  const image = hotel.images?.[0]?.url ? { url: hotel.images[0].url, alt: hotel.name } : null;
  const wa = String(hotel.whatsappNumber || "").replace(/\D/g, "");
  return {
    id: hotel.id,
    slug: hotel.slug,
    name: hotel.name,
    town: hotel.destinationName || fallbackTown || "",
    image,
    price: price > 0 ? price : null,
    rating: rating > 0 ? rating : null,
    blurb: truncate(hotel.description, 140),
    whatsapp: wa || null,
    facts,
    listed,
  };
}