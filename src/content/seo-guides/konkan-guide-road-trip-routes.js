// src/content/seo-guides/konkan-guide-road-trip-routes.js
const guide = {
  slug: "konkan-guide-road-trip-routes",
  metaTitle: "Konkan Road-Trip Routes: NH66, Coastal Roads and Ghat Routes from Mumbai and Pune",
  metaDescription:
    "Plan a Konkan road trip: the NH66 Mumbai-Goa highway, Raigad coastal roads and the ghat routes from Pune and Kolhapur, with road-condition tips, timing advice and a route chooser by destination.",
  trail: [
    { name: "Road-Trip Routes" },
  ],
  hero: {
    h1: "Konkan road-trip routes",
    lead:
      "The main highway down the coast is still being widened, so the best route depends on where you start and where you are going. Here are the main roads, what to expect and how to choose.",
    buttons: [
      { label: "Choose your route", variant: "primary", href: "#chooser" },
      { label: "NH66 conditions", variant: "ghost", href: "#nh66" },
    ],
  },
  blocks: [
    {
      type: "answer",
      heading: "The short answer",
      md: `From Mumbai, the NH66 coastal highway reaches most of Konkan, but parts of it are still under construction and slow. From Pune, ghat roads such as Tamhini take you to the Raigad coast, and the Kolhapur routes reach Ratnagiri and Sindhudurg. Leave early, allow extra time and check conditions before you go.`,
    },

    {
      type: "routeChooser",
      id: "chooser",
      mode: "chooser",
      heading: "Choose your route",
      sub: "Pick where you are starting and where on the coast you are going.",
      fromLabel: "Starting from",
      toLabel: "Going to",
      origins: ["Mumbai", "Pune"],
      destinations: [
        "Alibaug, Kashid and Murud",
        "Diveagar, Shrivardhan and Harihareshwar",
        "Dapoli and Harnai",
        "Ganpatipule",
        "Tarkarli, Malvan and Vengurla",
      ],
      hint:
        "Always confirm the exact route with a maps app and your hotel. See distances and drive times for more.",
      routes: [
        [
          {
            title: "Via Panvel, then local roads",
            stops: ["Mumbai", "Panvel", "Alibaug side"],
            note: "The shortest trip. Ferries from Mumbai's harbour side can also reach the Alibaug coast, although services usually stop in monsoon. Check the road and ferry timings.",
          },
          {
            title: "NH66 south, then coastal roads",
            stops: ["Mumbai", "Panvel", "Pen", "Mangaon or coastal roads", "Raigad coast"],
            note: "Leave early to clear the Panvel to Indapur stretch before the traffic builds. Roadworks may slow you down.",
          },
          {
            title: "NH66 south to Mahad or Khed, then west",
            stops: ["Mumbai", "Panvel", "Mahad", "Khed", "Dapoli"],
            note: "Confirm the best turn-off with your hotel, and allow extra time on hilly roads.",
          },
          {
            title: "NH66 to Hatkhamba, then to the coast",
            stops: ["Mumbai", "Panvel", "Chiplun", "Hatkhamba", "Ganpatipule"],
            note: "One of the longest drives. Consider an overnight stop or a train to Ratnagiri.",
          },
          {
            title: "NH66 south all the way",
            stops: ["Mumbai", "Panvel", "Chiplun", "Rajapur", "Kudal", "Malvan"],
            note: "A very long drive. Break the journey or take the Konkan Railway and transfer by road.",
          },
        ],
        [
          {
            title: "Check a maps app for the best way",
            stops: ["Pune", "Mumbai side or Pen", "Alibaug side"],
            note: "Pune is not close to this coast, so most travellers go to the Raigad beach towns further south instead.",
          },
          {
            title: "Tamhini Ghat to the Raigad coast",
            stops: ["Pune", "Tamhini Ghat", "Mangaon", "Mhasla", "Shrivardhan"],
            note: "The shortest route for Pune. Scenic, but check conditions after heavy rain.",
          },
          {
            title: "Varandha Ghat or a coastal route",
            stops: ["Pune", "Varandha Ghat", "Mahad", "Dapoli side"],
            note: "Confirm the road and timings with your hotel before you go.",
          },
          {
            title: "Via Satara and Karad, then a ghat road down",
            stops: ["Pune", "Satara", "Karad", "ghat road", "Ganpatipule"],
            note: "Typically around 330 km. Compare the Kumbharli and Amba routes on a maps app.",
          },
          {
            title: "NH48 south to Kolhapur, then Amboli or Phonda Ghat",
            stops: ["Pune", "Kolhapur", "Amboli", "Sawantwadi", "Malvan"],
            note: "Often the more predictable choice for Sindhudurg than driving down NH66.",
          },
        ],
      ],
    },

    {
      type: "routeChooser",
      id: "nh66",
      mode: "static",
      heading: "NH66: the main coastal highway",
      sub:
        "National Highway 66 (formerly NH17) runs south from Panvel through towns including Pen, Mahad, Khed, Chiplun, Sangameshwar, Hatkhamba near Ratnagiri, Rajapur, Kankavli, Kudal and Sawantwadi, and on into Goa. It is the backbone of Konkan road travel.",
      staticStops: [
        "Panvel", "Pen", "Indapur", "Mahad", "Khed", "Chiplun",
        "Sangameshwar", "Hatkhamba", "Rajapur", "Kankavli", "Kudal", "Sawantwadi", "Goa",
      ],
      note:
        "Widening the highway to four lanes has been under way for many years. Reports in 2026 described the stretch from Panvel to Indapur as especially rough, with other difficult sections around Mangaon and Chiplun, and landslides at Kashedi Ghat during the July rains. Completion has repeatedly been pushed back, with the latest targets being the end of 2026 or early 2027. Mumbai to Goa has typically taken 11 to 13 hours or more.",
    },

    {
      type: "guide",
      id: "ghats",
      heading: "Ghat roads from the plateau",
      toc: [],
      sections: [
        {
          id: "ghats-table",
          title: "Main ghat roads",
          body: [
            `If you are starting from Pune, Satara or Kolhapur, a ghat road down the Western Ghats is usually shorter than going via Mumbai. These roads are scenic but steep and winding, and they can be hazardous in heavy rain.

| Ghat route | Connects | Useful for |
| --- | --- | --- |
| **Tamhini Ghat** | Pune to Mangaon and the Raigad coast | Diveagar, Shrivardhan, Harihareshwar |
| **Varandha Ghat** | Pune to Mahad | Raigad and northern Ratnagiri |
| **Kumbharli Ghat** | Karad to Chiplun | Ratnagiri district |
| **Amba Ghat** | Kolhapur to Ratnagiri | Ganpatipule and Ratnagiri |
| **Phonda Ghat** | Kolhapur to Kankavli | Sindhudurg |
| **Amboli Ghat** | Kolhapur side to Sawantwadi | Vengurla, Malvan and southern Sindhudurg |`,
          ],
        },
      ],
    },

    {
      type: "prose",
      id: "coastal",
      heading: "Coastal roads and ferries in Raigad",
      md: `North of Ratnagiri, smaller coastal roads link beach towns such as Alibaug, Murud, Shrivardhan and Diveagar, and are often more pleasant than the main highway. Some shortcuts use creek ferries, which run on set timings and weather permitting. Check schedules before you rely on one. See [is Konkan open for tourism](guide:konkan-guide-is-konkan-open-for-tourism).`,
    },

    {
      type: "guide",
      id: "tips",
      heading: "Road-trip tips",
      toc: [],
      sections: [
        {
          id: "tips-list",
          title: "Six things worth planning for",
          body: [
            `- **Leave early.** Starting between 4:30 and 6 am clears Panvel before the traffic builds.
- **Add buffer time.** Roadworks and diversions can add hours, especially in the monsoon and around the Ganesh festival when many families travel home.
- **Avoid ghat roads in heavy rain and at night.** Landslides and poor visibility are real risks.
- **Fuel and food.** Fill up in larger towns, because petrol pumps and restaurants can be far apart on the coast.
- **Offline maps.** Mobile signal can drop on ghat and coastal stretches.
- **Consider the train.** The Konkan Railway runs the length of the coast and avoids the road works. See [distance from Mumbai](guide:konkan-guide-distance-from-mumbai) for stations.`,
          ],
        },
      ],
    },

    {
      type: "clusters",
      id: "plan",
      heading: "Plan the rest of your trip",
      sub: "",
      clusters: [
        {
          heading: "More guides",
          desc: "",
          links: [
            { label: "Distance from Mumbai", guide: "konkan-guide-distance-from-mumbai", desc: "By road, by destination" },
            { label: "How to plan a Konkan trip", guide: "konkan-guide-how-to-plan-a-trip", desc: "3, 5 and 7-day itineraries" },
            { label: "Weekend getaways", guide: "konkan-guide-weekend-getaways", desc: "From Mumbai and Pune" },
            { label: "Best places to visit", guide: "konkan-guide-best-places-to-visit", desc: "Choose by time and interest" },
            { label: "Best hotels in Konkan", guide: "best-hotels-in-konkan", desc: "Where to stay" },
          ],
        },
      ],
    },

    {
      type: "faq",
      id: "faq",
      heading: "Road-trip questions",
      groups: [
        {
          items: [
            { q: "Which is the best road route to Konkan from Mumbai?",
              a: "NH66 reaches most of the coast, though parts are still under construction. For the Raigad beaches, shorter local and coastal roads are often better, and the right route depends on your destination. See [distance from Mumbai](guide:konkan-guide-distance-from-mumbai).",
              open: true },
            { q: "How long does the Mumbai to Goa drive take?",
              a: "Typically 11 to 13 hours or more on NH66, depending on roadworks, weather and traffic. See [how to plan a Konkan trip](guide:konkan-guide-how-to-plan-a-trip)." },
            { q: "Is NH66 in good condition?",
              a: "Parts are under widening and in poor condition, especially between Panvel and Indapur and near Mangaon and Chiplun. Check recent news and leave extra time. See [is Konkan open for tourism](guide:konkan-guide-is-konkan-open-for-tourism)." },
            { q: "What is the best route from Pune to Konkan?",
              a: "For the Raigad coast, the Tamhini Ghat route to Mangaon is the shortest. For Sindhudurg, the Kolhapur and Amboli routes are often more predictable than NH66. See [weekend getaways](guide:konkan-guide-weekend-getaways)." },
            { q: "Is it safe to drive Konkan ghat roads in monsoon?",
              a: "They can be hazardous in heavy rain because of landslides and poor visibility. Avoid driving them at night or in heavy downpours, and check local advice. See [monsoon stays](guide:konkan-guide-monsoon-stays)." },
            { q: "Is the train a good alternative to driving?",
              a: "Yes. The Konkan Railway runs the length of the coast, and you can add a road transfer to your final destination. See [distance from Mumbai](guide:konkan-guide-distance-from-mumbai)." },
          ],
        },
      ],
    },

    {
      type: "cta",
      heading: "Break the journey",
      text:
        "Message the property directly on WhatsApp. Prices are in INR and there are no booking fees.",
      button: { label: "See the best hotels in Konkan", guide: "best-hotels-in-konkan" },
    },
  ],
};

export default guide;