import React from "react";
import Link from "next/link";
import {
  HardHat,
  Droplets,
  Truck,
  Phone,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Calculator,
  MessageSquare,
} from "lucide-react";
import { generateWhatsAppUrl } from "@/lib/whatsapp/url";

export default function Hero() {
  const generalWhatsApp = generateWhatsAppUrl({ type: "GENERAL" });
  const tankerWhatsApp = generateWhatsAppUrl({ type: "TANKER" });

  return (
    <section className="relative bg-navy-950 text-white overflow-hidden">
      {/* Background architectural image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-luminosity"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/95 to-navy-950/80" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        <div className="max-w-4xl space-y-6">
          {/* Top Auspicious Pill */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-navy-900/90 border border-construction-500/40 text-construction-400 text-xs sm:text-sm font-bold backdrop-blur-md">
            <span>॥ श्री ॥</span>
            <span>•</span>
            <span>॥ श्रीराम समर्थ ॥</span>
            <span>•</span>
            <span>॥ जय जय रघुवीर समर्थ ॥</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              SREE SAMARTH KRUPA <br />
              <span className="text-construction-500 text-2xl sm:text-4xl lg:text-5xl font-extrabold">
                ENTERPRISES
              </span>
            </h1>

            {/* Dual Core Pillar Subtitle */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs sm:text-sm font-extrabold uppercase tracking-wider">
              <span className="bg-construction-500 text-white px-3 py-1.5 rounded-lg flex items-center shadow-md">
                <HardHat className="w-4 h-4 mr-1.5" />
                Builders & Developers
              </span>
              <span className="bg-blue-600 text-white px-3 py-1.5 rounded-lg flex items-center shadow-md">
                <Droplets className="w-4 h-4 mr-1.5" />
                Water Tanker & Industrial Suppliers
              </span>
            </div>
          </div>

          {/* Supporting description */}
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-3xl">
            Your single trusted partner for complete turnkey residential bungalows, commercial shopfronts, and structural civil development — integrated with a dedicated 24x7 Water Tanker fleet for construction site curing, potable water supply, and industrial raw materials.
          </p>

          {/* Proprietors Direct Call Badges */}
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
            <div className="p-3.5 rounded-xl bg-navy-900/80 border border-navy-700/80 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider block">
                  Proprietor
                </span>
                <span className="text-xs sm:text-sm font-bold text-white">
                  ज्ञानेश्वर पवळे (Dnyaneshwar Pawale)
                </span>
              </div>
              <a
                href="tel:+919850291262"
                className="inline-flex items-center text-xs font-bold px-3 py-1.5 rounded-lg bg-navy-800 text-construction-400 hover:bg-navy-700 transition border border-navy-600"
              >
                <Phone className="w-3.5 h-3.5 mr-1 text-construction-500" />
                98502 91262
              </a>
            </div>

            <div className="p-3.5 rounded-xl bg-navy-900/80 border border-navy-700/80 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider block">
                  Proprietor / Partner
                </span>
                <span className="text-xs sm:text-sm font-bold text-white">
                  श्रवण पवळे (Shravan Pawale)
                </span>
              </div>
              <a
                href="tel:+917276484671"
                className="inline-flex items-center text-xs font-bold px-3 py-1.5 rounded-lg bg-navy-800 text-construction-400 hover:bg-navy-700 transition border border-navy-600"
              >
                <Phone className="w-3.5 h-3.5 mr-1 text-construction-500" />
                72764 84671
              </a>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="pt-3 flex flex-wrap items-center gap-3">
            <a
              href={tankerWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-900/30 transition transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Truck className="w-4 h-4 mr-2" />
              Book Water Tanker (24x7)
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm font-bold text-white bg-construction-500 hover:bg-construction-600 shadow-lg shadow-construction-500/25 transition transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Get Free Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>

            <Link
              href="/estimate"
              className="inline-flex items-center justify-center px-4 py-3 rounded-xl text-sm font-semibold text-construction-400 bg-navy-900 hover:bg-navy-850 border border-construction-500/30 transition"
            >
              <Calculator className="w-4 h-4 mr-2 text-construction-500" />
              Cost Estimator (₹)
            </Link>
          </div>

          {/* Key Trust Signals */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-navy-800">
            <div className="flex items-center space-x-2 text-xs text-gray-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Turnkey Execution</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-gray-300">
              <Droplets className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Prompt Water Tankers</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-gray-300">
              <CheckCircle2 className="w-4 h-4 text-construction-400 shrink-0" />
              <span>Transparent Pricing</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-gray-300">
              <Truck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Industrial Supply</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
