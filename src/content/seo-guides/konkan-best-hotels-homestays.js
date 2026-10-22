// src/content/seo-guides/konkan-best-hotels-homestays.js
import { SITE_NAME } from "@/lib/siteConfig";

const guide = {
  slug: "konkan-best-hotels-homestays",
  metaTitle: "Best Homestays and Agro-Tourism Stays in Konkan",
  metaDescription:
    "Stay with local hosts in Konkan: the best homestays and farm stays, what to expect, home-cooked Konkani food, activities by season, and how to choose and book.",
  trail: [
    { name: "Best Hotels in Konkan", slug: "best-hotels-in-konkan" },
    { name: "Homestays and Agro-Tourism" },
  ],
  hero: {
    h1: "Best homestays and agro-tourism stays in Konkan",
    lead:
      "Stay with a local family or on a working farm, eat home-cooked Konkani food, and see the coast beyond the beach resorts.",
    buttons: [
      { label: "Homestays and farm stays", variant: "primary", href: "#picks" },
      { label: "What to expect", variant: "ghost", href: "#what" },
    ],
  },
  blocks: [
    {
      type: "answer",
      heading: "The short answer",
      md: `A Konkan homestay gives you a simple room, home-cooked meals and a local host, often among coconut, mango or cashew orchards. It suits travellers who want an authentic, relaxed stay rather than hotel services. Confirm meals, bathrooms and access before you book.`,
    },

    {
      type: "regionStays",
      id: "picks",
      heading: "Homestays and farm stays in Konkan to book",
      sub:
        "Filter by destination and the kind of stay. Each listing is booked directly with the host over WhatsApp, with no booking fee.",
      typeFilterLabel: "Stay type",
      placeFilterLabel: "Destination",
      allTypesLabel: "Any stay type",
      allPlacesLabel: "All destinations",
      sampleLabel: "Sample listing",
      viewLabel: "View details",
      waLabel: "WhatsApp",
      empty:
        "No stays match yet. Try another destination or stay type, or browse all stays.",
      emptyCtaLabel: "Browse all Konkan stays",
      fine: null,
      listings: [
        {
          name: "Your Dapoli farm stay",
          place: "Dapoli",
          types: ["Farm stay"],
          note: "Replace with a verified Dapoli property.",
          href: "konkan-hotels-dapoli",
          sample: true,
        },
        {
          name: "Your Shrivardhan homestay",
          place: "Shrivardhan",
          types: ["Homestay"],
          note: "Replace with a verified Shrivardhan property.",
          href: "konkan-hotels-shrivardhan",
          sample: true,
        },
        {
          name: "Your Diveagar homestay",
          place: "Diveagar",
          types: ["Homestay"],
          note: "Replace with a verified Diveagar property.",
          href: "konkan-hotels-diveagar",
          sample: true,
        },
        {
          name: "Your Ganpatipule homestay",
          place: "Ganpatipule",
          types: ["Homestay"],
          note: "Replace with a verified Ganpatipule property.",
          href: "konkan-hotels-ganpatipule",
          sample: true,
        },
        {
          name: "Your Tarkarli homestay",
          place: "Tarkarli-Malvan",
          types: ["Homestay"],
          note: "Replace with a verified Tarkarli or Malvan property.",
          href: "konkan-hotels-tarkarli-malvan",
          sample: true,
        },
        {
          name: "Your Vengurla farm stay",
          place: "Vengurla",
          types: ["Farm stay"],
          note: "Replace with a verified Vengurla property.",
          href: "konkan-hotels-vengurla-sindhudurg",
          sample: true,
        },
      ],
    },

    {
      type: "guide",
      id: "what",
      heading: "What is a Konkan homestay or agro-tourism stay?",
      toc: [],
      sections: [
        {
          id: "what-body",
          title: "Two closely related kinds of stay",
          body: [
            `A homestay is a room in or beside a local family's home, usually with meals cooked by the host. An agro-tourism or farm stay is on a working farm or orchard, where you can see how coconuts, mangoes, cashews, kokum or rice are grown. Some properties are both.

Compared with a hotel, you get less formal service and more local character. Compared with a [budget hotel](guide:konkan-best-hotels-budget), a homestay often includes meals and a personal welcome.

| | Homestay | Farm stay | Hotel or resort |
| --- | --- | --- | --- |
| **Setting** | In or beside a family home | On an orchard or working farm | Purpose-built property |
| **Meals** | Home-cooked, usually included or on request | Home-cooked, often with farm produce | Restaurant, sometimes included |
| **Service** | Personal and informal | Personal and informal | Formal, with staff and facilities |
| **Best for** | Local feel and quiet | Nature, food and learning | Comfort, pool and amenities |`,
          ],
        },
      ],
    },

    {
      type: "guide",
      id: "food",
      heading: "Food and things to do",
      toc: [],
      sections: [
        {
          id: "food-body",
          title: "What to expect from a homestay",
          body: [
            `Meals are a highlight. Hosts commonly serve Konkani and Malvani home cooking, such as fish thali, sol kadhi, bhakri and seasonal vegetables, and many can cater to vegetarian guests if you ask in advance. For restaurants nearby, see [where to eat Malvani and Konkani food](guide:konkan-guide-malvani-food).

- Walk through orchards, paddy fields and the village.
- Learn home cooking from your host, if they offer it.
- Pick seasonal fruit where the farm allows it. Mango season is in the hot months, so ask your host what is in season.
- Go to a nearby beach, fort or temple. See [things to see in Konkan](guide:konkan-guide-things-to-see).
- Take a fishing-village or boat outing if the host can arrange one.`,
          ],
        },
      ],
    },

    {
      type: "guide",
      id: "expect",
      heading: "What to expect and what to ask",
      toc: [],
      sections: [
        {
          id: "expect-table",
          title: "Questions before you book",
          body: [
            `| Ask about | Why |
| --- | --- |
| **Meals and diet** | What is cooked, at what times, and whether vegetarian or other dietary needs are covered |
| **Bathroom and room** | Attached bathroom, hot water, fan or air conditioning, and bedding |
| **Getting there** | Road condition, last-mile directions and whether the host can arrange pickup |
| **Power and signal** | Backup for power cuts and mobile or internet signal, which can be patchy in villages |
| **Activities** | What is included and what costs extra, such as farm walks, boat trips or cooking |
| **Privacy and house rules** | Shared spaces, quiet hours, alcohol and visitor rules, and check-in times |
| **Season and weather** | Conditions on your dates, especially in monsoon when paths are wet |`,
          ],
        },
      ],
    },

    {
      type: "clusters",
      id: "where",
      heading: "Where to find homestays in Konkan",
      sub:
        "Homestays are scattered along the whole coast, with the most choice in the quieter small towns and villages.",
      clusters: [
        {
          heading: "Destinations",
          desc: "",
          links: [
            { label: "Dapoli and Murud-Harnai", guide: "konkan-hotels-dapoli-harnai", desc: "Orchards, beaches and fishing villages" },
            { label: "Shrivardhan", guide: "konkan-hotels-shrivardhan", desc: "Quiet coastal stays" },
            { label: "Diveagar", guide: "konkan-hotels-diveagar", desc: "Beach-town homestays" },
            { label: "Ganpatipule", guide: "konkan-hotels-ganpatipule", desc: "Near the beach and temple" },
            { label: "Tarkarli and Malvan", guide: "konkan-hotels-tarkarli-malvan", desc: "Home stays near water-sports beaches" },
            { label: "Vengurla and Sindhudurg", guide: "konkan-hotels-vengurla-sindhudurg", desc: "Far south, quiet and rural" },
          ],
        },
      ],
    },

    {
      type: "prose",
      id: "season",
      heading: "When to go",
      md: `October to February is the most comfortable time, with dry weather and easy travel on village roads. March to May is hot, but it is fruit season on many farms. In monsoon (June to September) the countryside is at its greenest and prices are lowest, but paths are wet and travel is slower. See [best time to visit Konkan](guide:konkan-guide-best-time-to-visit) and [monsoon stays](guide:konkan-guide-monsoon-stays).`,
    },

    {
      type: "clusters",
      id: "related",
      heading: "More Konkan stays",
      sub: "",
      clusters: [
        {
          heading: "Other stay types",
          desc: "",
          links: [
            { label: "Best hotels in Konkan", guide: "best-hotels-in-konkan", desc: "The full guide" },
            { label: "Budget hotels", guide: "konkan-best-hotels-budget", desc: "Simple stays near the beach" },
            { label: "Best beach hotels", guide: "konkan-best-hotels-beach", desc: "On the sand or a short walk away" },
            { label: "Family and couple resorts", guide: "konkan-best-hotels-family-couples", desc: "Activities, privacy and quiet" },
            { label: "Malvani and Konkani food", guide: "konkan-guide-malvani-food", desc: "Where to eat" },
            { label: "How to plan a Konkan trip", guide: "konkan-guide-how-to-plan-a-trip", desc: "Itineraries" },
          ],
        },
      ],
    },

    {
      type: "faq",
      id: "faq",
      heading: "Homestay questions",
      groups: [
        {
          items: [
            {
              q: "What is agro-tourism in Konkan?",
              a: "Agro-tourism means staying on or visiting a working farm or orchard, where you can see how crops like coconut, mango, cashew and rice are grown and eat food made from local produce. See [best hotels in Konkan](guide:best-hotels-in-konkan).",
              open: true,
            },
            {
              q: "Are homestays in Konkan safe?",
              a: "Homestays are a popular way to stay, but standards vary. Check recent guest feedback, confirm a contact number for the host, and ask about the room, bathroom and access road before booking. See [how to choose a Konkan hotel](guide:konkan-guide-how-to-choose-a-hotel).",
            },
            {
              q: "Are meals included in a Konkan homestay?",
              a: "Often, but not always. Many hosts include breakfast or all meals, and others offer them on request. Confirm what is included and the cost of extra meals. See [Malvani and Konkani food](guide:konkan-guide-malvani-food).",
            },
            {
              q: "Which Konkan area is best for a homestay?",
              a: "Dapoli, Shrivardhan, Diveagar, Ganpatipule and Tarkarli have a good spread of homestays. Choose by the beach or activities you want nearby. See [Dapoli and Murud-Harnai](guide:konkan-hotels-dapoli-harnai).",
            },
            {
              q: "Are homestays cheaper than hotels in Konkan?",
              a: "They often are, especially in small towns, and many include home-cooked meals. Compare similar rooms on the same dates and check what each price includes. See [budget hotels](guide:konkan-best-hotels-budget).",
            },
            {
              q: "When is the best time to stay on a Konkan farm?",
              a: "October to February is comfortable and dry. March to May is hot but it is fruit season on many farms. Monsoon is green and cheaper, with wetter paths. See [best time to visit Konkan](guide:konkan-guide-best-time-to-visit).",
            },
          ],
        },
      ],
    },

    {
      type: "cta",
      heading: "Find a local stay",
      text:
        "Message the host directly on WhatsApp. Prices are in INR and there are no booking fees.",
      button: { label: "Browse all Konkan stays", guide: "best-hotels-in-konkan" },
    },
  ],
};

export default guide;