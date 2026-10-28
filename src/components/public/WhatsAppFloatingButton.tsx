"use client";

import React, { useState } from "react";
import { MessageSquare, Phone, X } from "lucide-react";
import { generateWhatsAppUrl } from "@/lib/whatsapp/url";

export default function WhatsAppFloatingButton() {
  const [showTooltip, setShowTooltip] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const shravanWhatsApp = generateWhatsAppUrl({
    phoneNumber: "917276484671",
    type: "GENERAL",
  });
  const dnyaneshwarWhatsApp = generateWhatsAppUrl({
    phoneNumber: "919850291262",
    type: "GENERAL",
  });

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2 no-print">
      {/* Contact Options Popup Modal */}
      {openModal && (
        <div className="bg-white text-navy-950 shadow-2xl rounded-2xl p-4 border border-gray-200 mb-2 w-72 animate-fadeIn space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-gray-100">
            <div>
              <span className="text-[10px] font-bold text-construction-600 uppercase">
                Licensed Builders & Developers
              </span>
              <h4 className="text-xs font-extrabold text-navy-900">
                Sree Samarth Krupa Enterprises
              </h4>
            </div>
            <button
              onClick={() => setOpenModal(false)}
              className="text-gray-400 hover:text-gray-600 p-1"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-gray-500">
            Connect directly with the proprietors on WhatsApp:
          </p>

          <div className="space-y-2">
            <a
              href={shravanWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-900 transition text-xs font-bold"
            >
              <span className="flex items-center">
                <MessageSquare className="w-4 h-4 mr-2 text-emerald-600" />
                Shravan Pawale
              </span>
              <span className="text-[11px] text-emerald-700">72764 84671</span>
            </a>

            <a
              href={dnyaneshwarWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-900 transition text-xs font-bold"
            >
              <span className="flex items-center">
                <MessageSquare className="w-4 h-4 mr-2 text-emerald-600" />
                Dnyaneshwar Pawale
              </span>
              <span className="text-[11px] text-emerald-700">98502 91262</span>
            </a>
          </div>
        </div>
      )}

      {/* Tooltip callout */}
      {showTooltip && !openModal && (
        <div className="bg-white text-navy-900 shadow-xl rounded-xl p-3 border border-gray-100 flex items-center space-x-3 text-xs max-w-xs animate-fadeIn">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
          <div className="flex-1 cursor-pointer" onClick={() => setOpenModal(true)}>
            <p className="font-semibold text-charcoal-900">Direct Consultation</p>
            <p className="text-gray-500 text-[11px]">Chat on WhatsApp with Proprietors</p>
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
      <button
        onClick={() => {
          setOpenModal(!openModal);
          setShowTooltip(false);
        }}
        aria-label="Contact on WhatsApp"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-emerald-300 cursor-pointer"
      >
        <MessageSquare className="w-7 h-7" />
        <span className="sr-only">Contact on WhatsApp</span>
      </button>
    </div>
  );
}
