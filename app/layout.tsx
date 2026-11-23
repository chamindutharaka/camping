import type { Metadata } from "next";
import { DM_Sans, Fraunces, Noto_Sans_Sinhala } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const notoSinhala = Noto_Sans_Sinhala({
  subsets: ["sinhala"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sinhala",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Camping Gear Hub — Galle | Tent & Camping Equipment Rental",
  description:
    "Rent camping tents, gas stoves, BBQ grills, power banks, and camping chairs in Pinnaduwa, Galle. Free rain cover & ground sheet with every tent. 1st day full price, extra days 50% off.",
  keywords: [
    "camping gear rental Galle",
    "tent rental Galle",
    "Camping Gear Hub Galle",
    "rent camping tent Sri Lanka",
    "BBQ grill rental Galle",
  ],
  openGraph: {
    title: "Camping Gear Hub — Galle | Gear up and Camp on",
    description:
      "Tents starting from LKR 900 with free rain cover & ground sheet. Extra days 50% off. Pick up in Pinnaduwa, Galle.",
    type: "website",
    locale: "en_LK",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Camping Gear Hub — Galle",
  description:
    "Camping equipment and tent rental in Pinnaduwa, Galle. Tents include free rain cover and ground sheet, with 50% off every extra day.",
  telephone: "+94702156828",
  address: {
    "@type": "PostalAddress",
    streetAddress: "S.C.W Electrical, Pinnaduwa",
    addressLocality: "Galle",
    addressCountry: "LK",
  },
  sameAs: ["https://www.facebook.com/p/Camping-Gear-Hub-61555970583596/"],
  priceRange: "LKR 200 - LKR 4,100",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmSans.variable} ${notoSinhala.variable}`}
    >
      <body className="antialiased selection:bg-[#8BBB92]/35 selection:text-[#092328]">
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
