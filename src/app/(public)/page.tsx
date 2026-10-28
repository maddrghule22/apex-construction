import React from "react";
import type { Metadata } from "next";
import Hero from "@/components/public/Hero";
import StatsSection from "@/components/public/StatsSection";
import ServicesGrid from "@/components/public/ServicesGrid";
import FeaturedProjects from "@/components/public/FeaturedProjects";
import ProcessSection from "@/components/public/ProcessSection";
import WhyChooseUs from "@/components/public/WhyChooseUs";
import TestimonialsAndFaq from "@/components/public/TestimonialsAndFaq";
import WhatsAppBanner from "@/components/public/WhatsAppBanner";

export const metadata: Metadata = {
  title: "Sree Samarth Krupa Enterprises | Builders & Developers | Turnkey Construction",
  description:
    "Turnkey residential bungalows, villas, independent row houses, and commercial complexes in Maharashtra. Directly supervised by Dnyaneshwar Pawale (+91 98502 91262) & Shravan Pawale (+91 72764 84671).",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Verified / Baseline Statistics */}
      <StatsSection />

      {/* Residential & Commercial Core Services */}
      <ServicesGrid />

      {/* Featured Projects Portfolio */}
      <FeaturedProjects />

      {/* 6-Step Construction Methodology */}
      <ProcessSection />

      {/* Engineering Standards & Why Choose Us */}
      <WhyChooseUs />

      {/* Labeled Sample Testimonials & FAQ */}
      <TestimonialsAndFaq />

      {/* WhatsApp Immediate Action Banner */}
      <WhatsAppBanner />
    </div>
  );
}
