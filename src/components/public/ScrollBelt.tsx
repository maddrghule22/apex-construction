"use client";

import React from "react";
import {
  ShieldCheck,
  CheckCircle2,
  HardHat,
  Award,
  Layers,
  Sparkles,
  Building,
  Check,
} from "lucide-react";

const BELT_ITEMS = [
  {
    icon: ShieldCheck,
    title: "Fe-550D TMT Reinforcement Steel",
    subtitle: "Primary Mill Direct Procurement",
  },
  {
    icon: Building,
    title: "Seismic Zone III Compliant",
    subtitle: "Earthquake-Resistant RCC Framed Structures",
  },
  {
    icon: HardHat,
    title: "Daily Proprietor On-Site Supervision",
    subtitle: "Dnyaneshwar Pawale Personal Inspection",
  },
  {
    icon: Award,
    title: "Grade 53 OPC Certified Cement",
    subtitle: "Tested Batch Quality Certifications",
  },
  {
    icon: CheckCircle2,
    title: "Chartered Structural Designs",
    subtitle: "Licensed Civil Engineering Blueprints",
  },
  {
    icon: Layers,
    title: "Turnkey Fixed-Timeline Execution",
    subtitle: "Excavation to Final Handover Delivery",
  },
  {
    icon: Sparkles,
    title: "15+ Years Construction Mastery",
    subtitle: "Bungalows, Villas & Commercial Complexes",
  },
];

export default function ScrollBelt() {
  return (
    <section
      aria-label="Certified Construction Standards"
      className="relative bg-navy-950 border-y border-navy-800/90 py-3.5 sm:py-4 overflow-hidden select-none"
      style={{ backgroundColor: "#070E17" }}
    >
      {/* Left and Right Fade Gradients for smooth fade edge effect */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-navy-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-navy-950 to-transparent z-10 pointer-events-none" />

      {/* Infinite Scrolling Ticker (Belt) */}
      <div className="animate-marquee flex items-center gap-4 sm:gap-6">
        {/* Render twice for seamless infinite loop */}
        {[...BELT_ITEMS, ...BELT_ITEMS].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center space-x-3 px-4 py-2 rounded-xl bg-navy-900/80 border border-navy-800 backdrop-blur-xs whitespace-nowrap group hover:border-construction-500/60 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-navy-800/90 text-construction-400 flex items-center justify-center shrink-0 border border-navy-700">
                <Icon className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-xs sm:text-sm font-bold text-white tracking-wide">
                  {item.title}
                </p>
                <p className="text-[10px] text-gray-400 font-medium">
                  {item.subtitle}
                </p>
              </div>
              <span className="text-gray-700 pl-3 select-none">•</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
