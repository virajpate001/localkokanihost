// src/content/seo-guides/best-konkan-beaches-compared.js
const guide = {
  slug: "best-konkan-beaches-compared",
  metaTitle: "Best Konkan Beaches Compared: Rank Them for Your Trip",
  metaDescription:
    "Which is the best Konkan beach? Rate Diveagar, Shrivardhan, Alibaug, Dapoli and Harihareshwar for your own priorities and see them ranked.",
  trail: [
    { name: "Diveagar Travel Guide", slug: "diveagar-travel-guide" },
    { name: "Best Konkan Beaches Compared" },
  ],
  hero: {
    h1: "Best Konkan beaches compared",
    lead: "There is no single best beach on the Konkan coast. The best one is the one that matches what you want. Rate Diveagar, Shrivardhan, Alibaug, Dapoli and Harihareshwar for your own trip and see them ranked.",
    buttons: [
      { label: "Rank the beaches", variant: "primary", href: "#tool" },
      { label: "Compare one-to-one", variant: "ghost", href: "#towns" },
    ],
  },
  blocks: [
    {
      type: "answer",
      heading: "The short answer",
      md: `Which Konkan beach is best depends on the beach and sea conditions you want, how quiet or lively you like it, what you want to see, the stays available for your budget, the food, and how far each is from your home.

This page does not pick a winner for you. It gives you a way to rank the five places by your own priorities. Do your research first, using the one-to-one comparisons below.`,
    },

    {
      type: "beachesRanker",
      id: "tool",
      heading: "Rank the beaches for your trip",
      sub: 'Three steps. Leave anything you have not researched as "Not sure", and it will not count.',
      notesHeading: "What we know about each place",
      hasJourney: true,
      step1Heading: "Step 1: Journey time from your home",
      step1Sub:
        "Look up the one-way time to each in a map app for your departure time, and enter it. Leave blank to skip.",
      step1LabelTemplate: "To {name} (hours)",
      step1Placeholder: "e.g. from a map app",
      step2Heading:
        "Step 2: How much does each thing matter, and how well does each place match?",
      step2Sub:
        'Rate each place by how well it matches what you want. For example, if you want a quiet place, a quiet place is a "great match". The journey row is filled from Step 1.',
      step3Heading: "Step 3: Your ranking",
      tableCriteriaLabel: "What matters",
      tableImportanceLabel: "How much",
      journeyCellEmpty: "Enter Step 1",
      hintEmpty:
        "Rate at least one place on at least one row that matters to you, and your ranking will appear here.",
      fine: "Rule of thumb for the journey row: the shortest journey scores 5, and each extra hour takes off 1 point, down to 1. Scores are only as good as your research.",
      closeThreshold: 0.3,
      places: [
        {
          id: "diveagar",
          name: "Diveagar",
          slug: "best-hotels-in-diveagar",
          link: "Hotels in Diveagar",
          note: null,
        },
        {
          id: "shrivardhan",
          name: "Shrivardhan",
          slug: "diveagar-vs-shrivardhan",
          link: "Diveagar vs Shrivardhan",
          note: null,
        },
        {
          id: "alibaug",
          name: "Alibaug",
          slug: "diveagar-vs-alibaug",
          link: "Diveagar vs Alibaug",
          note: null,
        },
        {
          id: "dapoli",
          name: "Dapoli",
          slug: "diveagar-vs-dapoli",
          link: "Diveagar vs Dapoli",
          note: null,
        },
        {
          id: "harihareshwar",
          name: "Harihareshwar",
          slug: "diveagar-vs-harihareshwar",
          link: "Diveagar vs Harihareshwar",
          note: null,
        },
      ],
      criteria: [
        { id: "beach", label: "Beach and sea time" },
        { id: "mood", label: "Atmosphere" },
        { id: "see", label: "Things to see and do" },
        { id: "stay", label: "Stays for your budget" },
        { id: "food", label: "Food you want" },
        { id: "journey", label: "Journey from your home" },
      ],
    },

    {
      type: "clusters",
      id: "towns",
      heading: "Compare with Diveagar, one to one",
      sub: "",
      clusters: [
        {
          heading: "",
          desc: "",
          links: [
            {
              label: "Diveagar vs Shrivardhan",
              guide: "diveagar-vs-shrivardhan",
              desc: "Which should you choose?",
            },
            {
              label: "Diveagar vs Alibaug",
              guide: "diveagar-vs-alibaug",
              desc: "Two coastal getaways compared.",
            },
            {
              label: "Diveagar vs Dapoli",
              guide: "diveagar-vs-dapoli",
              desc: "Which beach suits your trip?",
            },
            {
              label: "Diveagar vs Harihareshwar",
              guide: "diveagar-vs-harihareshwar",
              desc: "Which one to pick.",
            },
          ],
        },
      ],
    },

    {
      type: "guide",
      heading: "Choosing a Konkan beach",
      toc: [
        { id: "research", label: "How to research" },
        { id: "decide", label: "After you decide" },
      ],
      sections: [
        {
          id: "research",
          title: "How to research each place",
          body: [
            `| What matters | How to check |
| --- | --- |
| **Beach and sea** | Look at recent photos, and ask a hotel in each place about the sea on your dates. See [the best month for Diveagar Beach](guide:best-month-diveagar-beach) for how conditions change. |
| **Atmosphere** | Ask each hotel how busy and how noisy it gets on your dates. |
| **Things to see** | Check what is nearby and how far it is. See [what Diveagar is famous for](guide:what-is-diveagar-famous-for). |
| **Stays** | Compare hotels, rates and what is included. See [best hotels in Diveagar](guide:best-hotels-in-diveagar). |
| **Food** | Ask about meals, timings and dietary needs. See [where to eat in Diveagar](guide:diveagar-food-hotels-restaurants). |
| **Journey** | Use a map app for your departure time, and see [how to reach Diveagar](guide:how-to-reach-diveagar). |`,
          ],
        },
        {
          id: "decide",
          title: "After you decide",
          body: [
            `- Choose the best time with the [best time to visit Diveagar](guide:best-time-to-visit-diveagar).
- Plan your days with the [2-day](guide:diveagar-2-day-itinerary) or [3-day itinerary](guide:diveagar-3-day-itinerary).
- Looking for a resort? See [top beach resorts in the Konkan](guide:top-beach-resorts-konkan).
- Leaning towards Diveagar? Read [whether it is worth visiting](guide:is-diveagar-worth-visiting), then [how to book](guide:how-to-book-diveagar-hotels).`,
          ],
        },
      ],
    },

    {
      type: "faq",
      id: "faq",
      heading: "Konkan beaches: your questions answered",
      groups: [
        {
          items: [
            {
              q: "Which is the best beach on the Konkan coast?",
              a: "There is no single best. The best beach is the one that matches your priorities. Use the ranking tool above, and compare Diveagar with each place one to one.",
              open: true,
            },
            {
              q: "Which Konkan beach is best for families?",
              a: "Look at the stays, beach conditions and food in each place for your dates. See [family-friendly hotels in Diveagar](guide:family-friendly-hotels-diveagar) and ask hotels in other places the same questions.",
            },
            {
              q: "Which Konkan beach is best for a weekend trip?",
              a: "The one with the shortest journey for you, since travel time uses up a short trip. Enter your journey times in Step 1.",
            },
            {
              q: "Which beach is the least crowded?",
              a: "It changes with the season and with weekends and holidays. Ask hotels in each place how busy it gets on your dates.",
            },
            {
              q: "Can I visit more than one beach on one trip?",
              a: "It depends on the distances and the time you have. Check travel times in a map app, then see the [3-day itinerary](guide:diveagar-3-day-itinerary) for how to plan a day out.",
            },
            {
              q: "When is the best time to visit the Konkan coast?",
              a: "For most visitors, the cooler months after the monsoon are the most comfortable. See the [best time to visit Diveagar](guide:best-time-to-visit-diveagar), and confirm conditions with a hotel in each place.",
            },
            {
              q: "How do I choose a stay once I have picked a beach?",
              a: "Compare stays by distance to the beach, what is included and the cancellation terms. See [best hotels in Diveagar](guide:best-hotels-in-diveagar) and [how to book](guide:how-to-book-diveagar-hotels).",
            },
          ],
        },
      ],
    },

    {
      type: "cta",
      heading: "Leaning towards Diveagar?",
      text: "Compare hotels, resorts and villas in Diveagar, then message the property directly on WhatsApp.",
      button: {
        label: "Browse hotels in Diveagar",
        guide: "best-hotels-in-diveagar",
      },
    }
  ],
};

export default guide;
