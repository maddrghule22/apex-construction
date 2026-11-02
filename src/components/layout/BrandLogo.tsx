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
    <Link href="/" className={`inline-flex items-center gap-2 sm:gap-2.5 group min-w-0 max-w-full ${className}`}>
      {/* High-Resolution Architectural Logo Image */}
      <div className="relative w-9 h-9 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-13 md:h-13 shrink-0 rounded-xl sm:rounded-2xl overflow-hidden shadow-md sm:shadow-lg shadow-navy-950/25 border border-slate-700/60 group-hover:scale-105 group-hover:border-construction-500 transition-all duration-300 flex items-center justify-center bg-navy-950">
        <img
          src="/images/company-logo.png"
          alt="Shree Samarth Krupa Enterprises Logo"
          width={52}
          height={52}
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col text-left min-w-0">
        <span
          className={`font-black text-[12px] xs:text-sm sm:text-base lg:text-lg tracking-tight leading-tight truncate ${
            isLight ? "text-white" : "text-navy-950 group-hover:text-construction-600"
          } transition-colors`}
          style={{ color: isLight ? "#FFFFFF" : undefined }}
        >
          SHREE SAMARTH KRUPA
        </span>

        {showTagline && (
          <div className="mt-0.5 flex items-center gap-1 sm:gap-1.5 text-[7px] xs:text-[8px] sm:text-[9.5px] font-extrabold uppercase tracking-wider sm:tracking-widest flex-wrap leading-tight">
            <span
              className={`${isLight ? "text-construction-400" : "text-construction-600"} font-black`}
              style={{ color: isLight ? "#F5A653" : "#D97011" }}
            >
              ENTERPRISES
            </span>
            <span className={isLight ? "text-slate-400 hidden xs:inline" : "text-slate-300 hidden xs:inline"}>•</span>
            <span
              className={`${isLight ? "text-slate-300" : "text-slate-600"} font-bold hidden xs:inline`}
              style={{ color: isLight ? "#CBD5E1" : undefined }}
            >
              BUILDERS &amp; DEVELOPERS
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
