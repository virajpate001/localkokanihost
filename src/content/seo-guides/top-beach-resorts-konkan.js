// src/content/seo-guides/top-beach-resorts-konkan.js
import { SITE_NAME } from "@/lib/siteConfig";

const guide = {
  slug: "top-beach-resorts-konkan",
  metaTitle: "Top Beach Resorts in the Konkan: How to Compare and Choose",
  metaDescription:
    "Looking for the top beach resorts in the Konkan? There is no official ranking, so filter by your must-haves, compare resorts side by side and check the details before you book.",
  trail: [
    { name: "Diveagar Travel Guide", slug: "diveagar-travel-guide" },
    {
      name: "Best Konkan Beaches Compared",
      slug: "best-konkan-beaches-compared",
    },
    { name: "Top Beach Resorts in the Konkan" },
  ],
  hero: {
    h1: "Top beach resorts in the Konkan: how to compare and choose",
    lead: "There is no official ranking of Konkan beach resorts, so the best one is the one that has what you need. Filter by your must-haves, compare up to three resorts side by side, and check the details before you pay.",
    buttons: [
      { label: "Compare resorts", variant: "primary", href: "#resorts" },
      { label: "How to judge a resort", variant: "ghost", href: "#judge" },
    ],
  },
  blocks: [
    {
      type: "answer",
      heading: "The short answer",
      md: `No single list can tell you the top beach resorts for everyone. A resort that is best for a quiet couple's break may be wrong for a family with young children. Choose by what matters to you: distance to the beach, facilities, food, the season, your budget and what is included in the price.

The tool below lets you filter by your must-haves and compare resorts side by side. All details are as reported by each property, so confirm them before you pay.`,
    },

    {
      type: "answer",
      id: "how",
      heading: "How we choose what to list",
      // Fill in a truthful selection note when you're ready; until then this block
      // can stay empty (it renders as a blank heading) or be removed.
      md: "",
    },

    {
      type: "resortFinder",
      id: "resorts",
      heading: "Beach resorts",
      sub: 'Tick your must-haves, then tick "Compare" on up to three resorts to see them side by side.',
      regionAriaLabel: "Filter by region",
      allRegionsLabel: "All regions",
      mustsLegend: "Must-haves",
      compareLabel: "Compare",
      compareHeading: "Compare resorts",
      hintNone:
        "Tick “Compare” on two or three resorts above to see them side by side.",
      hintOne: "Pick at least one more resort to compare.",
      clearLabel: "Clear comparison",
      empty:
        "No resorts match all your must-haves yet. Untick one, or message us on WhatsApp and we will help you find one.",
      askPropertyLabel: "Ask the property",
      askRatesLabel: "Ask for rates on WhatsApp",
      askOnWhatsAppLabel: "Ask on WhatsApp",
      pricePrefix: "From \u20B9",
      sampleLabel: "Sample listing",
      cta: "Check availability on WhatsApp",
      compareRegionLabel: "Region",
      compareBeachLabel: "Beach access",
      comparePriceLabel: "Price per night",
      maxCompare: 3,
      messageTemplate: `Hi, I found {name} on {site}. Please share availability, rates, what is included and your cancellation policy. Dates: ___ . Guests: ___ .`,
      featureRows: [
        { key: "seaView", label: "Sea view" },
        { key: "pool", label: "Swimming pool" },
        { key: "restaurant", label: "Restaurant on site" },
        { key: "spa", label: "Spa" },
        { key: "parking", label: "Parking" },
      ],
      fine: "Facilities are as reported by each property. Looking for something else? See [hotels near Diveagar Beach](guide:hotels-near-diveagar-beach) or [all hotels in Diveagar](guide:best-hotels-in-diveagar).",
      resorts: [
        // Replace with real resorts from Firestore. Sample data preserved so the
        // block renders as a demonstration; delete or replace before publishing.
        {
          id: "s1",
          name: "Sample beach resort",
          region: "Diveagar",
          beach: "On the beach",
          price: null,
          features: {
            seaView: true,
            pool: true,
            restaurant: true,
            spa: null,
            parking: true,
          },
          blurb: "Replace with a real listing description.",
          sample: true,
        },
        {
          id: "s2",
          name: "Sample garden resort",
          region: "Diveagar",
          beach: "About 5 min walk",
          price: null,
          features: {
            seaView: false,
            pool: true,
            restaurant: true,
            spa: false,
            parking: true,
          },
          blurb: "Replace with a real listing description.",
          sample: true,
        },
        {
          id: "s3",
          name: "Sample sea-view resort",
          region: "Diveagar",
          beach: "On the beach",
          price: null,
          features: {
            seaView: true,
            pool: null,
            restaurant: true,
            spa: true,
            parking: null,
          },
          blurb: "Replace with a real listing description.",
          sample: true,
        },
        {
          id: "s4",
          name: "Sample family resort",
          region: "Diveagar",
          beach: "About 10 min walk",
          price: null,
          features: {
            seaView: null,
            pool: true,
            restaurant: true,
            spa: false,
            parking: true,
          },
          blurb: "Replace with a real listing description.",
          sample: true,
        },
      ],
    },

    {
      type: "guide",
      id: "judge",
      heading: "Choosing a beach resort",
      toc: [
        { id: "judge-table", label: "How to judge a resort" },
        { id: "season", label: "Timing and booking" },
        { id: "more", label: "Other stays" },
      ],
      sections: [
        {
          id: "judge-table",
          title: "How to judge a resort",
          body: [
            `| What to check | What to ask or look for |
| --- | --- |
| **Distance to the beach** | The walking time in minutes, and whether access is direct. See [hotels near Diveagar Beach](guide:hotels-near-diveagar-beach). |
| **Facilities** | Whether the pool, spa and restaurant are open in your travel month. See [hotels with a swimming pool](guide:diveagar-hotels-with-swimming-pool). |
| **Food** | The meal plan, timings and dietary options. See [where to eat in Diveagar](guide:diveagar-food-hotels-restaurants). |
| **Recent photos and reviews** | Guest photos from this year, not only the resort's own images. |
| **What the price includes** | Meals, taxes, extra beds, and any charge for facilities. |
| **Cancellation terms** | Ask for them in writing before you pay. See [how to book](guide:how-to-book-diveagar-hotels). |`,
          ],
        },
        {
          id: "season",
          title: "Timing and booking",
          body: [
            `Resorts have a limited number of rooms, so book early for long weekends and the busier months. Conditions and facilities also change with the season. See the [best time to visit Diveagar](guide:best-time-to-visit-diveagar).`,
          ],
        },
        {
          id: "more",
          title: "Other kinds of stay",
          body: [
            `- Want a premium stay? See [luxury hotels and resorts in Diveagar](guide:luxury-hotels-resorts-diveagar).
- Travelling with children? See [family-friendly hotels](guide:family-friendly-hotels-diveagar).
- Still choosing a destination? See [Konkan beaches compared](guide:best-konkan-beaches-compared) and [Diveagar vs Alibaug](guide:diveagar-vs-alibaug).`,
          ],
        },
      ],
    },

    {
      type: "faq",
      id: "faq",
      heading: "Beach resorts: your questions answered",
      groups: [
        {
          items: [
            {
              q: "What are the top 10 resorts in India?",
              a: "There is no single authoritative list, and the right resort depends on what you want. This page focuses on beach resorts in the Konkan. Use the filters and the comparison tool to choose by your own priorities.",
              open: true,
            },
            {
              q: "What is the best beach resort in the Konkan?",
              a: "The best one is the one that matches your must-haves, such as beach access, a pool, food and budget. Compare resorts side by side above.",
            },
            {
              q: "How do I choose a beach resort?",
              a: "Check the distance to the beach, the facilities, the meal plan, recent guest photos, what the price includes and the cancellation terms. See the checklist in this guide.",
            },
            {
              q: "Do Konkan beach resorts have swimming pools?",
              a: 'Some do. Use the "Swimming pool" must-have above, and confirm the pool is open on your dates. See [hotels with a swimming pool](guide:diveagar-hotels-with-swimming-pool).',
            },
            {
              q: "When should I book a beach resort?",
              a: "Book early for long weekends, school holidays and the busier months. See the [best time to visit Diveagar](guide:best-time-to-visit-diveagar).",
            },
            {
              q: "Can I book a resort directly?",
              a: `Yes. Message the property on WhatsApp through ${SITE_NAME}, confirm the price, inclusions and cancellation terms, and pay as agreed. See [how to book Diveagar hotels](guide:how-to-book-diveagar-hotels).`,
            },
            {
              q: "Which Konkan beach is best for a resort stay?",
              a: "That depends on the beach, the season and your priorities. Rank the options in [Konkan beaches compared](guide:best-konkan-beaches-compared).",
            },
          ],
        },
      ],
    },

    {
      type: "plan",
      id: "plan",
      heading: "Plan your Diveagar trip",
      sub: "Everything you need around your hotel booking.",
      columns: [
        {
          heading: "More places to stay",
          links: [
            {
              label: "Hotels near Diveagar Beach",
              guide: "hotels-near-diveagar-beach",
            },
            {
              label: "Luxury hotels and resorts",
              guide: "luxury-hotels-resorts-diveagar",
            },
            {
              label: "Hotels with a swimming pool",
              guide: "diveagar-hotels-with-swimming-pool",
            },
            {
              label: "Family-friendly hotels",
              guide: "family-friendly-hotels-diveagar",
            },
            {
              label: "Turtle-related stays",
              guide: "diveagar-turtle-resort-stays",
            },
          ],
        },
        {
          heading: "Before you go",
          links: [
            {
              label: "Is Diveagar worth visiting?",
              guide: "is-diveagar-worth-visiting",
            },
            {
              label: "What Diveagar is famous for",
              guide: "what-is-diveagar-famous-for",
            },
            {
              label: "Best time to visit",
              guide: "best-time-to-visit-diveagar",
            },
            {
              label: "How to reach Diveagar",
              guide: "how-to-reach-diveagar",
            },
            {
              label: "Where to eat",
              guide: "diveagar-food-hotels-restaurants",
            },
          ],
        },
        {
          heading: "Itineraries",
          links: [
            {
              label: "2-day itinerary",
              guide: "diveagar-2-day-itinerary",
            },
            {
              label: "2-day trip from Pune",
              guide: "diveagar-2-day-trip-from-pune",
            },
            {
              label: "3-day itinerary",
              guide: "diveagar-3-day-itinerary",
            },
            {
              label: "Tour packages",
              guide: "diveagar-tour-packages",
            },
            {
              label: "Things to do at the beach",
              guide: "diveagar-beach-things-to-do",
            },
          ],
        },
        {
          heading: "Compare destinations",
          links: [
            {
              label: "Diveagar vs Shrivardhan",
              guide: "diveagar-vs-shrivardhan",
            },
            {
              label: "Diveagar vs Alibaug",
              guide: "diveagar-vs-alibaug",
            },
            {
              label: "Diveagar vs Dapoli",
              guide: "diveagar-vs-dapoli",
            },
            {
              label: "Diveagar vs Harihareshwar",
              guide: "diveagar-vs-harihareshwar",
            },
            {
              label: "Best Konkan beaches compared",
              guide: "best-konkan-beaches-compared",
            },
          ],
        },
      ],
      footer:
        "[Back to the full Diveagar travel guide](guide:diveagar-travel-guide)",
    },

    {
      type: "cta",
      heading: "Ready to compare stays?",
      text: "Browse hotels, resorts and villas in Diveagar, then message the property directly on WhatsApp.",
      button: {
        label: "Browse hotels in Diveagar",
        guide: "best-hotels-in-diveagar",
      },
    },
  ],
};

export default guide;
