// src/content/partnerLanding.js
//
// Everything the /partner-with-us landing page says, in one place. Components in
// src/components/partner-landing/* only render this data, so changing a price,
// a feature or an FAQ answer never means touching a component.
//
// Every statement here mirrors something the app really does:
//   - plan names, features and "Free" / "Contact us" come from the registration
//     wizard (PartnerRegistrationForm, step 7)
//   - Premium-only extras (badge, custom badge, own WhatsApp number, Google Map)
//     are enforced by the admin hotel form and the public hotel/restaurant pages
//   - "2-3 business days" is the promise on the application success page
// Do NOT add numbers (prices, commission %, guest counts) unless they are true.

import { SITE_NAME } from "@/lib/siteConfig";

// Show the Featured / Sponsored add-on price list (read live from the admin
// "promotion pricing" settings). Set to false to describe them without prices.
export const SHOW_PROMOTION_PRICES = true;

export const PARTNER_META = {
  title: "Partner With Us: List Your Hotel or Restaurant",
  description:
    `List your hotel or restaurant on ${SITE_NAME} for free and get enquiries on WhatsApp. Go Premium for badges, your own number and Google Maps.`,
  keywords: ["partner with us", "list your hotel", "list your restaurant", "hotel listing Konkan", "restaurant listing Konkan"],
};

export const PARTNER_HERO = {
  eyebrow: `Partner with ${SITE_NAME}`,
  heading: "Get your stay or restaurant in front of Konkan travellers",
  lead: "Create a free listing, receive enquiries on WhatsApp, and upgrade to Premium when you are ready to stand out.",
  primaryCta: "Sign Up Free",
  secondaryCta: { label: "Compare plans", href: "#plans" },
  trust: [
    "Free to start",
    "Hotels and restaurants",
    "Reviewed in 2-3 business days",
    "Enquiries on WhatsApp",
  ],
};

// icon names are resolved in PartnerSections.jsx
export const PARTNER_BENEFITS = [
  {
    icon: "gift",
    title: "Free to get started",
    text: "List on the Basic plan at no cost. Move to Premium whenever you want more control.",
  },
  {
    icon: "building",
    title: "Hotels and restaurants",
    text: "Register a hotel or a restaurant. The process is the same simple, step-by-step form for both.",
  },
  {
    icon: "page",
    title: "Your own listing page",
    text: "A dedicated page with your photos, details, policies and amenities, ready to share with guests.",
  },
  {
    icon: "whatsapp",
    title: "Enquiries on WhatsApp",
    text: "Guests enquire on WhatsApp: quick, familiar, and nothing for them to install.",
  },
  {
    icon: "search",
    title: "Be found by travellers",
    text: "Appear on your destination page and in search, and let guests save your listing to their wishlist.",
  },
  {
    icon: "shield",
    title: "Every partner is reviewed",
    text: "Our team reviews each application before it goes live, which helps guests trust what they see.",
  },
];

export const PARTNER_PLANS = [
  {
    key: "basic",
    name: "Basic Listing",
    tagline: "Everything you need to get listed",
    price: "Free",
    priceNote: "No listing fee",
    features: [
      {
        title: "Standard listing page",
        text: "A dedicated page for your property with photos, details and guest reviews.",
      },
      {
        title: "Basic visibility",
        text: `Your property is listed on ${SITE_NAME}, on its destination page and in search.`,
      },
      {
        title: `Enquiries routed through ${SITE_NAME}'s WhatsApp`,
        text: `Guest enquiries come through ${SITE_NAME}'s WhatsApp number.`,
      },
    ],
    footnote: "Commission applies per confirmed booking.",
  },
  {
    key: "premium",
    name: "Premium Plan",
    recommended: true,
    tagline: "Stand out and take enquiries directly",
    price: "Contact us",
    priceNote: "Custom pricing. Talk to our team.",
    includesNote: "Everything in Basic, plus:",
    features: [
      {
        title: "Premium badge",
        text: "A trust badge shown next to your property name so guests know you are a premium partner.",
      },
      {
        title: "Custom badge",
        text: 'Add your own short label (up to 24 characters) on your listing card and page, such as "Top Rated" or "Family Friendly".',
      },
      {
        title: "Direct WhatsApp enquiries to your number",
        text: `Guest enquiries from your listing go straight to your own WhatsApp number instead of ${SITE_NAME}'s.`,
      },
      {
        title: "Google Maps location on your listing",
        text: "An interactive Google Map on your listing page so guests can see exactly where you are.",
      },
      {
        title: "Priority support",
        text: "Your questions and requests are prioritised by our team.",
      },
    ],
    footnote: "Commission and pricing details are shared by our team.",
  },
];

