// src/content/seo-guides/konkan-guide-main-city-in-konkan.js
const guide = {
  slug: "konkan-guide-main-city-in-konkan",
  metaTitle: "What Is the Main City in Konkan? Districts, Headquarters and Gateway Towns",
  metaDescription:
    "What is the main city in Konkan? There is no single one. Learn how Konkan is divided into Raigad, Ratnagiri and Sindhudurg, which towns are district headquarters, and which cities travellers use as gateways.",
  trail: [
    { name: "Main City in Konkan" },
  ],
  hero: {
    h1: "What is the main city in Konkan?",
    lead:
      "Konkan is a coastal region, not a single city or state, so the answer depends on what you mean by \u201Cmain\u201D. Here is how the region is divided and which towns matter for travellers.",
    buttons: [
      { label: "What do you mean?", variant: "primary", href: "#ask" },
      { label: "The districts", variant: "ghost", href: "#districts" },
    ],
  },
  blocks: [
    {
      type: "answer",
      heading: "The short answer",
      md: `Konkan has no single main city. In Maharashtra it covers the coastal districts of Raigad, Ratnagiri and Sindhudurg, with Alibag, Ratnagiri and Oros as their district headquarters. Mumbai is the largest city in the wider Konkan division and the usual starting point for travellers.`,
    },

    {
      type: "qaSwitcher",
      id: "ask",
      heading: "What do you mean by \u201Cmain city\u201D?",
      sub: "Choose the question closest to what you want to know.",
      ariaLabel: "Choose a meaning",
      items: [
        {
          question: "Largest city",
          answer: "Mumbai",
          detail: "Mumbai is the largest city in the Konkan division of Maharashtra, and it is the usual starting point for trips down the coast.",
        },
        {
          question: "District headquarters",
          answer: "Alibag, Ratnagiri and Oros",
          detail: "Raigad's headquarters is Alibag, Ratnagiri district's is the town of Ratnagiri, and Sindhudurg district's is Oros.",
        },
        {
          question: "Biggest town for tourists",
          answer: "There is no single one",
          detail: "Visitors spread across the coast. Alibaug is closest to Mumbai, Ganpatipule and Ratnagiri anchor the middle, and Malvan and Tarkarli are the hub in the south.",
        },
        {
          question: "Where to fly or take a train",
          answer: "It depends on your destination",
          detail: "Mumbai is the main hub. Konkan Railway stations such as Mangaon, Ratnagiri and Kudal serve different parts of the coast. See the distance guide.",
        },
        {
          question: "Capital of Konkan",
          answer: "There isn't one",
          detail: "Konkan is a region, not a state, so it has no capital of its own. Maharashtra's capital is Mumbai, and the capital of neighbouring Goa is Panaji.",
        },
      ],
    },

    {
      type: "guide",
      id: "what",
      heading: "What is Konkan?",
      toc: [],
      sections: [
        {
          id: "what-body",
          title: "A coastal strip, not a city",
          body: [
            `Konkan is the narrow coastal plain between the Western Ghats and the Arabian Sea along India's west coast. In Maharashtra it is the western strip of the state, and the coast continues south through Goa and into coastal Karnataka.

Administratively, the Konkan division of Maharashtra includes the districts of Mumbai City, Mumbai Suburban, Thane, Palghar, Raigad, Ratnagiri and Sindhudurg. Most travellers use "Konkan" to mean the coast south of Mumbai, which is what this guide covers.`,
          ],
        },
      ],
    },

    {
      type: "guide",
      id: "districts",
      heading: "The three main tourist districts",
      toc: [],
      sections: [
        {
          id: "districts-table",
          title: "Where each district sits and what it contains",
          body: [
            `| District | Headquarters | Position | Destinations |
| --- | --- | --- | --- |
| **Raigad** | Alibag | North, closest to Mumbai | Alibaug, Kashid, Murud-Janjira, Diveagar, Shrivardhan, Harihareshwar |
| **Ratnagiri** | Ratnagiri | Middle | Dapoli, Harnai, Anjarle, Ganpatipule, Ratnagiri |
| **Sindhudurg** | Oros | South, near Goa | Malvan, Tarkarli, Devbag, Vengurla, Sindhudurg fort |`,
          ],
        },
      ],
    },

    {
      type: "guide",
      id: "gateways",
      heading: "Towns and cities travellers actually use",
      toc: [],
      sections: [
        {
          id: "gateways-table",
          title: "Towns travellers pass through or base near",
          body: [
            `| Place | Role for travellers |
| --- | --- |
| **Mumbai** | The largest city and usual starting point for trips to the coast |
| **Panvel** | A common gateway on the road south from Mumbai |
| **Alibag** | Raigad district headquarters and the hub for the Alibaug coast |
| **Ratnagiri** | Ratnagiri district headquarters; the nearest railway station for Ganpatipule |
| **Kudal** | A Konkan Railway station used for Malvan and Tarkarli |
| **Malvan** | The tourist town for Sindhudurg fort, Tarkarli and Malvani food |

For drive times and distances, see [distance from Mumbai by road](guide:konkan-guide-distance-from-mumbai).`,
          ],
        },
      ],
    },

    {
      type: "clusters",
      id: "base",
      heading: "So where should you base yourself?",
      sub:
        "Because there is no central city, pick a coastal area rather than a town. See best places to visit in Konkan, then choose a base for two or three nights and add day trips. Our trip planning guide has ready itineraries.",
      clusters: [
        {
          heading: "Choose a base",
          desc: "",
          links: [
            { label: "Alibaug, Kashid and Murud", guide: "konkan-hotels-alibaug-kashid-murud", desc: "Closest to Mumbai; Raigad HQ at Alibag" },
            { label: "Diveagar", guide: "konkan-hotels-diveagar", desc: "Raigad coast" },
            { label: "Dapoli and Murud-Harnai", guide: "konkan-hotels-dapoli-harnai", desc: "Ratnagiri district" },
            { label: "Ganpatipule", guide: "konkan-hotels-ganpatipule", desc: "Near Ratnagiri" },
            { label: "Tarkarli and Malvan", guide: "konkan-hotels-tarkarli-malvan", desc: "Sindhudurg district" },
            { label: "Best hotels in Konkan", guide: "best-hotels-in-konkan", desc: "The full guide" },
          ],
        },
      ],
    },

    {
      type: "faq",
      id: "faq",
      heading: "Main city in Konkan: questions",
      groups: [
        {
          items: [
            { q: "What is the main city in Konkan?",
              a: "Konkan has no single main city. Mumbai is the largest city in the wider Konkan division, and the main district headquarters on the coast are Alibag, Ratnagiri and Oros. See [best places to visit](guide:konkan-guide-best-places-to-visit).",
              open: true },
            { q: "Is Mumbai part of Konkan?",
              a: "Administratively, yes. Mumbai City and Mumbai Suburban districts are part of the Konkan division of Maharashtra, although most travellers mean the coast south of Mumbai when they say Konkan. See [distance from Mumbai](guide:konkan-guide-distance-from-mumbai)." },
            { q: "Which states does Konkan cover?",
              a: "The Konkan coast runs through Maharashtra, Goa and coastal Karnataka. This guide covers the Maharashtra section, from Raigad to Sindhudurg. See [best hotels in Konkan](guide:best-hotels-in-konkan)." },
            { q: "What are the main districts of Konkan?",
              a: "For travel, the main districts are Raigad in the north, Ratnagiri in the middle and Sindhudurg in the south. See [things to see in Konkan](guide:konkan-guide-things-to-see)." },
            { q: "Where should I stay in Konkan?",
              a: "Choose a coastal area rather than a city, based on how many days you have. Alibaug and Diveagar suit a weekend, while Tarkarli suits a longer trip. See [how to plan a Konkan trip](guide:konkan-guide-how-to-plan-a-trip)." },
            { q: "What is the capital of Konkan?",
              a: "Konkan is a region, not a state, so it has no capital of its own. See [best places to visit](guide:konkan-guide-best-places-to-visit)." },
          ],
        },
      ],
    },

    {
      type: "cta",
      heading: "Choose your base",
      text:
        "Message the property directly on WhatsApp. Prices are in INR and there are no booking fees.",
      button: { label: "See the best hotels in Konkan", guide: "best-hotels-in-konkan" },
    },
  ],
};

export default guide;