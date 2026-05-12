// Single source of truth for business info. Swap these values once
// the user pastes the real data.

export const business = {
  name: "Shawarma Hut",
  tagline: "London's most-talked-about shawarma",
  shortDescription:
    "Charcoal-grilled meats, 24-hour marinated, hand-pressed wraps. The viral shawarma spot London can't stop posting about.",
  // TODO: replace with the real address
  address: {
    line1: "Shawarma Hut",
    line2: "London, UK",
    postcode: "",
    mapsUrl: "https://maps.google.com/?q=Shawarma+Hut+London",
  },
  phone: "+44 0000 000 000", // TODO
  phoneHref: "tel:+440000000000", // TODO
  email: "hello@shawarmahut.uk", // TODO
  // 0 = Sunday, 6 = Saturday
  hours: [
    { day: "Mon", open: "12:00", close: "23:00" },
    { day: "Tue", open: "12:00", close: "23:00" },
    { day: "Wed", open: "12:00", close: "23:00" },
    { day: "Thu", open: "12:00", close: "23:00" },
    { day: "Fri", open: "12:00", close: "00:00" },
    { day: "Sat", open: "12:00", close: "00:00" },
    { day: "Sun", open: "12:00", close: "23:00" },
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
    "🌶️ #1 shawarma in the UK — Reddit r/londonfood",
    "📣 Featured by The Standard",
    "🎬 Viral on Instagram Reels",
  ],
};

export const credit = {
  agency: "Alira.London",
  url: "https://alira.london",
  tagline: "Designed & built by",
};
