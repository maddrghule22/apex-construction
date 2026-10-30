import React from "react";
import {
  ShieldCheck,
  Building2,
  CheckCircle2,
  Phone,
  MessageSquare,
  Award,
  Clock,
  MapPin,
  Hammer,
} from "lucide-react";
import Link from "next/link";
import { generateWhatsAppUrl } from "@/lib/whatsapp/url";

export const metadata = {
  title: "About Us | Shree Samarth Krupa Enterprises",
  description:
    "Learn about Shree Samarth Krupa Enterprises — founded and managed by Dnyaneshwar Pawale. Premier builders, developers, and turnkey general contractors in Maharashtra.",
};

export default function AboutPage() {
  const ownerWhatsApp = generateWhatsAppUrl({
    phoneNumber: "919850291262",
    type: "GENERAL",
  });

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              About Shree Samarth Krupa Enterprises
            </h1>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Founded on principles of structural honesty, relentless on-site supervision, and dedicated customer service. We build long-lasting residential bungalows, independent houses, and modern commercial landmarks across Maharashtra.
            </p>
          </div>
        </div>
      </section>

      {/* Founder & Owner Spotlight (Exclusively Dnyaneshwar Pawale) */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Owner Profile Card */}
          <div className="lg:col-span-5 text-left">
            <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-xl">
              <div className="relative h-72 sm:h-80 w-full bg-navy-950 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=800&q=80"
                  alt="Dnyaneshwar Pawale on-site supervision"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-construction-400 bg-navy-900/90 px-2.5 py-1 rounded-md border border-white/10">
                    Founder &amp; Principal Proprietor
                  </span>
                  <h2 className="text-2xl font-extrabold mt-1">Dnyaneshwar Pawale</h2>
                  <p className="text-xs text-gray-300">15+ Years Civil Contracting Mastery</p>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Leading every project from the ground up, Dnyaneshwar Pawale maintains personal daily presence across foundation excavation, steel rebar tying, concrete pouring, and final architectural handover.
                </p>

                <div className="pt-2 flex flex-col gap-2.5">
                  <a
                    href="tel:+919850291262"
                    className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl text-xs font-bold text-white bg-navy-950 hover:bg-navy-900 transition shadow-sm"
                  >
                    <Phone className="w-4 h-4 mr-2 text-construction-400" />
                    Call Directly: +91 98502 91262
                  </a>

                  <a
                    href={ownerWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Company Background & Philosophy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h2 className="text-3xl font-extrabold text-navy-950 tracking-tight">
              Honest Engineering With Direct Owner Accountability
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Founded and directly led by <strong>Dnyaneshwar Pawale</strong>, <strong>Shree Samarth Krupa Enterprises</strong> provides complete turnkey civil construction and real estate development. We eliminate the common industry frustrations of unaccountable sub-contractors by providing 100% direct owner oversight on every foundation, column, slab casting, and finishing stage.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Whether constructing an independent family bungalow, custom residential villa, row houses, or multi-tenant commercial complex, our owner personally verifies structural levels, cube test certifications, and verified building materials daily.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-surface border border-gray-200">
                <p className="text-xs font-bold text-navy-950 uppercase tracking-wide">Daily On-Site Inspection</p>
                <p className="text-xs text-gray-600 mt-1">Direct level checking, rebar spacing verification, and concrete hydration monitoring.</p>
              </div>
              <div className="p-4 rounded-xl bg-surface border border-gray-200">
                <p className="text-xs font-bold text-navy-950 uppercase tracking-wide">Verified Material Standards</p>
                <p className="text-xs text-gray-600 mt-1">Grade 53 OPC cement, tested Fe-550D TMT steel, and certified structural designs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Engineering Values with Real Visuals */}
      <section className="py-16 sm:py-20 bg-surface border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold text-navy-950">
              Our Core Construction Principles
            </h2>
            <p className="text-gray-600 text-sm">
              Built on decades of practical civil engineering rigor across residential and commercial developments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-left">
            <div className="rounded-2xl bg-white border border-gray-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="h-44 w-full bg-navy-950 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80"
                  alt="Engineering Integrity"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-2 flex-1">
                <h3 className="text-lg font-bold text-navy-950">Structural Integrity</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Zero compromises on structural steel grades (Fe-550D), cement hydration, and adequate curing periods for maximum building longevity.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-gray-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="h-44 w-full bg-navy-950 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
                  alt="Architectural Detailing"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-2 flex-1">
                <h3 className="text-lg font-bold text-navy-950">Architectural Detailing</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Every beam, column alignment, conduit chase, and tile junction is planned and executed to the highest standard of modern craftsmanship.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-gray-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="h-44 w-full bg-navy-950 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=600&q=80"
                  alt="Direct Owner Accountability"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-2 flex-1">
                <h3 className="text-lg font-bold text-navy-950">Direct Owner Presence</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  You interact directly with founder Dnyaneshwar Pawale. No middle-men, no contractor confusion, and clear technical communication at all times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Portfolio CTA */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950">
          Explore Our Completed &amp; Ongoing Projects
        </h2>
        <p className="text-gray-600 text-sm max-w-xl mx-auto leading-relaxed">
          Discover verified case studies, structural metrics, and photographs of our residential villas and commercial complexes.
        </p>
        <div className="pt-2">
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-construction-500 hover:bg-construction-600 transition shadow-md"
          >
            <Building2 className="w-4 h-4 mr-2" />
            View Project Portfolio
          </Link>
        </div>
      </section>
    </div>
  );
}
