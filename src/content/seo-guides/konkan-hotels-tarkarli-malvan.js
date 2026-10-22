// src/content/seo-guides/konkan-hotels-tarkarli-malvan.js
import { SITE_NAME } from "@/lib/siteConfig";

const guide = {
  slug: "konkan-hotels-tarkarli-malvan",
  metaTitle: "Best Hotels in Tarkarli and Malvan: Beach Stays and Water Sports",
  metaDescription:
    "Where to stay in Tarkarli and Malvan, Sindhudurg: beach resorts, homestays and hotels, water sports, Sindhudurg fort, Malvani food, how to get there from Mumbai and the best time to visit.",
  trail: [
    { name: "Best Hotels in Konkan", slug: "best-hotels-in-konkan" },
    { name: "Tarkarli and Malvan" },
  ],
  hero: {
    h1: "Best hotels in Tarkarli and Malvan",
    lead:
      "Clear water, a sea fort and the home of Malvani food in Sindhudurg district. Here is where to stay in Tarkarli and Malvan, what to do and how to get there.",
    buttons: [
      { label: "Hotels and stays", variant: "primary", href: "#picks" },
      { label: "Water sports and safety", variant: "ghost", href: "#water" },
    ],
  },
  blocks: [
    {
      type: "answer",
      heading: "The short answer",
      md: `Tarkarli suits beach and water-sports stays, and Malvan is the nearby town with Sindhudurg fort and the best local food. It is a long way from Mumbai, about 9\u201311 hours by road, so plan three or more days. Visit between October and May, and avoid the monsoon.`,
    },

    {
      type: "regionStays",
      id: "picks",
      heading: "Hotels and stays in Tarkarli and Malvan",
      sub:
        "Filter by area and stay type. Each listing is booked directly with the property over WhatsApp, with no booking fee.",
      typeFilterLabel: "Stay type",
      placeFilterLabel: "Area",
      allTypesLabel: "Any stay type",
      allPlacesLabel: "All areas",
      sampleLabel: "Sample listing",
      viewLabel: "View details",
      waLabel: "WhatsApp",
      empty:
        "No stays match yet. Try another area or type, or browse all hotels.",
      emptyCtaLabel: "Browse all Konkan hotels",
      fine: null,
      listings: [
        {
          name: "Your Tarkarli beach resort",
          place: "Tarkarli",
          types: ["Beach resort"],
          note: "Replace with a verified Tarkarli property.",
          href: "konkan-hotels",
          sample: true,
        },
        {
          name: "Your Tarkarli homestay",
          place: "Tarkarli",
          types: ["Homestay"],
          note: "Replace with a verified Tarkarli property.",
          href: "konkan-hotels",
          sample: true,
        },
        {
          name: "Your Malvan budget hotel",
          place: "Malvan",
          types: ["Budget hotel"],
          note: "Replace with a verified Malvan property.",
          href: "konkan-hotels",
          sample: true,
        },
        {
          name: "Your Malvan homestay",
          place: "Malvan",
          types: ["Homestay"],
          note: "Replace with a verified Malvan property.",
          href: "konkan-hotels",
          sample: true,
        },
        {
          name: "Your Devbag stay",
          place: "Devbag",
          types: ["Beach resort"],
          note: "Replace with a verified Devbag property.",
          href: "konkan-hotels",
          sample: true,
        },
      ],
    },

    {
      type: "guide",
      id: "compare",
      heading: "Tarkarli vs Malvan vs Devbag",
      toc: [],
      sections: [
        {
          id: "compare-table",
          title: "How the three areas differ",
          body: [
            `These places are close together, so it helps to know the difference.

| Area | Known for | Best for |
| --- | --- | --- |
| **Tarkarli** | Clear water, a long beach and the water-sports hub | Beach stays and activities |
| **Malvan** | The town with Sindhudurg fort, markets and Malvani restaurants | Food, the fort and local life |
| **Devbag** | Where the Karli river meets the sea, with quieter stretches | Quiet stays and backwater views |`,
          ],
        },
      ],
    },

    {
      type: "guide",
      id: "why",
      heading: "Why stay here",
      toc: [],
      sections: [
        {
          id: "why-list",
          title: "Five reasons Tarkarli and Malvan draw travellers",
          body: [
            `- **Clear water.** Tarkarli is known for some of the clearest water on the Konkan coast. Compare it in [best beach hotels in Konkan](guide:konkan-best-hotels-beach).
- **Water sports.** Snorkelling, scuba diving and boat rides are available in season.
- **Sindhudurg fort.** A sea fort off the coast at Malvan, reached by boat.
- **Malvani food.** The area is the heart of Malvani cooking. See [Malvani and Konkani food](guide:konkan-guide-malvani-food).
- **Homestays.** Local family stays are common. See [Konkan homestays and agro-tourism](guide:konkan-best-hotels-homestays).`,
          ],
        },
      ],
    },

    {
      type: "guide",
      id: "water",
      heading: "Water sports and safety",
      toc: [],
      sections: [
        {
          id: "water-body",
          title: "What to know before you go out on the water",
          body: [
            `Water sports such as snorkelling, scuba diving, parasailing and jet-ski rides are popular here, usually from around October to May.

- Use licensed, well-reviewed operators, and ask what safety gear and instruction they provide.
- Always wear a life jacket on boats and during water activities.
- Activities and boat trips are limited or stopped during monsoon, so check what is running on your dates. See [is Konkan open for tourism](guide:konkan-guide-is-konkan-open-for-tourism).
- Follow staff and local advice on sea conditions, and avoid swimming alone.`,
          ],
        },
      ],
    },

    {
      type: "guide",
      id: "reach",
      heading: "How to get to Tarkarli and Malvan from Mumbai",
      toc: [],
      sections: [
        {
          id: "reach-table",
          title: "Getting there",
          body: [
            `| Option | Details |
| --- | --- |
| **By road** | About 500–530 km from Mumbai, usually 9–11 hours depending on traffic. The route runs along NH66 and then onto state roads towards the coast. |
| **By train** | Konkan Railway to a station such as Kudal, then a road transfer to Malvan or Tarkarli. Confirm the best station and transfer time with your hotel. |
| **By air** | Check current flights to Sindhudurg's Chipi airport, and also consider flying into Goa and driving. Confirm distances and schedules before booking. |
| **Last stretch** | Village roads can be narrow, so ask your hotel for directions and whether they offer pickup. |

See also [distance from Mumbai by road](guide:konkan-guide-distance-from-mumbai).`,
          ],
        },
      ],
    },

    {
      type: "guide",
      id: "near",
      heading: "Things to do near Tarkarli and Malvan",
      toc: [],
      sections: [
        {
          id: "near-table",
          title: "Nearby places and tips",
          body: [
            `| Place | Why go | Tip |
| --- | --- | --- |
| **Sindhudurg fort** | A sea fort off the coast at Malvan, reached by boat | Check boat timings and sea conditions |
| **Tarkarli beach** | Clear water and a long beach | Swim only where it feels safe |
| **Snorkelling and scuba** | Marine life in clear water | Use licensed operators; not in monsoon |
| **Devbag and the river mouth** | Where the Karli river meets the sea | Go with local guides |
| **Rock Garden, Malvan** | A rocky shoreline and viewpoint in Malvan | Visit in daylight |
| **Malvani food** | Fish thali, sol kadhi and local snacks | Ask your host or hotel where to eat |

More ideas: [things to see in Konkan](guide:konkan-guide-things-to-see) and [best places to visit in Konkan](guide:konkan-guide-best-places-to-visit).`,
          ],
        },
      ],
    },

    {
      type: "seasonBar",
      id: "when",
      heading: "Best time to visit",
      sub:
        "October to February is best, with calm water, good visibility and water sports running. March to May is hot but still suitable for the coast. June to September is monsoon, when the sea is rough and most water sports and boat trips stop.",
      ariaLabel:
        "Month by month: October to February best, March to May hot, June to September monsoon",
      months: [
        { label: "Jan", band: "best" },
        { label: "Feb", band: "best" },
        { label: "Mar", band: "fair" },
        { label: "Apr", band: "fair" },
        { label: "May", band: "fair" },
        { label: "Jun", band: "monsoon" },
        { label: "Jul", band: "monsoon" },
        { label: "Aug", band: "monsoon" },
        { label: "Sep", band: "monsoon" },
        { label: "Oct", band: "best" },
        { label: "Nov", band: "best" },
        { label: "Dec", band: "best" },
      ],
      legend: [
        { band: "best", label: "Best" },
        { band: "fair", label: "Hot, still fine" },
        { band: "monsoon", label: "Monsoon" },
      ],
      fine:
        "See [best time to visit Konkan](guide:konkan-guide-best-time-to-visit).",
    },

    {
      type: "clusters",
      id: "related",
      heading: "Nearby destinations and stay types",
      sub: "",
      clusters: [
        {
          heading: "Explore more",
          desc: "",
          links: [
            { label: "Best hotels in Konkan", guide: "best-hotels-in-konkan", desc: "The full guide" },
            { label: "Hotels in Vengurla and Sindhudurg", guide: "konkan-hotels-vengurla-sindhudurg", desc: "Further south" },
            { label: "Hotels in Ganpatipule", guide: "konkan-hotels-ganpatipule", desc: "To the north" },
            { label: "Best beach hotels", guide: "konkan-best-hotels-beach", desc: "On the sand or a short walk away" },
            { label: "Sea-facing and sea-view hotels", guide: "konkan-best-hotels-sea-view", desc: "Rooms that look at the water" },
            { label: "Family and couple resorts", guide: "konkan-best-hotels-family-couples", desc: "Activities, privacy and quiet" },
          ],
        },
      ],
    },

    {
      type: "faq",
      id: "faq",
      heading: "Tarkarli and Malvan questions",
      groups: [
        {
          items: [
            {
              q: "What are the best hotels in Tarkarli?",
              a: "Tarkarli has beach resorts, homestays and budget hotels. Compare room category, distance to the beach, meals and what water activities the property can arrange. See [best hotels in Konkan](guide:best-hotels-in-konkan).",
              open: true,
            },
            {
              q: "Is Tarkarli good for water sports?",
              a: "Yes. It is known for snorkelling, scuba diving and boat rides, usually from around October to May. Use licensed operators and check what is running on your dates. See [best beach hotels](guide:konkan-best-hotels-beach).",
            },
            {
              q: "What is the difference between Tarkarli and Malvan?",
              a: "Tarkarli is the beach and water-sports area, while Malvan is the nearby town with Sindhudurg fort and many Malvani restaurants. They are only a short drive apart. See [things to see in Konkan](guide:konkan-guide-things-to-see).",
            },
            {
              q: "How far is Tarkarli from Mumbai?",
              a: "Roughly 500–530 km by road, usually 9–11 hours, so plan at least three days or break the journey. See [distance from Mumbai by road](guide:konkan-guide-distance-from-mumbai).",
            },
            {
              q: "What is the best time to visit Tarkarli?",
              a: "October to February has calm water and good visibility. Monsoon brings a rough sea, and most water sports and boat trips stop. See [best time to visit Konkan](guide:konkan-guide-best-time-to-visit).",
            },
            {
              q: "How do I get to Sindhudurg fort?",
              a: "The fort is on an island off Malvan and is reached by boat. Check timings and sea conditions with your hotel or the boat operators. See [is Konkan open for tourism](guide:konkan-guide-is-konkan-open-for-tourism).",
            },
          ],
        },
      ],
    },

    {
      type: "cta",
      heading: "Plan your Tarkarli stay",
      text:
        "Message the property directly on WhatsApp. Prices are in INR and there are no booking fees.",
      button: { label: "Browse all Konkan hotels", guide: "best-hotels-in-konkan" },
    },
  ],
};

export default guide;