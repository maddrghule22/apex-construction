"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MapPin, ShieldCheck, CheckCircle2, ChevronRight } from "lucide-react";

interface ProjectPreview {
  id: string;
  slug: string;
  title: string;
  category: string;
  status: string;
  location: string;
  builtUpArea: string;
  floors: string;
  image: string;
  highlight: string;
}

const FEATURED_SHOWCASE: ProjectPreview[] = [
  {
    id: "proj-001",
    slug: "the-grand-haven-villa",
    title: "The Grand Haven Villa",
    category: "Residential Villa",
    status: "Delivered & Handed Over",
    location: "Green Valley Heights, Maharashtra",
    builtUpArea: "4,800 sq.ft",
    floors: "3 Levels",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    highlight: "Seismic-resistant RCC framing, double-height living spaces & luxury finishes",
  },
  {
    id: "proj-002",
    slug: "skyline-commerce-plaza",
    title: "Skyline Commerce Plaza",
    category: "Commercial Complex",
    status: "Active Execution",
    location: "Central Business District, Tech Corridor",
    builtUpArea: "18,500 sq.ft",
    floors: "5 Floors",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    highlight: "Post-tensioned slabs, glass curtain facade & heavy-footfall retail layout",
  },
  {
    id: "proj-003",
    slug: "oakwood-modern-residence",
    title: "Oakwood Modern Residence",
    category: "Duplex Family Home",
    status: "Active Execution",
    location: "Oakwood Enclave, Phase 2",
    builtUpArea: "3,200 sq.ft",
    floors: "2 Levels",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    highlight: "Acoustic insulation, skylights & reinforced concrete masonry",
  },
];

export default function HeroProjectShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const current = FEATURED_SHOWCASE[activeIndex];

  // Auto-slide like JSW Greentech banner
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % FEATURED_SHOWCASE.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, activeIndex]);

  return (
    <div
      className="w-full max-w-lg lg:max-w-xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Container with premium card depth */}
      <div
        className="relative rounded-3xl bg-navy-900/95 border border-navy-700/80 p-3 sm:p-4 shadow-2xl backdrop-blur-md overflow-hidden text-left hover-lift"
        style={{ backgroundColor: "rgba(13, 27, 42, 0.95)" }}
      >
        {/* Main Project Hero Card with Smooth Crossfade */}
        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-navy-950 group">
          {FEATURED_SHOWCASE.map((proj, idx) => (
            <img
              key={proj.id}
              src={proj.image}
              alt={proj.title}
              width={600}
              height={450}
              loading={idx === 0 ? "eager" : "lazy"}
              decoding="async"
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out hover-zoom-img ${
                idx === activeIndex
                  ? "opacity-100 scale-100 z-0"
                  : "opacity-0 scale-95 pointer-events-none -z-10"
              }`}
            />
          ))}

          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent pointer-events-none" />

          {/* Top Status & Category Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
            <span className="px-3 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider bg-navy-950/90 text-white backdrop-blur-md border border-slate-700/80 shadow-sm flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-construction-400 animate-pulse" />
              {current.category}
            </span>
            <span className="px-3 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider bg-emerald-600 text-white shadow-sm flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-white" />
              {current.status}
            </span>
          </div>

          {/* Bottom Card Information */}
          <div className="absolute bottom-3 left-3 right-3 space-y-1.5 z-10">
            <div className="flex items-center text-xs text-gray-300">
              <MapPin className="w-3.5 h-3.5 mr-1 text-construction-400 shrink-0" />
              <span className="truncate">{current.location}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
              {current.title}
            </h3>

            <p className="text-xs text-gray-300 line-clamp-1">
              {current.highlight}
            </p>

            <div className="pt-1 grid grid-cols-2 gap-2 text-xs">
              <div className="bg-navy-900/80 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-white/10">
                <span className="text-gray-400 block text-[9px] uppercase tracking-wide">Built-Up Area</span>
                <span className="font-extrabold text-white">{current.builtUpArea}</span>
              </div>
              <div className="bg-navy-900/80 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-white/10">
                <span className="text-gray-400 block text-[9px] uppercase tracking-wide">Elevation</span>
                <span className="font-extrabold text-white">{current.floors}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Project Selector Tabs with Animated Progress Timer Bar (JSW Greentech slider style) */}
        <div className="mt-3 grid grid-cols-3 gap-2">
          {FEATURED_SHOWCASE.map((proj, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={proj.id}
                onClick={() => setActiveIndex(idx)}
                className={`relative p-2 rounded-xl text-left transition-all duration-300 border overflow-hidden cursor-pointer ${
                  isActive
                    ? "bg-navy-800 border-construction-500 shadow-sm"
                    : "bg-navy-950/60 border-navy-800 hover:bg-navy-850 hover:border-navy-700 opacity-70 hover:opacity-100"
                }`}
              >
                <span className="text-[10px] text-construction-400 font-bold block truncate">
                  0{idx + 1}. {proj.category}
                </span>
                <span className="text-[11px] font-bold text-white block truncate">
                  {proj.title}
                </span>

                {/* Active Slider Progress Bar */}
                {isActive && !isPaused && (
                  <div
                    key={`timer-${activeIndex}`}
                    className="absolute bottom-0 left-0 h-0.5 bg-construction-500 animate-progress-timer"
                  />
                )}
                {isActive && isPaused && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-construction-500" />
                )}
              </button>
            );
          })}
        </div>

        {/* Bottom Direct Link to Project Details */}
        <div className="mt-3 pt-3 border-t border-navy-800 flex items-center justify-between text-xs">
          <div className="flex items-center space-x-1.5 text-gray-300">
            <ShieldCheck className="w-4 h-4 text-construction-400 shrink-0" />
            <span className="text-[11px]">Direct On-Site Supervision: <strong>Dnyaneshwar Pawale</strong></span>
          </div>
          <Link
            href={`/projects/${current.slug}`}
            className="inline-flex items-center text-xs font-bold text-construction-400 hover:text-construction-300 transition shrink-0 ml-2 group"
          >
            <span>View Details</span>
            <ChevronRight className="w-3.5 h-3.5 ml-0.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
