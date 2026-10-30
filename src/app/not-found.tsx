import React from "react";
import Link from "next/link";
import { HardHat, ArrowLeft, Home, Building2 } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy-900 text-white flex flex-col justify-center items-center px-4 py-16 text-center relative overflow-hidden">
      <div className="w-16 h-16 rounded-2xl bg-navy-800 border border-navy-700 flex items-center justify-center text-construction-500 mb-6 shadow-xl">
        <HardHat className="w-8 h-8" />
      </div>

      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3">
        404 - Page Under Construction or Relocated
      </h1>

      <p className="text-sm text-gray-300 max-w-md mx-auto mb-8 leading-relaxed">
        The requested address does not match any current structural blueprints. Return to our homepage or explore our active project portfolio.
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/"
          className="inline-flex items-center justify-center px-5 py-3 rounded-xl text-xs font-bold text-white bg-construction-500 hover:bg-construction-600 transition shadow-md"
        >
          <Home className="w-4 h-4 mr-2" />
          Return to Homepage
        </Link>
        <Link
          href="/projects"
          className="inline-flex items-center justify-center px-5 py-3 rounded-xl text-xs font-semibold text-gray-200 bg-navy-800 hover:bg-navy-750 border border-navy-700 transition"
        >
          <Building2 className="w-4 h-4 mr-2 text-construction-500" />
          Explore Project Portfolio
        </Link>
      </div>
    </div>
  );
}
