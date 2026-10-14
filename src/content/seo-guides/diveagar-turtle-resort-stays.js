// src/content/seo-guides/diveagar-turtle-resort-stays.js
//
// Content for the /diveagar-turtle-resort-stays guide page. Rendered by <GuidePage> (see
// src/components/seo-guide/GuidePage.jsx). Block types are documented in
// src/content/seo-guides/README.md. Brand name comes from SITE_NAME so it
// follows siteConfig. Links written as (guide:some-slug) only become real links
// once that page exists; until then they render as plain text.
import { SITE_NAME } from "@/lib/siteConfig";

const guide = {
  slug: "diveagar-turtle-resort-stays",
  metaTitle: "Turtle Resort in Diveagar? What to Know Before You Book",
  metaDescription:
    "Is there a turtle resort in Diveagar? Learn what turtle-related stays really offer, how to check a hotel's claim, and how to watch turtles responsibly.",
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
      name: "Turtle-Related Stays",
    },
  ],
  hero: {
    h1: "Is there a turtle resort in Diveagar?",
    lead: "Do not book on the assumption that there is. Turtle activity on this coast depends on the beach, the season and the property. Use this page to check a claim before you pay for it.",
    buttons: [
      {
        label: "Check a hotel's turtle claim",
        variant: "primary",
        href: "#check",
      },
      {
        label: "See nature stays",
        variant: "ghost",
        href: "#stays",
      },
    ],
  },
  blocks: [
    {
      type: "answer",
      heading: "The short answer",
      md: `We cannot confirm that any hotel in Diveagar runs a dedicated "turtle resort". Some properties may mention turtles or nature activity, but what they offer, and when, varies. Sea turtle nesting happens at particular beaches and in a limited season, and sightings are never guaranteed.

Before you choose a stay because of turtles, ask the hotel the questions below, and read how to watch turtles responsibly.`,
    },
    {
      type: "stays",
      id: "stays",
      heading: "Stays with a nature focus",
      sub: `These properties told us about nature or turtle-related activity. Unless a card says "Confirmed by ${SITE_NAME}", the details come from the property and we have not checked them.`,
      fine: "Not set on turtles? Browse [all hotels in Diveagar](guide:best-hotels-in-diveagar) or [hotels near Diveagar Beach](guide:hotels-near-diveagar-beach).",
      destinationSlug: "diveagar",
      filterAriaLabel: "Filter nature stays",
      filters: [
        {
          key: "all",
          label: "All nature stays",
          note: "Every stay on this page.",
          match: {
            all: true,
          },
        },
        {
          key: "turtle",
          label: "Says it offers turtle activity",
          note: "These properties say they offer turtle-related activity. Use the claim checker below before you rely on it.",
          match: {
            fact: "claim",
            is: "turtle",
          },
        },
        {
          key: "nature",
          label: "Quiet, nature setting",
          note: "No turtle claim, but a quiet or natural setting.",
          match: {
            fact: "claim",
            is: "nature",
          },
        },
      ],
      include: {
        anyFact: ["turtle", "nature"],
      },
      card: {
        chips: [
          {
            fact: "claim",
            is: "turtle",
            label: "Turtle-related activity (reported)",
          },
          {
            fact: "claim",
            is: "nature",
            label: "Nature setting",
          },
          {
            fact: "beach",
            is: "beachfront",
            label: "On the beach",
          },
          {
            fact: "beach",
            is: "walk",
            label: "Walk to the beach",
          },
          {
            fact: "beach",
            is: "drive",
            label: "Short drive to the beach",
          },
        ],
        listedLabel: "What the property listed: ",
        unverifiedLabel: "Not independently verified",
      },
      message: {
        head: "Hi, I found {name} on {site}. ",
        extra: [
          {
            fact: "claim",
            is: "turtle",
            text: "Please tell me exactly what turtle-related activity you offer, at which beach and in which months. ",
          },
        ],
        tail: "Please share availability and rates. Dates: ___ . Guests: ___ .",
      },
      cta: "Ask on WhatsApp",
      empty:
        "No stays match this filter yet. Choose another, or message us on WhatsApp and we will help you find one.",
    },
    {
      type: "checker",
      id: "check",
      heading: "Check a hotel's turtle claim",
      sub: "Ask the hotel these questions on WhatsApp, then tick what they told you. The result shows how much to rely on the claim.",
      hotelLabel: "Hotel name (optional)",
      hotelPlaceholder: "The hotel you are asking",
      waLabel: "Send the questions on WhatsApp",
      copyLabel: "Copy questions",
      goodLegend: "Good signs: the hotel told me...",
      warnLegend: "Warning signs: the hotel...",
      positive: [
        "Which beach or site turtles nest at, or where hatchlings are released",
        "Which months it happens, and that it varies by year",
        "That they work with a local conservation group, village committee or the forest department",
        "That visits are guided, with rules on lights, noise, distance and photos",
        "That sightings are not guaranteed",
      ],
      red: [
        "Offered to let guests hold, feed or pose with turtles or hatchlings",
        "Promised a guaranteed sighting",
        "Keeps turtles in tanks or enclosures for guests to view",
      ],
      message: {
        intro:
          "Hi, I am considering {hotel} from {site} and I am interested in turtle-related activity. Could you please tell me:",
        questions: [
          "Which beach or site do turtles nest at, or where are hatchlings released?",
          "In which months does this happen, and does it vary by year?",
          "Do you work with a local conservation group, village committee or the forest department?",
          "Are visits guided, and what are the rules on lights, noise, distance and photos?",
          "Please confirm that sightings are not guaranteed.",
        ],
        outro: "Thank you.",
      },
      verdicts: {
        bad: "Warning: do not book for turtles with this hotel. Handling turtles, guaranteeing sightings or keeping them for display are signs of an unsafe or misleading offer. Choose a stay you would enjoy without the turtle claim.",
        good: "Good signs. The claim looks specific and responsible. Get the details in writing, including dates, and remember that sightings are never guaranteed.",
        mid: "Some good signs, but ask more. Find out the exact beach, the months and who runs the programme before you rely on this claim.",
        none: "Not enough information yet. Do not book for the turtles until the hotel answers these questions. Tick what they tell you above.",
      },
    },
    {
      type: "guide",
      heading: "Turtle stays near Diveagar: what to know",
      toc: [
        {
          id: "why",
          label: "Why it is tricky",
        },
        {
          id: "responsible",
          label: "Watching responsibly",
        },
        {
          id: "instead",
          label: "Plan around it",
        },
        {
          id: "faq",
          label: "FAQ",
        },
      ],
      sections: [
        {
          id: "why",
          title: "Why turtle stays are tricky to book",
          body: [
            `- **It is seasonal.** Nesting and hatching happen in a limited part of the year, usually in the cooler months. The exact timing varies by year and by beach.
- **It is beach-specific.** Turtles nest at certain beaches, not along the whole coast. A hotel being "near the sea" does not mean turtles nest there.
- **It is never guaranteed.** Wildlife does not follow a booking. Any hotel that promises a sighting is overselling.
- **It is regulated.** Sea turtles are protected under Indian law. Genuine programmes usually work with a local conservation group, village committee or the forest department.`,
          ],
        },
        {
          id: "responsible",
          title: "How to watch turtles responsibly",
          body: [
            `| Do | Do not |
| --- | --- |
| Follow the guide's instructions and keep a distance. | Touch, hold or pose with turtles or hatchlings. |
| Keep noise low and stay on marked paths. | Use flash photography, torches or bright lights near nesting areas. |
| Visit only through the local group or authority that runs the programme. | Pay anyone who offers to show or sell you a turtle or eggs. |
| Take your rubbish away with you. | Leave plastic or waste on the beach. |

If a hotel offers a turtle experience that breaks these rules, treat that as a reason to walk away.`,
          ],
        },
        {
          id: "instead",
          title: "Plan your trip around more than turtles",
          body: [
            `Since turtle sightings cannot be promised, choose a stay that you would enjoy without them.

- Choose a stay you like for the beach. See [hotels near Diveagar Beach](guide:hotels-near-diveagar-beach).
- For something special, compare [luxury hotels and resorts](guide:luxury-hotels-resorts-diveagar). Travelling with children? See [family-friendly hotels](guide:family-friendly-hotels-diveagar).
- Pick your dates with the [best time to visit Diveagar](guide:best-time-to-visit-diveagar) and the [best month for the beach](guide:best-month-diveagar-beach).
- Find other things to do in [what Diveagar is famous for](guide:what-is-diveagar-famous-for) and [things to do at the beach](guide:diveagar-beach-things-to-do).
- Still deciding if Diveagar is right for you? Read [is Diveagar worth visiting](guide:is-diveagar-worth-visiting).
- Compare nearby coastal destinations in [best Konkan beaches compared](guide:best-konkan-beaches-compared).

Ready to book? Read [how to book Diveagar hotels](guide:how-to-book-diveagar-hotels).`,
          ],
        },
      ],
    },
    {
      type: "faq",
      id: "faq",
      heading: "Turtles and stays in Diveagar: your questions answered",
      groups: [
        {
          items: [
            {
              q: "Is there a turtle resort in Diveagar?",
              a: "We cannot confirm a dedicated turtle resort in Diveagar. Some properties may offer nature or turtle-related activity, but you should confirm exactly what, where and when directly with the property before you book.",
              open: true,
            },
            {
              q: "Can I be sure of seeing turtles if I stay at a hotel?",
              a: "No. Turtle nesting and hatching are seasonal and depend on the beach and the year. Be wary of any hotel that guarantees a sighting.",
            },
            {
              q: "When is the best time to see turtles on the Konkan coast?",
              a: "Nesting and hatching usually happen in the cooler months, but the timing varies by beach and by year. Ask the property or the local organisers for current dates.",
            },
            {
              q: "Are there turtle festivals near Diveagar?",
              a: "Some villages on the Konkan coast organise turtle festivals, and dates change from year to year. Check with the local organisers or your hotel before you plan around one.",
            },
            {
              q: "Is it okay to touch or hold a turtle hatchling?",
              a: "No. Sea turtles are protected, and handling hatchlings can harm them. Follow your guide's instructions and keep a distance.",
            },
            {
              q: "Which hotels near the beach are good if I do not see turtles?",
              a: "Choose a stay for the beach and facilities you enjoy. See [hotels near Diveagar Beach](guide:hotels-near-diveagar-beach) and the [best time to visit Diveagar](guide:best-time-to-visit-diveagar).",
            },
          ],
        },
      ],
    },
    {
      type: "plan",
      id: "plan",
      heading: "More ways to plan your stay",
      sub: "Other hotel guides and trip planning pages.",
      columns: [
        {
          heading: "Other stays",
          links: [
            {
              label: "All hotels in Diveagar",
              guide: "best-hotels-in-diveagar",
            },
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
          ],
        },
        {
          heading: "When and how",
          links: [
            {
              label: "Best time to visit",
              guide: "best-time-to-visit-diveagar",
            },
            {
              label: "Best month for the beach",
              guide: "best-month-diveagar-beach",
            },
            {
              label: "How to book",
              guide: "how-to-book-diveagar-hotels",
            },
            {
              label: "How to reach Diveagar",
              guide: "how-to-reach-diveagar",
            },
          ],
        },
        {
          heading: "Explore Diveagar",
          links: [
            {
              label: "What Diveagar is famous for",
              guide: "what-is-diveagar-famous-for",
            },
            {
              label: "Is Diveagar worth visiting?",
              guide: "is-diveagar-worth-visiting",
            },
            {
              label: "Things to do at the beach",
              guide: "diveagar-beach-things-to-do",
            },
            {
              label: "2-day itinerary",
              guide: "diveagar-2-day-itinerary",
            },
          ],
        },
        {
          heading: "Compare",
          links: [
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
  ],
};

export default guide;
