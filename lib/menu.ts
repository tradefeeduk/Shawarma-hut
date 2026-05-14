export type Tag = "spicy" | "veg" | "new" | "bestseller";

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  tags?: Tag[];
  image?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  emoji: string;
  items: MenuItem[];
};

// TODO: Swap with real menu once user pastes it.
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
        image: "https://placehold.co/600x500/f3f4f6/6b7280?text=Chicken+Wrap",
      },
      {
        name: "Lamb Shawarma Wrap",
        description:
          "Charcoal-grilled lamb, hummus, tahini, sumac onions, fresh herbs.",
        price: "£5.50",
        tags: ["bestseller"],
        image: "https://placehold.co/600x500/f3f4f6/6b7280?text=Lamb+Wrap",
      },
      {
        name: "Mixed Shawarma Wrap",
        description:
          "Half chicken, half lamb. All flavour. The signature.",
        price: "£5.50",
        image: "https://placehold.co/600x500/f3f4f6/6b7280?text=Mixed+Wrap",
      },
      {
        name: "Spicy Chicken Wrap",
        description:
          "Chicken shawarma fired up with chilli sauce, jalapeños, hot pickles.",
        price: "£5.50",
        tags: ["spicy"],
        image: "https://placehold.co/600x500/f3f4f6/6b7280?text=Spicy+Wrap",
      },
      {
        name: "Falafel Wrap",
        description:
          "Crispy chickpea falafel, tahini, salad, pickled cucumber.",
        price: "£4.00",
        tags: ["veg"],
        image: "https://placehold.co/600x500/f3f4f6/6b7280?text=Falafel+Wrap",
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
        image: "https://placehold.co/600x500/f3f4f6/6b7280?text=Chicken+Plate",
      },
      {
        name: "Lamb Shawarma Plate",
        description:
          "Charcoal-grilled lamb, rice, hummus, tahini, fresh herbs.",
        price: "£10.00",
        image: "https://placehold.co/600x500/f3f4f6/6b7280?text=Lamb+Plate",
      },
      {
        name: "Mixed Grill Plate",
        description:
          "Chicken, lamb, kofta, rice, salad, sauces.",
        price: "£10.00",
        tags: ["bestseller"],
        image: "https://placehold.co/600x500/f3f4f6/6b7280?text=Mixed+Grill",
      },
      {
        name: "Falafel Plate",
        description:
          "Falafel, hummus, salad, tahini, pickles, warm flatbread.",
        price: "£10.00",
        tags: ["veg"],
        image: "https://placehold.co/600x500/f3f4f6/6b7280?text=Falafel+Plate",
      },
    ],
  },
  {
    id: "sides",
    title: "Sides",
    emoji: "🍟",
    items: [
      { name: "Loaded Fries", description: "Shawarma meat, garlic sauce, chilli, pickles.", price: "£3.00", tags: ["new"], image: "https://placehold.co/600x500/f3f4f6/6b7280?text=Loaded+Fries" },
      { name: "Hummus & Bread", description: "Velvety hummus, olive oil, warm flatbread.", price: "£3.00", tags: ["veg"], image: "https://placehold.co/600x500/f3f4f6/6b7280?text=Hummus" },
      { name: "Halloumi Fries", description: "Crispy halloumi, honey, chilli flakes.", price: "£4.00", tags: ["veg"], image: "https://placehold.co/600x500/f3f4f6/6b7280?text=Halloumi+Fries" },
      { name: "Fries", description: "Crispy seasoned fries.", price: "£3.00", tags: ["veg"], image: "https://placehold.co/600x500/f3f4f6/6b7280?text=Fries" },
      { name: "Garden Salad", description: "Tomato, cucumber, onion, herbs, lemon.", price: "£3.00", tags: ["veg"], image: "https://placehold.co/600x500/f3f4f6/6b7280?text=Garden+Salad" },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    emoji: "🥤",
    items: [
      { name: "Fresh Mint Lemonade", description: "House special. Cold-pressed.", price: "£2.95", tags: ["veg"], image: "https://placehold.co/600x500/f3f4f6/6b7280?text=Lemonade" },
      { name: "Ayran", description: "Traditional Turkish yoghurt drink.", price: "£2.95", tags: ["veg"], image: "https://placehold.co/600x500/f3f4f6/6b7280?text=Ayran" },
      { name: "Soft Drinks", description: "Coke, Diet Coke, Sprite, Fanta.", price: "£1.50", image: "https://placehold.co/600x500/f3f4f6/6b7280?text=Soft+Drinks" },
      { name: "Still / Sparkling Water", description: "500ml bottle.", price: "£1.50", image: "https://placehold.co/600x500/f3f4f6/6b7280?text=Water" },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    emoji: "🍰",
    items: [
      { name: "Baklava", description: "Pistachio, honey, layered filo. Made fresh daily.", price: "£5.00", tags: ["veg"], image: "https://placehold.co/600x500/f3f4f6/6b7280?text=Baklava" },
      { name: "Kunafa", description: "Warm cheese-stuffed pastry, sugar syrup, pistachio.", price: "£6.50", tags: ["veg", "bestseller"], image: "https://placehold.co/600x500/f3f4f6/6b7280?text=Kunafa" },
    ],
  },
];

export const tagLabels: Record<Tag, { label: string; className: string }> = {
  spicy: { label: "🌶️ Spicy", className: "bg-brand-red text-white" },
  veg: { label: "🌱 Veg", className: "bg-brand-green text-white" },
  new: { label: "✨ New", className: "bg-brand-yellow text-brand-black" },
  bestseller: { label: "🔥 Bestseller", className: "bg-brand-black text-white" },
};
