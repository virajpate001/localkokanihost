// src/content/seo-guides/konkan-guide-how-to-plan-a-trip.js
const guide = {
  slug: "konkan-guide-how-to-plan-a-trip",
  metaTitle: "How to Plan a Konkan Trip: Step-by-Step Guide and 3, 5 and 7-Day Itineraries",
  metaDescription:
    "How do you plan a trip to Konkan? A step-by-step guide to choosing a region, dates, transport and stay, with ready 3-day, 5-day and 7-day itineraries along the Maharashtra coast.",
  trail: [
    { name: "How to Plan a Konkan Trip" },
  ],
  hero: {
    h1: "How to plan a Konkan trip",
    lead:
      "The Konkan coast is long, so a good trip starts with choosing one region. Follow these six steps, then pick a ready-made 3, 5 or 7-day itinerary.",
    buttons: [
      { label: "Six steps", variant: "primary", href: "#steps" },
      { label: "Itineraries", variant: "ghost", href: "#itineraries" },
    ],
  },
  blocks: [
    {
      type: "answer",
      heading: "The short answer",
      md: `Choose a region based on how many days you have, travel between October and February, decide how you will get there, book a stay one to two months ahead for winter weekends, and keep one flexible day. For three days, stay in northern Raigad. For a week, you can go as far south as Tarkarli.`,
    },

    {
      type: "numberedSteps",
      id: "steps",
      heading: "Plan your trip in six steps",
      steps: [
        { title: "Choose a region by time", md: "Distance from Mumbai decides most trips. Use our [distance guide](guide:konkan-guide-distance-from-mumbai) and [best places to visit](guide:konkan-guide-best-places-to-visit) to match days to destinations." },
        { title: "Pick your dates", md: "October to February is best. Check [best time to visit Konkan](guide:konkan-guide-best-time-to-visit) and avoid festival weekends unless you want them." },
        { title: "Check what is open", md: "Boat trips, water sports and some ferries stop in the monsoon. See [is Konkan open for tourism](guide:konkan-guide-is-konkan-open-for-tourism)." },
        { title: "Decide how you will travel", md: "Compare the options in the table below." },
        { title: "Choose and book your stay", md: "Pick the type that fits your trip from our [best hotels in Konkan](guide:best-hotels-in-konkan) guide, and book early for winter weekends." },
        { title: "Plan the details", md: "Food, activities, cash, offline maps and a backup plan for weather." },
      ],
    },

    {
      type: "itineraryTabs",
      id: "itineraries",
      heading: "Ready-made Konkan itineraries",
      sub:
        "Choose a trip length. Each plan stays in one area, so you spend your time at the coast rather than on the road. Drive times are approximate.",
      tabsAriaLabel: "Itinerary length",
      plans: [
        {
          tab: "3 days",
          title: "Northern Raigad coast",
          sub: "Diveagar, Shrivardhan and Harihareshwar, about 4–5 hours from Mumbai",
          days: [
            { label: "Day 1", name: "Mumbai to Diveagar or Shrivardhan", note: "Leave early, check in and watch the sunset on the beach. Stay: [Diveagar](guide:konkan-hotels-diveagar) or [Shrivardhan](guide:konkan-hotels-shrivardhan)." },
            { label: "Day 2", name: "Harihareshwar and Shrivardhan",    note: "Visit the Harihareshwar temple and, if conditions allow, the parikrama. See [Harihareshwar](guide:konkan-hotels-harihareshwar) and the [Shrivardhan beach guide](guide:konkan-guide-shrivardhan-beach)." },
            { label: "Day 3", name: "Beach morning, then home",         note: "A slow morning on the beach, then drive back to Mumbai, leaving by early afternoon to avoid traffic." },
          ],
        },
        {
          tab: "5 days",
          title: "Raigad and Ratnagiri coast",
          sub: "Shrivardhan, Harihareshwar, Dapoli and Harnai",
          days: [
            { label: "Day 1", name: "Mumbai to Shrivardhan",           note: "Arrive and enjoy the beach. See [hotels in Shrivardhan](guide:konkan-hotels-shrivardhan)." },
            { label: "Day 2", name: "Harihareshwar and Diveagar",        note: "Temple, coast and a long beach, all within a short drive." },
            { label: "Day 3", name: "Drive to Dapoli or Murud-Harnai",   note: "Settle in near the beach. See [Dapoli and Murud-Harnai](guide:konkan-hotels-dapoli-harnai). Check the route and any ferry timings." },
            { label: "Day 4", name: "Harnai, forts and a dolphin trip",  note: "Fishing port, Suvarnadurg fort and a boat trip, weather and season permitting." },
            { label: "Day 5", name: "Return to Mumbai",                  note: "Allow 5–6 hours, and leave early." },
          ],
        },
        {
          tab: "7 days",
          title: "Raigad to Sindhudurg",
          sub: "A longer coastal trip as far south as Tarkarli",
          days: [
            { label: "Day 1", name: "Mumbai to Dapoli",         note: "A long first drive, about 5–6 hours. Ease into the area. See [Dapoli and Murud-Harnai](guide:konkan-hotels-dapoli-harnai)." },
            { label: "Day 2", name: "Dapoli, Harnai and Anjarle", note: "Beaches, the fishing port and forts, with a possible dolphin trip." },
            { label: "Day 3", name: "Drive to Ganpatipule",      note: "Check the route and timings. See [hotels in Ganpatipule](guide:konkan-hotels-ganpatipule)." },
            { label: "Day 4", name: "Ganpatipule",                note: "Temple, beach and nearby viewpoints." },
            { label: "Day 5", name: "Drive to Tarkarli",         note: "About 170–195 km, roughly 4.5 hours. See [Tarkarli and Malvan](guide:konkan-hotels-tarkarli-malvan)." },
            { label: "Day 6", name: "Tarkarli and Malvan",       note: "Sindhudurg fort, water sports in season, and Malvani food." },
            { label: "Day 7", name: "Return",                     note: "The drive to Mumbai is 500 km or more, so consider an overnight stop or a train from a station such as Kudal. See [distance from Mumbai](guide:konkan-guide-distance-from-mumbai)." },
          ],
        },
      ],
    },

    {
      type: "guide",
      id: "transport",
      heading: "How to get to Konkan",
      toc: [],
      sections: [
        {
          id: "transport-table",
          title: "Transport options",
          body: [
            `| Option | Good for | Things to know |
| --- | --- | --- |
| **Own car or hired car with driver** | Flexibility, families and groups | Most destinations need a car for local sightseeing. Plan early starts and breaks. |
| **Train plus road transfer** | Long trips to the south | Konkan Railway stations are some distance from the coast, so arrange a transfer in advance. |
| **Bus** | Budget travel | Private and state buses run to main towns. Check routes and timings for your destination. |
| **Ferry** | Short trips to the Alibaug coast | Services are usually suspended in monsoon. Check schedules. |`,
          ],
        },
      ],
    },

    {
      type: "guide",
      id: "when-book",
      heading: "When to book",
      toc: [],
      sections: [
        {
          id: "when-book-table",
          title: "Suggested booking times",
          body: [
            `| Travel dates | Suggested booking time |
| --- | --- |
| **Winter weekends, Christmas, New Year and Diwali** | One to two months ahead |
| **Other weekends in October to February** | Two to four weeks ahead |
| **March to May** | One to two weeks ahead is usually fine |
| **Monsoon** | Short notice is usually possible, but confirm what is open |

See [budget hotels](guide:konkan-best-hotels-budget), [family and couple resorts](guide:konkan-best-hotels-family-couples) and [how to choose a Konkan hotel](guide:konkan-guide-how-to-choose-a-hotel).`,
          ],
        },
      ],
    },

    {
      type: "packingChecklist",
      id: "pack",
      heading: "Packing checklist",
      sub: "Tick items as you go. Your ticks are not saved.",
      items: [
        "ID and booking confirmations",
        "Cash, since cards are not always accepted",
        "Sunscreen, hat and sunglasses",
        "Light cotton clothes",
        "Swimwear and a quick-dry towel",
        "Sturdy, non-slip footwear for rocks and forts",
        "Modest clothing for temples",
        "Rain jacket or umbrella (essential in monsoon)",
        "Insect repellent",
        "Basic medicines and a first-aid kit",
        "Phone charger and a power bank",
        "Offline maps downloaded",
      ],
    },

    {
      type: "guide",
      id: "tips",
      heading: "Practical tips",
      toc: [],
      sections: [
        {
          id: "tips-list",
          title: "Five things worth knowing",
          body: [
            `- **Carry cash.** Card payments are not always accepted at beach shacks, boat operators and small homestays.
- **Download offline maps.** Signal can be patchy on coastal and village roads.
- **Leave early.** Starting before 6 am avoids the worst highway traffic on weekends.
- **Keep a flexible day.** Weather and sea conditions can change boat trips at short notice.
- **Eat local.** See [Malvani and Konkani food](guide:konkan-guide-malvani-food).`,
          ],
        },
      ],
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
            { label: "Weekend getaways", guide: "konkan-guide-weekend-getaways", desc: "From Mumbai and Pune" },
            { label: "Konkan road-trip routes", guide: "konkan-guide-road-trip-routes", desc: "NH66 and coastal roads" },
            { label: "Things to see in Konkan", guide: "konkan-guide-things-to-see", desc: "Beaches, forts, temples" },
            { label: "Monsoon stays", guide: "konkan-guide-monsoon-stays", desc: "Green season, cheaper rooms" },
            { label: "Best hotels in Konkan", guide: "best-hotels-in-konkan", desc: "The full guide" },
          ],
        },
      ],
    },

    {
      type: "faq",
      id: "faq",
      heading: "Trip planning questions",
      groups: [
        {
          items: [
            { q: "How do I arrange a Konkan trip?",
              a: "Choose a region based on how many days you have, pick dates between October and February, decide how you will travel, and book your stay early for winter weekends. See [best hotels in Konkan](guide:best-hotels-in-konkan).",
              open: true },
            { q: "How many days do I need for Konkan?",
              a: "Three days is enough for northern Raigad. Five days lets you add Dapoli and Harnai, and a week covers the coast as far south as Tarkarli. See [best places to visit](guide:konkan-guide-best-places-to-visit)." },
            { q: "Can I plan a Konkan trip without a car?",
              a: "Yes, with a train to a Konkan Railway station or a bus to a main town, plus a hired transfer. A car or driver makes local sightseeing much easier. See [distance from Mumbai](guide:konkan-guide-distance-from-mumbai)." },
            { q: "How much does a Konkan trip cost?",
              a: "It varies a lot with season, stay type and distance. Compare stay types and dates in our hotel guides, and budget extra for fuel, food and activities. See [budget hotels](guide:konkan-best-hotels-budget)." },
            { q: "Should I book hotels in advance for Konkan?",
              a: "For winter weekends and festivals, yes, one to two months ahead. Other dates can usually be booked closer in. See [how to choose a Konkan hotel](guide:konkan-guide-how-to-choose-a-hotel)." },
            { q: "What should I do in monsoon?",
              a: "Keep plans flexible, choose inland or farm stays and check what is open, because boat trips and water sports usually stop. See [monsoon stays](guide:konkan-guide-monsoon-stays)." },
          ],
        },
      ],
    },

    {
      type: "cta",
      heading: "Ready to book your stay?",
      text:
        "Message the property directly on WhatsApp. Prices are in INR and there are no booking fees.",
      button: { label: "See the best hotels in Konkan", guide: "best-hotels-in-konkan" },
    },
  ],
};

export default guide;