// true = included, false = not included, string = shown as text
export const PARTNER_COMPARISON = [
  { label: "Price", basic: "Free", premium: "Contact us" },
  { label: "Standard listing page", basic: true, premium: true },
  { label: "Listed and visible on the site", basic: true, premium: true },
  { label: "Premium badge", basic: false, premium: true },
  { label: "Custom badge", basic: false, premium: true },
  { label: "Where enquiries go", basic: `${SITE_NAME}'s WhatsApp`, premium: "Your own WhatsApp number" },
  { label: "Google Maps location", basic: false, premium: true },
  { label: "Priority support", basic: false, premium: true },
  { label: "Commission", basic: "Per confirmed booking", premium: "Shared by our team" },
];

export const PARTNER_PREVIEW = {
  heading: "See the difference at a glance",
  sub: "How a Basic and a Premium listing can look to guests. This is an illustration: your listing uses your own photos and details.",
  basicPoints: ["Standard listing page", `Enquiries go through ${SITE_NAME}`],
  premiumPoints: ["Premium badge by your name", "Your own custom badge", "Enquiries go to your WhatsApp", "Google Maps location"],
};

export const PARTNER_STEPS = [
  {
    title: "Create your owner account",
    text: "Sign up with your name, email, mobile and WhatsApp number. It is free.",
  },
  {
    title: "Submit your property",
    text: "Tell us about your hotel or restaurant: details, location, photos and policies. Choose Basic or Premium along the way.",
  },
  {
    title: "We verify and review",
    text: "Upload your ID and ownership proof. Our team reviews your application and contacts you on WhatsApp or email within 2-3 business days.",
  },
  {
    title: "Go live and get enquiries",
    text: "Once approved, your listing goes live. Track everything from your owner dashboard.",
  },
];

export const PARTNER_REQUIREMENTS = {
  heading: "Have these ready",
  sub: "The registration form saves you from guessing. Keep these to hand and it goes quickly.",
  items: [
    "Owner or authorised representative ID",
    "Proof of property ownership or authorisation",
    "Photos of your property",
    "Property details, address and location",
    "Your policies (check-in and check-out times, cancellation and so on)",
  ],
};

// Add-on promotions. Prices are read live from the admin settings; see SHOW_PROMOTION_PRICES.
export const PARTNER_BOOSTS = {
  heading: "Want more visibility? Boost your listing",
  sub: "Once you are a partner, you can request a promotion from your owner dashboard.",
  items: [
    {
      key: "featured",
      title: "Featured",
      tagline: "Homepage and top listings",
      text: "Show your listing on the homepage and in top listings.",
    },
    {
      key: "sponsored",
      title: "Sponsored",
      tagline: "Destination page highlight",
      text: "Highlight your listing on its destination page, where travellers are already deciding.",
    },
  ],
  note: "Promotions are optional and separate from your plan. Our team confirms payment and activates them.",
};

export const PARTNER_FAQS = [
  {
    q: "Is it really free to list?",
    a: `Yes. The Basic Listing is free. A commission applies per confirmed booking. Premium pricing is shared on request, so contact us and we will walk you through it.`,
  },
  {
    q: "How does the commission work?",
    a: `On the Basic plan, enquiries are routed through ${SITE_NAME}'s WhatsApp and a commission applies per confirmed booking. The commission terms are part of the Partner Agreement that you review and accept when you register.`,
  },
  {
    q: "What does the Premium Plan cost?",
    a: "Premium is priced individually, so there is no fixed price list. Message our team on WhatsApp and we will share the details for your property.",
  },
  {
    q: "What is the difference between Basic and Premium?",
    a: `Both give you a listing page on ${SITE_NAME}. Premium adds a premium badge, a custom badge of your choice, enquiries sent directly to your own WhatsApp number, a Google Maps location on your listing, and priority support.`,
  },
  {
    q: "Where do guest enquiries go?",
    a: `On Basic, they go through ${SITE_NAME}'s WhatsApp number. On Premium, they go directly to your own WhatsApp number.`,
  },
  {
    q: "Who can list, and what do I need?",
    a: "Owners or authorised representatives of hotels and restaurants. You will upload an ID and proof of ownership or authorisation, and add your property details and photos. Our team reviews every application.",
  },
  {
    q: "How long does approval take?",
    a: "After you submit, our team reaches out on WhatsApp or email within 2-3 business days.",
  },
  {
    q: "Can I start on Basic and move to Premium later?",
    a: "Yes. Get in touch and our team will help you move to Premium.",
  },
];

export const PARTNER_FINAL = {
  heading: "Ready to welcome more guests?",
  text: "Create your free owner account and submit your property today.",
  primaryCta: "Sign Up Free",
  whatsappCta: "Talk to our team",
};

export const PARTNER_WHATSAPP_MESSAGE = `Hi, I'd like to know more about the Premium plan for my property on ${SITE_NAME}.`;

// wa.me link; falls back to the contact page when no number is configured.
export function partnerWhatsAppHref(number, message = PARTNER_WHATSAPP_MESSAGE) {
  const digits = String(number || "").replace(/\D/g, "");
  return digits ? `https://wa.me/${digits}?text=${encodeURIComponent(message)}` : "/contact";
}