import React from "react";
import { ShieldCheck, HardHat, Compass, Users2, Target, CheckCircle2, Award } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "About Our Company & Leadership",
  description:
    "Learn about Apex Build & Infrastructure: our history, engineering leadership, quality assurance approach, and zero-incident workplace safety standards.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-navy-900 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1E476C_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-construction-400 uppercase tracking-wider bg-navy-800 px-3 py-1 rounded-full border border-navy-700">
              Company Background & Values
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Engineering Reliability Since 2012
            </h1>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              We bridge visionary architectural design with uncompromising structural civil engineering, delivering turnkey residential and commercial landmarks built to stand for generations.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction & History */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-construction-600 bg-construction-50 px-3 py-1 rounded-full border border-construction-200">
              <Compass className="w-4 h-4" />
              <span>Our Story & Foundation</span>
            </div>
            <h2 className="text-3xl font-extrabold text-navy-900 tracking-tight">
              From Regional Structural Engineering to Full Turnkey Contractor
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Founded over a decade ago by licensed civil and structural engineers, Apex Build & Infrastructure originated with a singular mandate: eradicate the common industry pitfalls of opaque billing, sub-standard aggregate sourcing, and unverified delays.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Today, we have grown into a premier general contracting firm handling bespoke luxury estates, mid-rise residential apartments, corporate office complexes, and pre-engineered warehouses. Every site operates under strict chartered structural oversight.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-surface border border-gray-100">
                <span className="text-2xl font-black text-navy-900">45+</span>
                <p className="text-xs font-semibold text-gray-500 mt-0.5">Delivered Projects</p>
              </div>
              <div className="p-4 rounded-xl bg-surface border border-gray-100">
                <span className="text-2xl font-black text-navy-900">100%</span>
                <p className="text-xs font-semibold text-gray-500 mt-0.5">Structural Code Vetted</p>
              </div>
            </div>
          </div>

          {/* Construction Site Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"
                alt="Engineers reviewing blueprints on site"
                className="w-full h-[450px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-navy-800 text-white p-6 rounded-2xl shadow-xl hidden sm:block border border-navy-700 max-w-xs">
              <p className="text-xs font-bold text-construction-400">ON-SITE SAFETY MANDATE</p>
              <p className="text-xs text-gray-300 mt-1">
                Zero shortcuts on formwork curing, rebar binding, and concrete grade strength.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Profile */}
      <section className="py-20 bg-surface border-y border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold text-navy-800 uppercase tracking-wider bg-white px-3 py-1 rounded-full border border-gray-200">
              Principal Leadership
            </span>
            <h2 className="text-3xl font-extrabold text-navy-900">
              Engineering Leadership & Stewardship
            </h2>
            <p className="text-gray-600 text-sm">
              Hands-on structural leadership directly supervising technical standards and client contracts.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 sm:p-10 border border-gray-200 shadow-sm flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 rounded-2xl overflow-hidden bg-navy-900 shrink-0 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
                alt="Principal Contractor & Founder"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4 text-center md:text-left">
              <div>
                <span className="text-xs font-bold text-construction-600 uppercase tracking-wider">
                  Founder & Principal Contractor
                </span>
                <h3 className="text-2xl font-bold text-navy-900 mt-1">David M. Vance, M.S. C.E.</h3>
                <p className="text-xs text-gray-500 font-medium">
                  Licensed Professional Civil & Structural Engineer
                </p>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                "Our philosophy is simple: construction is an exact science, not an exercise in guesswork. When a client entrusts us with their capital and vision, our responsibility is to execute with laser precision, transparent accounting, and absolute safety."
              </p>
              <div className="pt-2 flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-navy-50 text-navy-800 border border-navy-100">
                  18+ Years Field Experience
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-navy-50 text-navy-800 border border-navy-100">
                  Fellow, Institute of Engineers
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-navy-50 text-navy-800 border border-navy-100">
                  Seismic Design Specialist
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-800 flex items-center justify-center">
                <Target className="w-6 h-6 text-construction-500" />
              </div>
              <h3 className="text-lg font-bold text-navy-900">Our Mission</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                To build safe, durable, and architecturally stunning spaces through transparent contracts, premium-grade materials, and engineering integrity.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-800 flex items-center justify-center">
                <Compass className="w-6 h-6 text-construction-500" />
              </div>
              <h3 className="text-lg font-bold text-navy-900">Our Vision</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                To be the most trusted and technically respected general contractor in the region, recognized for zero hidden costs and lifetime structural longevity.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-800 flex items-center justify-center">
                <Award className="w-6 h-6 text-construction-500" />
              </div>
              <h3 className="text-lg font-bold text-navy-900">Core Values</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Honesty in billing, zero compromise on material quality, obsessive safety protocols, and deep pride in every square foot constructed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & QA Practices */}
      <section id="safety" className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold text-construction-400 uppercase tracking-wider bg-navy-800 px-3 py-1 rounded-full border border-navy-700">
                Safety First Protocol
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Workplace Safety & Rigorous Quality Assurance
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                A safe site is an efficient site. We maintain an uncompromising safety protocol on all residential, commercial, and industrial sites.
              </p>

              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Mandatory PPE (helmets, high-vis vests, steel-toe boots, fall arrest harnesses).</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Daily morning toolbox safety talks and weekly scaffolding structural inspections.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Comprehensive cube testing of concrete at 7, 14, and 28-day curing intervals.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>3-stage waterproofing flood test (72 hours continuous immersion inspection).</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 rounded-xl font-bold text-sm bg-construction-500 hover:bg-construction-600 text-white transition"
                >
                  Schedule a Site Consultation
                </Link>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl border border-navy-700">
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80"
                alt="Engineers conducting QA checks on site"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
