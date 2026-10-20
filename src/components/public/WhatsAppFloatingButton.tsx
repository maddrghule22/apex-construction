"use client";

import React, { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { generateWhatsAppUrl } from "@/lib/whatsapp/url";

export default function WhatsAppFloatingButton() {
  const [showTooltip, setShowTooltip] = useState(true);
  const whatsappUrl = generateWhatsAppUrl({ type: "GENERAL" });

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2 no-print">
      {/* Tooltip callout */}
      {showTooltip && (
        <div className="bg-white text-navy-900 shadow-xl rounded-xl p-3 border border-gray-100 flex items-center space-x-3 text-xs max-w-xs animate-fadeIn">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
          <div className="flex-1">
            <p className="font-semibold text-charcoal-800">Have a construction question?</p>
            <p className="text-gray-500 text-[11px]">Chat directly with our project engineer</p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-gray-600 p-0.5"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        <MessageSquare className="w-7 h-7" />
        <span className="sr-only">Chat on WhatsApp</span>
      </a>
    </div>
  );
}
