// src/content/seo-guides/best-hotels-in-konkan.js
import { SITE_NAME } from "@/lib/siteConfig";

const guide = {
  slug: "best-hotels-in-konkan",
  metaTitle: "Best Hotels in Konkan (Maharashtra): Beach, Sea-View & Luxury Stays",
  metaDescription:
    "Where to stay in Konkan: the best beach, sea-facing, luxury and budget hotels across Raigad, Ratnagiri and Sindhudurg, with best time to visit, distances from Mumbai and trip FAQs.",
  trail: [
   
    { name: "Best Hotels in Konkan" },
  ],
  hero: {
    h1: "Best hotels in Konkan, Maharashtra",
    lead:
      "Where to stay along 720 km of coast, from Alibaug to Sindhudurg: beach hotels, sea-facing rooms, luxury resorts, budget stays and homestays, chosen by what you want from the trip.",
    buttons: [
      { label: "Top Konkan stays", variant: "primary", href: "#picks" },
      { label: "How to choose", variant: "ghost", href: "#types" },
    ],
  },
  blocks: [
    {
      type: "answer",
      heading: "The short answer",
      md: `For a first trip, pick a beach hotel in [Shrivardhan](guide:konkan-hotels-shrivardhan) or [Diveagar](guide:konkan-hotels-diveagar) (about 3–4 hours from Mumbai). For sea-sunsets and water sports, go south to [Tarkarli](guide:konkan-hotels-tarkarli-malvan). Travel between October and February.`,
    },

    {
      type: "regionStays",
      id: "picks",
      heading: "Top Konkan stays right now",
      sub:
        "Filter by the kind of stay and the destination. Every listing is booked directly with the property over WhatsApp, with no payment gateway and no booking fee.",
      typeFilterLabel: "Type of stay",
      placeFilterLabel: "Destination",
      allTypesLabel: "All types",
      allPlacesLabel: "All destinations",
      sampleLabel: "Sample listing",
      viewLabel: "View details",
      waLabel: "WhatsApp",
      empty:
        "No stays match yet. Try another type or destination, or browse all hotels.",
      emptyCtaLabel: "Browse all Konkan hotels",
      fine: null,
      listings: [
        {
          name: "Sea View Beach Resort, Shekhadi",
          place: "Shrivardhan",
          types: ["Beach", "Sea-view"],
          note: "Resort in Shekhadi near Shrivardhan beach. Add price, room types and photos from your listing.",
          href: "konkan-hotels-sea-view-beach-resort-shekhadi",
          whatsappMessage:
            `Hi, I am interested in Sea View Beach Resort, Shekhadi from ${SITE_NAME}. Please share availability and rates. Dates: ___ . Guests: ___ .`,
        },
        {
          name: "Your Diveagar listing",
          place: "Diveagar",
          types: ["Beach"],
          note: "Replace with a verified Diveagar property.",
          href: "konkan-hotels-diveagar",
          sample: true,
        },
        {
          name: "Your Harihareshwar listing",
          place: "Harihareshwar",
          types: ["Budget"],
          note: "Replace with a verified Harihareshwar property.",
          href: "konkan-hotels-harihareshwar",
          sample: true,
        },
        {
          name: "Your Tarkarli listing",
          place: "Tarkarli-Malvan",
          types: ["Beach", "Family"],
          note: "Replace with a verified Tarkarli or Malvan property.",
          href: "konkan-hotels-tarkarli-malvan",
          sample: true,
        },
        {
          name: "Your Ganpatipule listing",
          place: "Ganpatipule",
          types: ["Luxury", "Sea-view"],
          note: "Replace with a verified Ganpatipule property.",
          href: "konkan-hotels-ganpatipule",
          sample: true,
        },
        {
          name: "Your Dapoli homestay",
          place: "Dapoli",
          types: ["Homestay"],
          note: "Replace with a verified Dapoli homestay.",
          href: "konkan-hotels-dapoli",
          sample: true,
        },
      ],
    },

    {
      type: "clusters",
      heading: "Best hotels in Konkan by type of stay",
      sub:
        "The right hotel depends on what you want from the coast. Start with the style of stay, then pick a destination.",
      clusters: [
        {
          heading: "By type of stay",
          desc: "",
          links: [
            {
              label: "Beach hotels",
              guide: "konkan-best-hotels-beach",
              desc: "Steps from the sand; best hotels near the beach",
            },
            {
              label: "Sea-facing and sea-view hotels",
              guide: "konkan-best-hotels-sea-view",
              desc: "Rooms and balconies that look at the water",
            },
            {
              label: "Luxury and 5-star resorts",
              guide: "konkan-best-hotels-luxury",
              desc: "Pools, spas and premium service",
            },
            {
              label: "Budget hotels",
              guide: "konkan-best-hotels-budget",
              desc: "Clean, simple rooms near the beach",
            },
            {
              label: "Family and couple resorts",
              guide: "konkan-best-hotels-family-couples",
              desc: "Activities, privacy and quiet",
            },
            {
              label: "Homestays and agro-tourism",
              guide: "konkan-best-hotels-homestays",
              desc: "Local food, local hosts",
            },
          ],
        },
      ],
    },

    {
      type: "guide",
      heading: "How to choose a Konkan hotel",
      toc: [
        { id: "how-choose", label: "How to choose" },
      ],
      sections: [
        {
          id: "how-choose",
          title: "How to choose",
          body: [
            `Konkan has very few true five-star properties, so "luxury" here usually means a well-run resort with a pool and restaurant rather than a global chain. Beachfront rooms cost more than rooms a five-minute walk back, and sea-facing rooms are often the first to sell out on winter weekends. Check the room category, not just the hotel, before you book.`,
          ],
        },
      ],
    },

    {
      type: "clusters",
      heading: "Where to stay: Konkan destinations",
      sub:
        "\"Konkan\" covers the coastal belt of Maharashtra through Raigad, Ratnagiri and Sindhudurg districts, so the right base depends on how far you want to drive.",
      clusters: [
        {
          heading: "Destinations",
          desc: "",
          links: [
            {
              label: "Shrivardhan",
              guide: "konkan-hotels-shrivardhan",
              desc: "Quiet beach, including Sea View Beach Resort, Shekhadi",
            },
            {
              label: "Diveagar",
              guide: "konkan-hotels-diveagar",
              desc: "Wide beach, easy drive from Mumbai",
            },
            {
              label: "Harihareshwar",
              guide: "konkan-hotels-harihareshwar",
              desc: "Temple town with a rocky beach",
            },
            {
              label: "Alibaug, Kashid and Murud",
              guide: "konkan-hotels-alibaug-kashid-murud",
              desc: "Closest to Mumbai",
            },
            {
              label: "Dapoli and Murud-Harnai",
              guide: "konkan-hotels-dapoli-harnai",
              desc: "Beaches, dolphins and a fishing port",
            },
            {
              label: "Ganpatipule",
              guide: "konkan-hotels-ganpatipule",
              desc: "Beach and a famous temple",
            },
            {
              label: "Tarkarli and Malvan",
              guide: "konkan-hotels-tarkarli-malvan",
              desc: "Clear water and water sports",
            },
            {
              label: "Vengurla and Sindhudurg",
              guide: "konkan-hotels-vengurla-sindhudurg",
              desc: "Quieter far south, near Goa",
            },
          ],
        },
      ],
    },

    {
      type: "guide",
      heading: "Shrivardhan and Sea View Beach Resort, Shekhadi",
      toc: [],
      sections: [
        {
          id: "shrivardhan",
          title: "About Shrivardhan and Sea View Beach Resort",
          body: [
            `Shrivardhan is in Raigad district on the Arabian Sea coast, and its beach is a good choice for a calm, uncrowded stay. Sea View Beach Resort is in Shekhadi, a short distance from Shrivardhan beach. Read our [Shrivardhan beach guide](guide:konkan-guide-shrivardhan-beach) for how to reach it and what to expect.`,
          ],
        },
      ],
    },

    {
      type: "seasonBar",
      id: "season",
      heading: "Best time to visit Konkan",
      sub:
        "October to February is the best window: dry, sunny and comfortable, with calm seas. March to May is hot and humid. June to September is monsoon: the coast is green and cheap but the sea is rough, and many beach activities close.",
      ariaLabel:
        "Month by month suitability: October to February best, March to May hot, June to September monsoon",
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
        "Full month-by-month detail: [best time to visit Konkan](guide:konkan-guide-best-time-to-visit). If the monsoon is your plan, see [monsoon stays in Konkan](guide:konkan-guide-monsoon-stays).",
    },

    {
      type: "guide",
      heading: "How far is Konkan from Mumbai by road?",
      toc: [],
      sections: [
        {
          id: "distance",
          title: "Approximate road distances and drive times",
          body: [
            `It depends on the destination, because the coast is long. These are approximate road distances and times; traffic on NH66 changes them a lot.

| Destination | Approx. distance from Mumbai | Typical drive |
| --- | --- | --- |
| Alibaug / Kashid | ~95–130 km | 2–3 hrs (ferry can shorten Alibaug) |
| Murud and Diveagar | ~165–185 km | 3.5–4.5 hrs |
| Shrivardhan and Harihareshwar | ~185–200 km | 4–5 hrs |
| Dapoli | ~215–230 km | 4.5–5.5 hrs |
| Ganpatipule | ~375 km | 7–8 hrs |
| Tarkarli / Malvan | ~500–530 km | 9–11 hrs |

Details and route options are in [distance from Mumbai by road](guide:konkan-guide-distance-from-mumbai) and [Konkan road-trip routes](guide:konkan-guide-road-trip-routes).`,
          ],
        },
      ],
    },

    {
      type: "clusters",
      heading: "Plan the rest of your Konkan trip",
      sub: "",
      clusters: [
        {
          heading: "Plan your trip",
          desc: "",
          links: [
            {
              label: "Things to see in Konkan",
              guide: "konkan-guide-things-to-see",
            },
            {
              label: "Best places to visit",
              guide: "konkan-guide-best-places-to-visit",
            },
            {
              label: "How to plan a Konkan trip",
              guide: "konkan-guide-how-to-plan-a-trip",
            },
            {
              label: "Is Konkan open for tourism?",
              guide: "konkan-guide-is-konkan-open-for-tourism",
            },
            {
              label: "What is the main city in Konkan?",
              guide: "konkan-guide-main-city-in-konkan",
            },
            {
              label: "Weekend getaways from Mumbai and Pune",
              guide: "konkan-guide-weekend-getaways",
            },
            {
              label: "Where to eat: Malvani and Konkani food",
              guide: "konkan-guide-malvani-food",
            },
            {
              label: "How to choose a Konkan hotel",
              guide: "konkan-guide-how-to-choose-a-hotel",
            },
          ],
        },
      ],
    },

    {
      type: "faq",
      id: "faq",
      heading: "Konkan travel questions",
      groups: [
        {
          items: [
            {
              q: "What is there to see in Konkan?",
              a: "Konkan offers beaches, forts such as Murud-Janjira and Sindhudurg, temples at Harihareshwar and Ganpatipule, dolphin-spotting boat trips near Dapoli, backwaters, and Malvani food. See our full list in [things to see in Konkan](guide:konkan-guide-things-to-see).",
              open: true,
            },
            {
              q: "What are the best places to visit in Konkan?",
              a: "Popular choices are Alibaug, Kashid, Diveagar, Shrivardhan, Harihareshwar, Dapoli, Ganpatipule and Tarkarli. Pick by distance from Mumbai and the kind of trip you want. See [best places to visit in Konkan](guide:konkan-guide-best-places-to-visit).",
            },
            {
              q: "How do I arrange a Konkan trip?",
              a: "Choose the region first, check the season, book your hotel and plan the drive on NH66 or the coastal roads. Our trip planner has 3, 5 and 7-day itineraries. See [how to plan a Konkan trip](guide:konkan-guide-how-to-plan-a-trip).",
            },
            {
              q: "Is Konkan open for tourism?",
              a: "Yes. Konkan is open all year, but during the June to September monsoon, sea activities and some beach access are restricted, so check conditions before you go. See [is Konkan open for tourism](guide:konkan-guide-is-konkan-open-for-tourism).",
            },
            {
              q: "What is the main city in Konkan?",
              a: "Konkan has no single main city. It is a coastal region covering Raigad, Ratnagiri and Sindhudurg districts in Maharashtra, with Ratnagiri and Alibaug among the larger towns and Mumbai as the usual starting point. See [what is the main city in Konkan](guide:konkan-guide-main-city-in-konkan).",
            },
            {
              q: "What is the best time to visit Konkan?",
              a: "October to February, when the weather is dry and the sea is calm. Monsoon (June to September) is green but rough, and summer is hot. See [best time to visit Konkan](guide:konkan-guide-best-time-to-visit).",
            },
            {
              q: "How far is Konkan from Mumbai by road?",
              a: "Roughly 95 km to Alibaug and about 500 km to Tarkarli, depending on your destination and traffic. See [distance from Mumbai by road](guide:konkan-guide-distance-from-mumbai).",
            },
            {
              q: "Where is Shrivardhan beach, and is it good to visit?",
              a: "Shrivardhan beach is in Raigad district on Maharashtra's Konkan coast. It is known as a quieter beach and works well for a relaxed weekend. Sea View Beach Resort is in nearby Shekhadi. See [Shrivardhan beach guide](guide:konkan-guide-shrivardhan-beach).",
            },
          ],
        },
      ],
    },

    {
      type: "cta",
      heading: "Ready to book?",
      text: "Message the property directly on WhatsApp. Prices are in INR and there are no booking fees.",
      button: { label: "Browse all Konkan hotels", guide: "best-hotels-in-konkan" },
    },
  ],
};

export default guide;