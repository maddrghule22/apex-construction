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
  Truck,
  Droplets,
  HardHat,
} from "lucide-react";
import { generateWhatsAppUrl } from "@/lib/whatsapp/url";

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
      ? `॥ श्रीराम समर्थ ॥ Hello, I am interested in inquiring about the "${prefillProject}" project design and specifications.`
      : prefillService
      ? `॥ श्रीराम समर्थ ॥ Hello, I would like to schedule a consultation regarding your "${prefillService}" services.`
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

  const tankerWhatsApp = generateWhatsAppUrl({
    phoneNumber: "917276484671",
    type: "TANKER",
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
              ॥ श्री ॥ ॥ श्रीराम समर्थ ॥ ॥ जय जय रघुवीर समर्थ ॥
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Contact Sree Samarth Krupa Enterprises
            </h1>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Connect directly with proprietors <strong>Dnyaneshwar Pawale</strong> & <strong>Shravan Pawale</strong> for turnkey building construction, site inspections, blueprints review, and 24x7 water tanker dispatch.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Info & Form */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info, Card & Contacts (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[11px] font-bold text-construction-600 uppercase tracking-wider block">
                Direct Line to Proprietors
              </span>
              <h2 className="text-2xl font-extrabold text-navy-950 mt-0.5">
                Reach Us Anytime
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-1">
                Call or WhatsApp our team for prompt quote estimates, site visits, or urgent water tanker deliveries.
              </p>
            </div>

            {/* Proprietor 1: Dnyaneshwar Pawale */}
            <div className="p-4 rounded-xl bg-surface border border-gray-200 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-gray-500 uppercase block">
                  Senior Proprietor
                </span>
                <h4 className="text-sm font-bold text-navy-950">
                  ज्ञानेश्वर पवळे (Dnyaneshwar Pawale)
                </h4>
                <a
                  href="tel:+919850291262"
                  className="text-xs font-semibold text-construction-600 hover:underline flex items-center mt-1"
                >
                  <Phone className="w-3.5 h-3.5 mr-1" />
                  +91 98502 91262
                </a>
              </div>
              <a
                href={dnyaneshwarWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition flex items-center"
              >
                <MessageSquare className="w-3.5 h-3.5 mr-1" />
                WhatsApp
              </a>
            </div>

            {/* Proprietor 2: Shravan Pawale */}
            <div className="p-4 rounded-xl bg-surface border border-gray-200 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-blue-600 uppercase block">
                  Managing Partner & Operations
                </span>
                <h4 className="text-sm font-bold text-navy-950">
                  श्रवण पवळे (Shravan Pawale)
                </h4>
                <a
                  href="tel:+917276484671"
                  className="text-xs font-semibold text-blue-700 hover:underline flex items-center mt-1"
                >
                  <Phone className="w-3.5 h-3.5 mr-1" />
                  +91 72764 84671
                </a>
              </div>
              <a
                href={shravanWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition flex items-center"
              >
                <MessageSquare className="w-3.5 h-3.5 mr-1" />
                WhatsApp
              </a>
            </div>

            {/* Water Tanker 24x7 Quick Order */}
            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 space-y-2">
              <div className="flex items-center space-x-2 text-blue-900 font-bold text-xs uppercase tracking-wide">
                <Droplets className="w-4 h-4 text-blue-600" />
                <span>24x7 Water Tanker Express Dispatch</span>
              </div>
              <p className="text-xs text-blue-900/80 leading-relaxed">
                Need water tankers for concrete curing, slab casting, or drinking water supply? We dispatch immediately.
              </p>
              <a
                href={tankerWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full py-2 px-3 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition"
              >
                <Truck className="w-3.5 h-3.5 mr-1.5" />
                Book Water Tanker on WhatsApp
              </a>
            </div>

            {/* Official Visiting Card Badge */}
            <div className="p-3 bg-white rounded-xl border border-gray-200 shadow-sm">
              <span className="text-[10px] text-gray-500 uppercase font-bold block mb-2">
                Official Business Visiting Card
              </span>
              <img
                src="/images/business-card.png"
                alt="Sree Samarth Krupa Enterprises Business Card"
                className="w-full h-auto rounded-lg border border-gray-100"
              />
            </div>
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
                    Request Site Inspection or Service Booking
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Fill out your project or tanker requirements and our proprietors will connect with you.
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
                      Site / Delivery Location *
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
                      Service Category *
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent transition"
                    >
                      <option value="RESIDENTIAL">Bungalow / Residential Construction</option>
                      <option value="COMMERCIAL">Commercial Complex / Showroom</option>
                      <option value="INDUSTRIAL">Water Tanker Supply (Curing / Bulk)</option>
                      <option value="RENOVATION">Industrial Materials & Supply</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-charcoal-700 mb-1">
                      Approx. Area or Tanker Litres
                    </label>
                    <input
                      type="number"
                      placeholder="e.g. 2400 sq.ft or 10000 L"
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
                    placeholder="Describe your plot size, floors required, or water tanker schedule..."
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
