import React from "react";
import { MessageSquare, Phone, Truck, Droplets } from "lucide-react";
import { generateWhatsAppUrl } from "@/lib/whatsapp/url";

export default function WhatsAppBanner() {
  const constructionWhatsApp = generateWhatsAppUrl({ type: "GENERAL" });
  const tankerWhatsApp = generateWhatsAppUrl({ type: "TANKER" });

  return (
    <section className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-white py-14 border-y border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 sm:p-10 border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <span className="text-xs font-bold tracking-wider uppercase text-construction-400 bg-navy-900 px-3 py-1 rounded-full border border-navy-700">
              ॥ श्रीराम समर्थ ॥ Direct Proprietor Assistance
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Need Turnkey Construction or Urgent Water Tanker Supply?
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Connect directly with <strong>Shravan Pawale</strong> or <strong>Dnyaneshwar Pawale</strong> on WhatsApp or phone. Prompt response for site visits, blueprints estimation, and scheduled water delivery.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-bold text-gray-300 pt-1">
              <span>📞 Dnyaneshwar Pawale: +91 98502 91262</span>
              <span>•</span>
              <span>📞 Shravan Pawale: +91 72764 84671</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <a
              href={tankerWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl font-bold text-xs bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-900/30 transition text-center"
            >
              <Droplets className="w-4 h-4 mr-2" />
              Book Water Tanker
            </a>

            <a
              href={constructionWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-900/30 transition text-center"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Chat on WhatsApp
            </a>

            <a
              href="tel:+917276484671"
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
