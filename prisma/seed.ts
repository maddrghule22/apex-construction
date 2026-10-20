import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import {
  SEED_PROJECTS,
  SEED_RATE_PROFILES,
  SEED_EXPENSES,
  SEED_ENQUIRIES,
} from "../src/server/data/seedData";

const prisma = new PrismaClient();

async function main() {
  console.log("Starting database seeding for Construction Management Platform...");

  // 1. Initial Owner User
  const ownerEmail = (process.env.INITIAL_OWNER_EMAIL || "owner@constructioncompany.com").toLowerCase();
  const ownerPassword = process.env.INITIAL_OWNER_PASSWORD || "OwnerSecurePassword2025!";
  const passwordHash = await bcrypt.hash(ownerPassword, 10);

  const existingUser = await prisma.user.findUnique({ where: { email: ownerEmail } });
  if (!existingUser) {
    await prisma.user.create({
      data: {
        email: ownerEmail,
        passwordHash,
        name: process.env.INITIAL_OWNER_NAME || "Principal Contractor",
        role: "OWNER",
        isActive: true,
      },
    });
    console.log(`✓ Owner account created: ${ownerEmail}`);
  } else {
    console.log(`- Owner account already exists: ${ownerEmail}`);
  }

  // 2. Seed Rate Profiles
  for (const prof of SEED_RATE_PROFILES) {
    const existing = await prisma.costRateProfile.findFirst({
      where: { projectType: prof.projectType },
    });
    if (!existing) {
      await prisma.costRateProfile.create({
        data: {
          name: prof.name,
          projectType: prof.projectType,
          baseCivilRate: prof.baseCivilRate,
          finishingRate: prof.finishingRate,
          electricalRate: prof.electricalRate,
          plumbingRate: prof.plumbingRate,
          waterproofingRate: prof.waterproofingRate,
          basicMultiplier: prof.basicMultiplier,
          standardMultiplier: prof.standardMultiplier,
          premiumMultiplier: prof.premiumMultiplier,
          luxuryMultiplier: prof.luxuryMultiplier,
          defaultContingencyPct: prof.defaultContingencyPct,
          defaultTaxPct: prof.defaultTaxPct,
          isActive: true,
          version: 1,
        },
      });
      console.log(`✓ Seeded rate profile: ${prof.name}`);
    }
  }

  // 3. Seed Company Settings
  const settings = [
    { key: "companyName", value: "Apex Build & Infrastructure" },
    { key: "companyPhone", value: "+1 (555) 234-5678" },
    { key: "companyEmail", value: "contact@apexbuildinfra.com" },
    { key: "officeAddress", value: "452 Milestone Boulevard, Commercial District, Suite 500" },
    { key: "businessHours", value: "Mon - Sat: 8:00 AM - 6:30 PM" },
    { key: "whatsAppNumber", value: "15552345678" },
    { key: "currencySymbol", value: "$" },
    { key: "serviceAreas", value: "Metropolitan Region, North Suburbs, Industrial Valley" },
  ];

  for (const s of settings) {
    await prisma.companySettings.upsert({
      where: { key: s.key },
      update: { value: s.value },
      create: { key: s.key, value: s.value },
    });
  }
  console.log("✓ Seeded company configuration settings");

  console.log("Database seed completed successfully.");
}

main()
  .catch((e) => {
    console.error("Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
