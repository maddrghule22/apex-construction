"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  CheckCircle2,
  ShieldCheck,
  AlertCircle,
  HardHat,
} from "lucide-react";
import { generateWhatsAppUrl } from "@/lib/whatsapp/url";
import VisitingCardShowcase from "@/components/public/VisitingCardShowcase";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const prefillProject = searchParams.get("project") || "";
  const prefillService = searchParams.get("service") || "";

  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("RESIDENTIAL");
  const [approxArea, setApproxArea] = useState("");
  const [budgetRange, setBudgetRange] = useState("");
  const [preferredContact, setPreferredContact] = useState("PHONE");
  const [message, setMessage] = useState(
    prefillProject
      ? `Hello, I am interested in inquiring about the "${prefillProject}" project design and specifications.`
      : prefillService
      ? `Hello, I would like to schedule a consultation regarding your "${prefillService}" services.`
      : ""
  );
  const [honeypot, setHoneypot] = useState("");

  const [loading, setLoading] = useState(false);
  const [successResponse, setSuccessResponse] = useState<any>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const shravanWhatsApp = generateWhatsAppUrl({
    phoneNumber: "917276484671",
    type: "GENERAL",
    projectCategory: category,
  });

  const dnyaneshwarWhatsApp = generateWhatsAppUrl({
    phoneNumber: "919850291262",
    type: "GENERAL",
    projectCategory: category,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName,
          phone,
          email,
          location,
          category,
          approxArea: approxArea ? Number(approxArea) : undefined,
          budgetRange: budgetRange || undefined,
          message: `${message}${preferredContact ? ` (Preferred Contact: ${preferredContact})` : ""}`,
          source: "WEBSITE_FORM",
          websiteUrlHoneypot: honeypot,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit enquiry.");
      }

      setSuccessResponse(data);
    } catch (err: any) {
      setErrorMessage(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Top Banner */}
      <section className="bg-navy-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-construction-400 uppercase tracking-wider bg-navy-900 px-3 py-1 rounded-full border border-navy-800">
              Licensed Civil Contractors • Builders &amp; Developers
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Contact Sree Samarth Krupa Enterprises
            </h1>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Connect directly with proprietors <strong>Dnyaneshwar Pawale</strong> &amp; <strong>Shravan Pawale</strong> for turnkey building construction, site inspections, blueprints review, and transparent cost estimates.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Info & Form */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info, Card & Contacts (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div>
              <span className="text-[11px] font-bold text-construction-600 uppercase tracking-wider block">
                Direct Line to Proprietors
              </span>
              <h2 className="text-2xl font-extrabold text-navy-950 mt-0.5">
                Reach Us Anytime
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-1">
                Call or WhatsApp our team for prompt quote estimates, architectural review, or free on-site plot inspections.
              </p>
            </div>

            <VisitingCardShowcase />
          </div>

          {/* Right Column: Server-Validated Enquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl border border-gray-200 shadow-md">
            {successResponse ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-navy-950">Enquiry Received!</h3>
                <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                  Reference ID:{" "}
                  <strong className="text-navy-950 font-mono">{successResponse.enquiryNumber}</strong>. Your requirement has been routed directly to Shravan & Dnyaneshwar Pawale.
                </p>
                <p className="text-xs text-gray-500">
                  Our team will call you back to discuss plot parameters or delivery schedule.
                </p>
                <div className="pt-6 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={shravanWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition"
                  >
                    <MessageSquare className="w-4 h-4 mr-1.5" />
                    Chat with Shravan Pawale
                  </a>
                  <button
                    onClick={() => {
                      setSuccessResponse(null);
                      setMessage("");
                    }}
                    className="px-4 py-2.5 rounded-xl text-xs font-semibold text-gray-600 hover:bg-gray-100 border border-gray-200 transition"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-xl font-extrabold text-navy-950">
                    Request Site Inspection &amp; Consultation
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Fill out your project details and our proprietors will connect with you directly.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 flex items-start space-x-2.5 text-xs text-red-700">
                    <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Honeypot anti-spam field */}
                <input
                  type="text"
                  name="websiteUrlHoneypot"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-charcoal-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Patil"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-charcoal-700 mb-1">
                      Phone Number (Call / WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98502 91262"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-charcoal-700 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. ramesh@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-charcoal-700 mb-1">
                      Plot / Project Location *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Plot No 12, Sector 4, Talegaon / Pune"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-charcoal-700 mb-1">
                      Construction Category *
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent transition"
                    >
                      <option value="RESIDENTIAL">Bungalow / Villa / Residential Construction</option>
                      <option value="COMMERCIAL">Commercial Complex / Showroom / Office</option>
                      <option value="INDUSTRIAL">Industrial Warehouse / PEB Shed</option>
                      <option value="RENOVATION">Civil Renovation &amp; Structural Works</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-charcoal-700 mb-1">
                      Approx. Built-up Area (sq.ft)
                    </label>
                    <input
                      type="number"
                      placeholder="e.g. 2400 sq.ft"
                      value={approxArea}
                      onChange={(e) => setApproxArea(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal-700 mb-1">
                    Requirements / Project Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your plot size, floors required, timeline or design ideas..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent transition"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-construction-500 hover:bg-construction-600 disabled:opacity-50 transition shadow-md flex items-center justify-center cursor-pointer"
                >
                  {loading ? (
                    <span>Submitting Enquiry...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Submit Consultation Request
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-gray-500">Loading Contact Form...</div>}>
      <ContactFormContent />
    </Suspense>
  );
}
