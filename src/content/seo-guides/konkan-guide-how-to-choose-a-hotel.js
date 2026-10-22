// src/content/seo-guides/konkan-guide-how-to-choose-a-hotel.js
const guide = {
  slug: "konkan-guide-how-to-choose-a-hotel",
  metaTitle: "How to Choose a Konkan Hotel: Stay Types, Checklist and Booking Tips",
  metaDescription:
    "How to choose a hotel in Konkan: a quick stay-type finder, a pre-booking checklist, red flags, what drives prices and a ready-made WhatsApp message to send before you book.",
  trail: [
    { name: "How to Choose a Konkan Hotel" },
  ],
  hero: {
    h1: "How to choose a Konkan hotel",
    lead:
      "Konkan has beach resorts, sea-view hotels, luxury villas, budget guesthouses and homestays. Here is how to pick the right kind of stay, what to check before you pay and what to ask the property.",
    buttons: [
      { label: "Which stay suits you?", variant: "primary", href: "#finder" },
      { label: "Before you book", variant: "ghost", href: "#checklist" },
    ],
  },
  blocks: [
    {
      type: "answer",
      heading: "The short answer",
      md: `Decide who is travelling, what you want to spend and what matters most, such as the beach, the view, the food or quiet. Then confirm the exact room category, inclusions, access road and cancellation terms in writing on WhatsApp before you pay.`,
    },

    {
      type: "stayTypeFinder",
      id: "finder",
      heading: "Which kind of stay suits you?",
      sub: "Answer three quick questions to see the stay types to look at first.",
      hintEmpty: "Answer all three questions to see your suggestions.",
      resultHeading: "Look at these first",
      stayTypes: {
        beach:  { name: "Beach hotel",                slug: "konkan-best-hotels-beach",          reason: "Steps from the sand, with easy beach access." },
        sea:    { name: "Sea-facing or sea-view hotel", slug: "konkan-best-hotels-sea-view",     reason: "Rooms and balconies that look at the water." },
        lux:    { name: "Luxury resort or villa",      slug: "konkan-best-hotels-luxury",          reason: "Pools, dining and service for a comfortable stay." },
        budget: { name: "Budget hotel",                slug: "konkan-best-hotels-budget",          reason: "Simple, affordable rooms, often a short walk from the beach." },
        fc:     { name: "Family or couple resort",     slug: "konkan-best-hotels-family-couples",  reason: "Space, safety and quiet, depending on who is travelling." },
        home:   { name: "Homestay or farm stay",       slug: "konkan-best-hotels-homestays",       reason: "Local hosts, home-cooked food and a more authentic feel." },
      },
      questions: [
        {
          legend: "Who is travelling?",
          options: [
            { label: "Family with children",   points: { fc: 2, beach: 1 } },
            { label: "Couple",                 points: { fc: 2, sea: 1 } },
            { label: "Friends or a group",     points: { beach: 2, budget: 1 } },
            { label: "Solo traveller",         points: { home: 2, budget: 1 } },
          ],
        },
        {
          legend: "What is your budget priority?",
          options: [
            { label: "Lowest price",    points: { budget: 3, home: 2 } },
            { label: "Balanced",        points: { beach: 1, home: 1, sea: 1 } },
            { label: "Comfort first",   points: { lux: 3, sea: 1 } },
          ],
        },
        {
          legend: "What matters most?",
          options: [
            { label: "Being right on the beach",  points: { beach: 3 } },
            { label: "A sea view from the room",  points: { sea: 3 } },
            { label: "Local food and culture",    points: { home: 3 } },
            { label: "Quiet and privacy",         points: { fc: 2, lux: 1 } },
            { label: "A pool and facilities",     points: { lux: 2, fc: 1 } },
          ],
        },
      ],
    },

    {
      type: "guide",
      id: "types",
      heading: "Stay types compared",
      toc: [],
      sections: [
        {
          id: "types-table",
          title: "What each stay type is best for",
          body: [
            `| Stay type | Best for | Watch out for |
| --- | --- | --- |
| **Beach hotel** | Easy beach access and sunsets | Beachfront rooms cost more; confirm the access route |
| **Sea-view hotel** | Views from the room or balcony | Confirm the exact room category and floor |
| **Luxury resort or villa** | Pools, dining and service | Few true five-star hotels exist; check the facilities, not just the name |
| **Budget hotel** | Low prices and simple rooms | Check cleanliness, hot water and extra charges |
| **Family or couple resort** | Space, activities or privacy | Check pool and beach safety for children |
| **Homestay or farm stay** | Local food and hosts | Facilities are simpler; confirm meals, bathroom and access |`,
          ],
        },
      ],
    },

    {
      type: "packingChecklist",
      id: "checklist",
      heading: "Checklist before you book",
      sub: "Tick items as you confirm them. Your ticks are not saved.",
      items: [
        "Exact room category (beachfront, sea-view, garden or villa)",
        "What the price includes (meals, taxes, extra beds)",
        "Distance to the beach and the access route",
        "Cancellation and weather policy, in writing",
        "Recent guest photos and feedback",
        "Check-in and check-out times",
        "Road access and parking",
        "Power backup, hot water and mobile signal",
        "Meal options, including vegetarian",
        "A direct phone or WhatsApp number for the owner",
      ],
    },

    {
      type: "guide",
      id: "flags",
      heading: "Red flags",
      toc: [],
      sections: [
        {
          id: "flags-list",
          title: "When to walk away",
          body: [
            `- No phone number or WhatsApp contact, or slow, vague replies.
- Photos that look like stock images, or that do not match guest photos.
- A price that changes between the listing and the confirmation.
- Reluctance to put the room category, inclusions or cancellation terms in writing.
- Pressure to pay the full amount well before your trip, with no clear refund policy.
- Recent guest feedback mentioning cleanliness, water or safety problems.`,
          ],
        },
      ],
    },

    {
      type: "guide",
      id: "price",
      heading: "What affects the price",
      toc: [],
      sections: [
        {
          id: "price-table",
          title: "Six factors",
          body: [
            `| Factor | Effect |
| --- | --- |
| **Season and dates** | Winter weekends, Christmas, New Year and Diwali cost the most; monsoon rooms cost the least |
| **Location** | Beachfront and sea-facing rooms cost more than rooms a short walk back |
| **Room category** | Villas and private-pool rooms are at the top; garden-view rooms at the bottom |
| **Inclusions** | Meal plans, activities and transfers can change the real cost |
| **Group size** | Extra guests and extra beds are often charged separately |
| **Distance and demand** | Properties closest to Mumbai and Pune fill fastest on weekends |

For ways to save, see [budget hotels in Konkan](guide:konkan-best-hotels-budget), and for timing, [best time to visit Konkan](guide:konkan-guide-best-time-to-visit).`,
          ],
        },
      ],
    },

    {
      type: "messageEditor",
      id: "message",
      heading: "A WhatsApp message to send before you book",
      sub: "Edit the details in the box, then copy it and send it to the property.",
      copyLabel: "Copy message",
      copiedLabel: "Copied.",
      failedLabel: "Press Ctrl+C to copy.",
      textareaAriaLabel: "WhatsApp message template",
      template: `Hello, I would like to book a stay at your property.

Dates: [check-in] to [check-out]
Guests: [number of adults and children]
Room category: [beachfront / sea-view / other]

Could you please confirm in writing:
1. The exact room category and floor
2. The total price and what it includes (meals, taxes, extra beds)
3. The distance to the beach and how to get there
4. The cancellation and weather policy
5. The advance amount and how to pay
6. Check-in and check-out times and parking

Thank you.`,
    },

    {
      type: "clusters",
      id: "more",
      heading: "Explore stay types",
      sub:
        "Still deciding where to go? See best places to visit in Konkan and how to plan a Konkan trip.",
      clusters: [
        {
          heading: "Stay types",
          desc: "",
          links: [
            { label: "Best beach hotels", guide: "konkan-best-hotels-beach", desc: "On the sand or a short walk away" },
            { label: "Sea-facing and sea-view hotels", guide: "konkan-best-hotels-sea-view", desc: "Rooms that look at the water" },
            { label: "Luxury and 5-star resorts", guide: "konkan-best-hotels-luxury", desc: "Pools, spas, villas" },
            { label: "Budget hotels", guide: "konkan-best-hotels-budget", desc: "Simple stays near the beach" },
            { label: "Family and couple resorts", guide: "konkan-best-hotels-family-couples", desc: "Activities, privacy and quiet" },
            { label: "Homestays and agro-tourism", guide: "konkan-best-hotels-homestays", desc: "Local food, local hosts" },
          ],
        },
      ],
    },

    {
      type: "faq",
      id: "faq",
      heading: "Choosing a hotel: questions",
      groups: [
        {
          items: [
            { q: "How do I choose a hotel in Konkan?",
              a: "Decide who is travelling, your budget and what matters most, such as the beach, view, food or quiet. Then compare stay types and confirm the room category, inclusions and cancellation terms before booking. See [best hotels in Konkan](guide:best-hotels-in-konkan).",
              open: true },
            { q: "Is it better to book directly with the hotel?",
              a: "Booking directly over WhatsApp lets you confirm details in writing and ask questions, and you avoid booking fees on Local Kokan. Always get the price and policies in writing. See [best beach hotels](guide:konkan-best-hotels-beach)." },
            { q: "How far in advance should I book?",
              a: "One to two months ahead for winter weekends and festivals, and a few weeks ahead for other dates. See [how to plan a Konkan trip](guide:konkan-guide-how-to-plan-a-trip)." },
            { q: "What is the difference between sea-facing and sea-view?",
              a: "Sea-facing usually means the room points directly at the sea, while sea-view means the sea is visible but may be farther away or partly blocked. Always confirm the room category. See [sea-facing and sea-view hotels](guide:konkan-best-hotels-sea-view)." },
            { q: "Are homestays safe and comfortable?",
              a: "Standards vary. Check recent guest feedback, confirm a contact number for the host and ask about the room, bathroom and access road before booking. See [homestays](guide:konkan-best-hotels-homestays)." },
            { q: "What should I ask before paying an advance?",
              a: "Ask for the total price, inclusions, the cancellation and weather policy, and the room category, all in writing. See [best time to visit Konkan](guide:konkan-guide-best-time-to-visit)." },
          ],
        },
      ],
    },

    {
      type: "cta",
      heading: "Ready to choose?",
      text:
        "Message the property directly on WhatsApp. Prices are in INR and there are no booking fees.",
      button: { label: "See the best hotels in Konkan", guide: "best-hotels-in-konkan" },
    },
  ],
};

export default guide;