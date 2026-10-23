"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HardHat,
  Droplets,
  Menu,
  X,
  Phone,
  Calculator,
  ChevronRight,
  MessageSquare,
  Truck,
} from "lucide-react";
import { generateWhatsAppUrl } from "@/lib/whatsapp/url";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Water Tanker", href: "/services#tanker", badge: "24x7" },
    { label: "Projects", href: "/projects" },
    { label: "Cost Estimator", href: "/estimate", highlight: true },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const tankerWhatsApp = generateWhatsAppUrl({ type: "TANKER" });

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
      {/* Top Auspicious & Contact Micro-Bar */}
      <div className="bg-navy-950 text-gray-200 text-xs py-1.5 px-4 border-b border-navy-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          {/* Spiritual Invocation */}
          <div className="flex items-center space-x-2 text-construction-400 font-semibold text-[11px] sm:text-xs">
            <span>॥ श्री ॥</span>
            <span className="text-gray-400">•</span>
            <span>॥ श्रीराम समर्थ ॥</span>
            <span className="text-gray-400">•</span>
            <span className="hidden sm:inline">॥ जय जय रघुवीर समर्थ ॥</span>
          </div>

          {/* Proprietors Direct Contact Numbers */}
          <div className="flex items-center space-x-3 sm:space-x-5 text-[11px] sm:text-xs">
            <div className="flex items-center space-x-1.5">
              <span className="text-gray-400 hidden md:inline">ज्ञानेश्वर पवळे:</span>
              <a
                href="tel:+919850291262"
                className="font-bold text-white hover:text-construction-400 transition flex items-center"
              >
                <Phone className="w-3 h-3 mr-1 text-construction-500" />
                98502 91262
              </a>
            </div>
            <span className="text-gray-600">|</span>
            <div className="flex items-center space-x-1.5">
              <span className="text-gray-400 hidden md:inline">श्रवण पवळे:</span>
              <a
                href="tel:+917276484671"
                className="font-bold text-construction-400 hover:text-construction-300 transition flex items-center"
              >
                <Phone className="w-3 h-3 mr-1 text-construction-400" />
                72764 84671
              </a>
            </div>
            <span className="text-gray-600 hidden sm:inline">|</span>
            <Link
              href="/login"
              className="text-gray-300 hover:text-white transition font-medium hidden sm:inline text-[11px]"
            >
              Owner Portal
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy-900 to-navy-800 flex items-center justify-center text-construction-500 shadow-md group-hover:scale-105 transition border border-navy-700 relative overflow-hidden">
              <HardHat className="w-6 h-6 text-construction-500 absolute -top-0.5 right-1" />
              <Droplets className="w-5 h-5 text-blue-400 absolute bottom-1 left-1.5" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-1">
                <span className="text-[10px] font-extrabold text-red-600 bg-red-50 px-1.5 py-0.2 rounded border border-red-200 uppercase tracking-wider">
                  श्री
                </span>
                <span className="font-extrabold text-base sm:text-xl tracking-tight text-navy-950">
                  SREE SAMARTH KRUPA
                </span>
              </div>
              <div className="flex items-center space-x-2 text-[9px] sm:text-[10px] font-bold tracking-wider uppercase">
                <span className="text-construction-600">ENTERPRISES</span>
                <span className="text-gray-300">•</span>
                <span className="text-gray-500 hidden sm:inline">BUILDERS & DEVELOPERS</span>
                <span className="text-gray-300 hidden sm:inline">•</span>
                <span className="text-blue-600 font-bold hidden md:inline">WATER TANKERS</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              if (link.highlight) {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center px-3 py-2 rounded-lg text-xs font-bold bg-construction-50 text-construction-700 hover:bg-construction-100 transition border border-construction-200"
                  >
                    <Calculator className="w-3.5 h-3.5 mr-1 text-construction-600" />
                    {link.label}
                  </Link>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-2.5 py-2 rounded-md text-xs font-semibold transition flex items-center ${
                    active
                      ? "text-construction-600 font-bold"
                      : "text-charcoal-700 hover:text-navy-900 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                  {link.badge && (
                    <span className="ml-1 text-[9px] font-extrabold bg-blue-100 text-blue-700 px-1.5 py-0.2 rounded-full">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Quick Action Buttons */}
          <div className="hidden sm:flex items-center space-x-2">
            <a
              href={tankerWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-2 rounded-lg text-xs font-bold text-blue-800 bg-blue-50 hover:bg-blue-100 border border-blue-200 transition"
            >
              <Truck className="w-3.5 h-3.5 mr-1 text-blue-600" />
              Book Tanker
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center px-3.5 py-2 rounded-lg text-xs font-bold text-white bg-construction-500 hover:bg-construction-600 shadow-sm transition active:scale-95"
            >
              Free Consultation
              <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
            </Link>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-navy-900 hover:bg-gray-100 transition"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drop-down drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="pb-3 border-b border-gray-100 space-y-1">
            <p className="text-[11px] font-bold text-gray-400 uppercase">Direct Call / WhatsApp</p>
            <div className="flex justify-between items-center text-xs font-bold">
              <span>ज्ञानेश्वर पवळे:</span>
              <a href="tel:+919850291262" className="text-construction-600">
                +91 98502 91262
              </a>
            </div>
            <div className="flex justify-between items-center text-xs font-bold">
              <span>श्रवण पवळे:</span>
              <a href="tel:+917276484671" className="text-construction-600">
                +91 72764 84671
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-xs font-semibold ${
                  isActive(link.href)
                    ? "bg-navy-900 text-white"
                    : "bg-surface text-charcoal-800 hover:bg-gray-200"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={tankerWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition"
            >
              Book Water Tanker on WhatsApp
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-lg text-xs font-bold text-white bg-construction-500 hover:bg-construction-600 transition"
            >
              Request Site Visit / Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
