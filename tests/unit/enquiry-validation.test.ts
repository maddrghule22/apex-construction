import { describe, it, expect } from "vitest";
import { enquirySchema } from "../../src/lib/validation/enquiry";

describe("Enquiry Validation & Spam Honeypot Detection", () => {
  it("validates a compliant customer enquiry submission", () => {
    const validData = {
      customerName: "Robert Vance",
      phone: "+1 555-234-5678",
      email: "robert.vance@example.com",
      location: "Metro North",
      category: "RESIDENTIAL",
      approxArea: 3200,
      budgetRange: "$1M - $2M",
      message: "Looking for turnkey villa construction on corner plot.",
      source: "WEBSITE_FORM",
      websiteUrlHoneypot: "",
    };

    const result = enquirySchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it("fails validation when bot honeypot field is filled", () => {
    const botData = {
      customerName: "Spam Bot",
      phone: "+1 555-000-0000",
      location: "Spam City",
      message: "Buy cheap backlinks now!",
      websiteUrlHoneypot: "https://spamlink.com",
    };

    const result = enquirySchema.safeParse(botData);
    expect(result.success).toBe(false);
  });

  it("rejects phone numbers that are too short", () => {
    const invalidPhone = {
      customerName: "Jane Doe",
      phone: "123",
      location: "Metro",
      message: "Need a project consultation.",
    };

    const result = enquirySchema.safeParse(invalidPhone);
    expect(result.success).toBe(false);
  });
});
