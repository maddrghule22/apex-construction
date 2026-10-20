import React from "react";
import Hero from "@/components/public/Hero";
import StatsSection from "@/components/public/StatsSection";
import ServicesGrid from "@/components/public/ServicesGrid";
import FeaturedProjects from "@/components/public/FeaturedProjects";
import ProcessSection from "@/components/public/ProcessSection";
import WhyChooseUs from "@/components/public/WhyChooseUs";
import EstimateCalculator from "@/components/public/EstimateCalculator";
import TestimonialsAndFaq from "@/components/public/TestimonialsAndFaq";
import WhatsAppBanner from "@/components/public/WhatsAppBanner";

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

      {/* Embedded Live Construction Cost Estimator */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-construction-600 uppercase tracking-wider bg-construction-50 px-3 py-1 rounded-full border border-construction-200">
              Interactive Planning Tool
            </span>
            <h2 className="text-3xl font-extrabold text-navy-900 tracking-tight mt-2">
              Calculate Your Project Cost Now
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              Test different built-up areas, floor counts, and luxury tiers with our real-time formula calculator.
            </p>
          </div>

          <EstimateCalculator />
        </div>
      </section>

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
