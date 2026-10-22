// src/content/seo-guides/konkan-guide-best-time-to-visit.js
const guide = {
  slug: "konkan-guide-best-time-to-visit",
  metaTitle: "Best Time to Visit Konkan: Month-by-Month Guide",
  metaDescription:
    "When is the best time to visit Konkan? A month-by-month guide to weather, sea conditions, crowds and prices on the Maharashtra coast, with the best months for beaches, water sports, forts and monsoon trips.",
  trail: [
    { name: "Best Time to Visit Konkan" },
  ],
  hero: {
    h1: "Best time to visit Konkan",
    lead:
      "Konkan has three very different seasons. Here is a month-by-month guide to the weather, the sea, the crowds and what is open, so you can pick the right dates for your trip.",
    buttons: [
      { label: "Month by month", variant: "primary", href: "#months" },
      { label: "By interest", variant: "ghost", href: "#interest" },
    ],
  },
  blocks: [
    {
      type: "answer",
      heading: "The short answer",
      md: `The best time to visit Konkan is from November to February, when the weather is dry and pleasant and the sea is calm. October is also good. March to May is hot, and June to September is monsoon, when the sea is rough and boat trips and water sports stop.`,
    },

    {
      type: "monthCalendar",
      id: "months",
      heading: "Konkan month by month",
      sub:
        "Choose a month to see what to expect. The coloured line under each month shows how suitable it is: green for the best months, light green for hot but fine, blue for monsoon.",
      hintEmpty: "Choose a month above to see what to expect.",
      buttonsAriaLabel: "Choose a month",
      autoSelectCurrent: true,
      fullMonths: [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December",
      ],
      bandLabels: {
        best: "Best",
        fair: "Hot, still fine",
        monsoon: "Monsoon",
        good: "Good",
      },
      rows: [
        { key: "weather", label: "Weather" },
        { key: "sea",     label: "Sea" },
        { key: "crowds",  label: "Crowds and prices" },
        { key: "tip",     label: "Tip" },
      ],
      months: [
        { label: "Jan", rating: "best",    weather: "Dry and pleasant, with cooler mornings", sea: "Calm", crowds: "Very busy on weekends; high prices", tip: "Book early, especially for long weekends" },
        { label: "Feb", rating: "best",    weather: "Dry and warming up", sea: "Calm", crowds: "Busy on weekends; temples can be crowded around Mahashivratri", tip: "A good month before the heat arrives" },
        { label: "Mar", rating: "fair",    weather: "Getting hot and humid", sea: "Calm", crowds: "Fewer crowds; better rates", tip: "Travel early and late in the day; village festivals around Holi" },
        { label: "Apr", rating: "fair",    weather: "Hot and humid", sea: "Calm", crowds: "School holidays can be busy", tip: "Mango season begins on many farms" },
        { label: "May", rating: "fair",    weather: "Hottest and most humid; pre-monsoon showers possible late in the month", sea: "Calm, turning rougher near the end", crowds: "Lower prices", tip: "Some activities wind down as the monsoon nears" },
        { label: "Jun", rating: "monsoon", weather: "Rain begins and builds", sea: "Rough", crowds: "Cheapest rooms; very few visitors", tip: "Boat trips and water sports stop; check conditions" },
        { label: "Jul", rating: "monsoon", weather: "Usually the heaviest rain", sea: "Rough", crowds: "Very quiet; lowest prices", tip: "Heavy rain can disrupt roads; travel only if necessary" },
        { label: "Aug", rating: "monsoon", weather: "Heavy rain with breaks", sea: "Rough", crowds: "Quiet, except around festivals", tip: "Ganeshotsav may fall in August or September; roads can be busy" },
        { label: "Sep", rating: "monsoon", weather: "Rain easing towards the end of the month", sea: "Rough, calming late", crowds: "Quiet; rates start to rise at the end", tip: "Check conditions before any boat trip" },
        { label: "Oct", rating: "good",    weather: "Rain ends; humid and sometimes hot", sea: "Calming; water sports restart", crowds: "Rising demand, especially around Diwali", tip: "A good shoulder month with a green landscape" },
        { label: "Nov", rating: "best",    weather: "Dry and pleasant", sea: "Calm", crowds: "Busy around Diwali; then moderate", tip: "One of the best months for beach trips" },
        { label: "Dec", rating: "best",    weather: "Dry and comfortable", sea: "Calm", crowds: "Peak season; Christmas and New Year are very busy", tip: "Book well ahead" },
      ],
      seasonBar: {
        ariaLabel:
          "Month by month: November to February best, October good, March to May hot, June to September monsoon",
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
          { label: "Oct", band: "good" },
          { label: "Nov", band: "best" },
          { label: "Dec", band: "best" },
        ],
        legend: [
          { band: "best",    label: "Best" },
          { band: "good",    label: "Good or hot, still fine" },
          { band: "monsoon", label: "Monsoon" },
        ],
      },
    },

    {
      type: "guide",
      id: "seasons",
      heading: "Konkan's seasons compared",
      toc: [],
      sections: [
        {
          id: "seasons-table",
          title: "How the seasons differ",
          body: [
            `| Season | Months | Weather and sea | Crowds and prices |
| --- | --- | --- | --- |
| **Winter** | November to February | Dry, pleasant and sunny; calm sea | Highest demand and prices |
| **Summer** | March to May | Hot and humid; calm sea | Fewer crowds and better rates |
| **Monsoon** | June to September | Heavy rain; rough sea; green scenery | Cheapest rooms; boat trips and water sports stop |
| **Post-monsoon** | October | Humid but drying; sea calming | Rising demand; Diwali is busy |`,
          ],
        },
      ],
    },

    {
      type: "guide",
      id: "interest",
      heading: "Best time by what you want to do",
      toc: [],
      sections: [
        {
          id: "interest-table",
          title: "Match the month to your trip",
          body: [
            `| If you want | Go | Notes |
| --- | --- | --- |
| **Beach holidays** | November to February | The sea is calmest and the weather is comfortable |
| **Water sports and snorkelling** | October to May, usually | Season varies by operator; check what is running. See [Tarkarli and Malvan](guide:konkan-hotels-tarkarli-malvan) |
| **Boat trips to forts and dolphin-watching** | October to May, in calm weather | Trips stop in monsoon. See [Dapoli and Harnai](guide:konkan-hotels-dapoli-harnai) |
| **Mangoes and farm visits** | April and May | Fruit season on many farms; ask your host. See [homestays](guide:konkan-best-hotels-homestays) |
| **Green scenery and low prices** | June to September | Inland and farm stays suit this season better than beaches |
| **Quiet temple visits** | Weekdays, November to February | Avoid festival dates for fewer crowds |`,
          ],
        },
      ],
    },

    {
      type: "guide",
      id: "festival",
      heading: "Festivals and busy dates",
      toc: [],
      sections: [
        {
          id: "festival-body",
          title: "When demand spikes",
          body: [
            `Some dates are much busier and more expensive, so check them before you book. Festival dates change each year.

- **Christmas and New Year:** the busiest and most expensive weeks on the coast.
- **Diwali:** popular for family trips, with high demand.
- **Mahashivratri:** very busy at temples such as [Harihareshwar](guide:konkan-hotels-harihareshwar).
- **Ganeshotsav:** a major festival in Konkan, when many families travel home and roads are busy. Visitors can see local celebrations, though some places are crowded.
- **Long weekends:** book early for winter long weekends everywhere.`,
          ],
        },
      ],
    },

    {
      type: "clusters",
      id: "plan",
      heading: "Plan around the season",
      sub: "",
      clusters: [
        {
          heading: "More guides",
          desc: "",
          links: [
            { label: "Is Konkan open for tourism?", guide: "konkan-guide-is-konkan-open-for-tourism", desc: "Monsoon closures and rules" },
            { label: "Monsoon stays in Konkan", guide: "konkan-guide-monsoon-stays", desc: "Green season, cheaper rooms" },
            { label: "Best places to visit", guide: "konkan-guide-best-places-to-visit", desc: "Choose by time and interest" },
            { label: "How to plan a Konkan trip", guide: "konkan-guide-how-to-plan-a-trip", desc: "Itineraries" },
            { label: "Best hotels in Konkan", guide: "best-hotels-in-konkan", desc: "The full guide" },
          ],
        },
      ],
    },

    {
      type: "faq",
      id: "faq",
      heading: "Best time to visit Konkan: questions",
      groups: [
        {
          items: [
            {
              q: "What is the best time to visit Konkan?",
              a: "November to February is best, with dry, pleasant weather and a calm sea. October is also good, and March to May is hot but still suitable for the coast. See [best hotels in Konkan](guide:best-hotels-in-konkan).",
              open: true,
            },
            {
              q: "Is Konkan good to visit in monsoon?",
              a: "It is green and quiet, and rooms are cheapest, but the sea is rough, boat trips and water sports stop and roads can be disrupted. Choose inland or farm stays and check conditions first. See [monsoon stays](guide:konkan-guide-monsoon-stays).",
            },
            {
              q: "Is Konkan too hot in summer?",
              a: "March to May is hot and humid, especially inland, though sea breezes help. It is quieter and cheaper, and it is mango season. See [homestays](guide:konkan-best-hotels-homestays).",
            },
            {
              q: "When are Konkan hotels cheapest?",
              a: "During the monsoon (June to September), followed by March to May. Prices are highest from December to January and on long weekends. See [budget hotels](guide:konkan-best-hotels-budget).",
            },
            {
              q: "When is Konkan most crowded?",
              a: "Christmas and New Year, Diwali, long weekends and festival dates. Book early for those. See [how to plan a Konkan trip](guide:konkan-guide-how-to-plan-a-trip).",
            },
            {
              q: "Is Konkan open all year?",
              a: "Yes, but many boat trips and water activities stop during monsoon, so check what is open on your dates. See [is Konkan open for tourism](guide:konkan-guide-is-konkan-open-for-tourism).",
            },
          ],
        },
      ],
    },

    {
      type: "cta",
      heading: "Pick your dates, then your stay",
      text:
        "Message the property directly on WhatsApp. Prices are in INR and there are no booking fees.",
      button: { label: "See the best hotels in Konkan", guide: "best-hotels-in-konkan" },
    },
  ],
};

export default guide;