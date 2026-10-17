// src/content/seo-guides/how-to-book-diveagar-hotels.js
import { SITE_NAME } from "@/lib/siteConfig";

const guide = {
  slug: "how-to-book-diveagar-hotels",
  metaTitle: "How to Book Diveagar Hotels: WhatsApp Booking Guide",
  metaDescription:
    "How to book Diveagar hotels: message the property on WhatsApp, confirm price and cancellation terms, and use our enquiry builder and before-you-pay checklist.",
  trail: [
    { name: "Diveagar Travel Guide", slug: "diveagar-travel-guide" },
    { name: "How to Book Diveagar Hotels" },
  ],
  hero: {
    h1: "How to book Diveagar hotels",
    lead: `Booking on ${SITE_NAME} happens directly with the property on WhatsApp. Here is how it works, a message builder for your enquiry, and a checklist to complete before you pay anything.`,
    buttons: [
      { label: "Write my enquiry", variant: "primary", href: "#message" },
      { label: "Before you pay", variant: "ghost", href: "#before-pay" },
    ],
  },
  blocks: [
    {
      type: "answer",
      heading: "The short answer",
      md: `Pick a stay, send the property an enquiry on WhatsApp, agree the price, what is included and the cancellation terms, and then pay as agreed with the property. There is no online payment step on ${SITE_NAME}, so the details of your booking are between you and the hotel.

Because of that, get everything confirmed in writing before you pay.`,
    },

    {
      type: "stepsGrid",
      id: "steps",
      heading: "How booking works",
      steps: [
        {
          title: "Choose a stay",
          md: `Compare [hotels in Diveagar](guide:best-hotels-in-diveagar). Narrow by [beach access](guide:hotels-near-diveagar-beach), [luxury](guide:luxury-hotels-resorts-diveagar), a [pool](guide:diveagar-hotels-with-swimming-pool) or [family needs](guide:family-friendly-hotels-diveagar).`,
        },
        {
          title: "Send an enquiry on WhatsApp",
          md: `Use the "Check availability on WhatsApp" button on the listing, or build a fuller message below. Include your dates, number of guests and anything that matters to you.`,
        },
        {
          title: "Confirm the details with the property",
          md: `Ask for availability, the total price in rupees, what is included, and the check-in and check-out times.`,
        },
        {
          title: "Agree payment and cancellation terms",
          md: `Ask how much to pay and when, how to pay, and what happens if your plans change. Get the cancellation terms in writing.`,
        },
        {
          title: "Get a written confirmation",
          md: `Keep the WhatsApp conversation and any receipt as your record of the booking.`,
        },
        {
          title: "Prepare for your trip",
          md: `Ask for a map pin and tell the property your arrival time. See [how to reach Diveagar](guide:how-to-reach-diveagar).`,
        },
      ],
    },

    {
      type: "bookingBuilder",
      id: "message",
      heading: "Write your enquiry",
      sub: "Fill in what you know. The more detail you send, the fewer messages it takes to get a clear answer.",
      hotelLabel: "Hotel name",
      hotelPlaceholder: "The hotel you chose",
      datesLabel: "Dates",
      datesPlaceholder: "e.g. 14 to 16 Nov",
      guestsLabel: "Guests",
      guestsPlaceholder: "e.g. 2 adults, 1 child",
      roomLabel: "Room",
      roomOptions: [
        { value: "", label: "No preference" },
        { value: "a double room", label: "Double room" },
        { value: "a family room", label: "Family room" },
        { value: "a whole villa or house", label: "Whole villa or house" },
      ],
      mealsLabel: "Meals",
      mealsOptions: [
        { value: "", label: "Not sure yet" },
        { value: "room only", label: "Room only" },
        { value: "breakfast included", label: "Breakfast included" },
        { value: "all meals included", label: "All meals included" },
      ],
      extrasLegend: "Anything else you need?",
      extras: [
        { value: "a sea-facing room", label: "Sea-facing room" },
        { value: "a swimming pool", label: "Swimming pool" },
        { value: "facilities for children", label: "Facilities for children" },
        { value: "parking", label: "Parking" },
        { value: "a late arrival", label: "Late arrival" },
      ],
      waLabel: "Send on WhatsApp",
      copyLabel: "Copy message",
    },

    {
      type: "checklist",
      id: "before-pay",
      heading: "Before you pay: your checklist",
      sub: "Tick each item once the property has confirmed it. Do not pay until you have what you need.",
      progressLabel: "Checklist progress",
      items: [
        "The dates and room type are confirmed.",
        "The total price is confirmed, in rupees.",
        "I know what is included (meals, taxes, extra beds).",
        "I have the cancellation and refund terms in writing.",
        "I know exactly how much to pay, when, and how.",
        "I will receive a written confirmation or receipt.",
        "I have the check-in and check-out times.",
        "I have the hotel's map pin and a contact number.",
      ],
      verdictWait:
        "Keep going. Ask the property to confirm the remaining items before you pay.",
      verdictOk:
        "You have what you need. Pay only as agreed with the property, and keep a copy of the messages and any receipt.",
    },

    {
      type: "guide",
      heading: "Booking tips",
      toc: [
        { id: "timing", label: "When to book" },
        { id: "groups", label: "Groups and special needs" },
        { id: "noreply", label: "If you get no reply" },
      ],
      sections: [
        {
          id: "timing",
          title: "When to book",
          body: [
            `Small resorts and villas have a limited number of rooms, so book early for long weekends, school holidays and the busier months. See the [best time to visit Diveagar](guide:best-time-to-visit-diveagar) and the [best month for the beach](guide:best-month-diveagar-beach) to choose your dates first.`,
          ],
        },
        {
          id: "groups",
          title: "Groups and special needs",
          body: [
            `- **Large groups:** ask about several rooms or a whole villa. See [luxury hotels and resorts](guide:luxury-hotels-resorts-diveagar) for villas.
- **Children:** ask how children are counted and charged. See [family-friendly hotels](guide:family-friendly-hotels-diveagar).
- **Food needs:** tell the hotel in advance about any dietary requirements.`,
          ],
        },
        {
          id: "noreply",
          title: "If you get no reply",
          body: [
            `Small properties may take time to answer. Wait a reasonable while, then send a short reminder. If you still hear nothing, try another stay from [the hotel list](guide:best-hotels-in-diveagar) rather than pay without a confirmation.`,
          ],
        },
      ],
    },

    {
      type: "faq",
      id: "faq",
      heading: "Booking Diveagar hotels: your questions answered",
      groups: [
        {
          items: [
            {
              q: "What is the best way to book Diveagar hotels?",
              a: `Message the property directly on WhatsApp through ${SITE_NAME}, confirm availability, price, what is included and the cancellation terms, and then pay as agreed with the property. Use the message builder on this page.`,
              open: true,
            },
            {
              q: "Do I pay online when I book?",
              a: `There is no online payment step on ${SITE_NAME}. You arrange payment directly with the property, so agree how much, when and how before you pay, and keep a record.`,
            },
            {
              q: "How do I know a hotel is available on my dates?",
              a: "Only the property can confirm it. Send your dates and number of guests on WhatsApp and wait for a clear yes before you pay.",
            },
            {
              q: "Can I cancel or change my booking?",
              a: "It depends on the property's own terms. Ask for the cancellation and refund policy in writing before you pay.",
            },
            {
              q: "Should I book early?",
              a: "Yes for long weekends, school holidays and busy months, since small stays have few rooms. See the [best time to visit Diveagar](guide:best-time-to-visit-diveagar).",
            },
            {
              q: "Can I book a hotel for a group?",
              a: "Yes. Ask about several rooms or a whole villa, and confirm the total price and what is included.",
            },
            {
              q: "What should I do after I book?",
              a: "Ask for a map pin, tell the property your arrival time, and read [how to reach Diveagar](guide:how-to-reach-diveagar).",
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