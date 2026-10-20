import React from "react";
import Link from "next/link";
import { HardHat, ShieldCheck, Clock, Award, ArrowRight, Calculator } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-navy-900 text-white overflow-hidden">
      {/* Background architectural image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/90 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="max-w-3xl space-y-6">
          {/* Trust badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-navy-800/80 border border-navy-700 text-construction-400 text-xs sm:text-sm font-semibold backdrop-blur-sm">
            <HardHat className="w-4 h-4 text-construction-500" />
            <span>Turnkey Residential & Commercial General Contractors</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Building Your Vision. <br />
            <span className="text-construction-500">Delivering Excellence.</span>
          </h1>

          {/* Supporting description */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl">
            We deliver uncompromising structural integrity, transparent itemized pricing, and modern architectural craftsmanship for custom villas, multi-storey commercial complexes, and industrial infrastructure.
          </p>

          {/* Primary & Secondary Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-base font-bold text-white bg-construction-500 hover:bg-construction-600 shadow-lg shadow-construction-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Get a Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-base font-semibold text-gray-200 bg-navy-800 hover:bg-navy-750 border border-navy-700 hover:text-white transition"
            >
              Explore Our Projects
            </Link>

            <Link
              href="/estimate"
              className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl text-base font-semibold text-construction-400 bg-navy-950/60 hover:bg-navy-950 border border-construction-500/30 transition"
            >
              <Calculator className="w-4 h-4 mr-2 text-construction-500" />
              Instant Cost Estimator
            </Link>
          </div>

          {/* Key Value Badges */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-navy-800/80">
            <div className="flex items-center space-x-3">
              <ShieldCheck className="w-5 h-5 text-construction-400 shrink-0" />
              <div className="text-xs">
                <p className="font-bold text-white">Licensed & Insured</p>
                <p className="text-gray-400">100% Code Compliant</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-construction-400 shrink-0" />
              <div className="text-xs">
                <p className="font-bold text-white">On-Time Handover</p>
                <p className="text-gray-400">Milestone-Linked Timeline</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 col-span-2 sm:col-span-1">
              <Award className="w-5 h-5 text-construction-400 shrink-0" />
              <div className="text-xs">
                <p className="font-bold text-white">Transparent Pricing</p>
                <p className="text-gray-400">Zero Hidden Escalations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
