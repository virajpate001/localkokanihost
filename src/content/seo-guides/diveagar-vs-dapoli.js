// src/content/seo-guides/diveagar-vs-dapoli.js
const guide = {
  slug: "diveagar-vs-dapoli",
  metaTitle: "Diveagar vs Dapoli: Which Beach Should You Choose?",
  metaDescription:
    "Which beach is best, Dapoli or Diveagar? Compare the two Konkan destinations for your own trip with a personal comparison sheet.",
  trail: [
    { name: "Diveagar Travel Guide", slug: "diveagar-travel-guide" },
    { name: "Diveagar vs Dapoli" },
  ],
  hero: {
    h1: "Diveagar vs Dapoli: which should you choose?",
    lead:
      "Two Konkan coastal destinations that travellers often compare when choosing a beach break. The right choice depends on what you want from the trip, so use the comparison sheet to decide for yourself.",
    buttons: [
      { label: "Compare for my trip", variant: "primary", href: "#sheet" },
      { label: "Visit both?", variant: "ghost", href: "#both" },
    ],
  },
  blocks: [
    {
      type: "answer",
      heading: "The short answer",
      md: `Neither is better for everyone. Which suits you depends on the kind of beach time you want, how lively or quiet you like it, what you want to see, the stays available for your budget, and how long each takes to reach from your home.

Below, rate each of those for your own trip and get a result based on what matters to you. Depending on the distance, you may be able to see both. Check the travel time to Dapoli in a map app, and see the [3-day itinerary](guide:diveagar-3-day-itinerary) for how to plan a day out.`,
    },

    {
      type: "vs",
      id: "sheet",
      selfName: "Diveagar",
      otherName: "Dapoli",
      factsHeading: "Side by side",
      facts: [],
      hasJourney: true,
      journeyHeading: "Journey time from your home",
      journeySub:
        "Look up the one-way journey time to each in a map app for your departure time. Enter it here.",
      journeySelfLabel: "To Diveagar (hours)",
      journeyOtherLabel: "To Dapoli (hours)",
      journeyPlaceholder: "e.g. from a map app",
      sheetHeading: "Your comparison sheet",
      sheetSub:
        "For each row, set how much it matters to you and which place looks better for it. Look at recent photos, read the guides, and ask hotels in both places. Choose \"Not sure\" until you know.",
      hintEmpty:
        "Choose which place looks better for the rows that matter to you, and your result will appear here.",
      criteria: [
        { id: "beach",   label: "Beach and sea time",              hint: "Compare recent photos, and ask hotels about conditions on your dates.", defaultImportance: 1, defaultWinner: "?" },
        { id: "mood",    label: "Atmosphere",                       hint: "Quiet or lively? Ask each hotel how busy it gets on your dates.",     defaultImportance: 1, defaultWinner: "?" },
        { id: "see",     label: "Things to see and do",             hint: "Check what is nearby and how far it is.",                             defaultImportance: 1, defaultWinner: "?" },
        { id: "stay",    label: "Stays for your budget and style", hint: "Compare hotels, rates and what is included.",                         defaultImportance: 1, defaultWinner: "?" },
        { id: "food",    label: "Food you want",                    hint: "Ask about meals, timings and dietary needs.",                         defaultImportance: 1, defaultWinner: "?" },
        { id: "journey", label: "Journey from your home",           hint: "Filled from the journey times above, or choose yourself.",             defaultImportance: 1, defaultWinner: "?" },
      ],
    },

    {
      type: "guide",
      heading: "Can't decide? See both",
      toc: [{ id: "both", label: "See both" }],
      sections: [
        {
          id: "both",
          title: "See both",
          body: [
            `You do not have to choose. Depending on the distance, you may be able to stay in one place and visit the other, or split a longer trip. Check the travel time to Dapoli in a map app first, then see the [3-day Diveagar itinerary](guide:diveagar-3-day-itinerary) for how to plan a day out. If you are weighing a third place, see [Diveagar vs Harihareshwar](guide:diveagar-vs-harihareshwar).`,
          ],
        },
      ],
    },

    {
      type: "guide",
      heading: "Making the decision",
      toc: [
        { id: "ask", label: "Ask both places" },
        { id: "learn", label: "Learn more" },
      ],
      sections: [
        {
          id: "ask",
          title: "Ask the same questions in both places",
          body: [
            `To compare fairly, send the same questions to a stay in each town, then compare the answers.

- What is the walking time to the beach, and what are the sea conditions on my dates?
- What is included in the price, and what is your cancellation policy?
- What meals are available, at what times, and can you cater to my dietary needs?
- What is there to do nearby, and how far is it?
- How busy does it get on my dates?

Browse [hotels in Diveagar](guide:best-hotels-in-diveagar) and see [how to book](guide:how-to-book-diveagar-hotels).`,
          ],
        },
        {
          id: "learn",
          title: "Learn more about Diveagar",
          body: [
            `- [Is Diveagar worth visiting?](guide:is-diveagar-worth-visiting) A quiz to see whether it suits you.
- [What Diveagar is famous for.](guide:what-is-diveagar-famous-for)
- [Hotels near Diveagar Beach](guide:hotels-near-diveagar-beach) and [things to do at the beach](guide:diveagar-beach-things-to-do).
- Pick your dates with the [best time to visit Diveagar](guide:best-time-to-visit-diveagar).

Comparing more places? See [Diveagar vs Shrivardhan](guide:diveagar-vs-shrivardhan), [Diveagar vs Alibaug](guide:diveagar-vs-alibaug), [Diveagar vs Harihareshwar](guide:diveagar-vs-harihareshwar), or [all the Konkan beaches compared](guide:best-konkan-beaches-compared).`,
          ],
        },
      ],
    },

    {
      type: "faq",
      id: "faq",
      heading: "Diveagar or Dapoli: your questions answered",
      groups: [
        {
          items: [
            { q: "Which is better, Dapoli or Diveagar?",
              a: "It depends on what you want from the trip. Use the comparison sheet above to weigh beach time, atmosphere, things to see, stays, food and journey time for your own priorities.",
              open: true },
            { q: "Which beach is best, Dapoli or Diveagar?",
              a: "Beaches differ in how they feel and in conditions through the year, so compare recent photos and ask hotels in both places about the sea on your dates. See [the best month for Diveagar Beach](guide:best-month-diveagar-beach)." },
            { q: "Can I visit both Diveagar and Dapoli in one trip?",
              a: "It depends on the distance between them and the time you have. Check the travel time in a map app first, then see the [3-day itinerary](guide:diveagar-3-day-itinerary) for how to plan a day out." },
            { q: "Which is easier to reach?",
              a: "It depends on where you are starting from. Enter your own journey times in the comparison sheet above." },
            { q: "Which is better for families?",
              a: "Look at the stays and beach conditions in each place for your dates. See [family-friendly hotels in Diveagar](guide:family-friendly-hotels-diveagar) and ask hotels in both towns the same questions." },
            { q: "Where should I stay in Diveagar?",
              a: "Start with [the best hotels in Diveagar](guide:best-hotels-in-diveagar)." },
            { q: "When is the best time to visit?",
              a: "See the [best time to visit Diveagar](guide:best-time-to-visit-diveagar). Seasonal conditions on this coast are similar in nature, but confirm with a hotel in each place." },
          ],
        },
      ],
    },

    {
      type: "cta",
      heading: "Leaning towards Diveagar?",
      text:
        "Compare hotels, resorts and villas in Diveagar, then message the property directly on WhatsApp.",
      button: { label: "Browse hotels in Diveagar", guide: "best-hotels-in-diveagar" },
    }
  ],
};

export default guide;