"use client";

import React, { useState } from "react";
import { ChevronDown, MessageSquareQuote, HelpCircle, CheckCircle2 } from "lucide-react";

export default function TestimonialsAndFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const testimonials = [
    {
      quote:
        "The transparent cost breakdown and milestone-linked payment structure gave us immense peace of mind. Every cement brand and reinforcement specification matched the contract precisely.",
      author: "Rajiv S.",
      role: "Villa Project Client (Emerald Heights)",
      badge: "Residential 4,800 sq.ft",
    },
    {
      quote:
        "Managing a multi-storey commercial construction project with strict municipal approvals requires technical depth. Apex handled zoning approvals and structural casting ahead of schedule.",
      author: "Meera K.",
      role: "Managing Director, Commercial Plaza",
      badge: "Commercial 18,500 sq.ft",
    },
    {
      quote:
        "Our warehouse required high-load laser-screed industrial flooring with zero tolerance for cracks. The engineering team delivered exactly to British Concrete Society standards.",
      author: "Sunil D.",
      role: "Logistics Facility Director",
      badge: "Industrial 35,000 sq.ft",
    },
  ];

  const faqs = [
    {
      q: "How is the construction cost calculated and can the price escalate later?",
      a: "Our construction contracts are backed by a detailed Bill of Quantities (BOQ). We lock in unit rates for civil, finishing, MEP, and waterproofing based on your chosen specification tier. Prices remain fixed unless you request scope modifications during construction.",
    },
    {
      q: "What is the typical payment schedule during construction?",
      a: "We do not request large advance payments. Payments are tied strictly to completed and verified physical milestones: Foundation casting, Superstructure slab completion, Brickwork & plastering, MEP rough-in, and Final finishing handover.",
    },
    {
      q: "Do you handle architectural drawings, structural engineering, and municipal building permits?",
      a: "Yes. Our turnkey service includes full architectural drafting, 3D elevations, chartered structural engineering certifications, soil geotechnical reports, and submission for municipal sanction approvals.",
    },
    {
      q: "Can you assist with land survey, soil testing, and municipal sanctions?",
      a: "Yes. Before designing foundation footings, we conduct digital total station land surveys and geotechnical soil testing. We prepare all architectural sanction drawings and coordinate building permission approvals with local municipal authorities.",
    },
    {
      q: "Can I inspect the construction materials used on site?",
      a: "Absolutely. We maintain a transparent site registry. Batch test certificates for cement, ultrasonic tests for steel rebars, and cube compressive strength reports for all concrete pours are shared with clients weekly.",
    },
    {
      q: "What warranties do you provide after project handover?",
      a: "We provide a 10-year structural guarantee on RCC elements, a 5-year guarantee against water leakage and terrace waterproofing, and a 1-year complimentary rectification warranty for plumbing and electrical fixtures.",
    },
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Testimonials Section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold text-navy-800 uppercase tracking-wider bg-white px-3 py-1 rounded-full border border-gray-200">
              Client Experiences (Sample Content for Development Review)
            </span>
            <h2 className="text-3xl font-extrabold text-navy-900 tracking-tight">
              What Our Clients Say
            </h2>
            <p className="text-gray-500 text-xs">
              * Note: Sample client testimonials during development. Will be updated with authenticated customer reviews before live production deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <MessageSquareQuote className="w-8 h-8 text-construction-400 mb-3" />
                  <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-navy-900">{t.author}</h4>
                    <p className="text-[11px] text-gray-500">{t.role}</p>
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-navy-50 text-navy-800 border border-navy-100">
                    {t.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 space-y-2">
            <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-construction-600 bg-construction-50 px-3 py-1 rounded-full border border-construction-200">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Common Inquiries</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Straightforward answers regarding construction contracts, site management, and costs.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xs transition"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex justify-between items-center text-sm sm:text-base font-bold text-navy-900 hover:text-construction-600 focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 transition-transform duration-200 shrink-0 ml-2 ${
                        isOpen ? "transform rotate-180 text-construction-500" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
