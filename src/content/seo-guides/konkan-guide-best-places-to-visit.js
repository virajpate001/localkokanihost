// src/content/seo-guides/konkan-guide-best-places-to-visit.js
const guide = {
  slug: "konkan-guide-best-places-to-visit",
  metaTitle: "Best Places to Visit in Konkan: Which Destination Is Right for You?",
  metaDescription:
    "The best places to visit in Konkan, Maharashtra, chosen by trip length and interest: Alibaug, Kashid, Diveagar, Shrivardhan, Harihareshwar, Dapoli, Ganpatipule, Tarkarli and Vengurla.",
  trail: [
    { name: "Best Places to Visit in Konkan" },
  ],
  hero: {
    h1: "Best places to visit in Konkan",
    lead:
      "The Konkan coast is about 720 km long, so the best place depends on how much time you have and what you want. Here is how to choose a destination, with our picks by trip length and interest.",
    buttons: [
      { label: "Find a destination", variant: "primary", href: "#pick" },
      { label: "By trip length", variant: "ghost", href: "#time" },
    ],
  },
  blocks: [
    {
      type: "answer",
      heading: "The short answer",
      md: `For a weekend from Mumbai, choose Alibaug, Kashid, Diveagar or Shrivardhan. For three to four days, add Harihareshwar, Dapoli or Ganpatipule. For a longer trip, go south to Tarkarli, Malvan and Vengurla. Travel between October and February.`,
    },

    {
      type: "placeGrid",
      id: "pick",
      heading: "Find the right destination",
      sub: "Filter by how much time you have and what you want to do. Each card links to the destination page, where you can also find places to stay.",
      categoryLabel: "Best for",
      districtLabel: "Time available",
      allCategoriesLabel: "Anything",
      allDistrictsLabel: "Any length",
      metaLabel: "From Mumbai",
      cta: "Hotels and plans",
      empty: "Nothing matches that combination. Try another time or interest.",
      places: [
        { name: "Alibaug",             categories: ["Beaches", "Food"],                        district: "Weekend",       note: "Closest to Mumbai, with the widest choice of villas and resorts", meta: "About 95–110 km by road",  href: "konkan-hotels-alibaug-kashid-murud" },
        { name: "Kashid",              categories: ["Beaches"],                                district: "Weekend",       note: "A long white-sand beach, popular on weekends",                     meta: "About 125–135 km by road", href: "konkan-hotels-alibaug-kashid-murud" },
        { name: "Murud-Janjira",       categories: ["Forts and history"],                       district: "Weekend",       note: "A sea fort reached by boat, plus quieter beaches",                 meta: "About 160–170 km by road", href: "konkan-hotels-alibaug-kashid-murud" },
        { name: "Diveagar",            categories: ["Beaches", "Temples"],                      district: "Weekend",       note: "A long, open beach and a well-known Ganesh temple",                meta: "About 165–185 km by road", href: "konkan-hotels-diveagar" },
        { name: "Shrivardhan",         categories: ["Quiet escape", "Beaches"],                  district: "Weekend",       note: "A quieter beach with Peshwa connections",                          meta: "About 185–200 km by road", href: "konkan-hotels-shrivardhan" },
        { name: "Harihareshwar",       categories: ["Temples", "Quiet escape"],                  district: "3–4 days",      note: "A Shiva temple town with a rocky coast and hill circuit",          meta: "About 185–205 km by road", href: "konkan-hotels-harihareshwar" },
        { name: "Dapoli and Harnai",   categories: ["Quiet escape", "Forts and history", "Food"], district: "3–4 days",      note: "Quiet beaches, dolphin trips, sea forts and farm stays",           meta: "About 215–230 km by road", href: "konkan-hotels-dapoli-harnai" },
        { name: "Ganpatipule",         categories: ["Temples", "Beaches"],                       district: "3–4 days",      note: "A temple beside the sea and a long beach",                         meta: "About 375 km by road",     href: "konkan-hotels-ganpatipule" },
        { name: "Tarkarli and Malvan", categories: ["Water sports", "Forts and history", "Food"], district: "5 or more days", note: "Clear water, Sindhudurg fort and Malvani food",                     meta: "About 500–530 km by road", href: "konkan-hotels-tarkarli-malvan" },
        { name: "Vengurla",            categories: ["Quiet escape", "Beaches"],                  district: "5 or more days", note: "Quiet southern beaches near the Goa border",                        meta: "About 540–570 km by road", href: "konkan-hotels-vengurla-sindhudurg" },
      ],
    },

    {
      type: "guide",
      id: "time",
      heading: "Best places to visit by trip length",
      toc: [],
      sections: [
        {
          id: "time-table",
          title: "Match the destination to your time",
          body: [
            `Distance from Mumbai decides most Konkan trips, so start with how many days you have.

| Time | Good choices | Why |
| --- | --- | --- |
| **A weekend (1–2 nights)** | Alibaug, Kashid, Murud-Janjira, Diveagar, Shrivardhan | These are the closest to Mumbai, so you spend more time at the beach than on the road |
| **3–4 days** | Harihareshwar, Dapoli and Harnai, Ganpatipule | Longer drives, but you can combine more than one stop |
| **5 days or more** | Tarkarli, Malvan, Vengurla | Far from Mumbai; plan a long trip or break the journey |

For drive times, see [distance from Mumbai by road](guide:konkan-guide-distance-from-mumbai), and for short trips see [weekend getaways from Mumbai and Pune](guide:konkan-guide-weekend-getaways).`,
          ],
        },
      ],
    },

    {
      type: "guide",
      id: "interest",
      heading: "Best places to visit by interest",
      toc: [],
      sections: [
        {
          id: "interest-table",
          title: "Match the destination to what you want",
          body: [
            `| If you want | Try |
| --- | --- |
| **Beaches** | Diveagar, Kashid, Tarkarli, Shrivardhan |
| **Forts and history** | Murud-Janjira, Suvarnadurg near Harnai, Sindhudurg fort at Malvan |
| **Temples** | Harihareshwar, Ganpatipule, Diveagar, Anjarle |
| **Quiet escape** | Shrivardhan, Dapoli, Vengurla |
| **Water sports** | Tarkarli and Malvan, in season |
| **Food and village life** | Malvan, and farm stays around Dapoli |`,
          ],
        },
      ],
    },

    {
      type: "guide",
      id: "ask",
      heading: "Three questions to choose in a minute",
      toc: [],
      sections: [
        {
          id: "ask-list",
          title: "Ask yourself these before you pick",
          body: [
            `- **How far will you drive?** More than 7 hours each way is hard on a weekend, so stay in northern Raigad.
- **Beach, history or quiet?** Pick the interest that matters most, because the coast offers all three but in different places.
- **Who is travelling?** Families and groups often prefer long, open beaches, while couples may prefer quiet stays. See [family and couple resorts](guide:konkan-best-hotels-family-couples).`,
          ],
        },
      ],
    },

    {
      type: "seasonBar",
      id: "season",
      heading: "When to go",
      sub:
        "October to February suits almost every destination. In March to May the coast is hot, though still pleasant near the sea. In monsoon (June to September), the sea is rough and boat trips and water sports stop, so choose inland stays, farm visits and green countryside rather than beaches.",
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
        "See [best time to visit Konkan](guide:konkan-guide-best-time-to-visit) and [monsoon stays](guide:konkan-guide-monsoon-stays).",
    },

    {
      type: "clusters",
      id: "more",
      heading: "Keep planning",
      sub: "",
      clusters: [
        {
          heading: "More guides",
          desc: "",
          links: [
            { label: "Things to see in Konkan", guide: "konkan-guide-things-to-see", desc: "Beaches, forts, temples and more" },
            { label: "How to plan a Konkan trip", guide: "konkan-guide-how-to-plan-a-trip", desc: "3, 5 and 7-day itineraries" },
            { label: "Malvani and Konkani food", guide: "konkan-guide-malvani-food", desc: "What to eat and where" },
            { label: "Konkan road-trip routes", guide: "konkan-guide-road-trip-routes", desc: "NH66 and coastal roads" },
            { label: "Best hotels in Konkan", guide: "best-hotels-in-konkan", desc: "The full guide" },
          ],
        },
      ],
    },

    {
      type: "faq",
      id: "faq",
      heading: "Best places in Konkan: questions",
      groups: [
        {
          items: [
            {
              q: "What are the best places to visit in Konkan?",
              a: "Popular choices are Alibaug, Kashid, Diveagar, Shrivardhan, Harihareshwar, Dapoli, Ganpatipule, Tarkarli and Vengurla. The best one depends on how far you want to drive and what you want to do. See [things to see in Konkan](guide:konkan-guide-things-to-see).",
              open: true,
            },
            {
              q: "Which is the best place in Konkan for a first trip?",
              a: "Diveagar, Shrivardhan and Alibaug are good first choices because they are the easiest to reach from Mumbai and have a range of stays. See [Diveagar hotels](guide:konkan-hotels-diveagar).",
            },
            {
              q: "Which Konkan place is best for couples?",
              a: "Quiet places such as Shrivardhan and Dapoli suit couples best, especially in a sea-view room. See [family and couple resorts](guide:konkan-best-hotels-family-couples).",
            },
            {
              q: "Which Konkan place is best for water sports?",
              a: "Tarkarli and Malvan are best known for snorkelling, scuba diving and boat rides, usually from around October to May. See [Tarkarli and Malvan](guide:konkan-hotels-tarkarli-malvan).",
            },
            {
              q: "Which Konkan places are good in monsoon?",
              a: "Inland areas, farm stays and green countryside are best. The sea is rough, so avoid beach activities, and check conditions first. See [monsoon stays](guide:konkan-guide-monsoon-stays).",
            },
            {
              q: "How many places can I cover in one trip?",
              a: "Aim for one base with a day trip. The coast is long, so adding more stops means a lot of driving. See [how to plan a Konkan trip](guide:konkan-guide-how-to-plan-a-trip).",
            },
          ],
        },
      ],
    },

    {
      type: "cta",
      heading: "Choose where to stay",
      text:
        "Message the property directly on WhatsApp. Prices are in INR and there are no booking fees.",
      button: { label: "See the best hotels in Konkan", guide: "best-hotels-in-konkan" },
    },
  ],
};

export default guide;