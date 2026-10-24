// src/content/seo-guides/konkan-guide-beaches-compared.js
const guide = {
  slug: "konkan-guide-beaches-compared",
  metaTitle: "Konkan Beaches Compared: Which Beach Is Right for You?",
  metaDescription:
    "Compare the best beaches in Konkan, Maharashtra: Alibaug, Kashid, Diveagar, Shrivardhan, Harihareshwar, Dapoli, Ganpatipule, Tarkarli and Vengurla. Rank them by what matters to you and see a side-by-side table.",
  trail: [
    { name: "Beaches Compared" },
  ],
  hero: {
    h1: "Konkan beaches compared",
    lead:
      "Konkan has dozens of beaches, and they are very different. Tell us what matters to you and we will rank the main beach destinations, then compare them side by side.",
    buttons: [
      { label: "Rank the beaches", variant: "primary", href: "#rank" },
      { label: "Side-by-side table", variant: "ghost", href: "#table" },
    ],
  },
  blocks: [
    {
      type: "answer",
      heading: "The short answer",
      md: `For the shortest trip choose Alibaug or Kashid, for a long open beach choose Diveagar, for quiet choose Shrivardhan or Dapoli, for forts and temples choose Murud, Harihareshwar or Ganpatipule, and for water sports choose Tarkarli. Visit between October and February.`,
    },

    {
      type: "priorityRanker",
      id: "rank",
      heading: "Rank the beaches by what matters to you",
      sub:
        "Tick the things you care about. The ranking updates as you go. Ratings are our own judgement, not measurements, and they are a starting point rather than a verdict.",
      hintEmpty: "Tick at least one priority to see a ranking.",
      priorities: [
        { key: "close",  label: "Close to Mumbai" },
        { key: "quiet",  label: "Quiet and uncrowded" },
        { key: "act",    label: "Water sports and boat trips" },
        { key: "stay",   label: "A wide choice of stays" },
        { key: "sight",  label: "Forts and temples nearby" },
      ],
      items: [
        {
          name: "Alibaug",
          slug: "konkan-hotels-alibaug-kashid-murud",
          bestFor: "Short trips, villas and resorts",
          ratings: { close: 3, quiet: 0, act: 1, stay: 3, sight: 2 },
        },
        {
          name: "Kashid",
          slug: "konkan-hotels-alibaug-kashid-murud",
          bestFor: "Beach weekends",
          ratings: { close: 3, quiet: 0, act: 1, stay: 2, sight: 1 },
        },
        {
          name: "Murud",
          slug: "konkan-hotels-alibaug-kashid-murud",
          bestFor: "Fort visits and a slower pace",
          ratings: { close: 2, quiet: 1, act: 2, stay: 1, sight: 3 },
        },
        {
          name: "Diveagar",
          slug: "konkan-hotels-diveagar",
          bestFor: "Families and groups",
          ratings: { close: 2, quiet: 1, act: 0, stay: 2, sight: 2 },
        },
        {
          name: "Shrivardhan",
          slug: "konkan-hotels-shrivardhan",
          bestFor: "Calm weekends",
          ratings: { close: 2, quiet: 3, act: 0, stay: 1, sight: 1 },
        },
        {
          name: "Harihareshwar",
          slug: "konkan-hotels-harihareshwar",
          bestFor: "Temple visits and scenic walks",
          ratings: { close: 2, quiet: 1, act: 0, stay: 1, sight: 3 },
        },
        {
          name: "Dapoli and Murud-Harnai",
          slug: "konkan-hotels-dapoli-harnai",
          bestFor: "Quiet stays, dolphin trips, forts",
          ratings: { close: 1, quiet: 3, act: 2, stay: 2, sight: 2 },
        },
        {
          name: "Ganpatipule",
          slug: "konkan-hotels-ganpatipule",
          bestFor: "Temple and beach together",
          ratings: { close: 1, quiet: 1, act: 1, stay: 2, sight: 3 },
        },
        {
          name: "Tarkarli and Malvan",
          slug: "konkan-hotels-tarkarli-malvan",
          bestFor: "Water sports and Malvani food",
          ratings: { close: 0, quiet: 1, act: 3, stay: 3, sight: 3 },
        },
        {
          name: "Vengurla",
          slug: "konkan-hotels-vengurla-sindhudurg",
          bestFor: "Slow trips far from the crowds",
          ratings: { close: 0, quiet: 3, act: 0, stay: 1, sight: 1 },
        },
      ],
    },

    {
      type: "guide",
      id: "table",
      heading: "Side-by-side comparison",
      toc: [],
      sections: [
        {
          id: "table-body",
          title: "The main beach destinations at a glance",
          body: [
            `| Beach | District | From Mumbai | Character | Best for |
| --- | --- | --- | --- | --- |
| **Alibaug** | Raigad | About 95–110 km | Several beaches near the town, and a sea fort at Kolaba | Short trips, villas and resorts |
| **Kashid** | Raigad | About 125–135 km | A long stretch of pale sand | Beach weekends |
| **Murud** | Raigad | About 150–170 km | A quieter beach beside the town, with Janjira fort offshore | Fort visits and a slower pace |
| **Diveagar** | Raigad | About 170–190 km | A long, open beach | Families and groups |
| **Shrivardhan** | Raigad | About 175–200 km | A quieter, less crowded beach | Calm weekends |
| **Harihareshwar** | Raigad | About 185–205 km | A rocky shoreline beside a temple town | Temple visits and scenic walks |
| **Dapoli and Murud-Harnai** | Ratnagiri | About 215–230 km | Quiet beaches near a fishing port | Quiet stays, dolphin trips, forts |
| **Ganpatipule** | Ratnagiri | About 340–375 km | A long beach beside a famous temple | Temple and beach together |
| **Tarkarli and Malvan** | Sindhudurg | About 500–550 km | Clear water and a river mouth | Water sports and Malvani food |
| **Vengurla** | Sindhudurg | About 540–590 km | Quiet southern beaches near the Goa border | Slow trips far from the crowds |

Distances are approximate road distances. See [distance from Mumbai](guide:konkan-guide-distance-from-mumbai) for drive times.`,
          ],
        },
      ],
    },

    {
      type: "guide",
      id: "safety",
      heading: "Beach safety, wherever you go",
      toc: [],
      sections: [
        {
          id: "safety-list",
          title: "Five rules for Konkan beaches",
          body: [
            `- Currents can be strong and the bottom can drop quickly on many Konkan beaches, so swim only where locals do and where it feels safe.
- Follow lifeguard, hotel and local warnings, and keep children within arm's reach.
- Do not swim in the monsoon (June to September), when the sea is rough.
- Rocky shores and fort steps are slippery; wear non-slip footwear.
- Use licensed operators for water sports and always wear a life jacket.

See [is Konkan open for tourism](guide:konkan-guide-is-konkan-open-for-tourism) for what runs when.`,
          ],
        },
      ],
    },

    {
      type: "seasonBar",
      id: "when",
      heading: "Best time for the beach",
      sub: "October to February is best: dry weather and a calmer sea. March to May is hot, and June to September is monsoon.",
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
      id: "stay",
      heading: "Stay near your beach",
      sub: "",
      clusters: [
        {
          heading: "Stay types and planning",
          desc: "",
          links: [
            { label: "Best beach hotels", guide: "konkan-best-hotels-beach", desc: "On the sand or a short walk away" },
            { label: "Sea-facing and sea-view hotels", guide: "konkan-best-hotels-sea-view", desc: "Rooms that look at the water" },
            { label: "Family and couple resorts", guide: "konkan-best-hotels-family-couples", desc: "Activities, privacy and quiet" },
            { label: "Budget hotels", guide: "konkan-best-hotels-budget", desc: "Simple stays near the beach" },
            { label: "Best places to visit", guide: "konkan-guide-best-places-to-visit", desc: "Choose by time and interest" },
            { label: "How to plan a Konkan trip", guide: "konkan-guide-how-to-plan-a-trip", desc: "Itineraries" },
          ],
        },
      ],
    },

    {
      type: "faq",
      id: "faq",
      heading: "Konkan beach questions",
      groups: [
        {
          items: [
            { q: "Which is the best beach in Konkan?",
              a: "It depends on what you want. Kashid and Diveagar are popular for sand, Shrivardhan and Dapoli for quiet, and Tarkarli for clear water and water sports. See [best beach hotels](guide:konkan-best-hotels-beach).",
              open: true },
            { q: "Which Konkan beach is closest to Mumbai?",
              a: "Alibaug and Kashid are closest, followed by Murud, Diveagar and Shrivardhan. See [weekend getaways](guide:konkan-guide-weekend-getaways)." },
            { q: "Which Konkan beach is the least crowded?",
              a: "Shrivardhan, Dapoli and Vengurla are generally quieter than the beaches nearest Mumbai. See [Shrivardhan hotels](guide:konkan-hotels-shrivardhan)." },
            { q: "Which Konkan beach is best for water sports?",
              a: "Tarkarli and Malvan, usually from around October to May. Check what is running on your dates. See [Tarkarli and Malvan](guide:konkan-hotels-tarkarli-malvan)." },
            { q: "Which Konkan beach is best for families?",
              a: "Diveagar and Kashid are popular with families for long, open beaches and a wide choice of stays. Always supervise children near the water. See [family and couple resorts](guide:konkan-best-hotels-family-couples)." },
            { q: "Is it safe to swim at Konkan beaches?",
              a: "Conditions vary by beach and season. Swim only where it feels safe, follow warnings and avoid the sea in monsoon. See [is Konkan open for tourism](guide:konkan-guide-is-konkan-open-for-tourism)." },
          ],
        },
      ],
    },

    {
      type: "cta",
      heading: "Choose your beach, then your stay",
      text:
        "Message the property directly on WhatsApp. Prices are in INR and there are no booking fees.",
      button: { label: "See the best beach hotels", guide: "konkan-best-hotels-beach" },
    },
  ],
};

export default guide;