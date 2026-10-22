// src/content/seo-guides/konkan-hotels-harihareshwar.js
import { SITE_NAME } from "@/lib/siteConfig";

const guide = {
  slug: "konkan-hotels-harihareshwar",
  metaTitle: "Best Hotels in Harihareshwar: Stays Near the Temple and Beach",
  metaDescription:
    "Where to stay in Harihareshwar, Raigad: hotels and homestays near the temple and beach, how to get there from Mumbai, parikrama tips, nearby places and the best time to visit.",
  trail: [
    { name: "Best Hotels in Konkan", slug: "best-hotels-in-konkan" },
    { name: "Harihareshwar" },
  ],
  hero: {
    h1: "Best hotels in Harihareshwar",
    lead:
      "A temple town on the Raigad coast with a rocky shoreline, a hill circuit and quiet beaches. Here is where to stay in Harihareshwar and how to plan the trip.",
    buttons: [
      { label: "Hotels and stays", variant: "primary", href: "#picks" },
      { label: "Temple and parikrama", variant: "ghost", href: "#temple" },
    ],
  },
  blocks: [
    {
      type: "answer",
      heading: "The short answer",
      md: `Harihareshwar suits a spiritual and scenic weekend, about 4\u20135 hours from Mumbai by road. Most stays are simple and affordable, and it pairs well with [Shrivardhan](guide:konkan-hotels-shrivardhan) and [Diveagar](guide:konkan-hotels-diveagar). Travel between October and February.`,
    },

    {
      type: "regionStays",
      id: "picks",
      heading: "Hotels and stays in Harihareshwar",
      sub:
        "Filter by stay type and how close the stay is to the temple or beach. Each listing is booked directly with the property over WhatsApp, with no booking fee.",
      typeFilterLabel: "Stay type",
      placeFilterLabel: "Close to",
      allTypesLabel: "Any stay type",
      allPlacesLabel: "Anywhere",
      sampleLabel: "Sample listing",
      viewLabel: "View details",
      waLabel: "WhatsApp",
      empty:
        "No stays match yet. Try another type or location, or browse all hotels.",
      emptyCtaLabel: "Browse all Konkan hotels",
      fine: null,
      listings: [
        {
          name: "Your Harihareshwar guesthouse",
          place: "Temple",
          types: ["Guesthouse"],
          note: "Replace with a verified Harihareshwar property.",
          href: "konkan-hotels",
          sample: true,
        },
        {
          name: "Your Harihareshwar budget hotel",
          place: "Temple",
          types: ["Budget hotel"],
          note: "Replace with a verified Harihareshwar property.",
          href: "konkan-hotels",
          sample: true,
        },
        {
          name: "Your Harihareshwar beach stay",
          place: "Beach",
          types: ["Beach resort"],
          note: "Replace with a verified Harihareshwar property.",
          href: "konkan-hotels",
          sample: true,
        },
        {
          name: "Your Harihareshwar homestay",
          place: "Beach",
          types: ["Homestay"],
          note: "Replace with a verified Harihareshwar property.",
          href: "konkan-hotels",
          sample: true,
        },
      ],
    },

    {
      type: "guide",
      id: "why",
      heading: "Why stay in Harihareshwar",
      toc: [],
      sections: [
        {
          id: "why-list",
          title: "Four reasons Harihareshwar draws travellers",
          body: [
            `- **A well-known temple town.** The Harihareshwar temple, dedicated to Shiva, is often called the Kashi of the South, and draws pilgrims throughout the year.
- **A scenic coast.** The shore here is more rocky than sandy, with sea views and a hill circuit.
- **Affordable stays.** Many properties are simple guesthouses and small hotels. See [budget hotels in Konkan](guide:konkan-best-hotels-budget).
- **A good base.** [Shrivardhan](guide:konkan-hotels-shrivardhan) and [Diveagar](guide:konkan-hotels-diveagar) are a short drive away.`,
          ],
        },
      ],
    },

    {
      type: "guide",
      id: "temple",
      heading: "Visiting the temple and doing the parikrama",
      toc: [],
      sections: [
        {
          id: "temple-body",
          title: "What to know before the circuit",
          body: [
            `Many visitors walk the parikrama, a circuit around the hill that runs partly along the coast. It is scenic, but it needs care.

- Wear sturdy footwear, because rocks and steps can be uneven and wet.
- Ask locals or your hotel about conditions and tide before you set out, and avoid the circuit in heavy rain, rough seas or after dark.
- Dress modestly at the temple and follow the temple's rules on footwear and photography.
- Expect crowds on festival days and long weekends. Early mornings are calmer.
- Carry water, and keep children and older family members close.

Always check current darshan timings and local conditions before you go.`,
          ],
        },
      ],
    },

    {
      type: "guide",
      id: "reach",
      heading: "How to get to Harihareshwar from Mumbai",
      toc: [],
      sections: [
        {
          id: "reach-table",
          title: "Getting there",
          body: [
            `| Option | Details |
| --- | --- |
| **By road** | About 185–205 km from Mumbai, usually 4–5 hours depending on traffic. The route runs along NH66 and then onto state roads towards the coast. |
| **By train** | Konkan Railway to a nearby station such as Mangaon, then a road transfer. Confirm the best station and transfer with your hotel. |
| **By ferry** | A ferry across the creek near Murud and Dighi can shorten some routes. Check current timings before relying on it. |
| **Last stretch** | Coastal roads can be narrow and busy on festival days, so allow extra time and confirm parking with the hotel. |

See also [distance from Mumbai by road](guide:konkan-guide-distance-from-mumbai).`,
          ],
        },
      ],
    },

    {
      type: "guide",
      id: "near",
      heading: "Things to do near Harihareshwar",
      toc: [],
      sections: [
        {
          id: "near-table",
          title: "Nearby places and how far",
          body: [
            `| Place | Why go | Roughly how far |
| --- | --- | --- |
| **Harihareshwar temple** | Shiva temple and the town's main attraction | In town |
| **Parikrama (hill circuit)** | A scenic walk around the hill, partly along the coast | In town |
| **Harihareshwar beach** | A quieter, rockier beach for views and walks | In town |
| **Shrivardhan** | A quieter beach and the town's Peshwa connections | About 12–20 km |
| **Diveagar** | A long, open beach and a Ganesh temple | About 25–40 km |

More ideas: [things to see in Konkan](guide:konkan-guide-things-to-see) and [best places to visit in Konkan](guide:konkan-guide-best-places-to-visit).`,
          ],
        },
      ],
    },

    {
      type: "seasonBar",
      id: "when",
      heading: "Best time to visit Harihareshwar",
      sub:
        "October to February is best for comfortable weather and safer walking. Mahashivratri and other festival days are very busy. March to May is hot, and June to September is monsoon, when the sea is rough and the rocky shore is slippery, so take extra care.",
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
            { label: "Hotels in Shrivardhan", guide: "konkan-hotels-shrivardhan", desc: "Quiet beach, close by" },
            { label: "Hotels in Diveagar", guide: "konkan-hotels-diveagar", desc: "Open beach and Ganesh temple" },
            { label: "Budget hotels", guide: "konkan-best-hotels-budget", desc: "Simple stays near the beach" },
            { label: "Best beach hotels", guide: "konkan-best-hotels-beach", desc: "On the sand or a short walk away" },
            { label: "Best places to visit", guide: "konkan-guide-best-places-to-visit", desc: "Beyond Harihareshwar" },
          ],
        },
      ],
    },

    {
      type: "faq",
      id: "faq",
      heading: "Harihareshwar questions",
      groups: [
        {
          items: [
            {
              q: "What are the best hotels in Harihareshwar?",
              a: "Most stays are simple guesthouses and small hotels near the temple or beach. Compare room category, distance to the temple and what the price includes before booking. See [best hotels in Konkan](guide:best-hotels-in-konkan).",
              open: true,
            },
            {
              q: "Why is Harihareshwar famous?",
              a: "It is known for the Harihareshwar temple, dedicated to Shiva and often called the Kashi of the South, and for its scenic rocky coast and hill circuit. See [best places to visit in Konkan](guide:konkan-guide-best-places-to-visit).",
            },
            {
              q: "How far is Harihareshwar from Mumbai?",
              a: "Roughly 185–205 km by road, usually 4–5 hours depending on traffic. See [distance from Mumbai by road](guide:konkan-guide-distance-from-mumbai).",
            },
            {
              q: "Is Harihareshwar good for swimming?",
              a: "The shore is rocky in places, and currents can be strong. Swim only where locals do and where it feels safe, and avoid the sea during monsoon. See [is Konkan open for tourism](guide:konkan-guide-is-konkan-open-for-tourism).",
            },
            {
              q: "What is the best time to visit Harihareshwar?",
              a: "October to February has comfortable weather. Festival days are very busy, and monsoon makes the rocky shore slippery. See [best time to visit Konkan](guide:konkan-guide-best-time-to-visit).",
            },
            {
              q: "Can I visit Harihareshwar, Shrivardhan and Diveagar together?",
              a: "Yes. They are a short drive apart, so many travellers cover all three in a two-to-three-day trip. See [how to plan a Konkan trip](guide:konkan-guide-how-to-plan-a-trip).",
            },
          ],
        },
      ],
    },

    {
      type: "cta",
      heading: "Plan your Harihareshwar stay",
      text:
        "Message the property directly on WhatsApp. Prices are in INR and there are no booking fees.",
      button: { label: "Browse all Konkan hotels", guide: "best-hotels-in-konkan" },
    },
  ],
};

export default guide;