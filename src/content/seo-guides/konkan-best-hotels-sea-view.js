// src/content/seo-guides/konkan-best-hotels-sea-view.js
import { SITE_NAME } from "@/lib/siteConfig";

const guide = {
  slug: "konkan-best-hotels-sea-view",
  metaTitle: "Best Sea-Facing and Sea-View Hotels in Konkan",
  metaDescription:
    "The best sea-facing and sea-view hotels in Konkan, Maharashtra: what each room category really means, where to get sunset views, and how to confirm your view before you book.",
  trail: [
    { name: "Best Hotels in Konkan", slug: "best-hotels-in-konkan" },
    { name: "Sea-View Hotels" },
  ],
  hero: {
    h1: "Best sea-facing and sea-view hotels in Konkan",
    lead:
      "Rooms and balconies that look at the Arabian Sea, and how to make sure the view you see in the photo is the view you get.",
    buttons: [
      { label: "Sea-view hotels", variant: "primary", href: "#picks" },
      { label: "What the terms mean", variant: "ghost", href: "#meaning" },
    ],
  },
  blocks: [
    {
      type: "answer",
      heading: "The short answer",
      md: `The Konkan coast faces west, so a sea-facing room gives you sunsets over the water. For a sea-view stay, look at [Shrivardhan](guide:konkan-hotels-shrivardhan), [Diveagar](guide:konkan-hotels-diveagar) and [Ganpatipule](guide:konkan-hotels-ganpatipule), and always ask the hotel to confirm the exact room category.`,
    },

    {
      type: "regionStays",
      id: "picks",
      heading: "Sea-view hotels in Konkan to book",
      sub:
        "Filter by destination and by the kind of view. Each listing is booked directly with the property over WhatsApp, with no booking fee.",
      typeFilterLabel: "View type",
      placeFilterLabel: "Destination",
      allTypesLabel: "Any view",
      allPlacesLabel: "All destinations",
      sampleLabel: "Sample listing",
      viewLabel: "View details",
      waLabel: "WhatsApp",
      empty:
        "No stays match yet. Try another destination or view type, or browse all hotels.",
      emptyCtaLabel: "Browse all Konkan hotels",
      fine: null,
      listings: [
        {
          name: "Sea View Beach Resort, Shekhadi",
          place: "Shrivardhan",
          types: ["Sea-view"],
          note: "Resort in Shekhadi near Shrivardhan beach. Add price, room types and photos from your listing.",
          href: "konkan-hotels-sea-view-beach-resort-shekhadi",
          whatsappMessage:
            `Hi, I am interested in Sea View Beach Resort, Shekhadi from ${SITE_NAME}. Please share availability, room categories and rates. Dates: ___ . Guests: ___ .`,
        },
        {
          name: "Your Diveagar listing",
          place: "Diveagar",
          types: ["Sea-facing"],
          note: "Replace with a verified Diveagar property.",
          href: "konkan-hotels-diveagar",
          sample: true,
        },
        {
          name: "Your Kashid listing",
          place: "Kashid",
          types: ["Sea-facing"],
          note: "Replace with a verified Kashid property.",
          href: "konkan-hotels-kashid",
          sample: true,
        },
        {
          name: "Your Ganpatipule listing",
          place: "Ganpatipule",
          types: ["Sea-view"],
          note: "Replace with a verified Ganpatipule property.",
          href: "konkan-hotels-ganpatipule",
          sample: true,
        },
        {
          name: "Your Tarkarli listing",
          place: "Tarkarli-Malvan",
          types: ["Partial sea view"],
          note: "Replace with a verified Tarkarli or Malvan property.",
          href: "konkan-hotels-tarkarli-malvan",
          sample: true,
        },
        {
          name: "Your Dapoli listing",
          place: "Dapoli",
          types: ["Sea-view"],
          note: "Replace with a verified Dapoli property.",
          href: "konkan-hotels-dapoli",
          sample: true,
        },
      ],
    },

    {
      type: "guide",
      id: "meaning",
      heading: "Sea-facing vs sea-view: what the room names mean",
      toc: [],
      sections: [
        {
          id: "meaning-table",
          title: "Room category terminology",
          body: [
            `Hotels use these terms loosely, so the same words can describe very different rooms. Use this as a guide and confirm with the property.

| Room category | What it usually means | What to confirm |
| --- | --- | --- |
| **Sea-facing** | Room or balcony points directly at the sea, usually with a clear line of sight | Floor, balcony size, and whether anything blocks the view |
| **Sea-view** | Sea is visible but may be at a distance, across a road or past other buildings | How much of the view is sea, and from which floor |
| **Partial sea view** | Sea visible from an angle or through a gap | Photo from the actual room, and whether you must lean out to see it |
| **Garden or pool view** | No sea view, although the beach may be close by | Walking time to the beach; often the cheapest category |`,
          ],
        },
      ],
    },

    {
      type: "clusters",
      id: "where",
      heading: "Where to find the best sea views in Konkan",
      sub:
        "Views depend on the coastline as much as the hotel. Flat beaches give wide horizons from ground and first-floor rooms, while towns with raised terrain can give higher viewpoints.",
      clusters: [
        {
          heading: "Destinations",
          desc: "",
          links: [
            { label: "Shrivardhan", guide: "konkan-hotels-shrivardhan", desc: "Quiet beach; includes Sea View Beach Resort, Shekhadi" },
            { label: "Diveagar", guide: "konkan-hotels-diveagar", desc: "Long, open beach and wide horizons" },
            { label: "Kashid and Murud", guide: "konkan-hotels-alibaug-kashid-murud", desc: "Beachfront stays close to Mumbai" },
            { label: "Ganpatipule", guide: "konkan-hotels-ganpatipule", desc: "Beach and temple coastline" },
            { label: "Tarkarli and Malvan", guide: "konkan-hotels-tarkarli-malvan", desc: "Clear water and island views" },
            { label: "Dapoli and Murud-Harnai", guide: "konkan-hotels-dapoli-harnai", desc: "Fishing port and fort views" },
          ],
        },
      ],
    },

    {
      type: "guide",
      id: "light",
      heading: "Sunrise, sunset and the best light",
      toc: [],
      sections: [
        {
          id: "light-table",
          title: "When to be in the room",
          body: [
            `Because the sea lies to the west, sunsets happen over the water and sunrise comes from the land side. That affects which room you want and when.

| Time | What you see | Tip |
| --- | --- | --- |
| Sunrise | Light rising behind the hills and town | Beach walks are cooler and quieter in the early morning |
| Afternoon | Bright light on the water; can be hot and hazy | Balconies with shade are worth asking about |
| Sunset | Sun going down over the sea | Ask for a west-facing room and a clear line to the horizon |

The clearest views are between October and February. In monsoon (June to September) the sea is grey and often hidden by cloud, but rooms are cheaper. See [best time to visit Konkan](guide:konkan-guide-best-time-to-visit) and [monsoon stays](guide:konkan-guide-monsoon-stays).`,
          ],
        },
      ],
    },

    {
      type: "guide",
      id: "checklist",
      heading: "How to be sure you get the view",
      toc: [],
      sections: [
        {
          id: "checklist-items",
          title: "Ask the hotel before you book",
          body: [
            `- Ask for a recent photo or short video taken from the actual room or the same floor.
- Confirm the category in writing on WhatsApp: sea-facing, sea-view, partial view or garden view.
- Ask which floor and whether trees, other buildings or a boundary wall block the view.
- Check that the balcony or window opens and is large enough to sit at.
- Request a west-facing room if sunset matters most to you.
- Expect salt air and humidity near the sea; rooms with good ventilation matter.

If you care more about walking out onto the sand, see [best beach hotels in Konkan](guide:konkan-best-hotels-beach). For premium rooms, see [luxury and 5-star resorts](guide:konkan-best-hotels-luxury).`,
          ],
        },
      ],
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
            { label: "Best beach hotels", guide: "konkan-best-hotels-beach", desc: "On the sand or a short walk away" },
            { label: "Luxury and 5-star resorts", guide: "konkan-best-hotels-luxury", desc: "Pools, spas, premium service" },
            { label: "Family and couple resorts", guide: "konkan-best-hotels-family-couples", desc: "Activities, privacy and quiet" },
            { label: "How to choose a Konkan hotel", guide: "konkan-guide-how-to-choose-a-hotel", desc: "Checklist and price ranges" },
            { label: "Best places to visit", guide: "konkan-guide-best-places-to-visit", desc: "Beyond the view" },
          ],
        },
      ],
    },

    {
      type: "faq",
      id: "faq",
      heading: "Sea-view hotel questions",
      groups: [
        {
          items: [
            {
              q: "What are the best sea-view hotels in Konkan?",
              a: "Look at beachfront and near-beach properties in Shrivardhan, Diveagar, Kashid, Ganpatipule and Tarkarli. The best choice depends on the room category and floor, so compare listings and confirm the view before booking. See [best hotels in Konkan](guide:best-hotels-in-konkan).",
              open: true,
            },
            {
              q: "What is the difference between sea-facing and sea-view?",
              a: "Sea-facing usually means the room points directly at the sea. Sea-view means the sea is visible but may be farther away or partly blocked. Always confirm the category with the hotel. See [best beach hotels in Konkan](guide:konkan-best-hotels-beach).",
            },
            {
              q: "Which side of the Konkan coast gets sunsets?",
              a: "The coast faces the Arabian Sea to the west, so sunsets happen over the water. Ask for a west-facing room for the best sunset view. See [best time to visit Konkan](guide:konkan-guide-best-time-to-visit).",
            },
            {
              q: "Do sea-facing rooms cost more?",
              a: "Usually yes. Sea-facing and beachfront rooms typically cost more than sea-view, partial-view or garden-view rooms in the same hotel, and prices rise on winter weekends. See [how to choose a Konkan hotel](guide:konkan-guide-how-to-choose-a-hotel).",
            },
            {
              q: "When is the sea view best in Konkan?",
              a: "October to February has the clearest skies and calmest water. During monsoon the view is often hidden by cloud and the sea is rough. See [monsoon stays](guide:konkan-guide-monsoon-stays).",
            },
            {
              q: "How can I check my room's view before booking?",
              a: "Ask for a photo or video from the exact room or floor, and get the room category confirmed in writing on WhatsApp. See [how to choose a Konkan hotel](guide:konkan-guide-how-to-choose-a-hotel).",
            },
          ],
        },
      ],
    },

    {
      type: "cta",
      heading: "Find your sea-view stay",
      text:
        "Message the property directly on WhatsApp. Prices are in INR and there are no booking fees.",
      button: { label: "Browse all Konkan hotels", guide: "best-hotels-in-konkan" },
    },
  ],
};

export default guide;