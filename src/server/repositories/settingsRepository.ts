import { prisma } from "@/lib/db/prisma";

const DEFAULT_SETTINGS = {
  companyName: process.env.NEXT_PUBLIC_COMPANY_NAME || "Apex Build & Infrastructure",
  companyPhone: process.env.NEXT_PUBLIC_COMPANY_PHONE || "+1 (555) 234-5678",
  companyEmail: process.env.NEXT_PUBLIC_COMPANY_EMAIL || "contact@apexbuildinfra.com",
  officeAddress: "452 Milestone Boulevard, Commercial District, Suite 500",
  businessHours: "Mon - Sat: 8:00 AM - 6:30 PM",
  whatsAppNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "15552345678",
  currencySymbol: process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || "$",
  serviceAreas: "Metropolitan Region, North Suburbs, Industrial Valley",
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
