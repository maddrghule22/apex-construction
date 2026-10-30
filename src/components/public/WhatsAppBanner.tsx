import React from "react";
import Link from "next/link";
import { MessageSquare, Phone, Calendar } from "lucide-react";
import { generateWhatsAppUrl } from "@/lib/whatsapp/url";

export default function WhatsAppBanner() {
  const constructionWhatsApp = generateWhatsAppUrl({
    phoneNumber: "919850291262",
    type: "GENERAL",
  });

  return (
    <section className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-white py-12 sm:py-16 border-y border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Planning to Build a Bungalow, Villa, or Commercial Space?
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Connect directly with founder <strong>Dnyaneshwar Pawale</strong> for free plot assessment, architectural consultation, and structural guidance.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs font-bold text-gray-300 pt-1">
              <a href="tel:+919850291262" className="hover:text-construction-400 transition">
                📞 Dnyaneshwar Pawale: +91 98502 91262
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
            <a
              href={constructionWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-900/30 transition text-center"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Chat on WhatsApp
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl font-bold text-xs bg-construction-500 hover:bg-construction-600 text-white shadow-lg shadow-construction-900/30 transition text-center"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book Free Site Visit
            </Link>

            <a
              href="tel:+919850291262"
              className="inline-flex items-center justify-center px-4 py-3.5 rounded-xl font-semibold text-xs bg-navy-800 hover:bg-navy-750 text-white border border-white/20 transition text-center"
            >
              <Phone className="w-4 h-4 mr-1.5 text-construction-400" />
              Direct Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
