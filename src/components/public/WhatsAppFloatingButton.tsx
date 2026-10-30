"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { generateWhatsAppUrl } from "@/lib/whatsapp/url";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

export default function WhatsAppFloatingButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  const dnyaneshwarWhatsApp = generateWhatsAppUrl({
    phoneNumber: "919850291262",
    type: "GENERAL",
  });

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2 no-print">
      {/* Tooltip callout */}
      {showTooltip && (
        <div className="bg-white text-navy-900 shadow-xl rounded-xl p-3 border border-gray-100 flex items-center space-x-3 text-xs max-w-xs animate-fadeIn">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
          <a
            href={dnyaneshwarWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 cursor-pointer"
          >
            <p className="font-semibold text-charcoal-900">Direct Consultation</p>
            <p className="text-gray-500 text-[11px]">Chat on WhatsApp with Dnyaneshwar Pawale</p>
          </a>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-gray-600 p-0.5 cursor-pointer"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button Direct to WhatsApp */}
      <a
        href={dnyaneshwarWhatsApp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Dnyaneshwar Pawale on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-emerald-300 cursor-pointer"
      >
        <WhatsAppIcon className="w-7 h-7" />
        <span className="sr-only">Chat on WhatsApp</span>
      </a>
    </div>
  );
}
