// src/content/seo-guides/konkan-hotels-dapoli-harnai.js
import { SITE_NAME } from "@/lib/siteConfig";

const guide = {
  slug: "konkan-hotels-dapoli-harnai",
  metaTitle: "Best Hotels in Dapoli and Murud-Harnai: Beach Stays and Dolphin Trips",
  metaDescription:
    "Where to stay in Dapoli, Murud and Harnai, Ratnagiri: beach resorts, homestays and hotels, dolphin trips, Suvarnadurg fort, how to get there from Mumbai and the best time to visit.",
  trail: [
    { name: "Best Hotels in Konkan", slug: "best-hotels-in-konkan" },
    { name: "Dapoli and Murud-Harnai" },
  ],
  hero: {
    h1: "Best hotels in Dapoli and Murud-Harnai",
    lead:
      "Quiet beaches, orchards, forts and a working fishing port in Ratnagiri district. Here is where to stay around Dapoli, Murud, Karde and Harnai, and how to plan the trip.",
    buttons: [
      { label: "Hotels and stays", variant: "primary", href: "#picks" },
      { label: "Which Murud?", variant: "ghost", href: "#note" },
    ],
  },
  blocks: [
    {
      type: "answer",
      heading: "The short answer",
      md: `Dapoli and Murud-Harnai suit a slower trip of two to three days, about 4.5\u20135.5 hours from Mumbai. Stay on the coast near Murud or Karde for beaches and dolphin trips, or in Dapoli for orchards and homestays. Travel between October and February.`,
    },

    {
      type: "regionStays",
      id: "picks",
      heading: "Hotels and stays around Dapoli and Harnai",
      sub:
        "Filter by area and stay type. Each listing is booked directly with the property over WhatsApp, with no booking fee.",
      typeFilterLabel: "Stay type",
      placeFilterLabel: "Area",
      allTypesLabel: "Any stay type",
      allPlacesLabel: "All areas",
      sampleLabel: "Sample listing",
      viewLabel: "View details",
      waLabel: "WhatsApp",
      empty:
        "No stays match yet. Try another area or type, or browse all hotels.",
      emptyCtaLabel: "Browse all Konkan hotels",
      fine: null,
      listings: [
        {
          name: "Your Murud beach resort",
          place: "Murud",
          types: ["Beach resort"],
          note: "Replace with a verified Murud property.",
          href: "konkan-hotels",
          sample: true,
        },
        {
          name: "Your Karde stay",
          place: "Karde",
          types: ["Beach resort"],
          note: "Replace with a verified Karde property.",
          href: "konkan-hotels",
          sample: true,
        },
        {
          name: "Your Dapoli homestay",
          place: "Dapoli",
          types: ["Homestay"],
          note: "Replace with a verified Dapoli property.",
          href: "konkan-hotels",
          sample: true,
        },
        {
          name: "Your Dapoli farm stay",
          place: "Dapoli",
          types: ["Farm stay"],
          note: "Replace with a verified Dapoli property.",
          href: "konkan-hotels",
          sample: true,
        },
        {
          name: "Your Harnai budget hotel",
          place: "Harnai",
          types: ["Budget hotel"],
          note: "Replace with a verified Harnai property.",
          href: "konkan-hotels",
          sample: true,
        },
        {
          name: "Your Anjarle homestay",
          place: "Anjarle",
          types: ["Homestay"],
          note: "Replace with a verified Anjarle property.",
          href: "konkan-hotels",
          sample: true,
        },
      ],
    },

    {
      type: "answer",
      id: "note",
      heading: "Which Murud? A quick note",
      md: `There are two places called Murud on the Konkan coast. **Murud-Harnai**, covered here, is near Dapoli in Ratnagiri district. **Murud-Janjira**, with its sea fort, is further north in Raigad district and is covered on our [Alibaug, Kashid and Murud page](guide:konkan-hotels-alibaug-kashid-murud). Check the district before you book.`,
    },

    {
      type: "guide",
      id: "compare",
      heading: "Dapoli, Murud, Karde, Harnai and Anjarle compared",
      toc: [],
      sections: [
        {
          id: "compare-table",
          title: "How the areas differ",
          body: [
            `These places are close together, but each has a different feel. Use this to choose a base.

| Area | Known for | Best for |
| --- | --- | --- |
| **Dapoli** | A hill-town feel, orchards and the agricultural university | Homestays, farm stays and a cooler base |
| **Murud** | A beach town beside Dapoli | Beach stays and dolphin trips |
| **Karde** | A beach on the same coast, popular with visitors | Beach days and relaxed stays |
| **Harnai** | A working fishing port with sea forts nearby | Fish market, forts and local food |
| **Anjarle** | A quiet coastal village with a well-known Ganesh temple | Quiet stays and temple visits |`,
          ],
        },
      ],
    },

    {
      type: "guide",
      id: "why",
      heading: "Why stay here",
      toc: [],
      sections: [
        {
          id: "why-list",
          title: "Four reasons Dapoli and Harnai suit a slower trip",
          body: [
            `- **Quieter coast.** The beaches here are generally less crowded than those nearest Mumbai.
- **Things beyond the beach.** Dolphin-watching trips, sea forts and a fishing port give the trip variety.
- **Homestays and farm stays.** Dapoli is a good area for local stays. See [Konkan homestays and agro-tourism](guide:konkan-best-hotels-homestays).
- **Good for couples and families.** See [family and couple resorts](guide:konkan-best-hotels-family-couples).`,
          ],
        },
      ],
    },

    {
      type: "guide",
      id: "reach",
      heading: "How to get to Dapoli and Harnai from Mumbai",
      toc: [],
      sections: [
        {
          id: "reach-table",
          title: "Getting there",
          body: [
            `| Option | Details |
| --- | --- |
| **By road** | About 215–230 km from Mumbai, usually 4.5–5.5 hours depending on traffic. The route runs along NH66 and then onto state roads towards the coast. |
| **By train** | Konkan Railway to a nearby station such as Khed, then a road transfer. Confirm the best station and transfer with your hotel. |
| **Within the area** | Beaches, forts and the port are spread out along the coast, so a car or a hired driver makes the trip easier. |
| **Last stretch** | Village roads can be narrow and hilly, so allow extra time and ask your hotel for directions and parking. |

See also [distance from Mumbai by road](guide:konkan-guide-distance-from-mumbai).`,
          ],
        },
      ],
    },

    {
      type: "guide",
      id: "near",
      heading: "Things to do near Dapoli and Harnai",
      toc: [],
      sections: [
        {
          id: "near-table",
          title: "Nearby places and tips",
          body: [
            `| Place | Why go | Tip |
| --- | --- | --- |
| **Dolphin-watching trips** | Boat trips from the Murud and Harnai coast | Sightings are not guaranteed; best in calm weather, not in monsoon |
| **Suvarnadurg fort** | A sea fort near Harnai, reached by boat | Check boat timings and sea conditions |
| **Harnai fishing port** | A busy port with a morning fish market | Go early for the most activity |
| **Beaches** | Murud, Karde and nearby stretches of coast | Check conditions before swimming |
| **Anjarle Ganesh temple** | A well-known temple in a quiet village | Dress modestly and check visiting hours |
| **Orchards and farms** | Mango, coconut and cashew country around Dapoli | Ask your host about visits and seasons |

More ideas: [things to see in Konkan](guide:konkan-guide-things-to-see) and [best places to visit in Konkan](guide:konkan-guide-best-places-to-visit).`,
          ],
        },
      ],
    },

    {
      type: "seasonBar",
      id: "when",
      heading: "Best time to visit",
      sub:
        "October to February is best for comfortable weather, calm seas and boat trips. March to May is hot, and many farms are in fruit season. June to September is monsoon, when the sea is rough, boat trips stop and the countryside is green.",
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
            { label: "Hotels in Harihareshwar", guide: "konkan-hotels-harihareshwar", desc: "Temple town, to the north" },
            { label: "Hotels in Ganpatipule", guide: "konkan-hotels-ganpatipule", desc: "Beach and temple, further south" },
            { label: "Best beach hotels", guide: "konkan-best-hotels-beach", desc: "On the sand or a short walk away" },
            { label: "Homestays and agro-tourism", guide: "konkan-best-hotels-homestays", desc: "Local food, local hosts" },
            { label: "Best places to visit", guide: "konkan-guide-best-places-to-visit", desc: "Beyond Dapoli" },
          ],
        },
      ],
    },

    {
      type: "faq",
      id: "faq",
      heading: "Dapoli and Harnai questions",
      groups: [
        {
          items: [
            {
              q: "What are the best hotels in Dapoli?",
              a: "Dapoli has homestays, farm stays and small hotels, while the nearby coast around Murud and Karde has beach resorts. Compare room category, beach access and what the price includes before booking. See [best hotels in Konkan](guide:best-hotels-in-konkan).",
              open: true,
            },
            {
              q: "What is Murud-Harnai known for?",
              a: "The area is known for quieter beaches, dolphin-watching boat trips, sea forts such as Suvarnadurg and the Harnai fishing port. See [things to see in Konkan](guide:konkan-guide-things-to-see).",
            },
            {
              q: "Is Murud near Dapoli the same as Murud-Janjira?",
              a: "No. Murud near Dapoli is in Ratnagiri district. Murud-Janjira, with its sea fort, is further north in Raigad district. See [Alibaug, Kashid and Murud](guide:konkan-hotels-alibaug-kashid-murud).",
            },
            {
              q: "How far is Dapoli from Mumbai?",
              a: "Roughly 215–230 km by road, usually 4.5–5.5 hours depending on traffic. See [distance from Mumbai by road](guide:konkan-guide-distance-from-mumbai).",
            },
            {
              q: "Can I see dolphins near Dapoli?",
              a: "Dolphin-watching trips run from the Murud and Harnai coast, but sightings are not guaranteed and trips stop in monsoon. Go in calm weather between October and February. See [best time to visit Konkan](guide:konkan-guide-best-time-to-visit).",
            },
            {
              q: "What is the best time to visit Dapoli and Harnai?",
              a: "October to February has the most comfortable weather and calm seas. Monsoon is green but the sea is rough and boat trips stop. See [best time to visit Konkan](guide:konkan-guide-best-time-to-visit).",
            },
          ],
        },
      ],
    },

    {
      type: "cta",
      heading: "Plan your Dapoli and Harnai stay",
      text:
        "Message the property directly on WhatsApp. Prices are in INR and there are no booking fees.",
      button: { label: "Browse all Konkan hotels", guide: "best-hotels-in-konkan" },
    },
  ],
};

export default guide;