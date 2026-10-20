import React from "react";
import Link from "next/link";
import { HardHat, Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { generateWhatsAppUrl } from "@/lib/whatsapp/url";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = generateWhatsAppUrl({ type: "GENERAL" });

  return (
    <footer className="bg-navy-900 text-gray-300 pt-16 pb-8 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-navy-700/60">
          {/* Company Bio */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-navy-800 flex items-center justify-center text-construction-500 border border-navy-700">
                <HardHat className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight text-white">
                  APEX <span className="text-construction-500">BUILD</span>
                </span>
                <span className="text-[10px] uppercase text-gray-400 font-semibold tracking-wider">
                  Infrastructure & Construction
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Delivering high-precision residential, commercial, and industrial turnkey construction with transparent pricing, strict structural safety standards, and on-time handover.
            </p>
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 bg-navy-800/80 hover:bg-navy-800 px-3 py-2 rounded-lg border border-navy-700 transition"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Chat with Senior Engineer on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 tracking-wide">
              Construction Services
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link href="/services#residential" className="hover:text-construction-400 transition">
                  Custom Residential Villas & Bungalows
                </Link>
              </li>
              <li>
                <Link href="/services#residential" className="hover:text-construction-400 transition">
                  Apartment Complex Development
                </Link>
              </li>
              <li>
                <Link href="/services#commercial" className="hover:text-construction-400 transition">
                  Commercial Offices & Retail Showrooms
                </Link>
              </li>
              <li>
                <Link href="/services#commercial" className="hover:text-construction-400 transition">
                  Pre-Engineered Industrial Warehouses
                </Link>
              </li>
              <li>
                <Link href="/services#additional" className="hover:text-construction-400 transition">
                  Structural Retrofitting & Renovation
                </Link>
              </li>
              <li>
                <Link href="/estimate" className="hover:text-construction-400 transition font-medium text-construction-400">
                  Instant Construction Cost Estimator →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 tracking-wide">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Our Team & Leadership
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition">
                  Featured Project Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about#safety" className="hover:text-white transition">
                  Workplace Safety & QA Protocol
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Request a Free Site Consultation
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-white transition">
                  Owner Management Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-base mb-4 tracking-wide">
              Office & Site Inquiries
            </h4>
            <div className="flex items-start space-x-3 text-sm text-gray-400">
              <MapPin className="w-5 h-5 text-construction-500 shrink-0 mt-0.5" />
              <span>452 Milestone Boulevard, Commercial District, Suite 500</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-400">
              <Phone className="w-4 h-4 text-construction-500 shrink-0" />
              <a href="tel:+15552345678" className="hover:text-white transition">
                +1 (555) 234-5678
              </a>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-400">
              <Mail className="w-4 h-4 text-construction-500 shrink-0" />
              <a href="mailto:contact@apexbuildinfra.com" className="hover:text-white transition">
                contact@apexbuildinfra.com
              </a>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-400">
              <Clock className="w-4 h-4 text-construction-500 shrink-0" />
              <span>Mon - Sat: 8:00 AM - 6:30 PM</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 space-y-4 sm:space-y-0">
          <p>© {currentYear} Apex Build & Infrastructure. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span>Engineering Excellence Since 2012</span>
            <span>•</span>
            <Link href="/login" className="text-gray-400 hover:text-white">
              Internal Owner Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
