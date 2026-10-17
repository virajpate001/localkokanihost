// src/content/seo-guides/index.js
// Registry of code-defined SEO guide pages. To add a page: create a content
// file next to these, import it here, add it to GUIDES. It is then served at
// /<slug> by src/app/[slug]/page.js and included in the sitemap automatically.
import travelGuide from "./diveagar-travel-guide";
import bestHotels from "./best-hotels-in-diveagar";
import nearBeach from "./hotels-near-diveagar-beach";
import luxury from "./luxury-hotels-resorts-diveagar";
import pool from "./diveagar-hotels-with-swimming-pool";
import family from "./family-friendly-hotels-diveagar";
import turtle from "./diveagar-turtle-resort-stays";
import worthVisiting from "./is-diveagar-worth-visiting";
import whatFamous from "./what-is-diveagar-famous-for";
import bestTime from "./best-time-to-visit-diveagar";
import bestMonth from "./best-month-diveagar-beach";
import howToReach from "./how-to-reach-diveagar";
import howToBook from "./how-to-book-diveagar-hotels";
import whereToEat from "./diveagar-food-hotels-restaurants";
import twoDayItinerary from "./diveagar-2-day-itinerary";
import puneTrip from "./diveagar-2-day-trip-from-pune";
import threeDayItinerary from "./diveagar-3-day-itinerary";
import tourPackages from "./diveagar-tour-packages";
import beachThings from "./diveagar-beach-things-to-do";
import firstTimeVisitors from "./diveagar-first-time-visitors";
import vsShrivardhan from "./diveagar-vs-shrivardhan";
import vsAlibaug from "./diveagar-vs-alibaug";
import vsDapoli from "./diveagar-vs-dapoli";
import vsHarihareshwar from "./diveagar-vs-harihareshwar";
import konkanBeaches from "./best-konkan-beaches-compared";
import konkanResorts from "./top-beach-resorts-konkan";
import diveagarFaq from "./diveagar-faq";

const GUIDES = [travelGuide, bestHotels, nearBeach, luxury, pool, family, turtle, worthVisiting, whatFamous , bestTime, bestMonth , howToReach, howToBook, whereToEat, twoDayItinerary, puneTrip , threeDayItinerary , tourPackages , beachThings , firstTimeVisitors , vsShrivardhan , vsAlibaug , vsDapoli , vsHarihareshwar , konkanBeaches , konkanResorts, diveagarFaq];
const BY_SLUG = new Map(GUIDES.map((g) => [g.slug, g]));

export const getGuide = (slug) => BY_SLUG.get(slug) || null;
export const getAllGuideSlugs = () => GUIDES.map((g) => g.slug);