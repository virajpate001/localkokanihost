// src/content/seo-guides/konkan-guide-things-to-see.js
const guide = {
  slug: "konkan-guide-things-to-see",
  metaTitle: "Things to See in Konkan: Beaches, Forts, Temples and More",
  metaDescription:
    "What is there to see in Konkan? Beaches, sea forts, temples, dolphin trips, Malvani food and village life across Raigad, Ratnagiri and Sindhudurg, with tips on when to go and where to stay.",
  trail: [
    { name: "Things to See in Konkan" },
  ],
  hero: {
    h1: "Things to see in Konkan",
    lead:
      "Beaches, sea forts, temples, dolphin trips, fishing ports and some of India's best coastal food. Here is what to see along the Konkan coast, by type and by district.",
    buttons: [
      { label: "Top things to see", variant: "primary", href: "#explore" },
      { label: "By district", variant: "ghost", href: "#region" },
    ],
  },
  blocks: [
    {
      type: "answer",
      heading: "The short answer",
      md: `Konkan is best known for its beaches, sea forts such as Murud-Janjira and Sindhudurg, coastal temples at Harihareshwar and Ganpatipule, dolphin-watching near Dapoli, and Malvani food. Pick a district first, because the coast is about 720 km long.`,
    },

    {
      type: "placeGrid",
      id: "explore",
      heading: "Top things to see in Konkan",
      sub: "Filter by type and district. Each card links to the page for that area, where you can also find places to stay.",
      categoryLabel: "Type",
      districtLabel: "District",
      allCategoriesLabel: "All types",
      allDistrictsLabel: "All districts",
      cta: "Plan your visit",
      empty: "Nothing matches that combination. Try another type or district.",
      places: [
        { name: "Alibaug beaches and Kolaba fort", categories: "Beach",            district: "Raigad",     note: "Beaches close to Mumbai and a sea fort near the shore", href: "konkan-hotels-alibaug-kashid-murud" },
        { name: "Kashid beach",                    categories: "Beach",            district: "Raigad",     note: "A long stretch of pale sand",                           href: "konkan-hotels-alibaug-kashid-murud" },
        { name: "Murud-Janjira fort",              categories: "Fort",             district: "Raigad",     note: "A sea fort reached by boat",                            href: "konkan-hotels-alibaug-kashid-murud" },
        { name: "Diveagar beach and Ganesh temple", categories: "Beach",           district: "Raigad",     note: "A long, open beach and a well-known temple",            href: "konkan-hotels-diveagar" },
        { name: "Shrivardhan beach",               categories: "Beach",            district: "Raigad",     note: "A quieter beach with Peshwa connections",                href: "konkan-guide-shrivardhan-beach" },
        { name: "Harihareshwar temple and parikrama", categories: "Temple",        district: "Raigad",     note: "A Shiva temple and a scenic hill circuit",               href: "konkan-hotels-harihareshwar" },
        { name: "Dolphin-watching near Dapoli",    categories: "Nature",           district: "Ratnagiri",  note: "Boat trips from the Murud and Harnai coast",            href: "konkan-hotels-dapoli-harnai" },
        { name: "Suvarnadurg fort and Harnai port", categories: "Fort",            district: "Ratnagiri",  note: "A sea fort and a busy fishing port",                    href: "konkan-hotels-dapoli-harnai" },
        { name: "Anjarle Ganesh temple",           categories: "Temple",           district: "Ratnagiri",  note: "A quiet village temple on the coast",                    href: "konkan-hotels-dapoli-harnai" },
        { name: "Ganpatipule temple and beach",    categories: "Temple",           district: "Ratnagiri",  note: "A temple beside the sea",                                href: "konkan-hotels-ganpatipule" },
        { name: "Aare Ware coastal road",          categories: "Nature",           district: "Ratnagiri",  note: "A scenic stretch of road above the sea",                 href: "konkan-hotels-ganpatipule" },
        { name: "Sindhudurg fort",                 categories: "Fort",             district: "Sindhudurg", note: "A sea fort off Malvan",                                  href: "konkan-hotels-tarkarli-malvan" },
        { name: "Tarkarli beach and water sports", categories: "Beach",            district: "Sindhudurg", note: "Clear water, snorkelling and scuba in season",           href: "konkan-hotels-tarkarli-malvan" },
        { name: "Malvani food in Malvan",          categories: "Food and culture", district: "Sindhudurg", note: "Fish thali, sol kadhi and local snacks",                 href: "konkan-guide-malvani-food" },
        { name: "Vengurla and Nivti beaches",      categories: "Beach",            district: "Sindhudurg", note: "Quiet beaches near the Goa border",                     href: "konkan-hotels-vengurla-sindhudurg" },
        { name: "Farm and village stays",          categories: "Food and culture", district: "Ratnagiri",  note: "Orchard walks and home cooking around Dapoli",          href: "konkan-best-hotels-homestays" },
      ],
    },

    {
      type: "guide",
      id: "region",
      heading: "What to see in each district",
      toc: [],
      sections: [
        {
          id: "region-table",
          title: "Raigad, Ratnagiri and Sindhudurg",
          body: [
            `The Maharashtra Konkan coast is divided into three main districts from north to south. Each has a different character.

| District | Highlights | Character |
| --- | --- | --- |
| **Raigad (north)** | Alibaug, Kashid, Murud-Janjira, Diveagar, Shrivardhan, Harihareshwar | Closest to Mumbai; the widest choice of stays |
| **Ratnagiri (middle)** | Dapoli, Harnai, Anjarle, Ganpatipule, Ratnagiri | Quieter coast with forts, temples and farms |
| **Sindhudurg (south)** | Malvan, Tarkarli, Sindhudurg fort, Vengurla | Water sports, Malvani food and the Goa border |`,
          ],
        },
      ],
    },

    {
      type: "guide",
      id: "types",
      heading: "What to see by interest",
      toc: [
        { id: "beaches", label: "Beaches" },
        { id: "forts", label: "Forts" },
        { id: "temples", label: "Temples" },
        { id: "wildlife", label: "Wildlife and nature" },
        { id: "food", label: "Food and village life" },
      ],
      sections: [
        {
          id: "beaches",
          title: "Beaches",
          body: [
            `From the long open beach at [Diveagar](guide:konkan-hotels-diveagar) and the quiet shore at [Shrivardhan](guide:konkan-hotels-shrivardhan) to the clear water at [Tarkarli](guide:konkan-hotels-tarkarli-malvan). Compare them in [best beach hotels in Konkan](guide:konkan-best-hotels-beach).`,
          ],
        },
        {
          id: "forts",
          title: "Forts",
          body: [
            `Konkan has a strong tradition of sea forts. Well-known examples include Murud-Janjira in Raigad, Suvarnadurg near Harnai and Sindhudurg off Malvan. Many are reached by boat, so check timings and sea conditions.`,
          ],
        },
        {
          id: "temples",
          title: "Temples",
          body: [
            `The coast has many temples with sea views, including [Harihareshwar](guide:konkan-hotels-harihareshwar), [Ganpatipule](guide:konkan-hotels-ganpatipule) and the Ganesh temples at Diveagar and Anjarle. Dress modestly and check visiting hours.`,
          ],
        },
        {
          id: "wildlife",
          title: "Wildlife and nature",
          body: [
            `Dolphin-watching trips run from the [Dapoli and Murud-Harnai](guide:konkan-hotels-dapoli-harnai) coast in season, and inland areas such as the hills around Amboli are popular in the monsoon. Sightings are never guaranteed.`,
          ],
        },
        {
          id: "food",
          title: "Food and village life",
          body: [
            `Fish thali, sol kadhi and Malvani snacks, plus farm and homestay visits. See [Malvani and Konkani food](guide:konkan-guide-malvani-food) and [homestays and agro-tourism](guide:konkan-best-hotels-homestays).`,
          ],
        },
      ],
    },

    {
      type: "seasonBar",
      id: "when",
      heading: "When to go",
      sub:
        "October to February is the best time for most sights: dry weather, calm seas and boat trips running. March to May is hot. June to September is monsoon, when many boat trips and water activities stop, although inland hills and waterfalls are at their greenest.",
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
        "See [best time to visit Konkan](guide:konkan-guide-best-time-to-visit) and [is Konkan open for tourism](guide:konkan-guide-is-konkan-open-for-tourism).",
    },

    {
      type: "clusters",
      id: "plan",
      heading: "Turning a list into a trip",
      sub:
        "Konkan is spread out, so trying to see everything in one trip means long drives. A good rule is to choose one area, base yourself there for two or three nights and add a day trip.",
      clusters: [
        {
          heading: "Plan the trip",
          desc: "",
          links: [
            { label: "Best places to visit", guide: "konkan-guide-best-places-to-visit", desc: "Which destinations to choose" },
            { label: "How to plan a Konkan trip", guide: "konkan-guide-how-to-plan-a-trip", desc: "3, 5 and 7-day itineraries" },
            { label: "Distance from Mumbai", guide: "konkan-guide-distance-from-mumbai", desc: "By road, by destination" },
            { label: "Weekend getaways", guide: "konkan-guide-weekend-getaways", desc: "From Mumbai and Pune" },
            { label: "Best hotels in Konkan", guide: "best-hotels-in-konkan", desc: "Where to stay" },
          ],
        },
      ],
    },

    {
      type: "faq",
      id: "faq",
      heading: "Things to see in Konkan: questions",
      groups: [
        {
          items: [
            {
              q: "What is there to see in Konkan?",
              a: "Konkan offers beaches, sea forts such as Murud-Janjira and Sindhudurg, coastal temples at Harihareshwar and Ganpatipule, dolphin-watching near Dapoli, fishing ports, farms and Malvani food. See [best places to visit](guide:konkan-guide-best-places-to-visit).",
              open: true,
            },
            {
              q: "Which is the best fort to see in Konkan?",
              a: "Murud-Janjira in Raigad and Sindhudurg off Malvan are among the best known. Many forts are reached by boat, so check timings and sea conditions. See [Tarkarli and Malvan](guide:konkan-hotels-tarkarli-malvan).",
            },
            {
              q: "How many days do I need to see Konkan?",
              a: "The coast is about 720 km long, so choose one area for a two-to-three-day trip. Seeing the whole coast takes a week or more. See [how to plan a Konkan trip](guide:konkan-guide-how-to-plan-a-trip).",
            },
            {
              q: "What can I see in Konkan during monsoon?",
              a: "The countryside, hills and waterfalls are at their greenest, but boat trips and many water activities stop and beaches are rough. Check conditions before you go. See [is Konkan open for tourism](guide:konkan-guide-is-konkan-open-for-tourism).",
            },
            {
              q: "What should I eat in Konkan?",
              a: "Try Malvani fish thali, sol kadhi, bhakri and seasonal local dishes. Many homestays serve home-cooked meals. See [Malvani and Konkani food](guide:konkan-guide-malvani-food).",
            },
            {
              q: "Where should I stay to see the most?",
              a: "Choose a base in one area and add day trips. Compare areas on our [best hotels in Konkan](guide:best-hotels-in-konkan) page.",
            },
          ],
        },
      ],
    },

    {
      type: "cta",
      heading: "Find a place to stay",
      text:
        "Message the property directly on WhatsApp. Prices are in INR and there are no booking fees.",
      button: { label: "See the best hotels in Konkan", guide: "best-hotels-in-konkan" },
    },
  ],
};

export default guide;