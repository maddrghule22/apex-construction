"use client";

import React, { useState } from "react";
import { Phone, Mail, ChevronDown, MessageSquare } from "lucide-react";
import { generateWhatsAppUrl } from "@/lib/whatsapp/url";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

export default function QuickContactWidget() {
  const [isExpanded, setIsExpanded] = useState(true);

  const dnyaneshwarWhatsApp = generateWhatsAppUrl({
    phoneNumber: "919850291262",
    type: "GENERAL",
  });

  const mailtoUrl =
    "mailto:contact@shreesamarthkrupa.com?subject=Construction%20Enquiry%20-%20Shree%20Samarth%20Krupa%20Enterprises&body=Hello%20Dnyaneshwar%20ji%2C%0A%0AI%20am%20interested%20in%20discussing%20a%20construction%20project%20with%20Shree%20Samarth%20Krupa%20Enterprises.%0A%0AName%3A%0APhone%3A%0ALocation%3A%0AProject%20Type%20(Bungalow%2FRenovation%2FCommercial)%3A%0A";

  return (
    <aside
      aria-label="Direct Contact Shortcuts"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end no-print select-none"
    >
      {/* Combined Unified Floating Capsule: WhatsApp, Phone & Mailing */}
      {isExpanded ? (
        <div
          className="bg-navy-950/95 backdrop-blur-md p-2 rounded-2xl sm:rounded-full border border-navy-700/80 shadow-2xl flex flex-col items-center gap-2.5 transition-all duration-300 animate-fade-in-up"
          style={{ backgroundColor: "rgba(7, 14, 23, 0.95)" }}
        >
          {/* Subtle Collapse Toggle */}
          <button
            type="button"
            onClick={() => setIsExpanded(false)}
            aria-label="Minimize contact shortcuts"
            title="Minimize shortcuts"
            className="w-7 h-7 rounded-full bg-navy-900/80 hover:bg-navy-800 text-gray-400 hover:text-white flex items-center justify-center transition cursor-pointer text-xs mb-0.5"
          >
            <ChevronDown className="w-4 h-4" />
          </button>

          {/* 1. DIRECT PHONE CALL BUBBLE */}
          <div className="relative group flex items-center">
            {/* Desktop Tooltip */}
            <div className="absolute right-15 sm:right-16 bg-navy-900/95 text-white px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap shadow-xl border border-navy-700/80 pointer-events-none opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200 hidden sm:flex items-center gap-1.5 backdrop-blur-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-construction-400" />
              <span>Call Dnyaneshwar Pawale:</span>
              <span className="text-construction-400 font-extrabold">+91 98502 91262</span>
            </div>

            <a
              href="tel:+919850291262"
              aria-label="Call founder Dnyaneshwar Pawale directly at +91 98502 91262"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-construction-500 hover:bg-construction-600 text-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center border-2 border-white/20 focus:outline-none focus:ring-4 focus:ring-construction-300 cursor-pointer"
            >
              <Phone className="w-5 h-5 text-white animate-pulse" />
              <span className="sr-only">Call Owner Directly</span>
            </a>
          </div>

          {/* 2. DIRECT MAILING / EMAIL BUBBLE */}
          <div className="relative group flex items-center">
            {/* Desktop Tooltip */}
            <div className="absolute right-15 sm:right-16 bg-navy-900/95 text-white px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap shadow-xl border border-navy-700/80 pointer-events-none opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200 hidden sm:flex items-center gap-1.5 backdrop-blur-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span>Email:</span>
              <span className="text-sky-300 font-extrabold">contact@shreesamarthkrupa.com</span>
            </div>

            <a
              href={mailtoUrl}
              aria-label="Send email enquiry to contact@shreesamarthkrupa.com"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-navy-800 hover:bg-navy-750 text-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center border-2 border-white/20 focus:outline-none focus:ring-4 focus:ring-sky-300 cursor-pointer"
              style={{ backgroundColor: "#14283F" }}
            >
              <Mail className="w-5 h-5 text-sky-400" />
              <span className="sr-only">Send Email Enquiry</span>
            </a>
          </div>

          {/* 3. DIRECT WHATSAPP BUBBLE (Primary) */}
          <div className="relative group flex items-center">
            {/* Desktop Tooltip */}
            <div className="absolute right-16 sm:right-17 bg-navy-900/95 text-white px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap shadow-xl border border-navy-700/80 pointer-events-none opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200 hidden sm:flex items-center gap-1.5 backdrop-blur-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>WhatsApp Owner (Direct Plot &amp; Plan Consultation)</span>
            </div>

            <a
              href={dnyaneshwarWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat directly with founder Dnyaneshwar Pawale on WhatsApp"
              className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center border-2 border-white/30 focus:outline-none focus:ring-4 focus:ring-emerald-300 cursor-pointer relative"
            >
              {/* Pulsing online presence indicator */}
              <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-300 rounded-full border-2 border-white animate-ping pointer-events-none" />
              <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-white pointer-events-none" />

              <WhatsAppIcon className="w-6 h-6 sm:w-6.5 sm:h-6.5 text-white" />
              <span className="sr-only">Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      ) : (
        /* Collapsed Floating Trigger Bubble */
        <button
          type="button"
          onClick={() => setIsExpanded(true)}
          aria-label="Open contact shortcuts (WhatsApp, Phone, Email)"
          title="Open contact shortcuts"
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-navy-950 hover:bg-navy-900 text-white shadow-2xl border-2 border-construction-500/80 flex items-center justify-center transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer relative group"
          style={{ backgroundColor: "#070E17" }}
        >
          {/* Notification online indicator */}
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-navy-950 animate-pulse" />
          <MessageSquare className="w-6 h-6 text-construction-400 group-hover:scale-110 transition-transform" />
          <span className="sr-only">Open Contact Options</span>
        </button>
      )}
    </aside>
  );
}
