// src/content/seo-guides/konkan-guide-weekend-getaways.js
const guide = {
  slug: "konkan-guide-weekend-getaways",
  metaTitle: "Konkan Weekend Getaways from Mumbai and Pune: Where to Go and How to Plan",
  metaDescription:
    "The best Konkan weekend getaways from Mumbai and Pune, matched to your drive time and trip length: Alibaug, Kashid, Diveagar, Shrivardhan, Harihareshwar and more, with traffic tips and sample plans.",
  trail: [
    { name: "Weekend Getaways" },
  ],
  hero: {
    h1: "Konkan weekend getaways from Mumbai and Pune",
    lead:
      "Konkan is long, but a few beaches are close enough for a real weekend. Tell us where you are starting and how long you have, and we will show what fits.",
    buttons: [
      { label: "Find your getaway", variant: "primary", href: "#finder" },
      { label: "Sample plans", variant: "ghost", href: "#plans" },
    ],
  },
  blocks: [
    {
      type: "answer",
      heading: "The short answer",
      md: `From Mumbai, Alibaug and Kashid suit a one-night trip, and Diveagar, Shrivardhan and Harihareshwar suit two nights. From Pune, Diveagar, Shrivardhan and Harihareshwar are the closest, reached through Tamhini Ghat. Leave early, and book winter weekends well ahead.`,
    },

    {
      type: "weekendFinder",
      id: "finder",
      heading: "Find your weekend getaway",
      fromLabel: "Starting from",
      lengthLabel: "Trip length",
      vibeLabel: "Vibe",
      allVibesLabel: "Any vibe",
      origins: ["Mumbai", "Pune"],
      defaultLengthIdx: 1,
      tripLengths: [
        { label: "One night",               maxHours: 3.5 },
        { label: "Two nights (Fri to Sun)", maxHours: 5.5 },
        { label: "Long weekend (3 nights)", maxHours: 8 },
      ],
      cta: "Hotels and plans",
      empty: "Nothing fits that combination. Try a longer trip or a different vibe.",
      emptyPune:
        "Nothing fits that combination. Try a longer trip or a different vibe, or choose Mumbai as the start. Pune is far from most of the coast.",
      legend:
        "We match the longest one-way drive to your trip length: about 3.5 hours for one night, 5.5 hours for two nights and 8 hours for a long weekend. Drive times are estimates.",
      destinations: [
        {
          name: "Alibaug",
          vibes: ["Beaches", "History"],
          fromMumbai: { hoursLow: 2, hoursHigh: 3 },   kmMumbai: "About 95–110 km",
          fromPune: null, kmPune: null,
          slug: "konkan-hotels-alibaug-kashid-murud",
          note: "The closest beach town, with the widest choice of stays",
        },
        {
          name: "Kashid",
          vibes: ["Beaches"],
          fromMumbai: { hoursLow: 2.5, hoursHigh: 3.5 }, kmMumbai: "About 125–135 km",
          fromPune: null, kmPune: null,
          slug: "konkan-hotels-alibaug-kashid-murud",
          note: "A long stretch of pale sand",
        },
        {
          name: "Murud-Janjira",
          vibes: ["History", "Beaches"],
          fromMumbai: { hoursLow: 3.5, hoursHigh: 4.5 }, kmMumbai: "About 150–170 km",
          fromPune: null, kmPune: null,
          slug: "konkan-hotels-alibaug-kashid-murud",
          note: "A sea fort reached by boat, plus quiet beaches",
        },
        {
          name: "Diveagar",
          vibes: ["Beaches", "Temples"],
          fromMumbai: { hoursLow: 4, hoursHigh: 5.5 },   kmMumbai: "About 170–190 km",
          fromPune: { hoursLow: 4, hoursHigh: 5.5 },     kmPune: "About 157–170 km",
          slug: "konkan-hotels-diveagar",
          note: "A long, open beach and a well-known Ganesh temple",
        },
        {
          name: "Shrivardhan",
          vibes: ["Quiet", "Beaches"],
          fromMumbai: { hoursLow: 4, hoursHigh: 5.5 },   kmMumbai: "About 175–200 km",
          fromPune: { hoursLow: 4, hoursHigh: 5.5 },     kmPune: "About 157–175 km",
          slug: "konkan-hotels-shrivardhan",
          note: "A quieter beach with Peshwa connections",
        },
        {
          name: "Harihareshwar",
          vibes: ["Temples", "Quiet"],
          fromMumbai: { hoursLow: 4.5, hoursHigh: 5.5 }, kmMumbai: "About 185–205 km",
          fromPune: { hoursLow: 4.5, hoursHigh: 5.5 },   kmPune: "About 190 km",
          slug: "konkan-hotels-harihareshwar",
          note: "A Shiva temple town with a rocky coast",
        },
        {
          name: "Dapoli",
          vibes: ["Quiet", "Beaches"],
          fromMumbai: { hoursLow: 5, hoursHigh: 6 },     kmMumbai: "About 215–230 km",
          fromPune: null, kmPune: null,
          slug: "konkan-hotels-dapoli-harnai",
          note: "Quiet beaches, forts and farm stays",
        },
        {
          name: "Ganpatipule",
          vibes: ["Temples", "Beaches"],
          fromMumbai: { hoursLow: 6.5, hoursHigh: 8 },   kmMumbai: "About 340–375 km",
          fromPune: { hoursLow: 7, hoursHigh: 8 },       kmPune: "About 330 km",
          slug: "konkan-hotels-ganpatipule",
          note: "A temple beside the sea",
        },
      ],
    },

    {
      type: "guide",
      id: "plans",
      heading: "Sample weekend plans",
      toc: [],
      sections: [
        {
          id: "plans-table",
          title: "What a weekend looks like",
          body: [
            `| Trip | Plan | Good choices |
| --- | --- | --- |
| **One night from Mumbai** | Leave early Saturday, enjoy the afternoon and sunset, then a relaxed Sunday morning before heading back. | Alibaug, Kashid |
| **Two nights (Friday to Sunday)** | Leave Friday night or early Saturday. Spend Saturday on the beach and Sunday on a nearby temple or fort, then drive home by mid-afternoon. | Diveagar, Shrivardhan, Harihareshwar |
| **Long weekend (three nights)** | Combine two nearby places, such as Shrivardhan and Harihareshwar, or go further to Dapoli or Ganpatipule. | Dapoli, Ganpatipule |
| **From Pune** | Drive through Tamhini Ghat to the Raigad coast, which is the shortest route for Pune. | Diveagar, Shrivardhan, Harihareshwar |`,
          ],
        },
      ],
    },

    {
      type: "guide",
      id: "traffic",
      heading: "Beat the weekend traffic",
      toc: [],
      sections: [
        {
          id: "traffic-list",
          title: "Five things that make the drive easier",
          body: [
            `- **Leave early.** Starting before 6 am on Saturday, or on Friday night, avoids the worst highway queues.
- **Come back early.** Sunday-evening traffic back to Mumbai and Pune is heavy, so leave by mid-afternoon if you can.
- **Check the route.** Roadworks and monsoon rain can change journey times a lot.
- **From Pune:** the road through Tamhini Ghat is scenic, but ghat roads can be risky in heavy rain, so check conditions first.
- **Ferries:** the ferry to the Alibaug coast can save time, but services usually stop in monsoon. See [is Konkan open for tourism](guide:konkan-guide-is-konkan-open-for-tourism).`,
          ],
        },
      ],
    },

    {
      type: "clusters",
      id: "book",
      heading: "Choose the right kind of stay",
      sub:
        "Weekend rooms go first, so book one to two months ahead for winter and festival weekends. Full details are in how to plan a Konkan trip.",
      clusters: [
        {
          heading: "Stay types",
          desc: "",
          links: [
            { label: "Best beach hotels", guide: "konkan-best-hotels-beach", desc: "On the sand or a short walk away" },
            { label: "Luxury and 5-star resorts", guide: "konkan-best-hotels-luxury", desc: "Pools, spas, villas" },
            { label: "Family and couple resorts", guide: "konkan-best-hotels-family-couples", desc: "Activities, privacy and quiet" },
            { label: "Budget hotels", guide: "konkan-best-hotels-budget", desc: "Simple stays near the beach" },
            { label: "Alibaug, Kashid and Murud", guide: "konkan-hotels-alibaug-kashid-murud", desc: "Closest to Mumbai" },
            { label: "Diveagar", guide: "konkan-hotels-diveagar", desc: "The classic two-night trip" },
          ],
        },
      ],
    },

    {
      type: "seasonBar",
      id: "season",
      heading: "When weekend trips work best",
      sub:
        "October to February is the best time, but it is also the busiest. March to May is hot and quieter. In the monsoon (June to September), boat trips and water sports stop and the sea is rough, so choose inland or farm stays and keep plans flexible.",
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
      id: "more",
      heading: "Keep planning",
      sub: "",
      clusters: [
        {
          heading: "More guides",
          desc: "",
          links: [
            { label: "Distance from Mumbai", guide: "konkan-guide-distance-from-mumbai", desc: "By road, by destination" },
            { label: "Best places to visit", guide: "konkan-guide-best-places-to-visit", desc: "Choose by time and interest" },
            { label: "Konkan road-trip routes", guide: "konkan-guide-road-trip-routes", desc: "NH66 and coastal roads" },
            { label: "Best hotels in Konkan", guide: "best-hotels-in-konkan", desc: "The full guide" },
          ],
        },
      ],
    },

    {
      type: "faq",
      id: "faq",
      heading: "Weekend trip questions",
      groups: [
        {
          items: [
            { q: "Which Konkan beach is best for a weekend from Mumbai?",
              a: "Alibaug and Kashid are closest for a short trip. Diveagar and Shrivardhan suit a two-night weekend, and Harihareshwar adds a temple. See [Diveagar hotels](guide:konkan-hotels-diveagar).",
              open: true },
            { q: "Which Konkan beach is closest to Pune?",
              a: "Diveagar, Shrivardhan and Harihareshwar on the Raigad coast are the closest, about 157–190 km away through Tamhini Ghat. See [Shrivardhan hotels](guide:konkan-hotels-shrivardhan)." },
            { q: "Can I do Konkan in two days?",
              a: "Yes, if you choose a nearby destination such as Alibaug, Diveagar or Shrivardhan. Further places such as Ganpatipule and Tarkarli need three or more days. See [how to plan a Konkan trip](guide:konkan-guide-how-to-plan-a-trip)." },
            { q: "How early should I book a weekend stay?",
              a: "One to two months ahead for winter and festival weekends, and a few weeks ahead for other weekends. See [how to choose a Konkan hotel](guide:konkan-guide-how-to-choose-a-hotel)." },
            { q: "How do I avoid weekend traffic?",
              a: "Leave before 6 am on Saturday or on Friday night, and head home by mid-afternoon on Sunday. See [distance from Mumbai](guide:konkan-guide-distance-from-mumbai)." },
            { q: "Are weekend trips to Konkan possible in monsoon?",
              a: "Yes, but boat trips and water sports usually stop and the sea is rough. Choose inland or farm stays and check conditions first. See [is Konkan open for tourism](guide:konkan-guide-is-konkan-open-for-tourism)." },
          ],
        },
      ],
    },

    {
      type: "cta",
      heading: "Book your weekend stay",
      text:
        "Message the property directly on WhatsApp. Prices are in INR and there are no booking fees.",
      button: { label: "See the best hotels in Konkan", guide: "best-hotels-in-konkan" },
    },
  ],
};

export default guide;