import React from "react";
import Link from "next/link";
import {
  Phone,
  ArrowRight,
  Building2,
  ShieldCheck,
  CheckCircle2,
  HardHat,
  MessageSquare,
} from "lucide-react";
import { generateWhatsAppUrl } from "@/lib/whatsapp/url";
import VisitingCardShowcase from "./VisitingCardShowcase";

export default function Hero() {
  const generalWhatsApp = generateWhatsAppUrl({ type: "GENERAL" });

  return (
    <section className="relative bg-navy-950 text-white overflow-hidden border-b border-navy-800">
      {/* Background Architectural Photo with Dark Overlay for Maximum Contrast */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=2000&q=80')",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Clear Value Proposition (7 cols) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
            <div className="space-y-2 sm:space-y-3">
              <p className="text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-wider text-construction-400">
                Shree Samarth Krupa Enterprises • General Contractors &amp; Developers
              </p>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight break-words">
                Turnkey Residential &amp; Commercial Construction
              </h1>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl">
              From foundation excavation to final structural finishing. We build custom residential bungalows, modern villas, independent row houses, and commercial premises across Maharashtra with certified materials, itemized BOQ contracts, and daily proprietor supervision.
            </p>

            {/* Direct Proprietor Contact Hotline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg pt-1">
              <div className="p-3 sm:p-3.5 rounded-xl bg-navy-900 border border-navy-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-gray-400 uppercase font-bold block">
                    Proprietor • Contracts
                  </span>
                  <span className="text-xs font-bold text-white block">
                    Dnyaneshwar Pawale
                  </span>
                  <a
                    href="tel:+919850291262"
                    className="text-xs font-bold text-construction-400 hover:text-construction-300 flex items-center mt-0.5"
                  >
                    <Phone className="w-3 h-3 mr-1 text-construction-500" />
                    +91 98502 91262
                  </a>
                </div>
              </div>

              <div className="p-3 sm:p-3.5 rounded-xl bg-navy-900 border border-navy-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-gray-400 uppercase font-bold block">
                    Proprietor • Site Operations
                  </span>
                  <span className="text-xs font-bold text-white block">
                    Shravan Pawale
                  </span>
                  <a
                    href="tel:+917276484671"
                    className="text-xs font-bold text-construction-400 hover:text-construction-300 flex items-center mt-0.5"
                  >
                    <Phone className="w-3 h-3 mr-1 text-construction-500" />
                    +91 72764 84671
                  </a>
                </div>
              </div>
            </div>

            {/* Responsive Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-construction-500 hover:bg-construction-600 shadow-md shadow-construction-500/20 transition active:scale-95 text-center"
              >
                <Building2 className="w-4 h-4 mr-2" />
                Explore Our Work
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-gray-200 bg-navy-900 hover:bg-navy-850 hover:text-white border border-navy-700 transition active:scale-95 text-center"
              >
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>

              <a
                href={generalWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-3.5 rounded-xl text-sm font-bold text-emerald-400 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-800/80 transition text-center"
              >
                <MessageSquare className="w-4 h-4 mr-1.5" />
                WhatsApp
              </a>
            </div>

            {/* Core Commitments */}
            <div className="pt-5 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 border-t border-navy-800/80 text-[11px] sm:text-xs text-gray-300">
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
                <span>Turnkey Delivery</span>
              </div>
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-construction-400 shrink-0" />
                <span>Structural Design</span>
              </div>
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <HardHat className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
                <span>Daily Supervision</span>
              </div>
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400 shrink-0" />
                <span>Fixed BOQ Pricing</span>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Visiting Card & Verified Contact (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <VisitingCardShowcase />
          </div>
        </div>
      </div>
    </section>
  );
}
