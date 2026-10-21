// src/content/seo-guides/konkan-best-hotels-family-couples.js
import { SITE_NAME } from "@/lib/siteConfig";

const guide = {
  slug: "konkan-best-hotels-family-couples",
  metaTitle: "Best Family and Couple Resorts in Konkan",
  metaDescription:
    "The best family resorts and couple stays in Konkan, Maharashtra: what to look for, where to go for kids or for quiet, activities by destination, and booking tips.",
  trail: [
    { name: "Best Hotels in Konkan", slug: "best-hotels-in-konkan" },
    { name: "Family and Couple Resorts" },
  ],
  hero: {
    h1: "Best family and couple resorts in Konkan",
    lead:
      "Whether you are travelling with children or planning a quiet escape for two, here is what to look for in a resort and which Konkan destinations suit each trip.",
    buttons: [
      { label: "Family and couple stays", variant: "primary", href: "#picks" },
      { label: "What matters most", variant: "ghost", href: "#compare" },
    ],
  },
  blocks: [
    {
      type: "answer",
      heading: "The short answer",
      md: `For families, choose a resort with a safe pool, family rooms and activities nearby, in a place like [Diveagar](guide:konkan-hotels-diveagar) or [Tarkarli](guide:konkan-hotels-tarkarli-malvan). For couples, pick a quiet beach such as [Shrivardhan](guide:konkan-hotels-shrivardhan) and a sea-view room, and avoid peak weekends.`,
    },

    {
      type: "regionStays",
      id: "picks",
      heading: "Family and couple stays in Konkan to book",
      sub:
        "Filter by destination and by who you are travelling with. Each listing is booked directly with the property over WhatsApp, with no booking fee.",
      typeFilterLabel: "Travelling as",
      placeFilterLabel: "Destination",
      allTypesLabel: "Anyone",
      allPlacesLabel: "All destinations",
      sampleLabel: "Sample listing",
      viewLabel: "View details",
      waLabel: "WhatsApp",
      empty:
        "No stays match yet. Try another destination or traveller type, or browse all hotels.",
      emptyCtaLabel: "Browse all Konkan hotels",
      fine: null,
      listings: [
        {
          name: "Sea View Beach Resort, Shekhadi",
          place: "Shrivardhan",
          types: ["Couple", "Family"],
          note: "Resort in Shekhadi near Shrivardhan beach. Add facilities, room types and photos from your listing.",
          href: "konkan-hotels-sea-view-beach-resort-shekhadi",
          whatsappMessage:
            `Hi, I am interested in Sea View Beach Resort, Shekhadi from ${SITE_NAME}. Please share availability, room types and rates. Dates: ___ . Guests: ___ .`,
        },
        {
          name: "Your Diveagar family resort",
          place: "Diveagar",
          types: ["Family"],
          note: "Replace with a verified Diveagar property.",
          href: "konkan-hotels-diveagar",
          sample: true,
        },
        {
          name: "Your Kashid resort",
          place: "Kashid",
          types: ["Family", "Couple"],
          note: "Replace with a verified Kashid property.",
          href: "konkan-hotels-kashid",
          sample: true,
        },
        {
          name: "Your Dapoli couple stay",
          place: "Dapoli",
          types: ["Couple"],
          note: "Replace with a verified Dapoli property.",
          href: "konkan-hotels-dapoli-harnai",
          sample: true,
        },
        {
          name: "Your Ganpatipule resort",
          place: "Ganpatipule",
          types: ["Family"],
          note: "Replace with a verified Ganpatipule property.",
          href: "konkan-hotels-ganpatipule",
          sample: true,
        },
        {
          name: "Your Tarkarli resort",
          place: "Tarkarli-Malvan",
          types: ["Family", "Couple"],
          note: "Replace with a verified Tarkarli or Malvan property.",
          href: "konkan-hotels-tarkarli-malvan",
          sample: true,
        },
      ],
    },

    {
      type: "guide",
      id: "compare",
      heading: "Family trip or couple trip: what matters most",
      toc: [],
      sections: [
        {
          id: "compare-table",
          title: "What to prioritise",
          body: [
            `The same resort can be perfect for one trip and wrong for the other. Use this to decide what to prioritise.

| What to look at | Families | Couples |
| --- | --- | --- |
| **Room** | Family room or extra bed; clear cost for extra guests | Sea-facing room, private seating or villa |
| **Atmosphere** | Lively, with other children and things to do | Quiet, small and private |
| **Beach** | Calm entry, easy access, supervised swimming | Uncrowded stretch for walks and sunsets |
| **Food** | Simple, flexible, child-friendly menus | Good on-site restaurant; private dinner on request |
| **Activities** | Water sports, boat trips, forts and short outings | Beach walks, sunsets and slow days |
| **Best timing** | School holidays; book early | Midweek and shoulder months for quiet |`,
          ],
        },
      ],
    },

    {
      type: "guide",
      id: "family",
      heading: "Choosing a family resort",
      toc: [],
      sections: [
        {
          id: "family-list",
          title: "What to look for when travelling with children",
          body: [
            `- **Room size and layout:** family rooms, connecting rooms or extra beds, with the cost of extra guests stated clearly.
- **Pool safety:** a shallow section or separate children's pool, and staff or lifeguard cover.
- **Beach safety:** a beach with calm, gradual entry. Always supervise children, because currents can be strong and the sea is rough in monsoon.
- **Food:** simple vegetarian and child-friendly options, and flexible meal timings.
- **Activities:** things to do nearby so you are not relying on the beach alone.
- **Medical access:** ask how far the nearest clinic or hospital is, since coastal towns can be small.
- **Drive time:** long road journeys are tiring with children, so check [distance from Mumbai](guide:konkan-guide-distance-from-mumbai) and consider closer destinations.`,
          ],
        },
      ],
    },

    {
      type: "guide",
      id: "couples",
      heading: "Choosing a couple stay",
      toc: [],
      sections: [
        {
          id: "couples-list",
          title: "What to look for when travelling as a couple",
          body: [
            `- **Quiet location:** uncrowded beaches and small properties give more privacy than large resorts on busy weekends.
- **The right room:** a sea-facing room or a villa with a private sitting area. See [sea-facing and sea-view hotels](guide:konkan-best-hotels-sea-view).
- **Dining:** an on-site restaurant matters in small towns, and some resorts can arrange a private dinner on request.
- **Timing:** midweek stays and shoulder months are quieter. See [best time to visit Konkan](guide:konkan-guide-best-time-to-visit).
- **Premium option:** for pools, spas and higher service, see [luxury and 5-star resorts](guide:konkan-best-hotels-luxury).`,
          ],
        },
      ],
    },

    {
      type: "clusters",
      id: "where",
      heading: "Where to go and what to do",
      sub: "",
      clusters: [
        {
          heading: "Destinations",
          desc: "",
          links: [
            { label: "Diveagar", guide: "konkan-hotels-diveagar", desc: "Open beach; relaxed for families" },
            { label: "Alibaug, Kashid and Murud", guide: "konkan-hotels-alibaug-kashid-murud", desc: "Short drive; Murud-Janjira fort nearby" },
            { label: "Dapoli and Murud-Harnai", guide: "konkan-hotels-dapoli-harnai", desc: "Dolphin trips and a fishing port" },
            { label: "Tarkarli and Malvan", guide: "konkan-hotels-tarkarli-malvan", desc: "Water sports and Sindhudurg fort" },
            { label: "Shrivardhan", guide: "konkan-hotels-shrivardhan", desc: "Quiet beach for couples" },
            { label: "Ganpatipule", guide: "konkan-hotels-ganpatipule", desc: "Beach and a temple visit" },
          ],
        },
      ],
    },

    {
      type: "prose",
      heading: "More things to see and do",
      md: `For more to see, read [things to see in Konkan](guide:konkan-guide-things-to-see). Water sports and boat trips can stop in monsoon, so check [is Konkan open for tourism](guide:konkan-guide-is-konkan-open-for-tourism).`,
    },

    {
      type: "clusters",
      id: "related",
      heading: "More Konkan stays",
      sub: "",
      clusters: [
        {
          heading: "Other stay types",
          desc: "",
          links: [
            { label: "Best hotels in Konkan", guide: "best-hotels-in-konkan", desc: "The full guide" },
            { label: "Best beach hotels", guide: "konkan-best-hotels-beach", desc: "On the sand or a short walk away" },
            { label: "Luxury and 5-star resorts", guide: "konkan-best-hotels-luxury", desc: "Pools, spas, premium service" },
            { label: "Homestays and agro-tourism", guide: "konkan-best-hotels-homestays", desc: "Local food, local hosts" },
            { label: "Weekend getaways from Mumbai and Pune", guide: "konkan-guide-weekend-getaways", desc: "Short trips" },
            { label: "How to plan a Konkan trip", guide: "konkan-guide-how-to-plan-a-trip", desc: "Itineraries" },
          ],
        },
      ],
    },

    {
      type: "faq",
      id: "faq",
      heading: "Family and couple resort questions",
      groups: [
        {
          items: [
            {
              q: "What are the best family resorts in Konkan?",
              a: "Look for resorts with family rooms, a safe pool and activities nearby in destinations like Diveagar, Kashid, Dapoli and Tarkarli. Compare room type, pool safety and food options before booking. See [best hotels in Konkan](guide:best-hotels-in-konkan).",
              open: true,
            },
            {
              q: "Where should couples stay in Konkan?",
              a: "Quiet beaches such as Shrivardhan and Dapoli suit couples best, ideally in a sea-view room. Choose small properties and avoid peak weekends for more privacy. See [Shrivardhan hotels](guide:konkan-hotels-shrivardhan).",
            },
            {
              q: "Is Konkan safe for children?",
              a: "Konkan is a popular family destination, but beaches can have strong currents and the sea is rough in monsoon. Supervise children closely and swim only in calm, safe areas. See [is Konkan open for tourism](guide:konkan-guide-is-konkan-open-for-tourism).",
            },
            {
              q: "What can we do in Konkan besides the beach?",
              a: "Visit forts such as Murud-Janjira and Sindhudurg, take dolphin-spotting boat trips near Dapoli, try water sports at Tarkarli, and eat local Malvani food. See [things to see in Konkan](guide:konkan-guide-things-to-see).",
            },
            {
              q: "Which Konkan destination is closest to Mumbai for a short family trip?",
              a: "Alibaug, Kashid and Murud are the closest, followed by Diveagar and Shrivardhan. Check drive times, which vary with traffic. See [weekend getaways from Mumbai and Pune](guide:konkan-guide-weekend-getaways).",
            },
            {
              q: "When is the best time for a family or couple trip to Konkan?",
              a: "October to February has the best weather and calm seas. School holidays and winter weekends are busiest, so book early. See [best time to visit Konkan](guide:konkan-guide-best-time-to-visit).",
            },
          ],
        },
      ],
    },

    {
      type: "cta",
      heading: "Find your family or couple stay",
      text:
        "Message the property directly on WhatsApp. Prices are in INR and there are no booking fees.",
      button: { label: "Browse all Konkan hotels", guide: "konkan-hotels" },
    },
  ],
};

export default guide;