export type Tag = "spicy" | "veg" | "new" | "bestseller";

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  tags?: Tag[];
};

export type MenuCategory = {
  id: string;
  title: string;
  emoji: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "wraps",
    title: "Wraps",
    emoji: "🌯",
    items: [
      {
        name: "Chicken Shawarma Wrap",
        description:
          "24-hour marinated chicken, garlic sauce, pickles, fries, fresh salad in a hand-pressed flatbread.",
        price: "£5.00",
        tags: ["bestseller"],
      },
      {
        name: "Lamb Shawarma Wrap",
        description:
          "Charcoal-grilled lamb, hummus, tahini, sumac onions, fresh herbs.",
        price: "£5.50",
        tags: ["bestseller"],
      },
      {
        name: "Mixed Shawarma Wrap",
        description:
          "Half chicken, half lamb. All flavour. The signature.",
        price: "£5.50",
      },
      {
        name: "Spicy Chicken Wrap",
        description:
          "Chicken shawarma with chilli sauce, jalapeños, hot pickles.",
        price: "£5.50",
        tags: ["spicy"],
      },
      {
        name: "Falafel Wrap",
        description:
          "Crispy chickpea falafel, tahini, salad, pickled cucumber.",
        price: "£4.00",
        tags: ["veg"],
      },
    ],
  },
  {
    id: "plates",
    title: "Plates",
    emoji: "🍽️",
    items: [
      {
        name: "Chicken Shawarma Plate",
        description:
          "Marinated chicken over saffron rice, salad, garlic sauce, pickles.",
        price: "£10.00",
      },
      {
        name: "Lamb Shawarma Plate",
        description:
          "Charcoal-grilled lamb, rice, hummus, tahini, fresh herbs.",
        price: "£10.00",
      },
      {
        name: "Mixed Grill Plate",
        description:
          "Chicken, lamb, kofta, rice, salad, sauces.",
        price: "£10.00",
        tags: ["bestseller"],
      },
      {
        name: "Falafel Plate",
        description:
          "Falafel, hummus, salad, tahini, pickles, warm flatbread.",
        price: "£10.00",
        tags: ["veg"],
      },
    ],
  },
  {
    id: "sides",
    title: "Sides",
    emoji: "🍟",
    items: [
      { name: "Loaded Fries", description: "Shawarma meat, garlic sauce, chilli, pickles.", price: "£3.00", tags: ["new"] },
      { name: "Hummus & Bread", description: "Smooth hummus, olive oil, warm flatbread.", price: "£3.00", tags: ["veg"] },
      { name: "Halloumi Fries", description: "Crispy halloumi, honey, chilli flakes.", price: "£4.00", tags: ["veg"] },
      { name: "Fries", description: "Crispy seasoned fries.", price: "£3.00", tags: ["veg"] },
      { name: "Garden Salad", description: "Tomato, cucumber, onion, herbs, lemon.", price: "£3.00", tags: ["veg"] },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    emoji: "🥤",
    items: [
      { name: "Fresh Mint Lemonade", description: "House special. Cold-pressed.", price: "£2.95", tags: ["veg"] },
      { name: "Ayran", description: "Traditional Turkish yoghurt drink.", price: "£2.95", tags: ["veg"] },
      { name: "Soft Drinks", description: "Coke, Diet Coke, Sprite, Fanta.", price: "£1.50" },
      { name: "Still / Sparkling Water", description: "500ml bottle.", price: "£1.50" },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    emoji: "🍰",
    items: [
      { name: "Baklava", description: "Pistachio, honey, layered filo. Made fresh daily.", price: "£5.00", tags: ["veg"] },
      { name: "Kunafa", description: "Warm cheese-stuffed pastry, sugar syrup, pistachio.", price: "£6.50", tags: ["veg", "bestseller"] },
    ],
  },
];

export const tagLabels: Record<Tag, { label: string; className: string }> = {
  spicy: { label: "🌶️ Spicy", className: "bg-brand-red text-white" },
  veg: { label: "🌱 Veg", className: "bg-brand-green text-white" },
  new: { label: "✨ New", className: "bg-brand-yellow text-brand-black" },
  bestseller: { label: "🔥 Bestseller", className: "bg-brand-black text-white" },
};
