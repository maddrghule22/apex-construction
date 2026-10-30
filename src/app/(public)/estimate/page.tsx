"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function EstimatePage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/contact");
  }, [router]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-surface px-4 text-center">
      <div className="space-y-3">
        <h1 className="text-xl font-bold text-navy-950">
          Redirecting to Project &amp; Site Consultation...
        </h1>
        <p className="text-gray-500 text-sm">
          Please wait while we connect you with founder Dnyaneshwar Pawale.
        </p>
      </div>
    </div>
  );
}
