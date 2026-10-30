import React from "react";
import type { Metadata } from "next";
import Hero from "@/components/public/Hero";
import StatsSection from "@/components/public/StatsSection";
import ServicesGrid from "@/components/public/ServicesGrid";
import FeaturedProjects from "@/components/public/FeaturedProjects";
import ProcessSection from "@/components/public/ProcessSection";
import WhyChooseUs from "@/components/public/WhyChooseUs";
import TestimonialsAndFaq from "@/components/public/TestimonialsAndFaq";

export const metadata: Metadata = {
  title: "Shree Samarth Krupa Enterprises | Builders & Developers | Turnkey Construction",
  description:
    "Turnkey residential bungalows, villas, independent row houses, and commercial complexes in Maharashtra. Directly supervised by founder Dnyaneshwar Pawale (+91 98502 91262).",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Verified Construction Highlights with Real Images */}
      <StatsSection />

      {/* Featured Projects Portfolio - Scalable Project Showcase */}
      <FeaturedProjects />

      {/* Residential & Commercial Core Services */}
      <ServicesGrid />

      {/* 6-Step Construction Methodology with Images */}
      <ProcessSection />

      {/* Engineering Standards & Why Choose Us */}
      <WhyChooseUs />

      {/* Labeled Sample Testimonials & FAQ */}
      <TestimonialsAndFaq />
    </div>
  );
}
