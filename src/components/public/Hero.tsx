import React from "react";
import Link from "next/link";
import {
  HardHat,
  Phone,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Calculator,
  MessageSquare,
  Building2,
  Sparkles,
} from "lucide-react";
import { generateWhatsAppUrl } from "@/lib/whatsapp/url";
import VisitingCardShowcase from "./VisitingCardShowcase";

export default function Hero() {
  const generalWhatsApp = generateWhatsAppUrl({ type: "GENERAL" });

  return (
    <section className="relative bg-gradient-to-b from-slate-950 via-navy-950 to-slate-900 text-white overflow-hidden">
      {/* High-res architectural background image with subtle blend */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-luminosity scale-105 transition-transform duration-1000"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      {/* Radial ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-construction-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headline, Services & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Auspicious Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-construction-500/40 text-construction-400 text-xs sm:text-sm font-extrabold shadow-lg shadow-black/40 backdrop-blur-md">
              <span className="text-red-500 font-serif">॥ श्री ॥</span>
              <span className="text-slate-600">•</span>
              <span>॥ श्रीराम समर्थ ॥</span>
              <span className="text-slate-600">•</span>
              <span className="hidden sm:inline">॥ जय जय रघुवीर समर्थ ॥</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                SREE SAMARTH KRUPA <br />
                <span className="bg-gradient-to-r from-construction-400 via-orange-400 to-amber-300 bg-clip-text text-transparent font-black">
                  ENTERPRISES
                </span>
              </h1>

              {/* Subtitle Badge */}
              <div className="pt-1 flex flex-wrap items-center gap-2 text-xs sm:text-sm font-black uppercase tracking-wider">
                <span className="bg-construction-500 text-white px-3.5 py-1.5 rounded-xl inline-flex items-center shadow-md shadow-construction-500/20 border border-construction-400/40">
                  <HardHat className="w-4 h-4 mr-1.5 text-construction-100" />
                  Builders &amp; Developers
                </span>
                <span className="bg-slate-800 text-slate-200 px-3.5 py-1.5 rounded-xl inline-flex items-center border border-slate-700">
                  <Building2 className="w-4 h-4 mr-1.5 text-construction-400" />
                  Turnkey Civil Construction
                </span>
              </div>
            </div>

            {/* Supporting description */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              Turnkey residential bungalows, villas, independent row houses, and modern commercial complexes. Built with chartered structural engineering, certified ISI materials, transparent fixed BOQ pricing, and hands-on proprietor supervision from excavation to handover.
            </p>

            {/* Proprietor Direct Hotline Cards */}
            <div className="pt-1 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
              <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-md flex items-center justify-between">
                <div className="text-left">
                  <span className="text-[10px] text-slate-400 uppercase font-extrabold tracking-wider block">
                    Proprietor
                  </span>
                  <span className="text-xs font-bold text-white block">
                    ज्ञानेश्वर पवळे (Dnyaneshwar)
                  </span>
                  <a
                    href="tel:+919850291262"
                    className="text-xs font-black text-construction-400 hover:text-construction-300 flex items-center mt-0.5"
                  >
                    <Phone className="w-3 h-3 mr-1 text-construction-500" />
                    +91 98502 91262
                  </a>
                </div>
                <a
                  href="tel:+919850291262"
                  className="p-2.5 rounded-xl bg-navy-800 hover:bg-navy-750 text-white transition border border-slate-700"
                  title="Call Dnyaneshwar Pawale"
                >
                  <Phone className="w-4 h-4 text-construction-400" />
                </a>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-md flex items-center justify-between">
                <div className="text-left">
                  <span className="text-[10px] text-construction-400 uppercase font-extrabold tracking-wider block">
                    Proprietor
                  </span>
                  <span className="text-xs font-bold text-white block">
                    श्रवण पवळे (Shravan)
                  </span>
                  <a
                    href="tel:+917276484671"
                    className="text-xs font-black text-construction-400 hover:text-construction-300 flex items-center mt-0.5"
                  >
                    <Phone className="w-3 h-3 mr-1 text-construction-400" />
                    +91 72764 84671
                  </a>
                </div>
                <a
                  href="tel:+917276484671"
                  className="p-2.5 rounded-xl bg-navy-800 hover:bg-navy-750 text-white transition border border-slate-700"
                  title="Call Shravan Pawale"
                >
                  <Phone className="w-4 h-4 text-construction-400" />
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl text-xs sm:text-sm font-black text-white bg-construction-500 hover:bg-construction-600 shadow-lg shadow-construction-500/25 transition transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Get Free Site Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>

              <a
                href={generalWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl text-xs sm:text-sm font-black text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-600/25 transition transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Chat on WhatsApp
              </a>

              <Link
                href="/estimate"
                className="inline-flex items-center justify-center px-4 py-3 rounded-xl text-xs sm:text-sm font-bold text-construction-400 bg-slate-900/90 hover:bg-slate-800 border border-construction-500/40 transition"
              >
                <Calculator className="w-4 h-4 mr-2 text-construction-500" />
                Cost Estimator (₹)
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-slate-800/80">
              <div className="flex items-center space-x-2 text-xs text-slate-300 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Turnkey Quality</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-slate-300 font-medium">
                <Building2 className="w-4 h-4 text-construction-400 shrink-0" />
                <span>Structural Warranty</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-slate-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-construction-400 shrink-0" />
                <span>Fixed BOQ Pricing</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-slate-300 font-medium">
                <HardHat className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Direct Supervision</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Visiting Card Showcase (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <VisitingCardShowcase />
          </div>
        </div>
      </div>
    </section>
  );
}
