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
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop",
      },
      {
        name: "Lamb Shawarma Wrap",
        description:
          "Charcoal-grilled lamb, hummus, tahini, sumac onions, fresh herbs.",
        price: "£5.50",
        tags: ["bestseller"],
        image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd994b3?w=400&h=300&fit=crop",
      },
      {
        name: "Mixed Shawarma Wrap",
        description:
          "Half chicken, half lamb. All flavour. The signature.",
        price: "£5.50",
        image: "https://images.unsplash.com/photo-1528840042246-12123dd332d8?w=400&h=300&fit=crop",
      },
      {
        name: "Spicy Chicken Wrap",
        description:
          "Chicken shawarma fired up with chilli sauce, jalapeños, hot pickles.",
        price: "£5.50",
        tags: ["spicy"],
        image: "https://images.unsplash.com/photo-1552763519-5d1d6c73de04?w=400&h=300&fit=crop",
      },
      {
        name: "Falafel Wrap",
        description:
          "Crispy chickpea falafel, tahini, salad, pickled cucumber.",
        price: "£4.00",
        tags: ["veg"],
        image: "https://images.unsplash.com/photo-1585238341710-4dd0899a2fe4?w=400&h=300&fit=crop",
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
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
      },
      {
        name: "Lamb Shawarma Plate",
        description:
          "Charcoal-grilled lamb, rice, hummus, tahini, fresh herbs.",
        price: "£10.00",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop",
      },
      {
        name: "Mixed Grill Plate",
        description:
          "Chicken, lamb, kofta, rice, salad, sauces.",
        price: "£10.00",
        tags: ["bestseller"],
        image: "https://images.unsplash.com/photo-1624621633413-7f57b2da7d6a?w=400&h=300&fit=crop",
      },
      {
        name: "Falafel Plate",
        description:
          "Falafel, hummus, salad, tahini, pickles, warm flatbread.",
        price: "£10.00",
        tags: ["veg"],
        image: "https://images.unsplash.com/photo-1585238341710-4dd0899a2fe4?w=400&h=300&fit=crop",
      },
    ],
  },
  {
    id: "sides",
    title: "Sides",
    emoji: "🍟",
    items: [
      { name: "Loaded Fries", description: "Shawarma meat, garlic sauce, chilli, pickles.", price: "£3.00", tags: ["new"], image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop" },
      { name: "Hummus & Bread", description: "Velvety hummus, olive oil, warm flatbread.", price: "£3.00", tags: ["veg"], image: "https://images.unsplash.com/photo-1509617915104-5f966a4b3a37?w=400&h=300&fit=crop" },
      { name: "Halloumi Fries", description: "Crispy halloumi, honey, chilli flakes.", price: "£4.00", tags: ["veg"], image: "https://images.unsplash.com/photo-1578050494967-246ac4735a11?w=400&h=300&fit=crop" },
      { name: "Fries", description: "Crispy seasoned fries.", price: "£3.00", tags: ["veg"], image: "https://images.unsplash.com/photo-1584054487784-41fcb59a9e4d?w=400&h=300&fit=crop" },
      { name: "Garden Salad", description: "Tomato, cucumber, onion, herbs, lemon.", price: "£3.00", tags: ["veg"], image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop" },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    emoji: "🥤",
    items: [
      { name: "Fresh Mint Lemonade", description: "House special. Cold-pressed.", price: "£2.95", tags: ["veg"], image: "https://images.unsplash.com/photo-1523677745218-f71cad922ea8?w=400&h=300&fit=crop" },
      { name: "Ayran", description: "Traditional Turkish yoghurt drink.", price: "£2.95", tags: ["veg"], image: "https://images.unsplash.com/photo-1553530666-ba2a8e36cd12?w=400&h=300&fit=crop" },
      { name: "Soft Drinks", description: "Coke, Diet Coke, Sprite, Fanta.", price: "£1.50", image: "https://images.unsplash.com/photo-1554866585-c2e6f1bbf93e?w=400&h=300&fit=crop" },
      { name: "Still / Sparkling Water", description: "500ml bottle.", price: "£1.50", image: "https://images.unsplash.com/photo-1577098188255-872037eaf144?w=400&h=300&fit=crop" },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    emoji: "🍰",
    items: [
      { name: "Baklava", description: "Pistachio, honey, layered filo. Made fresh daily.", price: "£5.00", tags: ["veg"], image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd994b3?w=400&h=300&fit=crop" },
      { name: "Kunafa", description: "Warm cheese-stuffed pastry, sugar syrup, pistachio.", price: "£6.50", tags: ["veg", "bestseller"], image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop" },
    ],
  },
];

export const tagLabels: Record<Tag, { label: string; className: string }> = {
  spicy: { label: "🌶️ Spicy", className: "bg-brand-red text-white" },
  veg: { label: "🌱 Veg", className: "bg-brand-green text-white" },
  new: { label: "✨ New", className: "bg-brand-yellow text-brand-black" },
  bestseller: { label: "🔥 Bestseller", className: "bg-brand-black text-white" },
};
