// src/content/seo-guides/konkan-hotels-shrivardhan.js
import { SITE_NAME } from "@/lib/siteConfig";

const guide = {
  slug: "konkan-hotels-shrivardhan",
  metaTitle: "Best Hotels in Shrivardhan: Beach Resorts and Stays Near Shekhadi",
  metaDescription:
    "Where to stay in Shrivardhan, Raigad: beach resorts and hotels including Sea View Beach Resort in Shekhadi, how to get there from Mumbai, nearby places and the best time to visit.",
  trail: [
    { name: "Best Hotels in Konkan", slug: "best-hotels-in-konkan" },
    { name: "Shrivardhan" },
  ],
  hero: {
    h1: "Best hotels in Shrivardhan",
    lead:
      "A quiet stretch of the Raigad coast with an uncrowded beach, Peshwa-era history and easy access to Diveagar and Harihareshwar. Here is where to stay and how to plan the trip.",
    buttons: [
      { label: "Hotels and stays", variant: "primary", href: "#picks" },
      { label: "Featured stay", variant: "ghost", href: "#featured" },
    ],
  },
  blocks: [
    {
      type: "answer",
      heading: "The short answer",
      md: `Shrivardhan suits a calm beach weekend, about 4\u20135 hours from Mumbai by road. Stay near the beach or in Shekhadi, where [Sea View Beach Resort](#featured) is located, and combine it with [Diveagar](guide:konkan-hotels-diveagar) and [Harihareshwar](guide:konkan-hotels-harihareshwar).`,
    },

    {
      type: "regionStays",
      id: "picks",
      heading: "Hotels and stays in Shrivardhan",
      sub:
        "Filter by the kind of stay. Each listing is booked directly with the property over WhatsApp, with no booking fee.",
      typeFilterLabel: "Stay type",
      placeFilterLabel: "Area",
      allTypesLabel: "Any stay type",
      allPlacesLabel: "Any area",
      sampleLabel: "Sample listing",
      viewLabel: "View details",
      waLabel: "WhatsApp",
      empty:
        "No stays match yet. Try another type or area, or browse all hotels.",
      emptyCtaLabel: "Browse all Konkan hotels",
      fine: null,
      listings: [
        {
          name: "Sea View Beach Resort, Shekhadi",
          place: "Shekhadi",
          types: ["Beach resort"],
          note: "Resort in Shekhadi near Shrivardhan beach. Add price, room types and photos from your listing.",
          href: "konkan-hotels-sea-view-beach-resort-shekhadi",
          whatsappMessage:
            `Hi, I am interested in Sea View Beach Resort, Shekhadi from ${SITE_NAME}. Please share availability and rates. Dates: ___ . Guests: ___ .`,
        },
        {
          name: "Your Shrivardhan beach stay",
          place: "Shrivardhan",
          types: ["Beach resort"],
          note: "Replace with a verified Shrivardhan property.",
          sample: true,
        },
        {
          name: "Your Shrivardhan budget hotel",
          place: "Shrivardhan",
          types: ["Budget hotel"],
          note: "Replace with a verified Shrivardhan property.",
          sample: true,
        },
        {
          name: "Your Shrivardhan homestay",
          place: "Shrivardhan",
          types: ["Homestay"],
          note: "Replace with a verified Shrivardhan property.",
          sample: true,
        },
      ],
    },

    {
      type: "answer",
      id: "featured",
      heading: "Sea View Beach Resort, Shekhadi",
      md: `Sea View Beach Resort is in Shekhadi, close to Shrivardhan beach on the Raigad coast. It is a good base if you want a sea-facing stay away from the busier Konkan beach towns.

- **Location:** Shekhadi, near Shrivardhan, Raigad district, Maharashtra
- **Best for:** beach weekends, couples and families
- **Confirm when you book:** room category (sea-facing or garden), meals, pool or facilities, and exact distance to the beach

[View resort details](guide:konkan-hotels-sea-view-beach-resort-shekhadi) and [how sea-view rooms differ](guide:konkan-best-hotels-sea-view).`,
    },

    {
      type: "guide",
      id: "why",
      heading: "Why stay in Shrivardhan",
      toc: [],
      sections: [
        {
          id: "why-list",
          title: "Why Shrivardhan suits a quiet beach weekend",
          body: [
            `- **A quieter beach.** Shrivardhan is less crowded than the beaches closest to Mumbai, so it suits slow weekends. See [our Shrivardhan beach guide](guide:konkan-guide-shrivardhan-beach).
- **History.** The town has connections to the Peshwas, which adds a cultural stop to a beach trip.
- **A good base.** [Diveagar](guide:konkan-hotels-diveagar) and [Harihareshwar](guide:konkan-hotels-harihareshwar) are both a short drive away.
- **Beach-first stays.** Compare with [best beach hotels in Konkan](guide:konkan-best-hotels-beach) and [sea-facing and sea-view hotels](guide:konkan-best-hotels-sea-view).`,
          ],
        },
      ],
    },

    {
      type: "guide",
      id: "reach",
      heading: "How to get to Shrivardhan from Mumbai",
      toc: [],
      sections: [
        {
          id: "reach-table",
          title: "Getting there",
          body: [
            `| Option | Details |
| --- | --- |
| **By road** | About 185–200 km from Mumbai, usually 4–5 hours depending on traffic. The route runs along NH66 and then onto state roads towards the coast. |
| **By train** | Konkan Railway to a nearby station such as Mangaon, then a road transfer. Confirm the best station and transfer with your hotel. |
| **By ferry** | A ferry across the creek near Murud and Dighi can shorten some routes. Check current timings before relying on it. |
| **Last stretch** | Coastal roads can be narrow, so allow extra time and ask the hotel for directions and parking. |

For a wider view of drive times, see [distance from Mumbai by road](guide:konkan-guide-distance-from-mumbai).`,
          ],
        },
      ],
    },

    {
      type: "guide",
      id: "near",
      heading: "Places to see near Shrivardhan",
      toc: [],
      sections: [
        {
          id: "near-table",
          title: "Nearby places",
          body: [
            `| Place | Why go | Roughly how far |
| --- | --- | --- |
| **Shrivardhan beach** | A quieter beach for walks and sunsets | In town |
| **Diveagar** | Wide beach and a well-known Ganesh temple | About 15–25 km |
| **Harihareshwar** | Temple town on the coast with a rocky beach | About 12–20 km |
| **Peshwa heritage in town** | Historical connections of the Peshwa family to Shrivardhan | In town |

More ideas: [things to see in Konkan](guide:konkan-guide-things-to-see).`,
          ],
        },
      ],
    },

    {
      type: "seasonBar",
      id: "when",
      heading: "Best time to visit Shrivardhan",
      sub:
        "October to February is the most comfortable time, with dry weather and a calm sea. March to May is hot and humid. During the June to September monsoon the sea is rough and beach activities are limited, but the landscape is green and rooms are cheaper.",
      ariaLabel:
        "Month by month: October to February best, March to May hot, June to September monsoon",
      months: [
        { label: "Jan", band: "best" },
        { label: "Feb", band: "best" },
        { label: "Mar", band: "fair" },
        { label: "Apr", band: "fair" },
        { label: "May", band: "fair" },
        { label: "Jun", band: "monsoon" },
        { label: "Jul", band: "monsoon" },
        { label: "Aug", band: "monsoon" },
        { label: "Sep", band: "monsoon" },
        { label: "Oct", band: "best" },
        { label: "Nov", band: "best" },
        { label: "Dec", band: "best" },
      ],
      legend: [
        { band: "best", label: "Best" },
        { band: "fair", label: "Hot, still fine" },
        { band: "monsoon", label: "Monsoon" },
      ],
      fine:
        "See [best time to visit Konkan](guide:konkan-guide-best-time-to-visit).",
    },

    {
      type: "clusters",
      id: "related",
      heading: "Nearby destinations and stay types",
      sub: "",
      clusters: [
        {
          heading: "Explore more",
          desc: "",
          links: [
            { label: "Best hotels in Konkan", guide: "best-hotels-in-konkan", desc: "The full guide" },
            { label: "Shrivardhan beach guide", guide: "konkan-guide-shrivardhan-beach", desc: "Location and what to expect" },
            { label: "Hotels in Diveagar", guide: "konkan-hotels-diveagar", desc: "Open beach, close by" },
            { label: "Hotels in Harihareshwar", guide: "konkan-hotels-harihareshwar", desc: "Temple town and beach" },
            { label: "Best beach hotels", guide: "konkan-best-hotels-beach", desc: "On the sand or a short walk away" },
            { label: "Sea-facing and sea-view hotels", guide: "konkan-best-hotels-sea-view", desc: "Rooms that look at the water" },
          ],
        },
      ],
    },

    {
      type: "faq",
      id: "faq",
      heading: "Shrivardhan questions",
      groups: [
        {
          items: [
            {
              q: "Where is Shrivardhan beach?",
              a: "Shrivardhan beach is in Raigad district on the Konkan coast of Maharashtra, roughly 185–200 km by road from Mumbai. See [our Shrivardhan beach guide](guide:konkan-guide-shrivardhan-beach).",
              open: true,
            },
            {
              q: "Is Shrivardhan beach good to visit?",
              a: "It is known as a quieter, less crowded beach, which suits relaxed weekends. Check the sea conditions before swimming, and avoid the monsoon months for beach activities. See [our Shrivardhan beach guide](guide:konkan-guide-shrivardhan-beach).",
            },
            {
              q: "Where is Sea View Beach Resort?",
              a: "Sea View Beach Resort is in Shekhadi, near Shrivardhan beach, in Raigad district, Maharashtra. See [resort details](guide:konkan-hotels-sea-view-beach-resort-shekhadi).",
            },
            {
              q: "How far is Shrivardhan from Mumbai?",
              a: "Roughly 185–200 km by road, usually 4–5 hours depending on traffic. See [distance from Mumbai by road](guide:konkan-guide-distance-from-mumbai).",
            },
            {
              q: "What is the best time to visit Shrivardhan?",
              a: "October to February has dry weather and a calm sea. Summer is hot, and monsoon brings a rough sea but green scenery and lower prices. See [best time to visit Konkan](guide:konkan-guide-best-time-to-visit).",
            },
            {
              q: "Can I visit Diveagar and Harihareshwar from Shrivardhan?",
              a: "Yes, both are a short drive away, so many travellers combine them in a weekend or a two-to-three-day trip. See [Diveagar](guide:konkan-hotels-diveagar).",
            },
          ],
        },
      ],
    },

    {
      type: "cta",
      heading: "Plan your Shrivardhan stay",
      text:
        "Message the property directly on WhatsApp. Prices are in INR and there are no booking fees.",
      button: { label: "Browse all Konkan hotels", guide: "konkan-hotels" },
    },
  ],
};

export default guide;