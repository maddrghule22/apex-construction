"use client";

import React, { useState } from "react";
import { Phone } from "lucide-react";
import { generateWhatsAppUrl } from "@/lib/whatsapp/url";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

export default function QuickContactWidget() {
  const [showNotification, setShowNotification] = useState(true);

  const dnyaneshwarWhatsApp = generateWhatsAppUrl({
    phoneNumber: "919850291262",
    type: "GENERAL",
  });

  return (
    <aside
      aria-label="Direct Contact Shortcuts"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3 no-print select-none"
    >
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
          className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-construction-500 hover:bg-construction-600 text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center border-2 border-white/20 focus:outline-none focus:ring-4 focus:ring-construction-300 cursor-pointer"
        >
          <Phone className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-white animate-pulse" />
          <span className="sr-only">Call Owner Directly</span>
        </a>
      </div>

      {/* 2. DIRECT WHATSAPP BUBBLE */}
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
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center border-2 border-white/30 focus:outline-none focus:ring-4 focus:ring-emerald-300 cursor-pointer relative"
        >
          {/* Pulsing online presence indicator */}
          <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-300 rounded-full border-2 border-white animate-ping pointer-events-none" />
          <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-white pointer-events-none" />

          <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          <span className="sr-only">Chat on WhatsApp</span>
        </a>
      </div>
    </aside>
  );
}
