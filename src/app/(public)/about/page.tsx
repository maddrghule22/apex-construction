import React from "react";
import {
  ShieldCheck,
  HardHat,
  Droplets,
  Truck,
  Users2,
  Target,
  CheckCircle2,
  Award,
  Phone,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import { generateWhatsAppUrl } from "@/lib/whatsapp/url";
import VisitingCardShowcase from "@/components/public/VisitingCardShowcase";

export const metadata = {
  title: "About Us | Sree Samarth Krupa Enterprises",
  description:
    "Learn about Sree Samarth Krupa Enterprises — founded and managed by Dnyaneshwar Pawale and Shravan Pawale. Premier builders & developers and 24x7 water tanker suppliers in Maharashtra.",
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
              Founded on principles of structural honesty, relentless on-site supervision, and dedicated customer service. We build long-lasting residential landmarks and manage dependable water logistics across Maharashtra.
            </p>
          </div>
        </div>
      </section>

      {/* Official Business Card & Identity Section */}
      <section className="py-12 bg-surface border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm flex flex-col lg:flex-row items-center gap-8 justify-between">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs font-bold text-construction-600 uppercase tracking-wider bg-construction-50 px-3 py-1 rounded-full border border-construction-200">
                Registered Firm Verification
              </span>
              <h2 className="text-2xl font-extrabold text-navy-950">
                Official Business Credentials & Visiting Card
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Operating under the auspicious banner of <strong>श्री SAMARTH KRUPA ENTERPRISES</strong>, our firm provides dual expertise: full-spectrum construction civil works paired with a dedicated 24x7 water tanker fleet and industrial raw material supply.
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
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-construction-600 bg-construction-50 px-3 py-1 rounded-full border border-construction-200">
              <HardHat className="w-4 h-4" />
              <span>Our Vision & Ground Realities</span>
            </div>
            <h2 className="text-3xl font-extrabold text-navy-950 tracking-tight">
              Complete Civil Execution Paired With Independent Site Logistics
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              In construction, water scarcity and material delays are the number one reasons projects stall. Recognizing this challenge, <strong>Sree Samarth Krupa Enterprises</strong> was established with an integrated approach: providing turnkey civil development alongside our own fleet of water tankers and industrial supply network.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Whether building an independent family bungalow, commercial shop premises, or supplying uninterrupted water to active construction sites, our proprietors personally inspect the site, ensuring transparent pricing and punctual delivery.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-surface border border-gray-100">
                <span className="text-2xl font-black text-navy-950">100%</span>
                <p className="text-xs font-semibold text-gray-500 mt-0.5">Direct Supervision</p>
              </div>
              <div className="p-4 rounded-xl bg-surface border border-gray-100">
                <span className="text-2xl font-black text-blue-600">24x7</span>
                <p className="text-xs font-semibold text-gray-500 mt-0.5">Water Tanker Fleet</p>
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
      <section className="py-20 bg-surface border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold text-navy-800 uppercase tracking-wider bg-white px-3 py-1 rounded-full border border-gray-200">
              Leadership
            </span>
            <h2 className="text-3xl font-extrabold text-navy-950">
              Proprietors & Management Team
            </h2>
            <p className="text-gray-600 text-sm">
              Accessible, hands-on founders directly overseeing execution on every project site.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Dnyaneshwar Pawale Card */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-2xl bg-navy-900 text-construction-400 font-bold text-xl flex items-center justify-center shrink-0 border border-navy-700 shadow-md">
                    DP
                  </div>
                  <div>
                    <span className="text-xs font-bold text-construction-600 uppercase tracking-wider block">
                      Senior Proprietor
                    </span>
                    <h3 className="text-xl font-extrabold text-navy-950">
                      ज्ञानेश्वर पवळे (Dnyaneshwar Pawale)
                    </h3>
                    <p className="text-xs text-gray-500 font-medium">
                      Civil Contracts & Operations Lead
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
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-2xl bg-blue-950 text-blue-300 font-bold text-xl flex items-center justify-center shrink-0 border border-blue-800 shadow-md">
                    SP
                  </div>
                  <div>
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">
                      Managing Partner
                    </span>
                    <h3 className="text-xl font-extrabold text-navy-950">
                      श्रवण पवळे (Shravan Pawale)
                    </h3>
                    <p className="text-xs text-gray-500 font-medium">
                      Site Management & Water Logistics Head
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Heading day-to-day site logistics, technical coordination, water tanker fleet scheduling, and industrial material supply to ensure uninterrupted construction progress.
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
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-construction-50 text-construction-600 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-navy-950">Engineering Integrity</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Zero compromises on structural steel grades (Fe-550D), cement ratios, and adequate water curing periods for maximum building lifespan.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Droplets className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-navy-950">24x7 Water Supply Guarantee</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              We own and operate dedicated water tanker vehicles, ensuring our sites and contracted clients never face delays due to water shortage.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-navy-950">Direct Accountability</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              You talk directly with the owners — no middlemen, no hidden sub-contractor markups, and full clarity at every project stage.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
