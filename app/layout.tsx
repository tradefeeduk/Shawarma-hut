import type { Metadata, Viewport } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import { business } from "@/lib/info";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shawarmahut.uk"),
  title: `${business.name} | ${business.tagline}`,
  description: business.shortDescription,
  keywords: [
    "shawarma",
    "london shawarma",
    "best shawarma london",
    "viral shawarma",
    "tiktok shawarma",
    "shawarma hut",
    "halal london",
    "middle eastern food london",
  ],
  openGraph: {
    title: `${business.name} | ${business.tagline}`,
    description: business.shortDescription,
    url: "https://shawarmahut.uk",
    siteName: business.name,
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} | ${business.tagline}`,
    description: business.shortDescription,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#E63946",
  width: "device-width",
  initialScale: 1,
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: business.name,
  description: business.shortDescription,
  url: "https://shawarmahut.uk",
  telephone: business.phone,
  servesCuisine: ["Middle Eastern", "Lebanese", "Turkish", "Shawarma"],
  priceRange: "££",
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.line1,
    addressLocality: business.address.line2,
    postalCode: business.address.postcode,
    addressCountry: "GB",
  },
  openingHoursSpecification: business.hours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.day,
    opens: h.open,
    closes: h.close,
  })),
  sameAs: [business.socials.instagram, business.socials.tiktok],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
