import React from "react";
import {
  ShieldCheck,
  HardHat,
  Building2,
  Users2,
  Target,
  CheckCircle2,
  Award,
  Phone,
  MessageSquare,
  Scale,
} from "lucide-react";
import Link from "next/link";
import { generateWhatsAppUrl } from "@/lib/whatsapp/url";
import VisitingCardShowcase from "@/components/public/VisitingCardShowcase";

export const metadata = {
  title: "About Us | Sree Samarth Krupa Enterprises",
  description:
    "Learn about Sree Samarth Krupa Enterprises — founded and managed by Dnyaneshwar Pawale and Shravan Pawale. Premier builders, developers, and turnkey general contractors in Maharashtra.",
};

export default function AboutPage() {
  const shravanWhatsApp = generateWhatsAppUrl({
    phoneNumber: "917276484671",
    type: "GENERAL",
  });
  const dnyaneshwarWhatsApp = generateWhatsAppUrl({
    phoneNumber: "919850291262",
    type: "GENERAL",
  });

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-construction-400 uppercase tracking-wider bg-navy-900 px-3 py-1 rounded-full border border-navy-800">
              ॥ श्री ॥ ॥ श्रीराम समर्थ ॥ ॥ जय जय रघुवीर समर्थ ॥
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              About Sree Samarth Krupa Enterprises
            </h1>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Founded on principles of structural honesty, relentless on-site supervision, and dedicated customer service. We build long-lasting residential bungalows, independent houses, and modern commercial landmarks across Maharashtra.
            </p>
          </div>
        </div>
      </section>

      {/* Official Business Card & Identity Section */}
      <section className="py-12 bg-surface border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm flex flex-col lg:flex-row items-center gap-8 justify-between">
            <div className="space-y-3 max-w-xl text-left">
              <span className="text-xs font-bold text-construction-600 uppercase tracking-wider bg-construction-50 px-3 py-1 rounded-full border border-construction-200">
                Registered Firm Verification
              </span>
              <h2 className="text-2xl font-extrabold text-navy-950">
                Official Business Credentials &amp; Visiting Card
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Operating under the auspicious banner of <strong>श्री SAMARTH KRUPA ENTERPRISES</strong>, our firm provides complete turnkey civil construction, residential bungalows, villas, row houses, and commercial complexes with structural precision and personal proprietor supervision.
              </p>
            </div>

            {/* Business Card Interactive Display */}
            <div className="w-full lg:w-auto max-w-lg">
              <VisitingCardShowcase />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction & Story */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-construction-600 bg-construction-50 px-3 py-1 rounded-full border border-construction-200">
              <HardHat className="w-4 h-4" />
              <span>Our Vision &amp; Ground Realities</span>
            </div>
            <h2 className="text-3xl font-extrabold text-navy-950 tracking-tight">
              Honest Engineering With Direct Proprietor Accountability
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Founded by Dnyaneshwar Pawale and Shravan Pawale, <strong>Sree Samarth Krupa Enterprises</strong> provides complete turnkey civil construction services. We eliminate the frustration of dealing with unaccountable subcontractors by maintaining 100% direct proprietor oversight on every foundation, column, slab casting, and finishing stage.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Whether building an independent family bungalow, row house, or commercial retail premises, our proprietors personally inspect the site daily, ensuring certified materials, transparent BOQ pricing, and punctual handover.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-surface border border-gray-100">
                <span className="text-2xl font-black text-navy-950">100%</span>
                <p className="text-xs font-semibold text-gray-500 mt-0.5">Direct Site Supervision</p>
              </div>
              <div className="p-4 rounded-xl bg-surface border border-gray-100">
                <span className="text-2xl font-black text-construction-600">50+</span>
                <p className="text-xs font-semibold text-gray-500 mt-0.5">Projects Delivered</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=1000&q=80"
                alt="Construction execution and site supervision"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Proprietary Leadership Profiles */}
      <section className="py-16 sm:py-20 bg-surface border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-2">
            <span className="text-xs font-bold text-navy-800 uppercase tracking-wider bg-white px-3 py-1 rounded-full border border-gray-200">
              Leadership
            </span>
            <h2 className="text-3xl font-extrabold text-navy-950">
              Proprietors &amp; Management Team
            </h2>
            <p className="text-gray-600 text-sm">
              Accessible, hands-on founders directly overseeing execution on every project site.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Dnyaneshwar Pawale Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm flex flex-col justify-between space-y-6 text-left">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-2xl bg-navy-900 text-construction-400 font-bold text-xl flex items-center justify-center shrink-0 border border-navy-700 shadow-md">
                    DP
                  </div>
                  <div>
                    <span className="text-xs font-bold text-construction-600 uppercase tracking-wider block">
                      Proprietor
                    </span>
                    <h3 className="text-xl font-extrabold text-navy-950">
                      ज्ञानेश्वर पवळे (Dnyaneshwar Pawale)
                    </h3>
                    <p className="text-xs text-gray-500 font-medium">
                      Civil Contracts &amp; Operations Lead
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  With deep experience in regional construction, land development, and vendor relationships, Dnyaneshwar Pawale leads client contracts, quality standards, and structural execution.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <a
                  href="tel:+919850291262"
                  className="inline-flex items-center text-xs font-bold text-navy-950 hover:text-construction-600 transition"
                >
                  <Phone className="w-4 h-4 mr-1.5 text-construction-500" />
                  +91 98502 91262
                </a>
                <a
                  href={dnyaneshwarWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg hover:bg-emerald-100 transition"
                >
                  <MessageSquare className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Shravan Pawale Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm flex flex-col justify-between space-y-6 text-left">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-2xl bg-navy-900 text-amber-300 font-bold text-xl flex items-center justify-center shrink-0 border border-navy-700 shadow-md">
                    SP
                  </div>
                  <div>
                    <span className="text-xs font-bold text-construction-600 uppercase tracking-wider block">
                      Proprietor
                    </span>
                    <h3 className="text-xl font-extrabold text-navy-950">
                      श्रवण पवळे (Shravan Pawale)
                    </h3>
                    <p className="text-xs text-gray-500 font-medium">
                      Project Management &amp; Civil Site Operations
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Overseeing on-site engineering execution, contractor coordination, quality compliance, and timely milestone completion on every residential and commercial project.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <a
                  href="tel:+917276484671"
                  className="inline-flex items-center text-xs font-bold text-navy-950 hover:text-construction-600 transition"
                >
                  <Phone className="w-4 h-4 mr-1.5 text-construction-500" />
                  +91 72764 84671
                </a>
                <a
                  href={shravanWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg hover:bg-emerald-100 transition"
                >
                  <MessageSquare className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-left">
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-construction-50 text-construction-600 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-navy-950">Engineering Integrity</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Zero compromises on structural steel grades (Fe-550D), cement ratios, and adequate curing periods for maximum building lifespan.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-700 flex items-center justify-center">
              <Scale className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-navy-950">Transparent Fixed BOQ</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Every item, brand of cement, rebar size, and tile specification is written in the contract upfront with zero hidden surprise extras.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-navy-950">Direct Accountability</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              You talk directly with the owners — no middlemen, no sub-contractor markups, and complete clarity at every stage of construction.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
