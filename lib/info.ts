// Single source of truth for business info. Swap these values once
// the user pastes the real data.

export const business = {
  name: "Shawarma Hut",
  tagline: "London's most-talked-about shawarma",
  shortDescription:
    "Charcoal-grilled meats, 24-hour marinated, hand-pressed wraps.",
  address: {
    line1: "292b Walworth Road",
    line2: "London, SE17 2TE",
    postcode: "SE17 2TE",
    mapsUrl: "https://maps.google.com/?q=292b+Walworth+Road+London+SE17+2TE",
  },
  phone: "+44 20 7703 3991",
  phoneHref: "tel:+442077033991",
  email: "hello@shawarmahut.uk",
  // 0 = Sunday, 6 = Saturday
  hours: [
    { day: "Mon", open: "11:30", close: "23:00" },
    { day: "Tue", open: "11:30", close: "23:00" },
    { day: "Wed", open: "11:30", close: "23:00" },
    { day: "Thu", open: "11:30", close: "23:00" },
    { day: "Fri", open: "11:30", close: "23:00" },
    { day: "Sat", open: "11:30", close: "23:00" },
    { day: "Sun", open: "11:30", close: "23:00" },
  ] as const,
  socials: {
    instagram: "https://instagram.com/shawarmahutlondon",
    tiktok: "https://www.tiktok.com/@shawarmahutlondon",
    tiktokHandle: "@shawarmahutlondon",
    instagramHandle: "@shawarmahutlondon",
  },
  delivery: {
    deliveroo: "#", // TODO
    uberEats: "#", // TODO
    justEat: "#", // TODO
    whatsapp: "#", // TODO
  },
  press: [
    "⭐ 4.9 on Google",
    "🔥 5M+ views on TikTok",
    "📍 As seen on Time Out London",
    "🌶️ #1 shawarma in the UK (Reddit r/londonfood)",
    "📣 Featured by The Standard",
    "🎬 Viral on Instagram Reels",
  ],
};

export const credit = {
  agency: "Alira.London",
  url: "https://alira.london",
  tagline: "Designed & built by",
};
