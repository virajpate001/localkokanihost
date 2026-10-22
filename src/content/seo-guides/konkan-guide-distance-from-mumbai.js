// src/content/seo-guides/konkan-guide-distance-from-mumbai.js
const guide = {
  slug: "konkan-guide-distance-from-mumbai",
  metaTitle: "How Far Is Konkan from Mumbai by Road? Distance and Drive Time to Every Destination",
  metaDescription:
    "How far is Konkan from Mumbai by road? Distances and drive times to Alibaug, Kashid, Diveagar, Shrivardhan, Harihareshwar, Dapoli, Ganpatipule, Tarkarli and Vengurla, plus distances from Pune and nearest railway stations.",
  trail: [
    { name: "Distance from Mumbai" },
  ],
  hero: {
    h1: "How far is Konkan from Mumbai by road?",
    lead:
      "It depends on where on the coast you are going. Alibaug is about 100 km away, while Tarkarli is more than 500 km. Here are distances and drive times to every destination.",
    buttons: [
      { label: "Find by drive time", variant: "primary", href: "#finder" },
      { label: "Full distance table", variant: "ghost", href: "#table" },
    ],
  },
  blocks: [
    {
      type: "answer",
      heading: "The short answer",
      md: `Konkan stretches along about 720 km of coast. From Mumbai, Alibaug is about 100 km (2\u20133 hours), Diveagar and Shrivardhan about 170\u2013190 km (4\u20135 hours), Dapoli about 215\u2013225 km, Ganpatipule about 340\u2013375 km, and Tarkarli and Malvan 500 km or more (10 hours or more).`,
    },

    {
      type: "driveTimeFinder",
      id: "finder",
      heading: "How far can you drive?",
      sub:
        "Drag the slider to the longest one-way drive you are happy with, and see which destinations fit.",
      hoursSuffix: "hours one way",
      sliderAriaLabel: "Maximum one-way drive time in hours",
      sliderMin: 2,
      sliderMax: 12,
      sliderStep: 0.5,
      defaultHours: 5,
      rangePrefix: "About",
      cta: "Hotels and plans",
      empty: "No destinations fit in that time. Try 2.5 hours or more.",
      destinations: [
        { name: "Alibaug",             district: "Raigad",     kmLow: 95,  kmHigh: 110, hoursLow: 2,   hoursHigh: 3,   slug: "konkan-hotels-alibaug-kashid-murud" },
        { name: "Kashid",              district: "Raigad",     kmLow: 125, kmHigh: 135, hoursLow: 2.5, hoursHigh: 3.5, slug: "konkan-hotels-alibaug-kashid-murud" },
        { name: "Murud-Janjira",       district: "Raigad",     kmLow: 150, kmHigh: 170, hoursLow: 3.5, hoursHigh: 4.5, slug: "konkan-hotels-alibaug-kashid-murud" },
        { name: "Diveagar",            district: "Raigad",     kmLow: 170, kmHigh: 190, hoursLow: 4,   hoursHigh: 5.5, slug: "konkan-hotels-diveagar" },
        { name: "Shrivardhan",         district: "Raigad",     kmLow: 175, kmHigh: 200, hoursLow: 4,   hoursHigh: 5.5, slug: "konkan-hotels-shrivardhan" },
        { name: "Harihareshwar",       district: "Raigad",     kmLow: 185, kmHigh: 205, hoursLow: 4.5, hoursHigh: 5.5, slug: "konkan-hotels-harihareshwar" },
        { name: "Dapoli",              district: "Ratnagiri",  kmLow: 215, kmHigh: 230, hoursLow: 5,   hoursHigh: 6,   slug: "konkan-hotels-dapoli-harnai" },
        { name: "Ganpatipule",         district: "Ratnagiri",  kmLow: 340, kmHigh: 375, hoursLow: 6.5, hoursHigh: 8,   slug: "konkan-hotels-ganpatipule" },
        { name: "Tarkarli and Malvan", district: "Sindhudurg", kmLow: 500, kmHigh: 550, hoursLow: 9.5, hoursHigh: 11.5, slug: "konkan-hotels-tarkarli-malvan" },
        { name: "Vengurla",            district: "Sindhudurg", kmLow: 540, kmHigh: 590, hoursLow: 10,  hoursHigh: 12,  slug: "konkan-hotels-vengurla-sindhudurg" },
      ],
    },

    {
      type: "guide",
      id: "table",
      heading: "Distance from Mumbai to each destination",
      toc: [],
      sections: [
        {
          id: "table-body",
          title: "Approximate distances and drive times",
          body: [
            `| Destination | District | Road distance | Typical drive |
| --- | --- | --- | --- |
| **Alibaug** | Raigad | About 95–110 km | 2–3 hours |
| **Kashid** | Raigad | About 125–135 km | 2.5–3.5 hours |
| **Murud-Janjira** | Raigad | About 150–170 km | 3.5–4.5 hours |
| **Diveagar** | Raigad | About 170–190 km | 4–5.5 hours |
| **Shrivardhan** | Raigad | About 175–200 km | 4–5.5 hours |
| **Harihareshwar** | Raigad | About 185–205 km | 4.5–5.5 hours |
| **Dapoli** | Ratnagiri | About 215–230 km | 5–6 hours |
| **Ganpatipule** | Ratnagiri | About 340–375 km | 6.5–8 hours |
| **Tarkarli and Malvan** | Sindhudurg | About 500–550 km | 9.5–11.5 hours |
| **Vengurla** | Sindhudurg | About 540–590 km | 10–12 hours |

Distances are approximate and rounded. Drive times assume normal traffic and are longer on winter weekends and during the monsoon.`,
          ],
        },
      ],
    },

    {
      type: "guide",
      id: "why",
      heading: "Why different sources give different numbers",
      toc: [],
      sections: [
        {
          id: "why-list",
          title: "Why distances vary",
          body: [
            `- **Route.** Some destinations can be reached by more than one road, such as the NH66 coastal highway or routes via Mahad or the Mumbai–Pune highway.
- **Starting point.** Mumbai is large, so distances from the north and south of the city differ by several kilometres.
- **End point.** "Shrivardhan" or "Tarkarli" can mean the town centre or a beach or hotel several kilometres away.
- **Ferries and shortcuts.** A ferry can shorten the trip to Alibaug, although services stop in the monsoon. See [is Konkan open for tourism](guide:konkan-guide-is-konkan-open-for-tourism).

Treat the figures above as a planning guide and confirm your exact route with your hotel or a maps app.`,
          ],
        },
      ],
    },

    {
      type: "guide",
      id: "pune",
      heading: "Distance from Pune",
      toc: [],
      sections: [
        {
          id: "pune-table",
          title: "Approximate distances from Pune",
          body: [
            `| Destination | Approx. distance from Pune |
| --- | --- |
| **Diveagar and Shrivardhan** | About 157–170 km via Tamhini Ghat |
| **Harihareshwar** | About 190 km |
| **Ganpatipule** | About 330 km via Satara |
| **Tarkarli and Malvan** | About 410 km |`,
          ],
        },
      ],
    },

    {
      type: "guide",
      id: "train",
      heading: "Nearest railway stations",
      toc: [],
      sections: [
        {
          id: "train-table",
          title: "Nearest Konkan Railway station, then road transfer",
          body: [
            `If you are not driving the whole way, a Konkan Railway station plus a road transfer can be easier. Confirm the best station and transfer time with your hotel.

| Destination | Commonly used station | Then |
| --- | --- | --- |
| **Shrivardhan, Diveagar, Harihareshwar** | Mangaon | A road transfer of roughly 55 km or more, depending on the destination |
| **Dapoli and Harnai** | A station such as Khed | A road transfer of an hour or more; confirm with your hotel |
| **Ganpatipule** | Ratnagiri | A road transfer of about 25–30 km |
| **Tarkarli and Malvan** | Kudal | A road transfer of about 45 km |
| **Vengurla** | Kudal or Sawantwadi Road | A road transfer; confirm with your hotel |`,
          ],
        },
      ],
    },

    {
      type: "guide",
      id: "tips",
      heading: "Driving tips",
      toc: [],
      sections: [
        {
          id: "tips-list",
          title: "Five things to plan for",
          body: [
            `- Leave early, ideally before 6 am from Mumbai, to avoid weekend traffic on the highway.
- Allow extra time in the monsoon, when rain can cause waterlogging and landslides on hilly stretches.
- For long drives to the south, consider breaking the journey. See [Konkan road-trip routes](guide:konkan-guide-road-trip-routes).
- Download offline maps, because signal can be patchy on coastal roads.
- Short on time? See [weekend getaways from Mumbai and Pune](guide:konkan-guide-weekend-getaways).`,
          ],
        },
      ],
    },

    {
      type: "clusters",
      id: "plan",
      heading: "Plan your trip",
      sub: "",
      clusters: [
        {
          heading: "Pick a destination",
          desc: "",
          links: [
            { label: "Alibaug, Kashid and Murud", guide: "konkan-hotels-alibaug-kashid-murud", desc: "Closest to Mumbai" },
            { label: "Diveagar", guide: "konkan-hotels-diveagar", desc: "Weekend beach trip" },
            { label: "Ganpatipule", guide: "konkan-hotels-ganpatipule", desc: "A three-day trip" },
            { label: "Tarkarli and Malvan", guide: "konkan-hotels-tarkarli-malvan", desc: "A long trip" },
            { label: "Best places to visit", guide: "konkan-guide-best-places-to-visit", desc: "Choose by time and interest" },
            { label: "How to plan a Konkan trip", guide: "konkan-guide-how-to-plan-a-trip", desc: "Itineraries" },
          ],
        },
      ],
    },

    {
      type: "faq",
      id: "faq",
      heading: "Distance questions",
      groups: [
        {
          items: [
            {
              q: "How far is Konkan from Mumbai?",
              a: "It depends on the destination. Alibaug is about 100 km, Diveagar and Shrivardhan about 170–190 km, Dapoli about 215–225 km, Ganpatipule about 340–375 km and Tarkarli more than 500 km. See [best places to visit](guide:konkan-guide-best-places-to-visit).",
              open: true,
            },
            {
              q: "How long does it take to drive from Mumbai to Konkan?",
              a: "Roughly 2–3 hours to Alibaug, 4–5 hours to Diveagar and Shrivardhan, and 10 hours or more to Tarkarli and Vengurla, depending on traffic. See [how to plan a Konkan trip](guide:konkan-guide-how-to-plan-a-trip).",
            },
            {
              q: "Which Konkan beach is closest to Mumbai?",
              a: "Alibaug and nearby beaches are closest, followed by Kashid and Murud. See [Alibaug, Kashid and Murud](guide:konkan-hotels-alibaug-kashid-murud).",
            },
            {
              q: "Can I do Konkan as a weekend trip from Mumbai?",
              a: "Yes, if you choose a nearby destination such as Alibaug, Kashid, Diveagar or Shrivardhan. Longer drives to Ganpatipule and Tarkarli suit three or more days. See [weekend getaways](guide:konkan-guide-weekend-getaways).",
            },
            {
              q: "How far is Tarkarli from Mumbai?",
              a: "About 500–550 km by road, depending on the route, so plan at least three days or break the journey. See [Tarkarli and Malvan](guide:konkan-hotels-tarkarli-malvan).",
            },
            {
              q: "Are there ferries from Mumbai to Konkan?",
              a: "Ferries run to the Alibaug coast, but passenger services usually stop during the monsoon. Check current schedules before you plan around one. See [is Konkan open for tourism](guide:konkan-guide-is-konkan-open-for-tourism).",
            },
          ],
        },
      ],
    },

    {
      type: "cta",
      heading: "Pick a destination, then a stay",
      text:
        "Message the property directly on WhatsApp. Prices are in INR and there are no booking fees.",
      button: { label: "See the best hotels in Konkan", guide: "best-hotels-in-konkan" },
    },
  ],
};

export default guide;