// src/content/seo-guides/konkan-hotels-alibaug-kashid-murud.js
import { SITE_NAME } from "@/lib/siteConfig";

const guide = {
  slug: "konkan-hotels-alibaug-kashid-murud",
  metaTitle: "Best Hotels in Alibaug, Kashid and Murud: Beach Stays Near Mumbai",
  metaDescription:
    "Where to stay in Alibaug, Kashid and Murud, the closest Konkan beaches to Mumbai: hotels, resorts and villas, how to get there by road or ferry, nearby places and the best time to visit.",
  trail: [
    { name: "Best Hotels in Konkan", slug: "best-hotels-in-konkan" },
    { name: "Alibaug, Kashid and Murud" },
  ],
  hero: {
    h1: "Best hotels in Alibaug, Kashid and Murud",
    lead:
      "The northern Konkan coast in Raigad district is the closest beach getaway to Mumbai. Here is how Alibaug, Kashid and Murud differ, where to stay in each and how to get there.",
    buttons: [
      { label: "Hotels and stays", variant: "primary", href: "#picks" },
      { label: "Compare the three", variant: "ghost", href: "#compare" },
    ],
  },
  blocks: [
    {
      type: "answer",
      heading: "The short answer",
      md: `Choose Alibaug for the shortest trip and the widest choice of villas and resorts, Kashid for a white-sand beach about 2.5\u20133.5 hours from Mumbai, and Murud for the sea fort at Janjira. Book early for winter weekends.`,
    },

    {
      type: "regionStays",
      id: "picks",
      heading: "Hotels and stays in Alibaug, Kashid and Murud",
      sub:
        "Filter by destination and the type of stay. Each listing is booked directly with the property over WhatsApp, with no booking fee.",
      typeFilterLabel: "Stay type",
      placeFilterLabel: "Destination",
      allTypesLabel: "Any stay type",
      allPlacesLabel: "All destinations",
      sampleLabel: "Sample listing",
      viewLabel: "View details",
      waLabel: "WhatsApp",
      empty:
        "No stays match yet. Try another destination or type, or browse all hotels.",
      emptyCtaLabel: "Browse all Konkan hotels",
      fine: null,
      listings: [
        {
          name: "Your Alibaug villa",
          place: "Alibaug",
          types: ["Private villa"],
          note: "Replace with a verified Alibaug property.",
          href: "konkan-hotels",
          sample: true,
        },
        {
          name: "Your Alibaug resort",
          place: "Alibaug",
          types: ["Luxury resort"],
          note: "Replace with a verified Alibaug property.",
          href: "konkan-hotels",
          sample: true,
        },
        {
          name: "Your Kashid resort",
          place: "Kashid",
          types: ["Luxury resort"],
          note: "Replace with a verified Kashid property.",
          href: "konkan-hotels",
          sample: true,
        },
        {
          name: "Your Kashid budget hotel",
          place: "Kashid",
          types: ["Budget hotel"],
          note: "Replace with a verified Kashid property.",
          href: "konkan-hotels",
          sample: true,
        },
        {
          name: "Your Murud homestay",
          place: "Murud",
          types: ["Homestay"],
          note: "Replace with a verified Murud property.",
          href: "konkan-hotels",
          sample: true,
        },
        {
          name: "Your Murud budget hotel",
          place: "Murud",
          types: ["Budget hotel"],
          note: "Replace with a verified Murud property.",
          href: "konkan-hotels",
          sample: true,
        },
      ],
    },

    {
      type: "guide",
      id: "compare",
      heading: "Alibaug vs Kashid vs Murud",
      toc: [],
      sections: [
        {
          id: "compare-table",
          title: "How the three compare",
          body: [
            `These three sit along the same stretch of coast, but each suits a different trip.

| | Alibaug | Kashid | Murud |
| --- | --- | --- | --- |
| **Distance from Mumbai** | About 95–110 km by road, shorter by ferry | About 125–135 km | About 160–170 km |
| **Typical drive** | 2–3 hours | 2.5–3.5 hours | 3.5–4.5 hours |
| **Known for** | Beaches, villas and Kolaba fort | A long white-sand beach | Janjira sea fort and quiet beaches |
| **Best for** | Short trips and premium stays | Beach weekends | Fort visits and a slower pace |
| **Crowds** | Very busy on winter weekends | Busy on weekends | Moderate |`,
          ],
        },
      ],
    },

    {
      type: "guide",
      id: "why",
      heading: "Why choose the northern Konkan coast",
      toc: [],
      sections: [
        {
          id: "why-list",
          title: "Four reasons this stretch suits a weekend",
          body: [
            `- **Closest to Mumbai.** A weekend trip is practical, and Alibaug can be reached by road or by ferry from Mumbai.
- **The widest range of stays.** Resorts, villas, budget hotels and homestays are all available. See [luxury and 5-star resorts](guide:konkan-best-hotels-luxury) and [budget hotels](guide:konkan-best-hotels-budget).
- **Easy to combine.** Kashid and Murud are close together, and [Diveagar](guide:konkan-hotels-diveagar) is a short way further south.
- **Weekend-friendly.** See [weekend getaways from Mumbai and Pune](guide:konkan-guide-weekend-getaways).`,
          ],
        },
      ],
    },

    {
      type: "guide",
      id: "reach",
      heading: "How to get there from Mumbai",
      toc: [],
      sections: [
        {
          id: "reach-table",
          title: "Getting there",
          body: [
            `| Option | Details |
| --- | --- |
| **By road** | Roads from Mumbai via Panvel lead to Alibaug and onward to Kashid and Murud. Weekend traffic can add a lot to journey times. |
| **By ferry** | Ferries run from Mumbai's harbour side to the Alibaug coast, such as the Mandwa route, followed by a short road transfer. Check current operators and timings. |
| **By train** | The nearest railway options are around Panvel or Pen, then a road transfer. Confirm the best option with your hotel. |
| **Last stretch** | Coastal and village roads can be narrow, so confirm directions and parking with the property. |

See also [distance from Mumbai by road](guide:konkan-guide-distance-from-mumbai).`,
          ],
        },
      ],
    },

    {
      type: "guide",
      id: "near",
      heading: "Things to do in Alibaug, Kashid and Murud",
      toc: [],
      sections: [
        {
          id: "near-table",
          title: "Nearby places",
          body: [
            `| Place | Why go | Where |
| --- | --- | --- |
| **Alibaug beaches** | A range of beaches for walks and sunsets | Alibaug |
| **Kolaba fort** | A sea fort near Alibaug beach, often reached on foot at low tide; check conditions | Alibaug |
| **Kashid beach** | A long stretch of pale sand, popular for weekends | Kashid |
| **Murud-Janjira fort** | A sea fort reached by boat; check timings and sea conditions | Murud |
| **Murud beach** | A quieter beach beside the town | Murud |

More ideas: [things to see in Konkan](guide:konkan-guide-things-to-see).`,
          ],
        },
      ],
    },

    {
      type: "seasonBar",
      id: "when",
      heading: "Best time to visit",
      sub:
        "October to February is best, with dry weather and a calmer sea, but weekends and festivals are crowded and prices rise. March to May is hot, and June to September is monsoon, when the sea is rough and water activities are limited, though rooms are cheaper.",
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
            { label: "Hotels in Diveagar", guide: "konkan-hotels-diveagar", desc: "Open beach, further south" },
            { label: "Best beach hotels", guide: "konkan-best-hotels-beach", desc: "On the sand or a short walk away" },
            { label: "Luxury and 5-star resorts", guide: "konkan-best-hotels-luxury", desc: "Pools, spas, villas" },
            { label: "Weekend getaways", guide: "konkan-guide-weekend-getaways", desc: "From Mumbai and Pune" },
            { label: "Distance from Mumbai", guide: "konkan-guide-distance-from-mumbai", desc: "By road, by destination" },
          ],
        },
      ],
    },

    {
      type: "faq",
      id: "faq",
      heading: "Alibaug, Kashid and Murud questions",
      groups: [
        {
          items: [
            {
              q: "What are the best hotels in Alibaug?",
              a: "Alibaug has the widest range, from private villas and resorts to budget hotels. Compare room category, beach access and what the price includes before booking. See [luxury and 5-star resorts](guide:konkan-best-hotels-luxury).",
              open: true,
            },
            {
              q: "How far is Alibaug from Mumbai?",
              a: "Roughly 95–110 km by road, usually 2–3 hours, and the journey can be shorter by ferry. Traffic affects road times a lot. See [distance from Mumbai by road](guide:konkan-guide-distance-from-mumbai).",
            },
            {
              q: "Which is better, Alibaug or Kashid?",
              a: "Alibaug is closer and has more stays, including villas. Kashid is known for a long white-sand beach and is further away. Choose by distance and the kind of stay you want. See [best beach hotels](guide:konkan-best-hotels-beach).",
            },
            {
              q: "What is Murud known for?",
              a: "Murud is known for Murud-Janjira, a sea fort reached by boat, and for quieter beaches near the town. See [things to see in Konkan](guide:konkan-guide-things-to-see).",
            },
            {
              q: "Is this area good for a weekend trip from Mumbai?",
              a: "Yes. It is the closest Konkan coast to Mumbai, so many travellers visit for a weekend. Book early for winter weekends. See [weekend getaways](guide:konkan-guide-weekend-getaways).",
            },
            {
              q: "When is the best time to visit?",
              a: "October to February is best. Monsoon brings a rough sea and limits water activities. See [best time to visit Konkan](guide:konkan-guide-best-time-to-visit).",
            },
          ],
        },
      ],
    },

    {
      type: "cta",
      heading: "Plan your weekend stay",
      text:
        "Message the property directly on WhatsApp. Prices are in INR and there are no booking fees.",
      button: { label: "Browse all Konkan hotels", guide: "konkan-hotels" },
    },
  ],
};

export default guide;