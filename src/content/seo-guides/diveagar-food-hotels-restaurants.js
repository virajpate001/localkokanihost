// src/content/seo-guides/diveagar-food-hotels-restaurants.js
import { SITE_NAME } from "@/lib/siteConfig";

const guide = {
  slug: "diveagar-food-hotels-restaurants",
  metaTitle: "Where to Eat in Diveagar: Hotels with Good Food & Meal Plans",
  metaDescription:
    "Where to eat in Diveagar: find hotels with good food, understand meal plans, and ask about dinner, vegetarian meals and local seafood before you book.",
  trail: [
    { name: "Diveagar Travel Guide", slug: "diveagar-travel-guide" },
    { name: "Where to Eat in Diveagar" },
  ],
  hero: {
    h1: "Where to eat in Diveagar, and hotels with good food",
    lead:
      "In a small beach town, much of your eating happens at your hotel. Find stays with meals included, a restaurant or the food you want, and write to the hotel about your dietary needs.",
    buttons: [
      { label: "Find stays by food", variant: "primary", href: "#stays" },
      { label: "Ask about my diet", variant: "ghost", href: "#food-message" },
    ],
  },
  blocks: [
    {
      type: "answer",
      heading: "The short answer",
      md: `For most visitors, the easiest way to eat well in Diveagar is to choose a stay that serves good meals and to settle the meal plan, timings and dietary needs with the hotel before you arrive. Small stays often serve meals at set times, so ask rather than assume.

Use the filters below to find stays by food, and the message builder to ask the right questions.`,
    },

    {
      type: "stays",
      id: "stays",
      heading: "Stays by food",
      sub: "Food details are as reported by each property. Confirm them, including timings, before you pay.",
      fine: "Browse [all hotels in Diveagar](guide:best-hotels-in-diveagar), or compare [luxury hotels and resorts](guide:luxury-hotels-resorts-diveagar) with on-site dining.",
      destinationSlug: "diveagar",
      filterAriaLabel: "Filter stays by food",
      filters: [
        {
          key: "all",
          label: "All stays",
          note: "Every stay on this page.",
          match: { all: true },
        },
        {
          key: "mealsIncl",
          label: "Meals included",
          note: "Stays whose price includes at least breakfast. Ask exactly what the plan covers.",
          match: { fact: "plan", anyOf: ["cp", "map", "ap"] },
        },
        {
          key: "restaurant",
          label: "Restaurant on site",
          note: "Stays with their own restaurant. Ask for opening hours and menu.",
          match: { fact: "restaurant", is: true },
        },
        {
          key: "veg",
          label: "Vegetarian options",
          note: "Stays that report vegetarian meals. Give notice of any special requirements.",
          match: { fact: "veg", is: true },
        },
        {
          key: "seafood",
          label: "Local seafood",
          note: "Stays that serve seafood. Ask what is available in your travel month.",
          match: { fact: "seafood", is: true },
        },
        {
          key: "homeStyle",
          label: "Home-style food",
          note: "Homestays and stays that serve home-style meals.",
          match: { fact: "homeStyle", is: true },
        },
      ],
      include: { all: true },
      card: {
        chips: [
          { fact: "plan", is: "ap",  label: "All meals included" },
          { fact: "plan", is: "map", label: "Breakfast and one meal" },
          { fact: "plan", is: "cp",  label: "Breakfast included" },
          { fact: "restaurant", is: true, label: "Restaurant on site" },
          { fact: "veg", is: true, label: "Vegetarian options" },
          { fact: "seafood", is: true, label: "Seafood" },
          { fact: "homeStyle", is: true, label: "Home-style food" },
          { fact: "kidMeals", is: true, label: "Children's meals" },
        ],
      },
      message:
        `Hi, I found {name} on {site}. Please tell me what is included in the meals, the meal timings, and whether you can cater to our dietary needs. Dates: ___ . Guests: ___ .`,
      empty:
        "No stays match this filter yet. Choose another, or message us on WhatsApp and we will help you find one.",
      cta: "Ask about food on WhatsApp",
    },

    {
      type: "mealPlan",
      id: "meal-plan",
      heading: "Which meal plan should you choose?",
      sub: "Hotels in India usually quote one of four meal plans. Tell us how you plan to eat.",
      selectLabel: "How much will you eat at the hotel?",
      suggestionLabel: "Our suggestion",
      defaultKey: "most",
      options: [
        { value: "most", label: "Most of my meals" },
        { value: "two",  label: "Breakfast and dinner" },
        { value: "bf",   label: "Just breakfast" },
        { value: "out",  label: "I will eat out" },
      ],
      plans: {
        most: {
          planName: "All meals (AP)",
          filter: "mealsIncl",
          text: "Choose all meals (AP). It saves you hunting for food, which suits a quiet town with few other options. Ask what is included and the meal times.",
        },
        two: {
          planName: "Breakfast and one main meal (MAP)",
          filter: "mealsIncl",
          text: "Choose breakfast and one main meal (MAP). Dinner included works well if you spend your days out. Check where to eat for the other meal.",
        },
        bf: {
          planName: "Breakfast included (CP)",
          filter: "mealsIncl",
          text: "Choose breakfast included (CP). Ask about places to eat for your other meals, and whether they will be open on your dates.",
        },
        out: {
          planName: "Room only (EP)",
          filter: null,
          text: "Room only (EP) gives you freedom, but eating options in a small town can be limited. Ask your hotel where guests usually eat and whether those places are open on your dates.",
        },
      },
      table: [
        { plan: "Room only", alias: "EP", includes: "No meals. You eat elsewhere or pay for each meal." },
        { plan: "Breakfast included", alias: "CP", includes: "Breakfast with your room." },
        { plan: "Breakfast and one main meal", alias: "MAP", includes: "Breakfast plus lunch or dinner." },
        { plan: "All meals", alias: "AP", includes: "Breakfast, lunch and dinner." },
      ],
      fine:
        "Exact inclusions differ by property, such as tea, snacks and menu choices, so always ask what the plan covers.",
    },

    {
      type: "bookingBuilder",
      id: "food-message",
      heading: "Ask the hotel about food",
      sub: "Tick what applies. We will write the message.",
      hotelLabel: "Hotel name",
      hotelPlaceholder: "The hotel you are considering",
      datesLabel: "Dates",
      datesPlaceholder: "e.g. 14 to 16 Nov",
      guestsLabel: "Guests",
      guestsPlaceholder: "e.g. 2 adults, 1 child",
      roomLabel: "Meal plan you want",
      roomOptions: [
        { value: "", label: "Not sure yet" },
        { value: "room only", label: "Room only" },
        { value: "breakfast included", label: "Breakfast included" },
        { value: "breakfast and one main meal", label: "Breakfast and one main meal" },
        { value: "all meals", label: "All meals" },
      ],
      mealsLabel: null,             // hide the meals select on this page
      mealsOptions: [],
      arrivalLabel: "When will you arrive?",
      arrivals: [
        { value: "day", label: "During the day" },
        { value: "evening", label: "In the evening",
          extraQuestions: ["Whether dinner will be available when we arrive in the evening."] },
        { value: "late", label: "Late at night",
          extraQuestions: ["Whether dinner can be kept for a late-night arrival."] },
      ],
      extrasLegend: "Dietary needs",
      extras: [
        { value: "vegetarian meals", label: "Vegetarian" },
        { value: "Jain meals", label: "Jain" },
        { value: "seafood", label: "We want local seafood" },
        { value: "meals suitable for children", label: "Meals for children" },
        { value: "care with a food allergy", label: "A food allergy" },
      ],
      waLabel: "Send on WhatsApp",
      copyLabel: "Copy message",
    },

    {
      type: "guide",
      heading: "Eating well in Diveagar",
      toc: [
        { id: "local", label: "Local food" },
        { id: "tips", label: "Eating tips" },
        { id: "next", label: "Plan your trip" },
      ],
      sections: [
        {
          id: "local",
          title: "Local food",
          body: [
            `Konkan cooking typically features seafood, coconut and kokum, and vegetarian options are widely available too. What you will actually be served depends on the property and the season, so ask your hotel what is on the menu and whether a dish needs notice.

See [what Diveagar is famous for](guide:what-is-diveagar-famous-for) for more on what visitors come for.`,
          ],
        },
        {
          id: "tips",
          title: "Tips for eating well",
          body: [
            `- **Ask about timings.** Many small stays serve meals at set times, so confirm breakfast, lunch and dinner times.
- **Arriving late?** Tell the hotel in advance and ask whether dinner can be kept. See [how to reach Diveagar](guide:how-to-reach-diveagar).
- **Give notice for special diets.** Vegetarian, Jain and other requests are easier to meet when the kitchen knows in advance.
- **Ask about other places to eat.** If your meal plan is room only, ask where guests usually eat nearby and whether they are open on your dates.
- **Travelling with children?** Ask about children's meals. See [family-friendly hotels](guide:family-friendly-hotels-diveagar).`,
          ],
        },
        {
          id: "next",
          title: "Plan the rest of your trip",
          body: [
            `- Choose your stay in [best hotels in Diveagar](guide:best-hotels-in-diveagar) and see [how to book](guide:how-to-book-diveagar-hotels).
- Plan your days with the [2-day itinerary](guide:diveagar-2-day-itinerary).
- Find the right dates with the [best time to visit Diveagar](guide:best-time-to-visit-diveagar).`,
          ],
        },
      ],
    },

    {
      type: "faq",
      id: "faq",
      heading: "Eating in Diveagar: your questions answered",
      groups: [
        {
          items: [
            {
              q: "Which hotels in Diveagar have good food?",
              a: "Use the filters above to find stays with meals included, an on-site restaurant or the food you want, then confirm the menu and timings with the property.",
              open: true,
            },
            {
              q: "Where can I get dinner in Diveagar?",
              a: "Most visitors eat at their hotel. Ask your hotel about dinner timings, and whether other places to eat nearby will be open on your dates.",
            },
            {
              q: "Where can I get lunch in Diveagar?",
              a: "Check whether lunch is included in your meal plan, and ask the hotel where guests usually eat when it is not.",
            },
            {
              q: "Is vegetarian food available in Diveagar?",
              a: "Vegetarian options are widely available in the Konkan, but give your hotel notice of your requirements. Use the \"Vegetarian options\" filter above.",
            },
            {
              q: "Can I get local seafood in Diveagar?",
              a: "Seafood is typical of Konkan cooking. Availability depends on the property and the season, so ask your hotel what is served and whether it needs notice.",
            },
            {
              q: "What meal plan should I choose?",
              a: "If you plan to eat mostly at the hotel, choose a plan that includes dinner, or all meals. Use the meal plan guide above.",
            },
            {
              q: "Can my hotel keep dinner for a late arrival?",
              a: "Some can. Tell them your arrival time in advance and ask. See [how to reach Diveagar](guide:how-to-reach-diveagar).",
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
    }
  ],
};

export default guide;