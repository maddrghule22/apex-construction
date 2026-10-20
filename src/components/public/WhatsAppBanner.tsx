import React from "react";
import { MessageSquare, ArrowRight, Phone } from "lucide-react";
import { generateWhatsAppUrl } from "@/lib/whatsapp/url";

export default function WhatsAppBanner() {
  const whatsappUrl = generateWhatsAppUrl({ type: "GENERAL" });

  return (
    <section className="bg-gradient-to-r from-emerald-900 to-navy-900 text-white py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 sm:p-10 border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold tracking-wider uppercase text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30">
              Immediate Technical Assistance
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Planning a Construction Project?
            </h3>
            <p className="text-gray-300 text-sm max-w-xl">
              Connect directly with our Chief Construction Engineer on WhatsApp. Share your site location, plot dimensions, or architectural sketches for prompt review.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-sm bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-900/30 transition transform hover:-translate-y-0.5 active:translate-y-0 text-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Chat on WhatsApp Now
            </a>

            <a
              href="tel:+15552345678"
              className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl font-semibold text-sm bg-navy-800 hover:bg-navy-700 text-white border border-white/20 transition text-center"
            >
              <Phone className="w-4 h-4 mr-2 text-construction-400" />
              Direct Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
