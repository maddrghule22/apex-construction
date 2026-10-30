"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapPin, ArrowRight, Layers, ShieldCheck, CheckCircle2, ChevronRight } from "lucide-react";

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
  const current = FEATURED_SHOWCASE[activeIndex];

  return (
    <div className="w-full max-w-lg lg:max-w-xl mx-auto">
      {/* Container with premium card depth */}
      <div className="relative rounded-3xl bg-navy-900/90 border border-navy-700/80 p-3 sm:p-4 shadow-2xl backdrop-blur-md overflow-hidden text-left">
        {/* Main Project Hero Card */}
        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-navy-950 group">
          <img
            src={current.image}
            alt={current.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />

          {/* Top Status & Category Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
            <span className="px-3 py-1 rounded-lg text-[11px] font-extrabold uppercase tracking-wider bg-navy-900/90 text-construction-400 backdrop-blur-md border border-navy-700/60 shadow-xs">
              {current.category}
            </span>
            <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-emerald-950/80 text-emerald-300 border border-emerald-700/60 flex items-center gap-1 backdrop-blur-md">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              {current.status}
            </span>
          </div>

          {/* Bottom Card Information */}
          <div className="absolute bottom-3 left-3 right-3 space-y-1.5">
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

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 gap-2 pt-2 text-[11px]">
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

        {/* Project Selector Tabs (Scalable Showcase) */}
        <div className="mt-3 grid grid-cols-3 gap-2">
          {FEATURED_SHOWCASE.map((proj, idx) => (
            <button
              key={proj.id}
              onClick={() => setActiveIndex(idx)}
              className={`p-2 rounded-xl text-left transition border ${
                idx === activeIndex
                  ? "bg-navy-800 border-construction-500 shadow-xs"
                  : "bg-navy-950/60 border-navy-800 hover:bg-navy-850 hover:border-navy-700 opacity-70 hover:opacity-100"
              }`}
            >
              <span className="text-[10px] text-construction-400 font-bold block truncate">
                0{idx + 1}. {proj.category}
              </span>
              <span className="text-[11px] font-bold text-white block truncate">
                {proj.title}
              </span>
            </button>
          ))}
        </div>

        {/* Bottom Direct Link to Project Details */}
        <div className="mt-3 pt-3 border-t border-navy-800 flex items-center justify-between text-xs">
          <div className="flex items-center space-x-1.5 text-gray-300">
            <ShieldCheck className="w-4 h-4 text-construction-400 shrink-0" />
            <span className="text-[11px]">Direct On-Site Supervision: <strong>Dnyaneshwar Pawale</strong></span>
          </div>
          <Link
            href={`/projects/${current.slug}`}
            className="inline-flex items-center text-xs font-bold text-construction-400 hover:text-construction-300 transition shrink-0 ml-2"
          >
            <span>View Details</span>
            <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
