// src/content/seo-guides/diveagar-2-day-itinerary.js
const guide = {
  slug: "diveagar-2-day-itinerary",
  metaTitle: "2-Day Diveagar Itinerary: A Relaxed Weekend Plan",
  metaDescription:
    "A relaxed 2-day Diveagar itinerary, plus a planner that shapes your days around your arrival time, pace and interests.",
  trail: [
    { name: "Diveagar Travel Guide", slug: "diveagar-travel-guide" },
    { name: "2-Day Diveagar Itinerary" },
  ],
  hero: {
    h1: "2-day Diveagar itinerary",
    lead: "A relaxed two-day plan for a first visit, plus a planner that reshapes it around your arrival time, pace and interests. Travel times vary, so the plan is organised by morning, afternoon and evening rather than by the clock.",
    buttons: [
      { label: "Build my itinerary", variant: "primary", href: "#builder" },
      { label: "See the standard plan", variant: "ghost", href: "#outline" },
    ],
  },
  blocks: [
    {
      type: "answer",
      heading: "The short answer",
      md: `On a 2-day trip to Diveagar, spend your time on the beach, a visit to the Suvarna Ganesh Temple, and unhurried meals, with the first day shaped by when you arrive. Two days is enough for the main highlights at a relaxed pace, but not for adding other towns.

Confirm temple hours, sea conditions and distances locally before you go. If you want to add nearby towns, see the [3-day itinerary](guide:diveagar-3-day-itinerary).`,
    },

    {
      type: "dayOutline",
      id: "outline",
      heading: "The standard 2-day plan",
      days: [
        {
          title: "Day 1: Arrive and settle in",
          items: [
            {
              label: "Morning or afternoon",
              md: "Travel to Diveagar and check in. Ask your hotel for a map pin and check-in time. See [how to reach Diveagar](guide:how-to-reach-diveagar).",
            },
            {
              label: "Afternoon",
              md: "Lunch and some rest, or time at the pool if your stay has one.",
            },
            {
              label: "Evening",
              md: "A walk on the beach, then dinner at your stay. See [where to eat in Diveagar](guide:diveagar-food-hotels-restaurants).",
            },
          ],
        },
        {
          title: "Day 2: Temple, beach and departure",
          items: [
            {
              label: "Morning",
              md: "Visit the Suvarna Ganesh Temple, after confirming its hours. See [what Diveagar is famous for](guide:what-is-diveagar-famous-for).",
            },
            {
              label: "Afternoon",
              md: "Lunch, then free time on the beach or by the pool. See [things to do at Diveagar Beach](guide:diveagar-beach-things-to-do).",
            },
            {
              label: "Evening",
              md: "Check out and head home, leaving enough time for the journey.",
            },
          ],
        },
      ],
    },

    {
      type: "itineraryBuilder",
      id: "builder",
      heading: "Build your own 2-day plan",
      sub: "Choose how you are travelling. The plan updates as you go.",
      arriveLabel: "When do you arrive on Day 1?",
      arriveOptions: [
        { value: "morning", label: "Morning" },
        { value: "afternoon", label: "Afternoon" },
        { value: "evening", label: "Evening" },
      ],
      departLabel: "When do you leave on Day 2?",
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
        depart: "evening",
        pace: "relaxed",
        group: "couple",
      },
      extrasLegend: "What do you want to fit in?",
      activityOrder: ["beach", "temple", "pool", "food", "nearby"],
      activities: {
        beach: {
          label: "Beach time",
          detail:
            "A walk or sit by the sea. Ask your hotel what is safe on your dates.",
          slug: "diveagar-beach-things-to-do",
          link: "things to do at Diveagar Beach",
          prefer: ["d1e", "d2m", "d2e", "d1a"],
          default: true,
        },
        temple: {
          label: "Visit the Suvarna Ganesh Temple",
          detail: "Confirm opening hours and any dress rules before you go.",
          slug: "what-is-diveagar-famous-for",
          link: "what Diveagar is famous for",
          prefer: ["d2m", "d1m", "d1a"],
          default: true,
        },
        pool: {
          label: "Pool time",
          detail: "Only if your stay has a pool. Confirm it is open.",
          slug: "diveagar-hotels-with-swimming-pool",
          link: "hotels with a pool",
          prefer: ["d1a", "d2a", "d1e"],
          default: false,
        },
        food: {
          label: "A relaxed local meal",
          detail:
            "Ask your hotel what local dishes it serves, and whether they need notice.",
          slug: "diveagar-food-hotels-restaurants",
          link: "where to eat",
          prefer: ["d1e", "d2a", "d2e"],
          default: false,
        },
        nearby: {
          label: "A nearby coastal town",
          detail:
            "Confirm the distance and travel time first. This works best with an early start.",
          slug: "diveagar-3-day-itinerary",
          link: "the 3-day itinerary",
          prefer: ["d2m", "d2a"],
          default: false,
        },
      },
      groupNotes: {
        family:
          "With children, keep them within reach near the water, and ask your hotel about children's meals and nap-friendly timings.",
        couple:
          "For a couple, the beach is usually nicest in the early morning and at sunset. Check conditions with your hotel.",
        friends:
          "For a group, agree meal times with the hotel in advance so the kitchen can plan.",
      },
      freeTimeText: "Free time. Rest at your stay or stay longer on the beach.",
      copyLabel: "Copy my itinerary",
    },

    {
      type: "guide",
      heading: "Making a 2-day trip work",
      toc: [
        { id: "stay", label: "Where to stay" },
        { id: "tips", label: "Tips" },
        { id: "more", label: "If you have longer" },
      ],
      sections: [
        {
          id: "stay",
          title: "Where to stay for 2 days",
          body: [
            `With only two days, a stay close to the beach saves time. See [hotels near Diveagar Beach](guide:hotels-near-diveagar-beach). In hot months, a [hotel with a swimming pool](guide:diveagar-hotels-with-swimming-pool) helps, and families can compare [family-friendly hotels](guide:family-friendly-hotels-diveagar). Then see [how to book](guide:how-to-book-diveagar-hotels).`,
          ],
        },
        {
          id: "tips",
          title: "Tips for a short trip",
          body: [
            `- Plan the journey first. A long journey can use up much of a short trip. Read [how to reach Diveagar](guide:how-to-reach-diveagar).
- Choose your dates well. See the [best time to visit Diveagar](guide:best-time-to-visit-diveagar).
- Do not over-plan. This is a place for slowing down.
- Tell your hotel your arrival and departure times so meals and check-out are smooth.`,
          ],
        },
        {
          id: "more",
          title: "If you have longer",
          body: [
            `With a third day you can add nearby coastal towns. See the [3-day itinerary](guide:diveagar-3-day-itinerary). Coming from Pune with limited time? Read the [2-day trip from Pune](guide:diveagar-2-day-trip-from-pune). Not sure Diveagar is for you? See [whether it is worth visiting](guide:is-diveagar-worth-visiting).`,
          ],
        },
      ],
    },

    {
      type: "faq",
      id: "faq",
      heading: "2 days in Diveagar: your questions answered",
      groups: [
        {
          items: [
            {
              q: "What should I do on a 2-day trip to Diveagar?",
              a: "Spend time on the beach, visit the Suvarna Ganesh Temple after confirming its hours, and enjoy relaxed meals. Use the builder above to shape the plan around your arrival time and pace.",
              open: true,
            },
            {
              q: "Is 2 days enough for Diveagar?",
              a: "Two days is enough for the main highlights at a relaxed pace. If you want to add nearby towns, plan three days. See the [3-day itinerary](guide:diveagar-3-day-itinerary).",
            },
            {
              q: "Can I visit other towns in 2 days?",
              a: "It is possible with an early start, but it makes the trip rushed. Confirm distances and travel times first, or choose the [3-day itinerary](guide:diveagar-3-day-itinerary).",
            },
            {
              q: "Is a 2-day trip to Diveagar from Pune suitable?",
              a: "It can work if you plan the travel time. See [a 2-day trip to Diveagar from Pune](guide:diveagar-2-day-trip-from-pune).",
            },
            {
              q: "Where should I stay on a 2-day trip?",
              a: "A stay close to the beach saves time. See [hotels near Diveagar Beach](guide:hotels-near-diveagar-beach) and [all hotels in Diveagar](guide:best-hotels-in-diveagar).",
            },
            {
              q: "What is the best time for a 2-day trip?",
              a: "The cooler months are generally the most comfortable. See the [best time to visit Diveagar](guide:best-time-to-visit-diveagar).",
            },
            {
              q: "How do I book a stay for 2 days?",
              a: "Message the property on WhatsApp, confirm what is included and the cancellation terms, and pay as agreed. See [how to book Diveagar hotels](guide:how-to-book-diveagar-hotels).",
            },
          ],
        },
      ],
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
      footer:
        "[Back to the full Diveagar travel guide](guide:diveagar-travel-guide)",
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
  ],
};

export default guide;
