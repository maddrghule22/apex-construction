"use client";

import React, { useState } from "react";
import { Phone, MessageSquare, Check, Copy } from "lucide-react";
import { generateWhatsAppUrl } from "@/lib/whatsapp/url";

export default function VisitingCardShowcase() {
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

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
    <div className="relative group w-full max-w-md mx-auto">
      {/* Main Container */}
      <div className="relative rounded-2xl bg-white p-4 sm:p-5 shadow-xl border border-slate-200/90 overflow-hidden text-left">
        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-2">
          <div className="flex items-center space-x-2.5 min-w-0 flex-1">
            <div className="w-9 h-9 rounded-lg bg-navy-900 text-construction-400 font-bold text-xs flex items-center justify-center shrink-0">
              DP
            </div>
            <div className="text-left min-w-0">
              <p className="text-xs font-bold text-slate-900 leading-tight truncate">
                Dnyaneshwar Pawale
              </p>
              <a
                href="tel:+919850291262"
                className="text-xs font-extrabold text-construction-600 hover:text-construction-700 block truncate"
              >
                +91 98502 91262
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-1.5 shrink-0">
            <button
              type="button"
              onClick={() => handleCopy("9850291262")}
              title="Copy Phone Number"
              aria-label="Copy Dnyaneshwar Pawale phone number"
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-white border border-transparent hover:border-slate-200 transition cursor-pointer"
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
              className="px-2.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white transition text-xs font-bold flex items-center gap-1"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
