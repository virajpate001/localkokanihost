// src/content/seo-guides/what-is-diveagar-famous-for.js
import { SITE_NAME } from "@/lib/siteConfig";

const guide = {
  slug: "what-is-diveagar-famous-for",
  metaTitle: "What Is Diveagar Famous For? Highlights, Food & Nearby",
  metaDescription:
    "What is Diveagar famous for? See the beach, temple, local food and nearby towns visitors come for, and build a shortlist for your trip.",
  trail: [
    { name: "Diveagar Travel Guide", slug: "diveagar-travel-guide" },
    { name: "What Diveagar Is Famous For" },
  ],
  hero: {
    h1: "What is Diveagar famous for?",
    lead:
      "Diveagar is known as a quiet beach town on the Konkan coast. Here is what visitors usually come for, and a shortlist builder so you can pick what to fit into your trip.",
    buttons: [
      { label: "See the highlights", variant: "primary", href: "#highlights" },
      { label: "My shortlist", variant: "ghost", href: "#shortlist" },
    ],
  },
  blocks: [
    {
      type: "answer",
      heading: "The short answer",
      md: `Diveagar is best known as a relaxed Konkan beach destination. Visitors usually come for the beach, a well-known temple, and simple local food, often combined with nearby coastal towns.

It is not known for nightlife or large attractions. If that matters to you, read [whether Diveagar is worth visiting](guide:is-diveagar-worth-visiting) first.`,
    },

    {
      type: "highlights",
      id: "highlights",
      heading: "Diveagar highlights",
      sub: "Pick a category, and tick \"Add to my list\" on anything you want to fit in. Always confirm opening hours and access locally before you go.",
      filterAriaLabel: "Filter highlights",
      pickLabel: "Add to my list",
      shortlistHeading: "My Diveagar shortlist",
      shortlistEmpty: "Nothing added yet. Tick \"Add to my list\" on the highlights above.",
      copyLabel: "Copy my list",
      itineraryLabel: "Fit it into a 2-day itinerary",
      categoryLabels: {
        beach: "Beach",
        culture: "Temple and culture",
        food: "Food",
        nearby: "Nearby",
      },
      filters: [
        { key: "all", label: "All highlights", note: "Everything on this page." },
        { key: "beach", label: "Beach", note: "Time by the sea." },
        { key: "culture", label: "Temple and culture", note: "Places many visitors include in their trip." },
        { key: "food", label: "Food", note: "Local meals to look out for." },
        { key: "nearby", label: "Nearby towns", note: "Coastal towns often combined with Diveagar." },
      ],
      places: [
        {
          id: "beach",
          name: "Diveagar Beach",
          cat: "beach",
          desc: "The main draw: a beach for walks and unhurried time by the sea. Conditions vary through the year.",
          check: "Ask your hotel what is safe on your dates.",
        },
        {
          id: "temple",
          name: "Suvarna Ganesh Temple",
          cat: "culture",
          desc: "A well-known temple that many visitors include in their trip.",
          check: "Confirm opening hours and any dress rules.",
        },
        {
          id: "food",
          name: "Konkan food",
          cat: "food",
          desc: "Konkan cooking typically features seafood, coconut and kokum, with vegetarian options as well.",
          check: "Ask your hotel about meal timings.",
        },
        {
          id: "nearby1",
          name: "Shrivardhan",
          cat: "nearby",
          desc: "A nearby coastal town that many visitors combine with Diveagar.",
          check: "Confirm distance and travel time from your hotel.",
        },
        {
          id: "nearby2",
          name: "Harihareshwar",
          cat: "nearby",
          desc: "Another nearby coastal destination that is often added to a longer trip.",
          check: "Confirm distance and travel time from your hotel.",
        },
      ],
    },

    {
      type: "guide",
      heading: "Getting the most out of Diveagar",
      toc: [
        { id: "food", label: "Local food" },
        { id: "combine", label: "Combine with nearby" },
        { id: "plan", label: "Plan your visit" },
      ],
      sections: [
        {
          id: "food",
          title: "Local food",
          body: [
            `Konkan cooking typically features seafood, coconut and kokum, alongside vegetarian options. Ask your hotel what local meals they serve and when, since small stays often have set meal timings. See [where to eat in Diveagar](guide:diveagar-food-hotels-restaurants) for hotels with good food.`,
          ],
        },
        {
          id: "combine",
          title: "Combine Diveagar with nearby towns",
          body: [
            `Many visitors pair Diveagar with other coastal towns nearby. Compare [Diveagar vs Shrivardhan](guide:diveagar-vs-shrivardhan) and [Diveagar vs Harihareshwar](guide:diveagar-vs-harihareshwar), or follow the [3-day itinerary](guide:diveagar-3-day-itinerary).`,
          ],
        },
        {
          id: "plan",
          title: "Plan your visit",
          body: [
            `- Pick your dates with the [best time to visit Diveagar](guide:best-time-to-visit-diveagar).
- Find activities in [things to do at Diveagar Beach](guide:diveagar-beach-things-to-do).
- Choose a stay in [best hotels in Diveagar](guide:best-hotels-in-diveagar), or see [hotels near Diveagar Beach](guide:hotels-near-diveagar-beach).
- Check [how to reach Diveagar](guide:how-to-reach-diveagar).`,
          ],
        },
      ],
    },

    {
      type: "faq",
      id: "faq",
      heading: "What Diveagar is famous for: your questions answered",
      groups: [
        {
          items: [
            {
              q: "What is Diveagar famous for?",
              a: "Diveagar is known as a quiet Konkan beach destination. Visitors usually come for the beach, a well-known temple and relaxed local food, often combined with nearby coastal towns.",
              open: true,
            },
            {
              q: "Is there a famous temple in Diveagar?",
              a: "The Suvarna Ganesh Temple is one of the places visitors most often include. Check its timings and any dress rules locally before you go.",
            },
            {
              q: "What food should I try in Diveagar?",
              a: "Konkan cooking typically features seafood, coconut and kokum, and vegetarian options are available too. See [where to eat in Diveagar](guide:diveagar-food-hotels-restaurants).",
            },
            {
              q: "How many days do I need to see Diveagar?",
              a: "Two days is enough for the main highlights at a relaxed pace, and three days leaves room for nearby towns. See the [2-day itinerary](guide:diveagar-2-day-itinerary) and [3-day itinerary](guide:diveagar-3-day-itinerary).",
            },
            {
              q: "Is Diveagar worth visiting?",
              a: "It suits people who want a quiet beach break. Read [is Diveagar worth visiting](guide:is-diveagar-worth-visiting) and take the quiz.",
            },
            {
              q: "What is the best time to visit Diveagar?",
              a: "See [the best time to visit Diveagar](guide:best-time-to-visit-diveagar) and the [best month for the beach](guide:best-month-diveagar-beach).",
            },
            {
              q: "Where should I stay in Diveagar?",
              a: "Start with [the best hotels in Diveagar](guide:best-hotels-in-diveagar).",
            },
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