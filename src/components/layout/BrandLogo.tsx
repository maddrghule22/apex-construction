"use client";

import React from "react";
import Link from "next/link";

interface BrandLogoProps {
  className?: string;
  variant?: "light" | "dark";
  showTagline?: boolean;
}

export default function BrandLogo({
  className = "",
  variant = "dark",
  showTagline = true,
}: BrandLogoProps) {
  const isLight = variant === "light";

  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 sm:gap-3 group min-w-0 max-w-full ${className}`}>
      {/* High-Resolution Architectural Logo Image */}
      <div className="relative w-11 h-11 sm:w-12 sm:h-12 md:w-13 md:h-13 shrink-0 rounded-xl sm:rounded-2xl overflow-hidden shadow-md sm:shadow-lg shadow-navy-950/25 border border-slate-700/60 group-hover:scale-105 group-hover:border-construction-500 transition-all duration-300 flex items-center justify-center bg-navy-950">
        <img
          src="/images/company-logo.png"
          alt="Shree Samarth Krupa Enterprises Logo"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col text-left min-w-0">
        <span
          className={`font-black text-xs sm:text-base lg:text-lg tracking-tight leading-tight truncate ${
            isLight ? "text-white" : "text-slate-900 group-hover:text-construction-600"
          } transition-colors`}
        >
          SHREE SAMARTH KRUPA
        </span>

        {showTagline && (
          <div className="mt-0.5 flex items-center gap-1 sm:gap-1.5 text-[8px] sm:text-[9.5px] font-extrabold uppercase tracking-wider sm:tracking-widest flex-wrap leading-tight">
            <span className="text-construction-600 font-black">ENTERPRISES</span>
            <span className="text-slate-300 hidden xs:inline">•</span>
            <span className={`${isLight ? "text-slate-300" : "text-slate-600"} font-bold hidden xs:inline`}>
              BUILDERS &amp; DEVELOPERS
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
