import { describe, it, expect } from "vitest";
import { generateWhatsAppUrl, cleanPhoneNumber } from "../../src/lib/whatsapp/url";

describe("WhatsApp URL Integration", () => {
  it("cleans international phone numbers by stripping non-digit characters", () => {
    expect(cleanPhoneNumber("+1 (555) 234-5678")).toBe("15552345678");
    expect(cleanPhoneNumber("+91-98765-43210")).toBe("919876543210");
  });

  it("constructs compliant wa.me URL for general enquiry", () => {
    const url = generateWhatsAppUrl({
      phoneNumber: "+1 (555) 234-5678",
      type: "GENERAL",
      projectCategory: "RESIDENTIAL",
    });

    expect(url.startsWith("https://wa.me/15552345678?text=")).toBe(true);
    expect(url).toContain(encodeURIComponent("residential construction project"));
  });

  it("constructs compliant wa.me URL for specific project context", () => {
    const url = generateWhatsAppUrl({
      phoneNumber: "15552345678",
      type: "PROJECT",
      projectTitle: "Skyline Corporate Tower",
    });

    expect(url).toContain(encodeURIComponent('project "Skyline Corporate Tower"'));
  });

  it("constructs compliant wa.me URL for cost estimate consultation", () => {
    const url = generateWhatsAppUrl({
      phoneNumber: "15552345678",
      type: "ESTIMATE",
      estimateNumber: "EST-2025-001",
    });

    expect(url).toContain(encodeURIComponent("EST-2025-001"));
  });
});
