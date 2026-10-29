"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Phone, MessageSquare } from "lucide-react";
import { generateWhatsAppUrl } from "@/lib/whatsapp/url";

export default function TestimonialsAndFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const generalWhatsApp = generateWhatsAppUrl({ type: "GENERAL" });

  const faqs = [
    {
      q: "How are construction rates calculated and are there price escalations?",
      a: "Our construction contracts are backed by a detailed Bill of Quantities (BOQ). We lock in unit rates for civil, structural, finishing, and plumbing based on your approved specifications. Prices remain fixed for the agreed scope, with no unexpected escalations.",
    },
    {
      q: "What is your construction payment schedule?",
      a: "We do not charge heavy advance deposits. Payments are linked strictly to verified physical milestones: Foundation casting, Ground and upper slab casting, Brick masonry & plastering, and Final finishing handover.",
    },
    {
      q: "Do you assist with architectural plans and municipal approvals?",
      a: "Yes. Our turnkey contracting service coordinates architectural drafting, 3D elevation designs, structural engineer certifications, and municipal sanction drawings required for building permissions.",
    },
    {
      q: "Can clients inspect materials and quality tests on-site?",
      a: "Yes, clients are welcome on-site at all stages. We provide cube-strength concrete test reports, steel manufacturer test certificates, and maintain complete transparency regarding cement and reinforcement grades.",
    },
    {
      q: "Who supervises the daily construction work on site?",
      a: "Proprietors Dnyaneshwar Pawale and Shravan Pawale oversee daily operations, material delivery, reinforcement alignment, and contractor execution personally across our project sites.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-surface border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-sm max-w-xl mx-auto">
            Clear, transparent answers about our construction contracts, payment milestones, material standards, and on-site supervision.
          </p>
        </div>

        {/* Accordion FAQ items */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-200 shadow-2xs overflow-hidden transition"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between text-navy-950 hover:text-construction-600 font-bold text-sm sm:text-base cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center pr-4">
                    <HelpCircle className="w-4 h-4 mr-2.5 text-construction-500 shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "transform rotate-180 text-construction-600" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Consultation prompt */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center space-y-3 shadow-xs">
          <h3 className="text-base font-bold text-navy-950">
            Have questions regarding your specific plot or blueprint?
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto">
            Discuss your requirements directly with our proprietors for practical guidance and estimates.
          </p>
          <div className="pt-2 flex flex-wrap justify-center items-center gap-3">
            <a
              href="tel:+917276484671"
              className="inline-flex items-center px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-navy-950 hover:bg-navy-900 transition"
            >
              <Phone className="w-3.5 h-3.5 mr-2 text-construction-400" />
              Call Shravan Pawale
            </a>
            <a
              href={generalWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition"
            >
              <MessageSquare className="w-3.5 h-3.5 mr-2" />
              WhatsApp Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
