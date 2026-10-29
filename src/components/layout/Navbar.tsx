"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  ChevronRight,
  HardHat,
  MessageSquare,
} from "lucide-react";
import { generateWhatsAppUrl } from "@/lib/whatsapp/url";
import BrandLogo from "./BrandLogo";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const whatsappUrl = generateWhatsAppUrl({ type: "GENERAL" });

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-xs transition-all">
      {/* Top Auspicious & Contact Micro-Bar */}
      <div className="bg-slate-950 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          {/* Company Slogan */}
          <div className="flex items-center space-x-2 text-construction-400 font-extrabold text-[11px] sm:text-xs tracking-wide">
            <span>Shree Samarth Krupa Enterprises</span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="text-slate-300 font-medium hidden sm:inline">
              Licensed Civil Builders &amp; General Contractors
            </span>
          </div>

          {/* Direct Proprietor Hotline */}
          <div className="flex items-center space-x-3 sm:space-x-4 text-[11px] sm:text-xs">
            <div className="flex items-center space-x-1.5">
              <span className="text-slate-400 hidden lg:inline">Dnyaneshwar Pawale:</span>
              <a
                href="tel:+919850291262"
                className="font-bold text-white hover:text-construction-400 transition flex items-center"
              >
                <Phone className="w-3 h-3 mr-1 text-construction-500" />
                +91 98502 91262
              </a>
            </div>
            <span className="text-slate-700">|</span>
            <div className="flex items-center space-x-1.5">
              <span className="text-slate-400 hidden lg:inline">Shravan Pawale:</span>
              <a
                href="tel:+917276484671"
                className="font-bold text-construction-400 hover:text-construction-300 transition flex items-center"
              >
                <Phone className="w-3 h-3 mr-1 text-construction-400" />
                +91 72764 84671
              </a>
            </div>
            <span className="text-slate-700 hidden md:inline">|</span>
            <Link
              href="/login"
              className="text-slate-400 hover:text-white transition font-medium hidden md:inline text-[11px]"
            >
              Owner Portal
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand Logo Component */}
          <BrandLogo />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition flex items-center ${
                    active
                      ? "text-construction-600 bg-construction-50/80 font-bold"
                      : "text-slate-700 hover:text-slate-900 hover:bg-slate-100/70"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Quick Action Buttons */}
          <div className="hidden sm:flex items-center space-x-2.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3.5 py-2 rounded-xl text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 shadow-xs transition"
            >
              <MessageSquare className="w-3.5 h-3.5 mr-1.5 text-emerald-600" />
              WhatsApp
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center px-4 py-2 rounded-xl text-xs font-bold text-white bg-construction-500 hover:bg-construction-600 shadow-md shadow-construction-500/20 transition active:scale-95"
            >
              Get Free Consultation
              <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
            </Link>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drop-down drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-fadeIn">
          <div className="pb-3 border-b border-slate-100 space-y-1.5">
            <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">
              Direct Proprietor Contact
            </p>
            <div className="flex justify-between items-center text-xs font-bold">
              <span className="text-slate-700">Dnyaneshwar Pawale:</span>
              <a href="tel:+919850291262" className="text-construction-600 font-extrabold">
                +91 98502 91262
              </a>
            </div>
            <div className="flex justify-between items-center text-xs font-bold">
              <span className="text-slate-700">Shravan Pawale:</span>
              <a href="tel:+917276484671" className="text-slate-900 font-extrabold">
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
                className={`px-3 py-2.5 rounded-xl text-xs font-bold text-center ${
                  isActive(link.href)
                    ? "bg-navy-900 text-white"
                    : "bg-slate-50 text-slate-800 hover:bg-slate-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 rounded-xl text-xs font-extrabold text-white bg-emerald-600 hover:bg-emerald-700 transition shadow-sm flex items-center justify-center"
            >
              <MessageSquare className="w-4 h-4 mr-1.5" />
              Chat on WhatsApp
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-xl text-xs font-extrabold text-white bg-construction-500 hover:bg-construction-600 transition shadow-sm"
            >
              Request Free Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
