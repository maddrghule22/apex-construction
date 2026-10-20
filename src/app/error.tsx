"use client";

import React, { useEffect } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import Link from "next/link";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error boundary triggered:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-surface flex flex-col justify-center items-center px-4 py-16 text-center">
      <div className="w-16 h-16 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mb-6 shadow-sm">
        <AlertTriangle className="w-8 h-8" />
      </div>

      <h1 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mb-2">
        An Unexpected Construction Error Occurred
      </h1>

      <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto mb-8 leading-relaxed">
        Our engineering monitoring service has logged the event. You can retry the operation or navigate back to the main site.
      </p>

      <div className="flex space-x-3">
        <button
          onClick={() => reset()}
          className="inline-flex items-center px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-navy-800 hover:bg-navy-900 transition shadow-sm"
        >
          <RefreshCw className="w-3.5 h-3.5 mr-1.5" />
          Retry Operation
        </button>

        <Link
          href="/"
          className="inline-flex items-center px-5 py-2.5 rounded-xl text-xs font-semibold text-charcoal-700 bg-white border border-gray-200 hover:bg-gray-50 transition shadow-xs"
        >
          <Home className="w-3.5 h-3.5 mr-1.5" />
          Return Home
        </Link>
      </div>
    </div>
  );
}
