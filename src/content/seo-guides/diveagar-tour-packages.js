// src/content/seo-guides/diveagar-tour-packages.js
const guide = {
  slug: "diveagar-tour-packages",
  metaTitle: "Diveagar Tour Packages: What to Compare Before You Buy",
  metaDescription:
    "Looking at Diveagar tour packages? Compare up to three quotes by price per person per night and inclusions, spot warning signs, and ask for an itemised quote.",
  trail: [
    { name: "Diveagar Travel Guide", slug: "diveagar-travel-guide" },
    { name: "Diveagar Tour Packages" },
  ],
  hero: {
    h1: "Diveagar tour packages: what to compare before you buy",
    lead:
      "Packages vary a lot by operator, season and group size, and the cheapest one is rarely the best value. Compare up to three quotes side by side, then ask for the missing details.",
    buttons: [
      { label: "Compare packages", variant: "primary", href: "#compare" },
      { label: "Ask for a quote", variant: "ghost", href: "#quote" },
    ],
  },
  blocks: [
    {
      type: "answer",
      heading: "The short answer",
      md: `Diveagar tour packages differ by operator, season and group size, so there is no single standard offer. Whatever you are quoted, ask for an itemised list of what is included, and compare the price per person per night rather than the headline total.

A package can save effort if you do not have your own transport or have limited time. If you do, booking a stay directly may be simpler. See [how to book Diveagar hotels](guide:how-to-book-diveagar-hotels).`,
    },

    {
      type: "packageComparer",
      id: "compare",
      heading: "Compare up to three packages",
      sub:
        "Enter each quote and tick what it includes. We will work out the price per person per night and show what is missing.",
      count: 3,
      nameLabel: "Name (optional)",
      namePlaceholder: "e.g. Operator A",
      priceLabel: "Total price (\u20B9)",
      pricePlaceholder: "e.g. 18000",
      nightsLabel: "Nights",
      nightsPlaceholder: "e.g. 2",
      guestsLabel: "Number of guests",
      guestsPlaceholder: "e.g. 3",
      inclusionsLegend: "Included",
      inclusions: [
        "Stay",
        "Meals",
        "Transport from your city",
        "Local sightseeing transport",
        "Pickup and drop",
        "Guide",
        "Entry fees",
        "Taxes",
      ],
      hintFewer: "Fill in at least two packages to compare them.",
      note:
        "The lowest price per person per night is only a fair comparison if the inclusions match. A package with fewer inclusions may cost more once you add the missing items. Ask each operator to confirm what is and is not included, in writing.",
    },

    {
      type: "bookingBuilder",
      id: "quote",
      heading: "Ask for an itemised quote",
      sub:
        "Tell the operator or property what you need, and ask them to list everything that is included.",
      fields: [
        { key: "from",   label: "Starting from",    placeholder: "e.g. Pune" },
        { key: "dates",  label: "Dates",            placeholder: "e.g. 14 to 16 Nov" },
        { key: "nights", label: "Number of nights", placeholder: "e.g. 2" },
        { key: "guests", label: "Guests",           placeholder: "e.g. 2 adults, 1 child" },
      ],
      extrasLegend: "What do you want included?",
      extras: [
        { value: "stay", label: "Stay", checked: true },
        { value: "meals", label: "Meals", checked: true },
        { value: "transport from your city", label: "Transport from your city" },
        { value: "local sightseeing transport", label: "Local sightseeing transport" },
        { value: "pickup and drop", label: "Pickup and drop" },
        { value: "a guide", label: "Guide" },
        { value: "entry fees", label: "Entry fees" },
        { value: "taxes", label: "Taxes" },
      ],
      messageTemplate:
        "Hi, I am looking for a Diveagar package starting from {from} through {site}. Dates: {dates}. Nights: {nights}. Guests: {guests}.\nWe would like it to include: {extras}.\nCould you please send:\n1. An itemised list of what is included and what is not.\n2. The total price, and the price per person.\n3. The name of the hotel and the room type.\n4. The payment schedule and your cancellation policy, in writing.\nThank you.",
      waLabel: "Send on WhatsApp",
      copyLabel: "Copy message",
    },

    {
      type: "guide",
      heading: "Choosing a package",
      toc: [
        { id: "vs", label: "Package or DIY?" },
        { id: "flags", label: "Warning signs" },
        { id: "next", label: "Plan the rest" },
      ],
      sections: [
        {
          id: "vs",
          title: "Package or do it yourself?",
          body: [
            `| A package may suit you if | Booking directly may suit you if |
| --- | --- |
| You do not have your own transport. | You are driving yourself. |
| You want one price and one person to deal with. | You want to choose your own stay and meals. |
| You have limited time to plan. | You enjoy planning, or have a specific hotel in mind. |
| You are travelling as a larger group. | You want flexibility to change plans on the way. |

Not sure what to see? Use the [2-day](guide:diveagar-2-day-itinerary) or [3-day itinerary builder](guide:diveagar-3-day-itinerary) to plan your days first. Then ask any package to match it.`,
          ],
        },
        {
          id: "flags",
          title: "Warning signs in a package",
          body: [
            `- The inclusions are vague, with no itemised list.
- The hotel is not named, or can be changed without notice.
- The cancellation and refund terms are unclear or not in writing.
- You are pushed to pay the full amount straight away.
- The itinerary packs in more than the travel time allows. Check against [how to reach Diveagar](guide:how-to-reach-diveagar).

Whatever you choose, keep a written record of the quote, what is included and any payment receipts.`,
          ],
        },
        {
          id: "next",
          title: "Plan the rest of your trip",
          body: [
            `- Compare stays in [best hotels in Diveagar](guide:best-hotels-in-diveagar).
- Check meal plans in [where to eat in Diveagar](guide:diveagar-food-hotels-restaurants).
- Pick the right season with the [best time to visit Diveagar](guide:best-time-to-visit-diveagar).
- Coming from Pune? Read the [2-day trip from Pune](guide:diveagar-2-day-trip-from-pune).`,
          ],
        },
      ],
    },

    {
      type: "faq",
      id: "faq",
      heading: "Diveagar tour packages: your questions answered",
      groups: [
        {
          items: [
            {
              q: "What are the available Diveagar tour packages?",
              a: "Packages vary by operator, season and group size. Use the comparison tool on this page to check what each quote includes, and ask for an itemised list before you decide.",
              open: true,
            },
            {
              q: "Are packages cheaper than booking separately?",
              a: "Sometimes, but not always. Compare the price per person per night and what is included, and check the total against booking a stay yourself. See [hotels in Diveagar](guide:best-hotels-in-diveagar).",
            },
            {
              q: "What should a Diveagar package include?",
              a: "At minimum, ask whether it covers the stay, meals, transport, local sightseeing, entry fees and taxes. The comparison tool above lists these so you can see what is missing.",
            },
            {
              q: "Can I customise a package?",
              a: "Often you can. Use the quote builder to say what you want, including dates, nights and inclusions.",
            },
            {
              q: "Should I pay the full amount in advance?",
              a: "Be cautious. Ask for the payment schedule and cancellation terms in writing, and keep a receipt for every payment.",
            },
            {
              q: "What happens if the weather is bad?",
              a: "Ask the operator what happens to the itinerary and the payment if weather affects your trip, especially in the monsoon. See the [best time to visit Diveagar](guide:best-time-to-visit-diveagar).",
            },
            {
              q: "Can I just book a stay without a package?",
              a: "Yes. Read [how to book Diveagar hotels](guide:how-to-book-diveagar-hotels).",
            },
          ],
        },
      ],
    },

    {
      type: "cta",
      heading: "Prefer to book a stay directly?",
      text:
        "Compare hotels, resorts and villas in Diveagar, then message the property directly on WhatsApp.",
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