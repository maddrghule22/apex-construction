"use client";

import React, { useState } from "react";
import { Phone, MessageSquare, Check, Copy, ExternalLink, ShieldCheck, Truck, HardHat } from "lucide-react";
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
  const tankerWhatsApp = generateWhatsAppUrl({
    phoneNumber: "917276484671",
    type: "TANKER",
  });

  const handleCopy = (phone: string) => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(phone);
    setTimeout(() => setCopiedPhone(null), 2500);
  };

  return (
    <div className="relative group">
      {/* Ambient background glow */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-construction-500/30 via-red-500/20 to-blue-500/30 blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />

      {/* Main Container */}
      <div className="relative rounded-2xl bg-white p-3 sm:p-4 shadow-2xl border border-slate-200/90 overflow-hidden">
        {/* Verification Pill Header */}
        <div className="flex items-center justify-between pb-2.5 px-1 border-b border-slate-100 text-xs">
          <div className="flex items-center space-x-1.5 text-emerald-700 font-bold">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span className="text-[11px] uppercase tracking-wider">Official Registered Firm</span>
          </div>
          <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-full border border-red-200">
            ॥ श्रीराम समर्थ ॥
          </span>
        </div>

        {/* Card Image with soft shadow */}
        <div className="mt-2.5 rounded-xl overflow-hidden border border-slate-200 bg-slate-50 relative group/img">
          <img
            src="/images/business-card.png"
            alt="Sree Samarth Krupa Enterprises Official Business Card"
            className="w-full h-auto object-cover transform transition-transform duration-500 group-hover/img:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end p-3">
            <span className="text-white text-xs font-semibold flex items-center">
              <ExternalLink className="w-3.5 h-3.5 mr-1 text-construction-400" />
              Sree Samarth Krupa Enterprises Business Card
            </span>
          </div>
        </div>

        {/* Quick Contact Action Strip */}
        <div className="mt-3.5 space-y-2">
          {/* Dnyaneshwar Pawale Contact Row */}
          <div className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200/80 flex items-center justify-between transition">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-navy-900 text-construction-400 font-bold text-xs flex items-center justify-center shrink-0">
                DP
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-900 leading-tight">
                  ज्ञानेश्वर पवळे (Dnyaneshwar)
                </p>
                <a
                  href="tel:+919850291262"
                  className="text-xs font-extrabold text-construction-600 hover:text-construction-700"
                >
                  98502 91262
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-1.5">
              <button
                type="button"
                onClick={() => handleCopy("9850291262")}
                title="Copy Phone Number"
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
                className="p-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white transition shadow-xs"
                title="Chat on WhatsApp"
              >
                <MessageSquare className="w-3.5 h-3.5" />
              </a>
              <a
                href="tel:+919850291262"
                className="p-1.5 rounded-lg bg-navy-900 hover:bg-navy-800 text-white transition shadow-xs"
                title="Call Now"
              >
                <Phone className="w-3.5 h-3.5 text-construction-400" />
              </a>
            </div>
          </div>

          {/* Shravan Pawale Contact Row */}
          <div className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200/80 flex items-center justify-between transition">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-950 text-blue-300 font-bold text-xs flex items-center justify-center shrink-0">
                SP
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-900 leading-tight">
                  श्रवण पवळे (Shravan)
                </p>
                <a
                  href="tel:+917276484671"
                  className="text-xs font-extrabold text-blue-700 hover:text-blue-800"
                >
                  72764 84671
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-1.5">
              <button
                type="button"
                onClick={() => handleCopy("7276484671")}
                title="Copy Phone Number"
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
                className="p-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white transition shadow-xs"
                title="Chat on WhatsApp"
              >
                <MessageSquare className="w-3.5 h-3.5" />
              </a>
              <a
                href="tel:+917276484671"
                className="p-1.5 rounded-lg bg-navy-900 hover:bg-navy-800 text-white transition shadow-xs"
                title="Call Now"
              >
                <Phone className="w-3.5 h-3.5 text-construction-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Instant Tanker Booking CTA Strip */}
        <div className="mt-3 pt-3 border-t border-slate-100">
          <a
            href={tankerWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center space-x-2 py-2 px-3 rounded-xl text-xs font-extrabold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-md shadow-blue-500/20 transition active:scale-98"
          >
            <Truck className="w-3.5 h-3.5" />
            <span>Book 24x7 Water Tanker on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
