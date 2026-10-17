// src/content/seo-guides/diveagar-3-day-itinerary.js
const guide = {
  slug: "diveagar-3-day-itinerary",
  metaTitle: "3-Day Diveagar Itinerary: Beach, Temple & Nearby Towns",
  metaDescription:
    "A good 3-day Diveagar itinerary: beach, temple and a nearby coastal town. Build your own plan and check whether a day trip to a nearby town is worth the drive.",
  trail: [
    { name: "Diveagar Travel Guide", slug: "diveagar-travel-guide" },
    { name: "3-Day Diveagar Itinerary" },
  ],
  hero: {
    h1: "3-day Diveagar itinerary",
    lead: "Three days gives you room to enjoy Diveagar slowly and add a nearby coastal town. Use the standard plan, build your own, and check whether a day trip to a nearby town is worth the drive.",
    buttons: [
      { label: "Build my 3-day plan", variant: "primary", href: "#builder" },
      { label: "Check a nearby town", variant: "ghost", href: "#near" },
    ],
  },
  blocks: [
    {
      type: "answer",
      heading: "The short answer",
      md: `A good 3-day plan keeps Day 1 for arriving and the beach, uses Day 2 for a nearby coastal town such as Shrivardhan or Harihareshwar, and leaves Day 3 for the temple and a calm departure. Whether a nearby town is worth it depends on how far it is from your hotel, so check the travel time first.

Confirm distances, temple hours and sea conditions locally before you go.`,
    },

    {
      type: "dayOutline",
      id: "outline",
      heading: "The standard 3-day plan",
      days: [
        {
          title: "Day 1: Arrive and settle in",
          items: [
            {
              label: "Morning or afternoon",
              md: "Travel and check in. See [how to reach Diveagar](guide:how-to-reach-diveagar).",
            },
            {
              label: "Evening",
              md: "A beach walk and dinner at your stay. See [where to eat](guide:diveagar-food-hotels-restaurants).",
            },
          ],
        },
        {
          title: "Day 2: A nearby coastal town",
          items: [
            {
              label: "Morning",
              md: "Head to Shrivardhan or Harihareshwar, after confirming the distance and travel time. Compare [Diveagar vs Shrivardhan](guide:diveagar-vs-shrivardhan) and [Diveagar vs Harihareshwar](guide:diveagar-vs-harihareshwar).",
            },
            {
              label: "Afternoon",
              md: "Lunch there and some time to explore, then return.",
            },
            {
              label: "Evening",
              md: "Back at the beach in Diveagar for sunset and dinner.",
            },
          ],
        },
        {
          title: "Day 3: Temple and departure",
          items: [
            {
              label: "Morning",
              md: "Visit the Suvarna Ganesh Temple, after confirming its hours. See [what Diveagar is famous for](guide:what-is-diveagar-famous-for).",
            },
            { label: "Afternoon", md: "Lunch, check out and head home." },
          ],
        },
      ],
    },

    {
      type: "nearbyChecker",
      id: "near",
      heading: "Is a nearby town worth the drive?",
      sub: "Look up the one-way travel time from your hotel in a map app, then enter it. We will show how much time you would have there on a full day out.",
      inputLabel: "One-way travel time from your hotel (hours)",
      inputPlaceholder: "from a map app",
      hintEmpty: "Enter the travel time to see how long you would have there.",
      verdicts: {
        ok: "Worth a day trip.",
        mid: "Possible, but a short visit.",
        low: "Probably not worth it as a day trip. Consider a nearer plan.",
      },
      roundTripText:
        "Round trip about {roundTrip}, leaving about {there} at {name} on a day of about {dayHours} hours.",
      settings: {
        dayHours: 9,
        good: 5,
        short: 3,
      },
      fine: "Rule of thumb for a day out from about 9 am to 6 pm. Traffic and road conditions change.",
      towns: [
        {
          id: "n1",
          name: "Shrivardhan",
          hours: null,
          slug: "diveagar-vs-shrivardhan",
          link: "Diveagar vs Shrivardhan",
        },
        {
          id: "n2",
          name: "Harihareshwar",
          hours: null,
          slug: "diveagar-vs-harihareshwar",
          link: "Diveagar vs Harihareshwar",
        },
      ],
    },

    {
      type: "itineraryBuilder",
      id: "builder",
      heading: "Build your own 3-day plan",
      sub: "Choose how you are travelling. The plan updates as you go.",
      days: 3,
      arriveLabel: "When do you arrive on Day 1?",
      arriveOptions: [
        { value: "morning", label: "Morning" },
        { value: "afternoon", label: "Afternoon" },
        { value: "evening", label: "Evening" },
      ],
      departLabel: "When do you leave on Day 3?",
      departOptions: [
        { value: "morning", label: "Morning" },
        { value: "afternoon", label: "Afternoon" },
        { value: "evening", label: "Evening" },
      ],
      paceLabel: "Pace",
      paceOptions: [
        { value: "relaxed", label: "Relaxed" },
        { value: "balanced", label: "Balanced" },
      ],
      groupLabel: "Who is travelling?",
      groupOptions: [
        { value: "couple", label: "Couple" },
        { value: "family", label: "Family with children" },
        { value: "friends", label: "Friends" },
      ],
      defaults: {
        arrive: "afternoon",
        depart: "afternoon",
        pace: "relaxed",
        group: "couple",
      },
      extrasLegend: "What do you want to fit in?",
      activityOrder: ["n1", "n2", "temple", "beach", "pool", "food"],
      activities: {
        n1: {
          label: "Day out to Shrivardhan",
          detail:
            "Confirm the distance and travel time first, and start early.",
          slug: "diveagar-vs-shrivardhan",
          link: "Diveagar vs Shrivardhan",
          prefer: ["d2m", "d2a"],
          default: true,
          nearby: true,
        },
        n2: {
          label: "Day out to Harihareshwar",
          detail:
            "Confirm the distance and travel time first, and start early.",
          slug: "diveagar-vs-harihareshwar",
          link: "Diveagar vs Harihareshwar",
          prefer: ["d2a", "d2m"],
          default: false,
          nearby: true,
        },
        temple: {
          label: "Visit the Suvarna Ganesh Temple",
          detail: "Confirm opening hours and any dress rules before you go.",
          slug: "what-is-diveagar-famous-for",
          link: "what Diveagar is famous for",
          prefer: ["d3m", "d1a", "d2m"],
          default: true,
        },
        beach: {
          label: "Beach time",
          detail:
            "A walk or sit by the sea. Ask your hotel what is safe on your dates.",
          slug: "diveagar-beach-things-to-do",
          link: "things to do at Diveagar Beach",
          prefer: ["d1e", "d2e", "d3m", "d3e"],
          default: true,
        },
        pool: {
          label: "Pool time",
          detail: "Only if your stay has a pool. Confirm it is open.",
          slug: "diveagar-hotels-with-swimming-pool",
          link: "hotels with a pool",
          prefer: ["d1a", "d3a", "d2a"],
          default: false,
        },
        food: {
          label: "A relaxed local meal",
          detail:
            "Ask your hotel what local dishes it serves, and whether they need notice.",
          slug: "diveagar-food-hotels-restaurants",
          link: "where to eat",
          prefer: ["d2e", "d1e", "d3a"],
          default: false,
        },
      },
      groupNotes: {
        family:
          "With children, keep long drives short, plan breaks, and keep them within reach near the water.",
        couple:
          "For a couple, the beach is usually nicest in the early morning and at sunset. Check conditions with your hotel.",
        friends:
          "For a group, agree meal times and the departure time for the day out with your hotel in advance.",
      },
      freeTimeText: "Free time. Rest at your stay or stay longer on the beach.",
      copyLabel: "Copy my itinerary",
    },

    {
      type: "guide",
      heading: "Making 3 days work",
      toc: [
        { id: "stay", label: "Where to stay" },
        { id: "tips", label: "Tips" },
        { id: "compare", label: "Compare nearby towns" },
      ],
      sections: [
        {
          id: "stay",
          title: "Where to stay for 3 days",
          body: [
            `With three days you can enjoy your stay as well as visit it. A [stay near the beach](guide:hotels-near-diveagar-beach) keeps evenings easy, and a [resort or villa](guide:luxury-hotels-resorts-diveagar) suits a slower trip. Families can compare [family-friendly hotels](guide:family-friendly-hotels-diveagar). Then see [how to book](guide:how-to-book-diveagar-hotels).`,
          ],
        },
        {
          id: "tips",
          title: "Tips for a 3-day trip",
          body: [
            `- Put the nearby-town day in the middle, so you are not rushing on your arrival or departure day.
- Check the distance first. Use the checker above rather than assuming.
- Tell your hotel your plans so meals and early starts are arranged. See [where to eat in Diveagar](guide:diveagar-food-hotels-restaurants).
- Choose the right season. See the [best time to visit Diveagar](guide:best-time-to-visit-diveagar).
- Short on time? See the [2-day itinerary](guide:diveagar-2-day-itinerary) or the [2-day trip from Pune](guide:diveagar-2-day-trip-from-pune).`,
          ],
        },
        {
          id: "compare",
          title: "Compare nearby towns first",
          body: [
            `Deciding between destinations rather than combining them? Read [Diveagar vs Shrivardhan](guide:diveagar-vs-shrivardhan), [Diveagar vs Harihareshwar](guide:diveagar-vs-harihareshwar), or [all the Konkan beaches compared](guide:best-konkan-beaches-compared).`,
          ],
        },
      ],
    },

    {
      type: "faq",
      id: "faq",
      heading: "3 days in Diveagar: your questions answered",
      groups: [
        {
          items: [
            {
              q: "What is a good 3-day itinerary for Diveagar?",
              a: "Spend Day 1 arriving and enjoying the beach, Day 2 on a nearby coastal town, and Day 3 on the temple and a calm departure. Use the builder above to fit it to your arrival time and pace.",
              open: true,
            },
            {
              q: "Is 3 days enough for Diveagar?",
              a: "Yes, three days is enough for the main highlights and one nearby town at a relaxed pace.",
            },
            {
              q: "Can I visit Shrivardhan and Harihareshwar in 3 days?",
              a: "It depends on the distances from your hotel. Enter the travel times in the checker above. Compare [Diveagar vs Shrivardhan](guide:diveagar-vs-shrivardhan) and [Diveagar vs Harihareshwar](guide:diveagar-vs-harihareshwar).",
            },
            {
              q: "How do I know if a nearby town is worth the drive?",
              a: "Look up the one-way travel time, then use the checker above to see how much time you would have there. If it leaves very little time, choose a nearer plan or a different day.",
            },
            {
              q: "Where should I stay for a 3-day trip?",
              a: "A stay you enjoy spending time in. See [best hotels in Diveagar](guide:best-hotels-in-diveagar) and [hotels near Diveagar Beach](guide:hotels-near-diveagar-beach).",
            },
            {
              q: "What is the best time for a 3-day trip?",
              a: "The cooler months are generally the most comfortable. See the [best time to visit Diveagar](guide:best-time-to-visit-diveagar).",
            },
            {
              q: "How do I book a stay for 3 days?",
              a: "Message the property on WhatsApp, confirm what is included and the cancellation terms, and pay as agreed. See [how to book Diveagar hotels](guide:how-to-book-diveagar-hotels).",
            },
          ],
        },
      ],
    },

    {
      type: "cta",
      heading: "Ready to choose a stay?",
      text: "Compare hotels, resorts and villas in Diveagar, then message the property directly on WhatsApp.",
      button: {
        label: "Browse hotels in Diveagar",
        guide: "best-hotels-in-diveagar",
      },
    },

     {
      type: "plan",
      id: "plan",
      heading: "Plan your Diveagar trip",
      sub: "Everything you need around your hotel booking.",
      columns: [
        {
          heading: "More places to stay",
          links: [
            {
              label: "Hotels near Diveagar Beach",
              guide: "hotels-near-diveagar-beach",
            },
            {
              label: "Luxury hotels and resorts",
              guide: "luxury-hotels-resorts-diveagar",
            },
            {
              label: "Hotels with a swimming pool",
              guide: "diveagar-hotels-with-swimming-pool",
            },
            {
              label: "Family-friendly hotels",
              guide: "family-friendly-hotels-diveagar",
            },
            {
              label: "Turtle-related stays",
              guide: "diveagar-turtle-resort-stays",
            },
          ],
        },
        {
          heading: "Before you go",
          links: [
            {
              label: "Is Diveagar worth visiting?",
              guide: "is-diveagar-worth-visiting",
            },
            {
              label: "What Diveagar is famous for",
              guide: "what-is-diveagar-famous-for",
            },
            {
              label: "Best time to visit",
              guide: "best-time-to-visit-diveagar",
            },
            {
              label: "How to reach Diveagar",
              guide: "how-to-reach-diveagar",
            },
            {
              label: "Where to eat",
              guide: "diveagar-food-hotels-restaurants",
            },
          ],
        },
        {
          heading: "Itineraries",
          links: [
            {
              label: "2-day itinerary",
              guide: "diveagar-2-day-itinerary",
            },
            {
              label: "2-day trip from Pune",
              guide: "diveagar-2-day-trip-from-pune",
            },
            {
              label: "3-day itinerary",
              guide: "diveagar-3-day-itinerary",
            },
            {
              label: "Tour packages",
              guide: "diveagar-tour-packages",
            },
            {
              label: "Things to do at the beach",
              guide: "diveagar-beach-things-to-do",
            },
          ],
        },
        {
          heading: "Compare destinations",
          links: [
            {
              label: "Diveagar vs Shrivardhan",
              guide: "diveagar-vs-shrivardhan",
            },
            {
              label: "Diveagar vs Alibaug",
              guide: "diveagar-vs-alibaug",
            },
            {
              label: "Diveagar vs Dapoli",
              guide: "diveagar-vs-dapoli",
            },
            {
              label: "Diveagar vs Harihareshwar",
              guide: "diveagar-vs-harihareshwar",
            },
            {
              label: "Best Konkan beaches compared",
              guide: "best-konkan-beaches-compared",
            },
          ],
        },
      ],
      footer: "[Back to the full Diveagar travel guide](guide:diveagar-travel-guide)",
    },
  ],
};

export default guide;
