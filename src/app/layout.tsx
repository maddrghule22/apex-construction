import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    template: "%s | Apex Build & Infrastructure",
    default: "Apex Build & Infrastructure | Premium Residential & Commercial Construction",
  },
  description:
    "Turnkey residential and commercial construction services, architectural planning, civil engineering, and cost-effective project execution.",
  keywords: [
    "Construction Company",
    "Residential Construction",
    "Commercial Contractors",
    "Turnkey Building",
    "Civil Engineering",
    "Building Contractor",
    "Construction Cost Estimator",
  ],
  authors: [{ name: "Apex Build & Infrastructure" }],
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
