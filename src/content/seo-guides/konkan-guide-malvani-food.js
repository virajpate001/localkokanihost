// src/content/seo-guides/konkan-guide-malvani-food.js
const guide = {
  slug: "konkan-guide-malvani-food",
  metaTitle: "Malvani and Konkani Food: What to Eat in Konkan and Where to Find It",
  metaDescription:
    "What to eat in Konkan: Malvani fish thali, sol kadhi, kombdi vade, ukadiche modak and more. A guide to dishes, vegetarian options, seasonal specialities and how to eat well along the coast.",
  trail: [
    { name: "Malvani and Konkani Food" },
  ],
  hero: {
    h1: "Malvani and Konkani food: what to eat in Konkan",
    lead:
      "Coconut, kokum, fresh fish and a fiery home-style masala define the food of the Konkan coast. Here is what to order, where it comes from and how to eat well on your trip.",
    buttons: [
      { label: "Dishes to try", variant: "primary", href: "#dishes" },
      { label: "Where to eat", variant: "ghost", href: "#where" },
    ],
  },
  blocks: [
    {
      type: "answer",
      heading: "The short answer",
      md: `Start with a Malvani fish thali and a glass of sol kadhi. If you do not eat fish, try ukadiche modak, bhakri with vegetable dishes and ghavan with coconut chutney. Mango season, in the hot months, adds Alphonso mangoes to the menu.`,
    },

    {
      type: "dishGrid",
      id: "dishes",
      heading: "Dishes to try",
      sub: "Filter by type. Spice levels vary by cook, so ask before you order.",
      filterLabel: "Type",
      allTypesLabel: "All types",
      tipPrefix: "Tip",
      dishes: [
        { name: "Malvani fish thali", type: "Seafood",     description: "A plate of fried fish, fish curry, rice, bhakri and sol kadhi. The classic Konkan meal.", tip: "Ask which fish is freshest that day" },
        { name: "Fish fry",           type: "Seafood",     description: "Fish coated in a spiced rava or masala crust and shallow fried, often pomfret, surmai (kingfish) or mackerel.", tip: "Order it hot, straight from the pan" },
        { name: "Prawn curry",        type: "Seafood",     description: "Prawns in a coconut and masala gravy, usually eaten with rice or bhakri.", tip: "Ask for the spice level you can take" },
        { name: "Sukka (dry) clams",  type: "Seafood",     description: "Clams cooked dry with coconut and spices, a local speciality.", tip: "Best at coastal villages and homestays" },
        { name: "Kombdi vade",        type: "Chicken",     description: "A Malvani chicken curry served with puffy, deep-fried vade made from rice and other flours.", tip: "Often a restaurant speciality" },
        { name: "Sol kadhi",          type: "Drink",       description: "A cool, pink drink of kokum and coconut milk, served with meals and said to aid digestion.", tip: "Try it with spicy food" },
        { name: "Ukadiche modak",     type: "Sweet",       description: "Steamed rice-flour dumplings filled with coconut and jaggery, served with ghee.", tip: "Especially popular during Ganeshotsav" },
        { name: "Ghavan",             type: "Vegetarian",  description: "Thin, soft rice-flour crepes, served with coconut chutney or a curry.", tip: "A good breakfast" },
        { name: "Bhakri",             type: "Vegetarian",  description: "A round flatbread made from rice, jowar or ragi flour, eaten with curries and vegetables.", tip: "Ask what flour is used" },
        { name: "Vegetable usal",     type: "Vegetarian",  description: "A dry, spiced sprout or pulse dish often served with bread or rice.", tip: "A common homestay meal" },
        { name: "Alphonso mango",     type: "Sweet",       description: "The famous Konkan mango, often eaten fresh or as aamras with a meal.", tip: "Available in the hot months; ask your host" },
        { name: "Cashew",             type: "Sweet",       description: "The coast grows cashew, and you can buy roasted nuts and sweets from local shops.", tip: "A good thing to bring home" },
      ],
    },

    {
      type: "guide",
      id: "style",
      heading: "What makes Konkan food different",
      toc: [],
      sections: [
        {
          id: "style-list",
          title: "Five things that define the cuisine",
          body: [
            `- **Coconut.** Grated, ground and as milk, it is in almost every dish.
- **Kokum.** A sour dried fruit used for tang, and the base of the cooling drink sol kadhi.
- **Seafood.** Fresh catch, usually fried in a rava or spice coating or cooked in a curry.
- **Malvani masala.** A dry spice blend with a strong, hot character.
- **Konkani and Malvani.** Malvani is the cuisine of the Malvan and Sindhudurg area, and it is the one most visitors mean. Other Konkani styles are found along the wider coast, including Goa and Karnataka.`,
          ],
        },
      ],
    },

    {
      type: "prose",
      id: "veg",
      heading: "Vegetarian options",
      md: `Seafood dominates the menu, but vegetarians eat well in Konkan. Look for sol kadhi, ukadiche modak, vegetable usal, bhakri, ghavan with coconut chutney, and seasonal fruit. Many homestays cook a vegetarian thali if you ask in advance. Mention any dietary needs when you book. See [Konkan homestays](guide:konkan-best-hotels-homestays).`,
    },

    {
      type: "guide",
      id: "where",
      heading: "Where to eat in Konkan",
      toc: [],
      sections: [
        {
          id: "where-table",
          title: "By area",
          body: [
            `The best meals are often at homestays, small family-run restaurants and thali places. A few ideas by area:

| Area | What to look for |
| --- | --- |
| **Malvan and Tarkarli** | Small family-run Malvani restaurants and homestay thalis, with fresh seafood close to the sea |
| **Dapoli and Harnai** | Fresh catch near the fish port, and farm and homestay meals |
| **Ganpatipule** | Simple thali restaurants and hotel kitchens near the temple and beach |
| **Raigad coast (Alibaug to Harihareshwar)** | Hotel restaurants and local eateries serving fresh seafood; plan meals with your hotel in quieter villages |
| **Vengurla and Sindhudurg** | Village homestays and small local restaurants; ask your host for recommendations |`,
          ],
        },
      ],
    },

    {
      type: "guide",
      id: "season",
      heading: "Food by season",
      toc: [],
      sections: [
        {
          id: "season-table",
          title: "What changes through the year",
          body: [
            `| Season | What to expect |
| --- | --- |
| **October to February** | Good weather and fresh seafood. Peak season for eating out on the coast. |
| **March to May** | Hot weather and mango season, with cooling drinks and fresh fruit. |
| **June to September** | Fishing is usually restricted for a couple of months in the monsoon, so fresh sea fish can be limited. Ask your host what is available. |

See [best time to visit Konkan](guide:konkan-guide-best-time-to-visit).`,
          ],
        },
      ],
    },

    {
      type: "guide",
      id: "tips",
      heading: "Eating tips",
      toc: [],
      sections: [
        {
          id: "tips-list",
          title: "Six things that help",
          body: [
            `- **Choose busy places.** High turnover usually means fresher food.
- **Check the fish.** Ask what is fresh today, and order that.
- **Order ahead at homestays.** Hosts often cook to order, so tell them what you want.
- **Ask about spice.** Malvani food can be very hot; ask for it milder if you prefer.
- **Water.** Drink bottled or properly filtered water.
- **Carry cash.** Small eateries and homestays may not take cards.`,
          ],
        },
      ],
    },

    {
      type: "clusters",
      id: "plan",
      heading: "Eat your way along the coast",
      sub: "",
      clusters: [
        {
          heading: "Destinations and stay types",
          desc: "",
          links: [
            { label: "Tarkarli and Malvan", guide: "konkan-hotels-tarkarli-malvan", desc: "The home of Malvani cooking" },
            { label: "Dapoli and Harnai", guide: "konkan-hotels-dapoli-harnai", desc: "Fish port, farms and mangoes" },
            { label: "Vengurla and Sindhudurg", guide: "konkan-hotels-vengurla-sindhudurg", desc: "Cashew and coastal villages" },
            { label: "Homestays and agro-tourism", guide: "konkan-best-hotels-homestays", desc: "Home-cooked meals" },
            { label: "Things to see in Konkan", guide: "konkan-guide-things-to-see", desc: "Beaches, forts, temples" },
            { label: "Best hotels in Konkan", guide: "best-hotels-in-konkan", desc: "Where to stay" },
          ],
        },
      ],
    },

    {
      type: "faq",
      id: "faq",
      heading: "Konkan food: questions",
      groups: [
        {
          items: [
            { q: "What is Malvani food?",
              a: "Malvani is the cuisine of the Malvan and Sindhudurg area on the Konkan coast, known for fresh seafood, coconut, kokum and a hot spice masala. See [Tarkarli and Malvan](guide:konkan-hotels-tarkarli-malvan).",
              open: true },
            { q: "What should I eat in Konkan?",
              a: "Try a fish thali, sol kadhi, kombdi vade, ukadiche modak and, in season, Alphonso mangoes. Vegetarians can try ghavan, bhakri and vegetable dishes. See [things to see in Konkan](guide:konkan-guide-things-to-see)." },
            { q: "Is Konkan food spicy?",
              a: "Malvani food can be quite hot, but you can ask for it milder. Sol kadhi is a cooling drink to have alongside. See [Konkan homestays](guide:konkan-best-hotels-homestays)." },
            { q: "Can vegetarians eat well in Konkan?",
              a: "Yes. Many homestays and restaurants cook vegetarian thalis if you ask ahead, and there are traditional dishes such as ghavan, bhakri and usal. See [Konkan homestays](guide:konkan-best-hotels-homestays)." },
            { q: "Where can I eat the best Malvani food?",
              a: "Malvan and Tarkarli are the home of Malvani cooking. Homestays and small family-run places are often the best. See [Tarkarli and Malvan](guide:konkan-hotels-tarkarli-malvan)." },
            { q: "Is fresh fish available in monsoon?",
              a: "Less so. Fishing is usually restricted for a couple of months, so ask your host what is available. See [monsoon stays](guide:konkan-guide-monsoon-stays)." },
          ],
        },
      ],
    },

    {
      type: "cta",
      heading: "Stay where the food is good",
      text:
        "Message the property directly on WhatsApp. Prices are in INR and there are no booking fees.",
      button: { label: "See Konkan homestays", guide: "konkan-best-hotels-homestays" },
    },
  ],
};

export default guide;