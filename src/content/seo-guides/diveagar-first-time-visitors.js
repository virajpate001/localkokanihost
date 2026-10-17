// src/content/seo-guides/diveagar-first-time-visitors.js
const guide = {
  slug: "diveagar-first-time-visitors",
  metaTitle: "Diveagar for First-Time Visitors: Checklist and Packing List",
  metaDescription:
    "First time in Diveagar? Use our checklist from choosing dates to the last day, plus a packing list by season, and avoid common first-timer mistakes.",
  trail: [
    { name: "Diveagar Travel Guide", slug: "diveagar-travel-guide" },
    { name: "Diveagar for First-Time Visitors" },
  ],
  hero: {
    h1: "Diveagar for first-time visitors: your checklist",
    lead:
      "Everything a first-time visitor should sort out, from choosing dates to the last walk on the beach. Tick items off as you go. Your progress is saved on this device.",
    buttons: [
      { label: "Start the checklist", variant: "primary", href: "#checklist" },
      { label: "What to pack", variant: "ghost", href: "#pack" },
    ],
  },
  blocks: [
    {
      type: "answer",
      heading: "The short answer",
      md: `For a first visit, decide whether a quiet beach town suits you, choose your dates, book directly with a hotel after confirming what is included, plan the journey, and ask your hotel about conditions before you go. Keep the plan simple and pack for the season.

The checklist below walks you through each step, with a link to the full guide for each.`,
    },

    {
      type: "persistentChecklist",
      id: "checklist",
      heading: "First-timer checklist",
      storageKey: "diveagar-first-timer-checklist",
      progressLabel: "Overall progress",
      countTemplate: "{done} of {total} done",
      resetLabel: "Reset checklist",
      groups: [
        {
          title: "1. Decide",
          items: [
            { t: "Decide whether a quiet beach town suits you.", slug: "is-diveagar-worth-visiting", link: "Is Diveagar worth visiting?" },
            { t: "Choose your season and dates.", slug: "best-time-to-visit-diveagar", link: "Best time to visit" },
            { t: "Decide how many days you will stay.", slug: "diveagar-2-day-itinerary", link: "2-day itinerary" },
            { t: "Choose the type of stay you want.", slug: "best-hotels-in-diveagar", link: "Best hotels in Diveagar" },
          ],
        },
        {
          title: "2. Book",
          items: [
            { t: "Send an enquiry to your chosen stay on WhatsApp.", slug: "how-to-book-diveagar-hotels", link: "How to book" },
            { t: "Get the price, inclusions and cancellation terms in writing." },
            { t: "Tell the hotel about meals and any dietary needs.", slug: "diveagar-food-hotels-restaurants", link: "Where to eat" },
          ],
        },
        {
          title: "3. Prepare the journey",
          items: [
            { t: "Plan your route and ask the hotel for a map pin.", slug: "how-to-reach-diveagar", link: "How to reach Diveagar" },
            { t: "Download an offline map." },
            { t: "Tell the hotel your arrival time." },
            { t: "Ask what the sea and weather are like on your dates." },
            { t: "Pack for the season. See the packing planner below." },
          ],
        },
        {
          title: "4. When you arrive",
          items: [
            { t: "Confirm check-out time and meal timings." },
            { t: "Ask the hotel what is safe on the beach today.", slug: "diveagar-beach-things-to-do", link: "Beach safety checklist" },
            { t: "Check temple hours before you visit.", slug: "what-is-diveagar-famous-for", link: "What Diveagar is famous for" },
          ],
        },
        {
          title: "5. Before you leave",
          items: [
            { t: "Take your rubbish with you from the beach and your room." },
            { t: "Keep your booking messages and receipts." },
          ],
        },
      ],
    },

    {
      type: "packingList",
      id: "pack",
      heading: "What to pack",
      sub: "Choose your season and who is travelling.",
      autoSeason: true,
      seasonLabel: "Season",
      seasonOptions: [
        { value: "monsoon", label: "Monsoon (about June to September)" },
        { value: "cooler", label: "Cooler months (about October to February)" },
        { value: "summer", label: "Summer (about March to May)" },
      ],
      groupLabel: "Who is travelling?",
      groupOptions: [
        { value: "couple", label: "Couple" },
        { value: "family", label: "Family with children" },
        { value: "friends", label: "Friends" },
      ],
      driveLabel: "Are you driving?",
      driveOptions: [
        { value: "no", label: "No" },
        { value: "yes", label: "Yes" },
      ],
      defaults: {
        season: "cooler",
        group: "couple",
        drive: "no",
      },
      base: [
        "Drinking water bottle",
        "Towel or beach mat",
        "Comfortable walking footwear",
        "Light cotton clothes",
        "A bag for your rubbish",
        "Phone charger and a power bank",
        "Copies of your booking messages",
        "Any regular medicines you use",
      ],
      bySeason: {
        monsoon: [
          "Rain jacket or umbrella",
          "Quick-drying clothes",
          "Waterproof bag for phone and documents",
          "Spare dry clothes",
        ],
        cooler: [
          "A light layer for evenings",
          "Sunglasses",
          "Sunscreen",
        ],
        summer: [
          "Hat and sunscreen",
          "Sunglasses",
          "Light, breathable clothes",
          "Plenty of water",
        ],
      },
      byGroup: {
        family: [
          "Snacks for the children",
          "Change of clothes for the children",
          "Any items the children need at night",
        ],
        friends: [
          "Portable speaker (keep the volume low)",
          "Cards or a simple game",
        ],
        couple: [],
      },
      byDrive: [
        "Driving licence and vehicle documents",
        "Offline map downloaded",
        "Fuel before the final stretch",
      ],
      copyLabel: "Copy list",
      printLabel: "Print checklist",
      copyHeading: "Diveagar packing list:",
    },

    {
      type: "guide",
      heading: "Avoiding first-timer mistakes",
      toc: [
        { id: "mistakes", label: "Common mistakes" },
        { id: "how-long", label: "How many days" },
      ],
      sections: [
        {
          id: "mistakes",
          title: "Common mistakes, and what to do instead",
          body: [
            `| Mistake | Do this instead |
| --- | --- |
| Paying before you know what is included. | Get the price, inclusions and cancellation terms in writing. See [how to book Diveagar hotels](guide:how-to-book-diveagar-hotels). |
| Assuming everything is open in every season. | Ask your hotel what is open on your dates. See the [best time to visit Diveagar](guide:best-time-to-visit-diveagar). |
| Over-planning a short trip. | Keep to one or two things a day. See the [2-day itinerary](guide:diveagar-2-day-itinerary). |
| Assuming organised beach activities exist. | Ask first. See [things to do at Diveagar Beach](guide:diveagar-beach-things-to-do). |
| Arriving late with no dinner arranged. | Tell your hotel your arrival time. See [where to eat in Diveagar](guide:diveagar-food-hotels-restaurants). |
| Booking a stay for turtles alone. | Check the claim first. See [turtle-related stays](guide:diveagar-turtle-resort-stays). |`,
          ],
        },
        {
          id: "how-long",
          title: "How many days should you plan?",
          body: [
            `Two days is enough for the main highlights at a relaxed pace, and three days leaves room for a nearby town. See the [2-day itinerary](guide:diveagar-2-day-itinerary), the [3-day itinerary](guide:diveagar-3-day-itinerary) and, if you are coming from Pune, the [2-day trip from Pune](guide:diveagar-2-day-trip-from-pune). Not yet sure it is for you? See [whether Diveagar is worth visiting](guide:is-diveagar-worth-visiting) and [what it is famous for](guide:what-is-diveagar-famous-for).`,
          ],
        },
      ],
    },

    {
      type: "faq",
      id: "faq",
      heading: "First time in Diveagar: your questions answered",
      groups: [
        {
          items: [
            {
              q: "Is Diveagar good for first-time visitors?",
              a: "It suits people who want a quiet beach break. Read [whether Diveagar is worth visiting](guide:is-diveagar-worth-visiting) and take the quiz.",
              open: true,
            },
            { q: "What should I know before visiting Diveagar?",
              a: "Choose your season carefully, confirm what is included before you pay, plan the journey, and ask your hotel about conditions. The checklist on this page covers each step." },
            { q: "What should I pack for Diveagar?",
              a: "It depends on the season and who is travelling. Use the packing planner above to build a list." },
            { q: "How many days do I need in Diveagar?",
              a: "Two days covers the main highlights at a relaxed pace, and three days leaves room for a nearby town. See the [3-day itinerary](guide:diveagar-3-day-itinerary)." },
            { q: "Do I need to book in advance?",
              a: "Yes for weekends, long weekends and the busier months, since small stays have few rooms. See [how to book Diveagar hotels](guide:how-to-book-diveagar-hotels)." },
            { q: "Will my phone work in Diveagar?",
              a: "Mobile coverage can be patchy in places, so download an offline map and ask your hotel for a map pin. See [how to reach Diveagar](guide:how-to-reach-diveagar)." },
            { q: "How do I pay at small hotels?",
              a: "Ask your hotel which payment methods it accepts and agree the amount and schedule before you pay. Keep a record of every payment." },
          ],
        },
      ],
    },

    {
      type: "cta",
      heading: "Ready to choose a stay?",
      text: "Compare hotels, resorts and villas in Diveagar, then message the property directly on WhatsApp.",
      button: { label: "Browse hotels in Diveagar", guide: "best-hotels-in-diveagar" },
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