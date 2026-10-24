// src/content/seo-guides/konkan-guide-monsoon-stays.js
const guide = {
  slug: "konkan-guide-monsoon-stays",
  metaTitle: "Monsoon Stays in Konkan: Is It Worth Visiting June to September?",
  metaDescription:
    "Planning a Konkan monsoon trip? What is open and closed, the safety rules, where to stay, what to pack and who should wait until October. A practical guide to the green season on the Maharashtra coast.",
  trail: [
    { name: "Monsoon Stays" },
  ],
  hero: {
    h1: "Monsoon stays in Konkan",
    lead:
      "From June to September the Konkan coast turns intensely green, quiet and cheap. It is also wet, rough and restricted. Here is an honest guide to whether a monsoon trip suits you and how to do it safely.",
    buttons: [
      { label: "Is it right for you?", variant: "primary", href: "#fit" },
      { label: "Safety rules", variant: "ghost", href: "#safety" },
    ],
  },
  blocks: [
    {
      type: "answer",
      heading: "The short answer",
      md: `A Konkan monsoon trip is good for green scenery, farm and hill-side stays, quiet and low prices. It is not good for swimming, boat trips to forts, water sports or fixed, weather-proof plans. Keep your dates flexible, avoid ghat roads in heavy rain and never swim in the sea.`,
    },

    {
      type: "fitChecker",
      id: "fit",
      heading: "Is a monsoon trip right for you?",
      sub: "Tick everything that applies to your trip. This is a rough guide, not a guarantee.",
      hintEmpty: "Tick what applies to see a suggestion.",
      positivesLegend: "I am happy with",
      positives: [
        { label: "Flexible dates and plans that can change with the weather", points: 2 },
        { label: "Nature, greenery and quiet", points: 2 },
        { label: "Farm, hill-side or homestay stays", points: 1 },
        { label: "Lower prices", points: 1 },
        { label: "Travelling by train or a driver I trust", points: 1 },
      ],
      negativesLegend: "I need",
      negatives: [
        { label: "To swim in the sea", points: -3 },
        { label: "Boat trips to forts or dolphin-watching", points: -3 },
        { label: "Water sports or scuba", points: -3 },
        { label: "A clear sea view and sunsets", points: -1 },
        { label: "To travel with very young children or elderly relatives", points: -1 },
        { label: "Fixed dates I cannot change", points: -2 },
      ],
      bands: [
        {
          min: 3,
          kind: 1,
          title: "Good fit",
          text: "Keep dates flexible and choose a farm, hill-side or homestay stay.",
        },
        {
          min: 0,
          kind: 2,
          title: "Possible with care",
          text: "Plan for rain, have a backup plan and avoid sea activities.",
        },
        {
          min: -999,
          kind: 3,
          title: "Better to wait",
          text: "Better to wait for October to February. Swimming, boat trips and water sports are unlikely to be available.",
        },
      ],
    },

    {
      type: "guide",
      id: "proscons",
      heading: "What the monsoon is like in Konkan",
      toc: [],
      sections: [
        {
          id: "proscons-table",
          title: "Good and not-so-good",
          body: [
            `| Good | Not so good |
| --- | --- |
| Lush green hills, paddy fields and waterfalls | Heavy rain and cloud; sea views are often hidden |
| Quiet beaches and lanes with very few visitors | The sea is rough and unsafe for swimming |
| The lowest room rates of the year | Boat trips, water sports and some ferries stop |
| Good time for farm stays and home-cooked food | Roads can flood or slide, and journeys take longer |
| Atmospheric, moody coast for photography | Fresh sea fish can be limited |`,
          ],
        },
      ],
    },

    {
      type: "guide",
      id: "closed",
      heading: "What is open and closed",
      toc: [],
      sections: [
        {
          id: "closed-table",
          title: "The seasonal picture",
          body: [
            `Hotels and homestays stay open, but boat services and water activities usually stop for safety. Authorities set the dates each year, so confirm before you travel. Our [is Konkan open for tourism](guide:konkan-guide-is-konkan-open-for-tourism) guide has a month-by-month checker.

| What | In monsoon |
| --- | --- |
| **Hotels and homestays** | Usually open, though a few small places close in heavy rain |
| **Boat trips to sea forts** | Usually suspended for safety, from late May to about the end of August or into September |
| **Water sports and scuba** | Usually stopped; they restart around October when the sea calms |
| **Mumbai to Alibaug ferries** | Usually suspended in monsoon; roads remain an option |
| **Beaches** | Open to walk on, but swimming is not advised |
| **Roads** | Open, but slower, with a risk of waterlogging and landslides on hilly stretches |`,
          ],
        },
      ],
    },

    {
      type: "guide",
      id: "safety",
      heading: "Safety rules for a monsoon trip",
      toc: [],
      sections: [
        {
          id: "safety-list",
          title: "Six rules to follow",
          body: [
            `- **Do not swim in the sea.** Currents are strong, the sea is rough and warnings are often in place.
- **Avoid ghat roads in heavy rain and at night.** Landslides and poor visibility are real risks, and sections of the coastal highway have been closed after slips.
- **Check weather alerts.** The India Meteorological Department issues colour-coded alerts for heavy rain; take orange and red alerts seriously and change your plans.
- **Stay away from swollen streams and waterfalls.** Flash floods can arrive without warning.
- **Rocky shores and fort steps are slippery.** Skip the Harihareshwar parikrama and similar walks in heavy rain.
- **Tell someone your plans,** and keep your phone charged with offline maps downloaded.`,
          ],
        },
      ],
    },

    {
      type: "guide",
      id: "where",
      heading: "Where to stay in the monsoon",
      toc: [],
      sections: [
        {
          id: "where-table",
          title: "Stay types that work in the rain",
          body: [
            `Choose a stay where the rain is part of the experience, not an obstacle.

| Stay type | Why it works |
| --- | --- |
| **Farm stays and homestays** | Orchards and village life are at their best, and hosts cook warm local meals |
| **Hill-side and inland hotels** | Views of green hills, waterfalls nearby and fewer sea-related restrictions |
| **Hotels with covered balconies** | You can watch the rain and the sea from inside |
| **Budget hotels** | Rates are at their lowest, but check cleanliness, drainage and power backup |
| **Resorts with indoor facilities** | Spas, covered dining and games keep a wet day enjoyable |`,
          ],
        },
      ],
    },

    {
      type: "clusters",
      id: "where-links",
      heading: "Explore monsoon-friendly stays",
      sub: "",
      clusters: [
        {
          heading: "Stay types",
          desc: "",
          links: [
            { label: "Homestays and agro-tourism", guide: "konkan-best-hotels-homestays", desc: "Farm walks and home cooking" },
            { label: "Dapoli and Murud-Harnai", guide: "konkan-hotels-dapoli-harnai", desc: "Orchards and green hills" },
            { label: "Budget hotels", guide: "konkan-best-hotels-budget", desc: "Lowest rates of the year" },
            { label: "Sea-facing and sea-view hotels", guide: "konkan-best-hotels-sea-view", desc: "Covered balconies for dramatic skies" },
          ],
        },
      ],
    },

    {
      type: "guide",
      id: "months",
      heading: "June to September: what to expect",
      toc: [],
      sections: [
        {
          id: "months-table",
          title: "Month by month",
          body: [
            `| Month | What to expect |
| --- | --- |
| **June** | The rain begins and builds. Boat services and water sports stop, and the sea turns rough. |
| **July** | Usually the heaviest rain. Roads can be disrupted, so travel only if you must. |
| **August** | Heavy rain with some dry breaks. Ganeshotsav may start late in the month or in September, which brings busy roads and trains. |
| **September** | Rain eases through the month, and the landscape is at its greenest. Boat trips begin to return later, when the sea allows. |

See [best time to visit Konkan](guide:konkan-guide-best-time-to-visit) for the full year.`,
          ],
        },
      ],
    },

    {
      type: "packingChecklist",
      id: "pack",
      heading: "What to pack",
      items: [
        "A good rain jacket or umbrella, and a waterproof cover for bags and phones",
        "Quick-dry clothes and non-slip footwear",
        "An extra pair of shoes and socks, because everything stays damp",
        "Insect repellent",
        "A power bank, torch and offline maps",
        "Basic medicines, and a plastic bag for wet clothes",
      ],
    },

    {
      type: "guide",
      id: "book",
      heading: "Booking tips",
      toc: [],
      sections: [
        {
          id: "book-list",
          title: "Six things to check before you book",
          body: [
            `- Ask about the **cancellation and weather policy** before you pay an advance, in writing.
- Confirm that the **access road** is open and usable in heavy rain.
- Ask about **power backup** and drainage, since outages and waterlogging are more likely.
- Expect **limited fresh fish**, since fishing is usually restricted for part of the monsoon. See [Malvani and Konkani food](guide:konkan-guide-malvani-food).
- Avoid **Ganeshotsav** travel days unless you want the festival, since roads and trains are busy.
- More: [how to choose a Konkan hotel](guide:konkan-guide-how-to-choose-a-hotel) and [how to plan a Konkan trip](guide:konkan-guide-how-to-plan-a-trip).`,
          ],
        },
      ],
    },

    {
      type: "faq",
      id: "faq",
      heading: "Monsoon questions",
      groups: [
        {
          items: [
            { q: "Is Konkan good to visit in monsoon?",
              a: "It is green, quiet and cheap, but the sea is rough and boat trips and water sports stop. It suits nature lovers and farm stays, not beach holidays. See [best hotels in Konkan](guide:best-hotels-in-konkan).",
              open: true },
            { q: "Is it safe to travel in Konkan during monsoon?",
              a: "With care, yes. Avoid swimming, ghat roads in heavy rain and night driving, check weather alerts and keep your plans flexible. See [is Konkan open for tourism](guide:konkan-guide-is-konkan-open-for-tourism)." },
            { q: "Can I swim at Konkan beaches in monsoon?",
              a: "No. The sea is rough with strong currents, and warnings are often in place. See [best time to visit Konkan](guide:konkan-guide-best-time-to-visit)." },
            { q: "Are hotels open in Konkan during monsoon?",
              a: "Most are, with lower rates. A few small properties close in heavy rain, so confirm before you book. See [how to choose a Konkan hotel](guide:konkan-guide-how-to-choose-a-hotel)." },
            { q: "Which Konkan places are best in monsoon?",
              a: "Inland and farm areas such as around Dapoli, and hill areas such as Amboli in Sindhudurg, are popular for greenery and waterfalls. Beach destinations are less suitable. See [Dapoli and Murud-Harnai](guide:konkan-hotels-dapoli-harnai)." },
            { q: "Can I do water sports or visit sea forts in monsoon?",
              a: "Usually not. Boat services and water sports are suspended for safety, and restart after the monsoon. Check current dates. See [is Konkan open for tourism](guide:konkan-guide-is-konkan-open-for-tourism)." },
          ],
        },
      ],
    },

    {
      type: "cta",
      heading: "Find a stay for the green season",
      text:
        "Message the property directly on WhatsApp. Prices are in INR and there are no booking fees.",
      button: { label: "See the best hotels in Konkan", guide: "best-hotels-in-konkan" },
    },
  ],
};

export default guide;