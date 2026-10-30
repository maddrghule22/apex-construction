"use client";

import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MessageSquare,
  X,
  ChevronRight,
  ChevronLeft,
  Copy,
  Check,
  User,
  ExternalLink,
} from "lucide-react";
import { generateWhatsAppUrl } from "@/lib/whatsapp/url";

type ModalTab = "CALL" | "WHATSAPP" | "EMAIL" | null;

export default function QuickContactWidget() {
  const [activeModal, setActiveModal] = useState<ModalTab>(null);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const dnyaneshwarWhatsApp = generateWhatsAppUrl({
    phoneNumber: "919850291262",
    type: "GENERAL",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("contact@shreesamarthkrupa.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModal(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* FLOATING VERTICAL SIDE BAR (Mobile & Desktop) */}
      <aside
        aria-label="Quick Contact Options"
        className={`fixed right-0 top-1/2 -translate-y-1/2 z-40 transition-transform duration-300 ease-in-out no-print ${
          isCollapsed ? "translate-x-full" : "translate-x-0"
        }`}
      >
        <div className="relative flex flex-col items-center bg-navy-950/95 backdrop-blur-md rounded-l-2xl border-l-2 border-y-2 border-navy-800 shadow-2xl p-1.5 sm:p-2.5 space-y-2.5 sm:space-y-3">
          {/* Collapse / Expand Toggle Tab */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            aria-label={isCollapsed ? "Open contact options" : "Hide contact options"}
            className="absolute -left-6 sm:-left-7 top-1/2 -translate-y-1/2 w-6 sm:w-7 h-10 sm:h-12 bg-navy-900/95 border-y-2 border-l-2 border-navy-700 rounded-l-xl flex items-center justify-center text-gray-300 hover:text-white shadow-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-construction-400"
          >
            {isCollapsed ? (
              <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-construction-400" />
            ) : (
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            )}
          </button>

          <span className="text-[9px] font-bold uppercase tracking-wider text-construction-400 writing-vertical select-none hidden sm:block pb-1">
            Contact
          </span>

          {/* 1. WHATSAPP QUICK ICON */}
          <div className="relative group">
            <button
              onClick={() => setActiveModal("WHATSAPP")}
              aria-label="Open WhatsApp contact options"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-400 cursor-pointer"
            >
              <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-emerald-400 rounded-full border-2 border-navy-950 animate-pulse" />
            </button>
            <div className="absolute right-14 top-1/2 -translate-y-1/2 hidden group-hover:block bg-navy-900 text-white text-[11px] font-semibold py-1 px-2.5 rounded-lg whitespace-nowrap shadow-md border border-navy-700 pointer-events-none">
              WhatsApp Owner
            </div>
          </div>

          {/* 2. CALL QUICK ICON */}
          <div className="relative group">
            <button
              onClick={() => setActiveModal("CALL")}
              aria-label="Open phone call options"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-construction-500 hover:bg-construction-600 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-construction-300 cursor-pointer"
            >
              <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <div className="absolute right-14 top-1/2 -translate-y-1/2 hidden group-hover:block bg-navy-900 text-white text-[11px] font-semibold py-1 px-2.5 rounded-lg whitespace-nowrap shadow-md border border-navy-700 pointer-events-none">
              Call Owner
            </div>
          </div>

          {/* 3. EMAIL QUICK ICON */}
          <div className="relative group">
            <button
              onClick={() => setActiveModal("EMAIL")}
              aria-label="Open email contact options"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-navy-800 hover:bg-navy-700 text-white border border-navy-700 flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gray-400 cursor-pointer"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-construction-400" />
            </button>
            <div className="absolute right-14 top-1/2 -translate-y-1/2 hidden group-hover:block bg-navy-900 text-white text-[11px] font-semibold py-1 px-2.5 rounded-lg whitespace-nowrap shadow-md border border-navy-700 pointer-events-none">
              Send Email
            </div>
          </div>
        </div>
      </aside>

      {/* POPUP MODAL */}
      {activeModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-navy-950/70 backdrop-blur-xs animate-fadeIn no-print"
          onClick={() => setActiveModal(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-full max-w-sm max-h-[85vh] overflow-y-auto animate-scaleUp"
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-10 bg-navy-950 text-white p-4 sm:p-5 flex items-center justify-between border-b border-navy-800">
              <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                {activeModal === "CALL" && (
                  <>
                    <Phone className="w-4 h-4 text-construction-500" />
                    Direct Phone Call
                  </>
                )}
                {activeModal === "WHATSAPP" && (
                  <>
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    WhatsApp Consultation
                  </>
                )}
                {activeModal === "EMAIL" && (
                  <>
                    <Mail className="w-4 h-4 text-construction-400" />
                    Official Business Email
                  </>
                )}
              </h3>
              <button
                onClick={() => setActiveModal(null)}
                className="w-8 h-8 rounded-full bg-navy-900 hover:bg-navy-800 text-gray-300 hover:text-white flex items-center justify-center transition cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-5 space-y-3.5">
              {/* TAB 1: CALL OPTIONS */}
              {activeModal === "CALL" && (
                <div className="space-y-3">
                  <p className="text-xs text-gray-600">
                    Directly reach founder and lead contractor Dnyaneshwar Pawale:
                  </p>

                  <a
                    href="tel:+919850291262"
                    className="flex flex-col xs:flex-row xs:items-center justify-between p-3.5 rounded-xl bg-gray-50 hover:bg-construction-50 border border-gray-200 hover:border-construction-300 transition group gap-2"
                  >
                    <div className="space-y-0.5 min-w-0">
                      <div className="flex items-center space-x-1.5">
                        <User className="w-3.5 h-3.5 text-navy-600 shrink-0" />
                        <span className="text-xs font-bold text-navy-950 group-hover:text-construction-700 truncate">
                          Dnyaneshwar Pawale
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-500">
                        Founder &amp; Principal Civil Contractor
                      </p>
                    </div>
                    <span className="text-xs font-bold text-construction-600 bg-white px-2.5 py-1.5 rounded-lg border border-gray-200 group-hover:bg-construction-500 group-hover:text-white transition shrink-0 self-start xs:self-auto">
                      +91 98502 91262
                    </span>
                  </a>
                </div>
              )}

              {/* TAB 2: WHATSAPP OPTIONS */}
              {activeModal === "WHATSAPP" && (
                <div className="space-y-3">
                  <p className="text-xs text-gray-600">
                    Connect directly on WhatsApp for architectural blueprints, site consultation, and project reviews:
                  </p>

                  <a
                    href={dnyaneshwarWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 text-emerald-950 transition group gap-2"
                  >
                    <div className="space-y-0.5 min-w-0">
                      <span className="text-xs font-bold text-emerald-950 block truncate">
                        Dnyaneshwar Pawale (Owner)
                      </span>
                      <span className="text-[11px] text-emerald-700 block">
                        Direct project discussion &amp; site visit
                      </span>
                    </div>
                    <span className="text-xs font-bold bg-emerald-600 text-white px-3 py-1.5 rounded-lg group-hover:bg-emerald-700 transition flex items-center gap-1 shrink-0">
                      <MessageSquare className="w-3.5 h-3.5" />
                      Chat
                    </span>
                  </a>
                </div>
              )}

              {/* TAB 3: EMAIL OPTIONS */}
              {activeModal === "EMAIL" && (
                <div className="space-y-3">
                  <p className="text-xs text-gray-600">
                    Send blueprints, drawings, or tender specifications to our official mailbox:
                  </p>

                  <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] sm:text-xs font-bold text-navy-950 truncate">
                        contact@shreesamarthkrupa.com
                      </span>
                      <button
                        onClick={handleCopyEmail}
                        className="inline-flex items-center text-[11px] font-bold text-construction-600 hover:text-construction-700 p-1 shrink-0"
                        aria-label="Copy email address"
                      >
                        {copiedEmail ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600 mr-1" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 mr-1" />
                            Copy
                          </>
                        )}
                      </button>
                    </div>

                    <a
                      href="mailto:contact@shreesamarthkrupa.com?subject=Construction%20Project%20Inquiry%20-%20Shree%20Samarth%20Krupa%20Enterprises"
                      className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-navy-950 hover:bg-navy-900 text-white text-xs font-bold transition shadow-sm text-center"
                    >
                      <Mail className="w-3.5 h-3.5 mr-2 text-construction-400" />
                      Open in Mail App
                      <ExternalLink className="w-3 h-3 ml-1.5 opacity-70" />
                    </a>
                  </div>
                </div>
              )}

              {/* Footer reassurance */}
              <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-[10.5px] sm:text-[11px] text-gray-400">
                <span>Owner Direct Line</span>
                <span>Mon – Sat: 8 AM – 8 PM</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
