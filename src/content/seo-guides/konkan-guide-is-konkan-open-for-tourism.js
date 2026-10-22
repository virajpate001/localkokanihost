// src/content/seo-guides/konkan-guide-is-konkan-open-for-tourism.js
const guide = {
  slug: "konkan-guide-is-konkan-open-for-tourism",
  metaTitle: "Is Konkan Open for Tourism? Seasonal Closures, Fort Boats and Water Sports",
  metaDescription:
    "Is Konkan open for tourism? Yes, all year, but boat trips to forts, water sports, scuba and some ferries close in the monsoon. Check what is usually open in each month before you book.",
  trail: [
    { name: "Is Konkan Open for Tourism?" },
  ],
  hero: {
    h1: "Is Konkan open for tourism?",
    lead:
      "Yes, Konkan welcomes visitors all year. What changes with the season is which activities run: boat trips to forts, water sports, scuba and some ferries stop in the monsoon.",
    buttons: [
      { label: "Check your month", variant: "primary", href: "#checker" },
      { label: "The year at a glance", variant: "ghost", href: "#matrix" },
    ],
  },
  blocks: [
    {
      type: "answer",
      heading: "The short answer",
      md: `There is no blanket closure of the Konkan coast. Hotels and homestays stay open, but maritime authorities suspend passenger boat services and water sports during the monsoon, usually from late May to about the end of August or into September. Check the status of a specific activity before you travel.`,
    },

    {
      type: "activityChecker",
      id: "checker",
      heading: "What is usually open in your month?",
      sub:
        "Pick an activity and a month to see the usual pattern. This shows typical seasons, not today's official status, so always confirm before you book or travel.",
      activityLabel: "Activity",
      monthLabel: "Month",
      matrixHeading: "The year at a glance",
      shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      fullMonths: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      legend: [
        { status: 1, label: "Usually running" },
        { status: 2, label: "Check first" },
        { status: 3, label: "Usually closed" },
      ],
      activities: [
        {
          name: "Hotels, resorts and homestays",
          status: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          note: "Most properties stay open all year. Some small ones close in heavy monsoon, so confirm.",
        },
        {
          name: "Swimming at beaches",
          status: [1, 1, 1, 1, 2, 3, 3, 3, 3, 2, 1, 1],
          note: "Not advised in monsoon, and always swim with care and local advice.",
        },
        {
          name: "Boat trips to sea forts",
          status: [1, 1, 1, 1, 2, 3, 3, 3, 2, 1, 1, 1],
          note: "Janjira, Sindhudurg and similar forts stop when the sea is rough, usually from late May.",
        },
        {
          name: "Water sports",
          status: [1, 1, 1, 1, 2, 3, 3, 3, 3, 2, 1, 1],
          note: "Usually run from around October to May, depending on the operator and sea state.",
        },
        {
          name: "Scuba and snorkelling",
          status: [1, 1, 1, 1, 2, 3, 3, 3, 3, 2, 1, 1],
          note: "Visibility is poor and currents are strong in monsoon.",
        },
        {
          name: "Mumbai to Alibaug ferries",
          status: [1, 1, 1, 1, 2, 3, 3, 3, 2, 1, 1, 1],
          note: "Passenger ferries are usually suspended in monsoon; roads remain an option.",
        },
        {
          name: "Road travel",
          status: [1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1],
          note: "Roads stay open, but rain can cause waterlogging and landslides on hilly stretches.",
        },
      ],
    },

    {
      type: "guide",
      id: "what",
      heading: "What closes, and why",
      toc: [],
      sections: [
        {
          id: "what-table",
          title: "Activities and their seasonal status",
          body: [
            `| What | What usually happens |
| --- | --- |
| **Passenger boats to forts** | Maritime authorities suspend them for safety when the sea is rough, usually from late May to about the end of August. Services restart when conditions allow. |
| **Water sports** | Licensed operators stop when the sea turns rough and restart after the monsoon. |
| **Scuba and snorkelling** | Stopped for poor visibility and strong currents; usually restarts around October. |
| **Ferries** | Mumbai to Alibaug and similar passenger ferries are usually suspended during the monsoon. |
| **Beaches** | Open to walk, but swimming is not advised and red flags may be posted. |
| **Hotels and homestays** | Usually open all year, with lower rates and fewer guests in monsoon. |

Closure dates are set by the authorities each year, so treat any date here as an example, not a promise.`,
          ],
        },
      ],
    },

    {
      type: "prose",
      id: "example",
      heading: "A real example: the 2026 fort-boat closure",
      md: `In 2026, the Maharashtra Maritime Board ordered passenger boats to Murud-Janjira fort to stop from 26 May to 31 August, citing monsoon safety. Boat access to other sea forts, and water sports around Malvan and Tarkarli, followed a similar seasonal pattern. After the monsoon, services restart once the sea calms, so early October is a sensible time to plan fort and water-sports trips. Confirm exact dates with the operator or your hotel.`,
    },

    {
      type: "guide",
      id: "stay",
      heading: "If you travel in monsoon anyway",
      toc: [],
      sections: [
        {
          id: "stay-list",
          title: "Five tips for a monsoon trip",
          body: [
            `- Keep beach days and boat trips flexible, and have a backup plan.
- Choose inland, farm or hill-side stays. See [monsoon stays in Konkan](guide:konkan-guide-monsoon-stays).
- Do not swim in the sea, and follow red-flag and local warnings.
- Check road conditions, because rain can cause waterlogging and landslides on hilly stretches.
- Ask your hotel about cancellation and weather policies before you pay.`,
          ],
        },
      ],
    },

    {
      type: "clusters",
      id: "plan",
      heading: "Plan around the season",
      sub: "",
      clusters: [
        {
          heading: "More guides",
          desc: "",
          links: [
            { label: "Best time to visit Konkan", guide: "konkan-guide-best-time-to-visit", desc: "Month by month" },
            { label: "Tarkarli and Malvan", guide: "konkan-hotels-tarkarli-malvan", desc: "Water sports and Sindhudurg fort" },
            { label: "Alibaug, Kashid and Murud", guide: "konkan-hotels-alibaug-kashid-murud", desc: "Murud-Janjira and ferries" },
            { label: "Monsoon stays", guide: "konkan-guide-monsoon-stays", desc: "Green season, cheaper rooms" },
            { label: "How to plan a Konkan trip", guide: "konkan-guide-how-to-plan-a-trip", desc: "Itineraries" },
            { label: "Best hotels in Konkan", guide: "best-hotels-in-konkan", desc: "The full guide" },
          ],
        },
      ],
    },

    {
      type: "faq",
      id: "faq",
      heading: "Is Konkan open: questions",
      groups: [
        {
          items: [
            {
              q: "Is Konkan open for tourism?",
              a: "Yes, all year. Hotels and homestays stay open, but boat trips to forts, water sports and some ferries stop during the monsoon. See [best hotels in Konkan](guide:best-hotels-in-konkan).",
              open: true,
            },
            {
              q: "Is Murud-Janjira fort open?",
              a: "It is reached only by boat, and the crossing is closed for monsoon safety. In 2026 the closure was ordered from 26 May to 31 August. Check with the boat operators before you go. See [Alibaug, Kashid and Murud](guide:konkan-hotels-alibaug-kashid-murud).",
            },
            {
              q: "Is Sindhudurg fort open in monsoon?",
              a: "Boat access from Malvan is usually suspended during the monsoon. Confirm dates with the operators and your hotel. See [Tarkarli and Malvan](guide:konkan-hotels-tarkarli-malvan).",
            },
            {
              q: "Can I do water sports in Tarkarli in monsoon?",
              a: "Usually not. Water sports and scuba typically run from around October to May, and stop when the sea is rough. See [Tarkarli and Malvan](guide:konkan-hotels-tarkarli-malvan).",
            },
            {
              q: "Is it safe to swim in Konkan during monsoon?",
              a: "It is not advised. The sea is rough, currents are strong and warnings are often in place. See [monsoon stays](guide:konkan-guide-monsoon-stays).",
            },
            {
              q: "When do things reopen after the monsoon?",
              a: "Boat trips and water sports usually restart between September and October, depending on sea conditions and authority orders. See [best time to visit Konkan](guide:konkan-guide-best-time-to-visit).",
            },
          ],
        },
      ],
    },

    {
      type: "cta",
      heading: "Check before you go",
      text:
        "Message the property directly on WhatsApp to confirm what is running on your dates.",
      button: { label: "See the best hotels in Konkan", guide: "best-hotels-in-konkan" },
    },
  ],
};

export default guide;