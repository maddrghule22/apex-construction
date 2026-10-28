import { prisma } from "@/lib/db/prisma";

const DEFAULT_SETTINGS = {
  companyName: process.env.NEXT_PUBLIC_COMPANY_NAME || "Sree Samarth Krupa Enterprises",
  tagline: "Builders & Developers | Turnkey Civil Construction",
  invocation: "Licensed Builders & Developers • General Civil Contractors",
  primaryProprietor: "Shravan Pawale",
  primaryPhone: process.env.NEXT_PUBLIC_COMPANY_PHONE || "+91 72764 84671",
  secondaryProprietor: "Dnyaneshwar Pawale",
  secondaryPhone: process.env.NEXT_PUBLIC_COMPANY_SECONDARY_PHONE || "+91 98502 91262",
  companyPhone: "+91 72764 84671",
  companyEmail: process.env.NEXT_PUBLIC_COMPANY_EMAIL || "contact@sreesamarthkrupa.com",
  officeAddress: "Main Office & Operations, Maharashtra, India",
  businessHours: "Mon - Sat: 8:00 AM - 8:00 PM | Sun: By Appointment",
  whatsAppNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917276484671",
  currencySymbol: process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || "₹",
  serviceAreas: "Residential Bungalows, Commercial Belts & Turnkey Construction Sites across Maharashtra",
};

let localSettings = { ...DEFAULT_SETTINGS };

export async function getCompanySettings() {
  try {
    const records = await prisma.companySettings.findMany();
    if (records.length > 0) {
      const merged = { ...DEFAULT_SETTINGS };
      records.forEach((r) => {
        if (r.key in merged) {
          (merged as any)[r.key] = r.value;
        }
      });
      return merged;
    }
  } catch (err) {
    // Fallback
  }
  return localSettings;
}

export async function updateCompanySettings(updates: Partial<typeof DEFAULT_SETTINGS>) {
  try {
    for (const [key, value] of Object.entries(updates)) {
      if (value !== undefined) {
        await prisma.companySettings.upsert({
          where: { key },
          update: { value: String(value) },
          create: { key, value: String(value) },
        });
      }
    }
  } catch (err) {
    // In-memory fallback
    localSettings = { ...localSettings, ...updates };
  }
  return { ...localSettings, ...updates };
}
