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
import bestKonkanHotels from "./best-hotels-in-konkan";
import konkanBeachHotels from "./konkan-best-hotels-beach";
import konkanSeaViewHotels from "./konkan-best-hotels-sea-view";
import konkanLuxuryHotels from "./konkan-best-hotels-luxury";
import konkanBudgetHotels from "./konkan-best-hotels-budget";
import konkanFamilyCouples from "./konkan-best-hotels-family-couples";
import konkanHomestays from "./konkan-best-hotels-homestays";
import shrivardhanHotels from "./konkan-hotels-shrivardhan";
import shrivardhanBeach from "./konkan-guide-shrivardhan-beach";
import diveagarKonkanHotels from "./konkan-hotels-diveagar";
import harihareshwarHotels from "./konkan-hotels-harihareshwar";
import alibaugKashidMurudHotels from "./konkan-hotels-alibaug-kashid-murud";
import dapoliHarnaiHotels from "./konkan-hotels-dapoli-harnai";
import ganpatipuleHotels from "./konkan-hotels-ganpatipule";
import tarkarliMalvanHotels from "./konkan-hotels-tarkarli-malvan";
import vengurlaSindhudurgHotels from "./konkan-hotels-vengurla-sindhudurg";
import konkanThingsToSee from "./konkan-guide-things-to-see";
import konkanBestPlaces from "./konkan-guide-best-places-to-visit";
import konkanBestTime from "./konkan-guide-best-time-to-visit";
import konkanOpen from "./konkan-guide-is-konkan-open-for-tourism";
import konkanDistance from "./konkan-guide-distance-from-mumbai";
import konkanHowToPlan from "./konkan-guide-how-to-plan-a-trip";
import konkanMainCity from "./konkan-guide-main-city-in-konkan";
import konkanWeekends from "./konkan-guide-weekend-getaways";
import konkanRoadTrips from "./konkan-guide-road-trip-routes";
import konkanFood from "./konkan-guide-malvani-food";
import konkanChooseHotel from "./konkan-guide-how-to-choose-a-hotel";


const GUIDES = [
  travelGuide,
  bestHotels,
  nearBeach,
  luxury,
  pool,
  family,
  turtle,
  worthVisiting,
  whatFamous,
  bestTime,
  bestMonth,
  howToReach,
  howToBook,
  whereToEat,
  twoDayItinerary,
  puneTrip,
  threeDayItinerary,
  tourPackages,
  beachThings,
  firstTimeVisitors,
  vsShrivardhan,
  vsAlibaug,
  vsDapoli,
  vsHarihareshwar,
  konkanBeaches,
  konkanResorts,
  diveagarFaq,
  bestKonkanHotels,
  konkanBeachHotels,
  konkanSeaViewHotels,
  konkanLuxuryHotels,
  konkanBudgetHotels,
  konkanFamilyCouples,
  konkanHomestays,
  shrivardhanHotels,
  shrivardhanBeach,
  diveagarKonkanHotels,
  harihareshwarHotels,
  alibaugKashidMurudHotels,
  dapoliHarnaiHotels,
  ganpatipuleHotels,
  tarkarliMalvanHotels,
  vengurlaSindhudurgHotels,
  konkanThingsToSee,
  konkanBestPlaces,
  konkanBestTime,
  konkanOpen,
  konkanDistance,
  konkanHowToPlan,
  konkanMainCity,
  konkanWeekends,
  konkanRoadTrips,
  konkanFood, 
  konkanChooseHotel,  
];
const BY_SLUG = new Map(GUIDES.map((g) => [g.slug, g]));

export const getGuide = (slug) => BY_SLUG.get(slug) || null;
export const getAllGuideSlugs = () => GUIDES.map((g) => g.slug);
