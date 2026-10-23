import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    template: "%s | Sree Samarth Krupa Enterprises",
    default:
      "Sree Samarth Krupa Enterprises | Builders & Developers | Water Tanker & Industrial Suppliers",
  },
  description:
    "Sree Samarth Krupa Enterprises — Premier Builders & Developers and Water Tanker & Industrial Suppliers. Turnkey civil construction, bungalows, commercial buildings, 24x7 water tankers, and industrial materials supply. Contact Shravan Pawale (7276484671) & Dnyaneshwar Pawale (9850291262).",
  keywords: [
    "Sree Samarth Krupa Enterprises",
    "Samarth Krupa Builders and Developers",
    "Water Tanker Suppliers",
    "Industrial Suppliers",
    "Shravan Pawale",
    "Dnyaneshwar Pawale",
    "Construction Company",
    "Turnkey Building Contractor",
    "Bungalow Construction",
    "Construction Water Tanker",
    "Maharashtra Civil Contractor",
  ],
  authors: [{ name: "Sree Samarth Krupa Enterprises" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-white text-charcoal-800 antialiased">
        {children}
      </body>
    </html>
  );
}
