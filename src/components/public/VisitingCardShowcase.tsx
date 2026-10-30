"use client";

import React, { useState } from "react";
import { Phone, MessageSquare, Check, Copy, ExternalLink } from "lucide-react";
import { generateWhatsAppUrl } from "@/lib/whatsapp/url";

export default function VisitingCardShowcase() {
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

  const shravanWhatsApp = generateWhatsAppUrl({
    phoneNumber: "917276484671",
    type: "GENERAL",
  });
  const dnyaneshwarWhatsApp = generateWhatsAppUrl({
    phoneNumber: "919850291262",
    type: "GENERAL",
  });

  const handleCopy = (phone: string) => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(phone);
    setTimeout(() => setCopiedPhone(null), 2500);
  };

  return (
    <div className="relative group w-full max-w-md lg:max-w-lg mx-auto">
      {/* Ambient background glow */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-construction-500/20 via-amber-500/15 to-blue-500/20 blur-xl opacity-60 group-hover:opacity-100 transition duration-500 pointer-events-none" />

      {/* Main Container */}
      <div className="relative rounded-2xl bg-white p-3 sm:p-5 shadow-xl border border-slate-200/90 overflow-hidden">
        {/* Card Image with soft shadow */}
        <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-50 relative group/img">
          <img
            src="/images/business-card.png"
            alt="Shree Samarth Krupa Enterprises Official Business Card"
            className="w-full h-auto object-cover transform transition-transform duration-500 group-hover/img:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end p-2.5 sm:p-3">
            <span className="text-white text-xs font-semibold flex items-center">
              <ExternalLink className="w-3.5 h-3.5 mr-1 text-construction-400" />
              Shree Samarth Krupa Enterprises
            </span>
          </div>
        </div>

        {/* Quick Contact Action Strip */}
        <div className="mt-3 space-y-2">
          {/* Dnyaneshwar Pawale Contact Row */}
          <div className="p-2 sm:p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200/80 flex flex-wrap xs:flex-nowrap items-center justify-between gap-2 transition">
            <div className="flex items-center space-x-2 sm:space-x-2.5 min-w-0 flex-1">
              <div className="w-8 h-8 rounded-lg bg-navy-900 text-construction-400 font-bold text-xs flex items-center justify-center shrink-0">
                DP
              </div>
              <div className="text-left min-w-0">
                <p className="text-[11px] sm:text-xs font-bold text-slate-900 leading-tight truncate">
                  Dnyaneshwar Pawale
                </p>
                <a
                  href="tel:+919850291262"
                  className="text-[11px] sm:text-xs font-extrabold text-construction-600 hover:text-construction-700 block truncate"
                >
                  +91 98502 91262
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-1 sm:space-x-1.5 shrink-0 ml-auto">
              <button
                type="button"
                onClick={() => handleCopy("9850291262")}
                title="Copy Phone Number"
                aria-label="Copy Dnyaneshwar Pawale phone number"
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-white border border-transparent hover:border-slate-200 transition"
              >
                {copiedPhone === "9850291262" ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
              <a
                href={dnyaneshwarWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 sm:px-2 sm:py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white transition shadow-2xs flex items-center gap-1 text-[11px] font-bold"
                title="Chat on WhatsApp"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
              <a
                href="tel:+919850291262"
                className="p-1.5 sm:px-2 sm:py-1.5 rounded-lg bg-navy-900 hover:bg-navy-800 text-white transition shadow-2xs flex items-center gap-1 text-[11px] font-bold"
                title="Call Now"
              >
                <Phone className="w-3.5 h-3.5 text-construction-400" />
                <span className="hidden sm:inline">Call</span>
              </a>
            </div>
          </div>

          {/* Shravan Pawale Contact Row */}
          <div className="p-2 sm:p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200/80 flex flex-wrap xs:flex-nowrap items-center justify-between gap-2 transition">
            <div className="flex items-center space-x-2 sm:space-x-2.5 min-w-0 flex-1">
              <div className="w-8 h-8 rounded-lg bg-navy-900 text-amber-300 font-bold text-xs flex items-center justify-center shrink-0">
                SP
              </div>
              <div className="text-left min-w-0">
                <p className="text-[11px] sm:text-xs font-bold text-slate-900 leading-tight truncate">
                  Shravan Pawale
                </p>
                <a
                  href="tel:+917276484671"
                  className="text-[11px] sm:text-xs font-extrabold text-construction-600 hover:text-construction-700 block truncate"
                >
                  +91 72764 84671
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-1 sm:space-x-1.5 shrink-0 ml-auto">
              <button
                type="button"
                onClick={() => handleCopy("7276484671")}
                title="Copy Phone Number"
                aria-label="Copy Shravan Pawale phone number"
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-white border border-transparent hover:border-slate-200 transition"
              >
                {copiedPhone === "7276484671" ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
              <a
                href={shravanWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 sm:px-2 sm:py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white transition shadow-2xs flex items-center gap-1 text-[11px] font-bold"
                title="Chat on WhatsApp"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
              <a
                href="tel:+917276484671"
                className="p-1.5 sm:px-2 sm:py-1.5 rounded-lg bg-navy-900 hover:bg-navy-800 text-white transition shadow-2xs flex items-center gap-1 text-[11px] font-bold"
                title="Call Now"
              >
                <Phone className="w-3.5 h-3.5 text-construction-400" />
                <span className="hidden sm:inline">Call</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
