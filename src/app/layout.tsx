import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://apex-construction-21h.pages.dev";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: "%s | Shree Samarth Krupa Enterprises",
    default:
      "Shree Samarth Krupa Enterprises | Builders & Developers | Turnkey Construction",
  },
  description:
    "Shree Samarth Krupa Enterprises — Premier Builders, Developers & Turnkey Civil Contractors in Maharashtra. Turnkey bungalows, luxury villas, independent row houses, and commercial buildings. Directly managed by founder Dnyaneshwar Pawale (+91 98502 91262).",
  keywords: [
    "Shree Samarth Krupa Enterprises",
    "Samarth Krupa Builders and Developers",
    "Dnyaneshwar Pawale",
    "Turnkey Construction Company Maharashtra",
    "Bungalow Builders Pune",
    "Residential Villa Contractors",
    "Row House Developers",
    "Commercial Building Contractors",
    "Civil Structural Contractors",
    "RCC Slab Casting & Framing",
    "Civil Engineering & Contracting",
  ],
  authors: [{ name: "Shree Samarth Krupa Enterprises" }],
  creator: "Shree Samarth Krupa Enterprises",
  publisher: "Shree Samarth Krupa Enterprises",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: baseUrl,
    siteName: "Shree Samarth Krupa Enterprises",
    title: "Shree Samarth Krupa Enterprises | Builders & Developers",
    description:
      "Turnkey residential bungalows, villas, independent row houses, and commercial complexes with structural precision and 100% proprietor supervision.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Shree Samarth Krupa Enterprises Builders & Developers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shree Samarth Krupa Enterprises | Builders & Developers",
    description:
      "Turnkey residential bungalows, villas, and commercial complexes in Maharashtra. Contact Dnyaneshwar Pawale (+91 98502 91262).",
    images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "name": "Shree Samarth Krupa Enterprises",
  "alternateName": "Shree Samarth Krupa Builders & Developers",
  "description":
    "Premier Builders & Developers providing turnkey residential bungalow construction, luxury villas, independent row houses, and commercial complexes.",
  "url": baseUrl,
  "telephone": "+919850291262",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Maharashtra",
    "addressCountry": "IN",
  },
  "founders": [
    {
      "@type": "Person",
      "name": "Dnyaneshwar Pawale",
      "jobTitle": "Proprietor & Founder",
      "telephone": "+919850291262",
    },
  ],
  "knowsAbout": [
    "Turnkey Residential Construction",
    "Bungalow & Villa Building",
    "Commercial Complex Construction",
    "RCC Structural Engineering",
    "Building Renovation & Waterproofing",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-charcoal-800 antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
