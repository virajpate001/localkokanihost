// src/content/seo-guides/family-friendly-hotels-diveagar.js
//
// Content for the /family-friendly-hotels-diveagar guide page. Rendered by <GuidePage> (see
// src/components/seo-guide/GuidePage.jsx). Block types are documented in
// src/content/seo-guides/README.md. Brand name comes from SITE_NAME so it
// follows siteConfig. Links written as (guide:some-slug) only become real links
// once that page exists; until then they render as plain text.
const guide = {
  slug: "family-friendly-hotels-diveagar",
  metaTitle: "Family-Friendly Hotels in Diveagar: Rooms, Meals & Beach Access",
  metaDescription:
    "Find good hotels in Diveagar for families: family rooms, children's meals, pools and short walks to the beach. Plan your stay and get the right questions to ask.",
  trail: [
    {
      name: "Diveagar Travel Guide",
      slug: "diveagar-travel-guide",
    },
    {
      name: "Best Hotels in Diveagar",
      slug: "best-hotels-in-diveagar",
    },
    {
      name: "Family-Friendly Hotels",
    },
  ],
  hero: {
    h1: "Family-friendly hotels in Diveagar",
    lead: "A good family stay is about the details: how many people the room really takes, what children can eat, and how safe the walk to the beach is. Find family stays, then build a list of questions tailored to your group.",
    buttons: [
      {
        label: "See family stays",
        variant: "primary",
        href: "#stays",
      },
      {
        label: "Plan my family stay",
        variant: "ghost",
        href: "#plan-stay",
      },
    ],
  },
  blocks: [
    {
      type: "stays",
      id: "stays",
      heading: "What matters most to your family?",
      sub: "Pick what you need. Facilities are as reported by each property, so confirm them before you pay.",
      fine: "Browse [all hotels in Diveagar](guide:best-hotels-in-diveagar), or see [hotels near Diveagar Beach](guide:hotels-near-diveagar-beach).",
      destinationSlug: "diveagar",
      filterAriaLabel: "Filter family stays",
      filters: [
        {
          key: "all",
          label: "All family stays",
          note: "Every stay on this page.",
          match: {
            all: true,
          },
        },
        {
          key: "familyRoom",
          label: "Family rooms",
          note: "Rooms or suites for a family. Confirm how children count towards the room's capacity.",
          match: {
            fact: "familyRoom",
            is: true,
          },
        },
        {
          key: "kidsPool",
          label: "Children's pool",
          note: "A shallow area or small pool. Children should always be supervised.",
          match: {
            fact: "kidsPool",
            is: true,
          },
        },
        {
          key: "kidMeals",
          label: "Meals for children",
          note: "Children's meals or smaller portions. Ask about dinner timing.",
          match: {
            fact: "kidMeals",
            is: true,
          },
        },
        {
          key: "nearBeach",
          label: "Close to the beach",
          note: "On the beach or a short walk away. Ask for the time in minutes and whether the route is safe.",
          match: {
            fact: "nearBeach",
            is: true,
          },
        },
      ],
      include: {
        anyFact: ["familyRoom", "kidsPool", "kidMeals"],
      },
      card: {
        line: {
          fact: "beach",
          labels: {
            beachfront: "On the beach",
            walk: "Walk to the beach",
            drive: "Short drive to the beach",
          },
          fallback: "Ask for the distance to the beach",
        },
        chips: [
          {
            fact: "familyRoom",
            is: true,
            label: "Family room",
          },
          {
            fact: "kidsPool",
            is: true,
            label: "Children's pool",
          },
          {
            fact: "kidMeals",
            is: true,
            label: "Meals for children",
          },
          {
            fact: "nearBeach",
            is: true,
            label: "Close to the beach",
          },
        ],
      },
      message:
        "Hi, I found {name} on {site}. We are travelling with children. Please share availability, rates, and how children are counted for the room. Dates: ___ . Guests: ___ .",
      empty:
        "No stays match this filter yet. Choose another, or message us on WhatsApp and we will help you find one.",
      cta: "Check availability on WhatsApp",
    },
    {
      type: "planner",
      id: "plan-stay",
      heading: "Plan your family stay",
      sub: "Tell us who is travelling. We will list what to ask the hotel and write the message for you.",
      adultsLabel: "Adults",
      kidsLabel: "Children",
      ageLabel: "Youngest child",
      ageOptions: [
        {
          value: "infant",
          label: "Under 3 years",
        },
        {
          value: "child",
          label: "3 to 11 years",
        },
        {
          value: "teen",
          label: "12 years or older",
        },
      ],
      hotelLabel: "Hotel name (optional)",
      hotelPlaceholder: "The hotel you are considering",
      listHeading: "Ask the hotel",
      waLabel: "Send on WhatsApp",
      copyLabel: "Copy message",
      defaults: {
        adults: 2,
        kids: 1,
        age: "child",
      },
      adultsMax: 8,
      kidsMax: 5,
    },
    {
      type: "guide",
      heading: "Choosing a family hotel in Diveagar",
      toc: [
        {
          id: "needs",
          label: "What families need",
        },
        {
          id: "types",
          label: "Which stay type",
        },
        {
          id: "safety",
          label: "Safety checks",
        },
        {
          id: "pair",
          label: "Plan the trip",
        },
        {
          id: "faq",
          label: "FAQ",
        },
      ],
      sections: [
        {
          id: "needs",
          title: "What families need to check",
          body: [
            `| Need | What to ask |
| --- | --- |
| **Sleeping** | How many people the room takes, whether children count towards that, and whether an extra bed or cot is available and charged. |
| **Food** | Whether children's meals or smaller portions are available, and how early dinner is served. |
| **Water** | Distance to the beach and a safe route. If there is a pool, ask about depth and supervision. |
| **Space** | Whether a family room or two connecting rooms are available, and whether a villa would suit your group better. |
| **Getting around** | Whether there is parking, and whether the hotel can arrange transport if you have a stroller or small children. |`,
          ],
        },
        {
          id: "types",
          title: "Which type of stay suits a family?",
          body: [
            `> **Resorts** often have a pool, meals on site and more space for children to move around. Compare [resorts and villas](guide:luxury-hotels-resorts-diveagar).

> **Homestays and small hotels** can be good value and home-style food, but check room sizes and safety carefully.

> **Private villas** suit larger groups or two families travelling together. Confirm what is included in the price.

> **Close to the beach?** Check [hotels near Diveagar Beach](guide:hotels-near-diveagar-beach). **Want a pool?** See [hotels with a swimming pool](guide:diveagar-hotels-with-swimming-pool).`,
          ],
        },
        {
          id: "safety",
          title: "Safety checks for children",
          body: [
            `- Ask about stairs, balcony railings and any open water such as ponds or wells on the property.
- Ask whether the pool is fenced and how it is supervised. Children should always be watched near water.
- Ask the hotel what is safe on the beach on your dates, and follow local advice and any warning flags.
- Check the route from the hotel to the beach, especially after dark.

Ready to book? Read [how to book Diveagar hotels](guide:how-to-book-diveagar-hotels).`,
          ],
        },
        {
          id: "pair",
          title: "Plan the rest of the trip",
          body: [
            `- Pick your dates with the [best time to visit Diveagar](guide:best-time-to-visit-diveagar).
- Follow the [2-day Diveagar itinerary](guide:diveagar-2-day-itinerary). Coming from Pune? Read [the 2-day trip from Pune](guide:diveagar-2-day-trip-from-pune).
- Find activities in [things to do at Diveagar Beach](guide:diveagar-beach-things-to-do).
- Check [where to eat in Diveagar](guide:diveagar-food-hotels-restaurants).`,
          ],
        },
      ],
    },
    {
      type: "faq",
      id: "faq",
      heading: "Family stays in Diveagar: your questions answered",
      groups: [
        {
          items: [
            {
              q: "What are some good hotels in Diveagar for families?",
              a: "Look for stays with a family room or extra beds, children's food, and a safe route or short distance to the beach. Use the filters above, then confirm the details with the property on WhatsApp.",
              open: true,
            },
            {
              q: "Which hotels near the beach suit families?",
              a: "Choose a stay with a short, safe walk to the sand. See [hotels near Diveagar Beach](guide:hotels-near-diveagar-beach) and ask for the walking time in minutes.",
            },
            {
              q: "Are there Diveagar hotels with a children's pool?",
              a: 'Some stays report one. Use the "Children\'s pool" filter above and see [hotels with a swimming pool](guide:diveagar-hotels-with-swimming-pool). Always supervise children near water.',
            },
            {
              q: "Do hotels in Diveagar charge for children?",
              a: "Policies differ by property. Ask how children are counted for the room, whether an extra bed or meals are charged, and from what age. Use the planner above to write your question.",
            },
            {
              q: "Is a 2-day trip to Diveagar from Pune suitable with children?",
              a: "It can work if you plan the travel time. See [a 2-day trip to Diveagar from Pune](guide:diveagar-2-day-trip-from-pune).",
            },
            {
              q: "What is the best time to visit Diveagar with a family?",
              a: "Pick a season with comfortable weather and a safe sea. See [the best time to visit Diveagar](guide:best-time-to-visit-diveagar) and the [month-by-month beach guide](guide:best-month-diveagar-beach).",
            },
            {
              q: "What is the best way to book a family stay in Diveagar?",
              a: "Message the property on WhatsApp, confirm room size, extra beds and meals, and pay as agreed. See [how to book Diveagar hotels](guide:how-to-book-diveagar-hotels).",
            },
          ],
        },
      ],
    }
  ],
};

export default guide;
