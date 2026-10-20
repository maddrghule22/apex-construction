import { describe, it, expect } from "vitest";
import { signSessionToken, verifySessionToken } from "../../src/lib/auth/jwt";

describe("Authentication JWT & Session Tokens", () => {
  it("signs and verifies an owner session token with correct payload", async () => {
    const payload = {
      userId: "user-12345",
      email: "owner@constructioncompany.com",
      name: "David Vance",
      role: "OWNER" as const,
    };

    const token = await signSessionToken(payload, "2h");
    expect(typeof token).toBe("string");
    expect(token.length).toBeGreaterThan(20);

    const verified = await verifySessionToken(token);
    expect(verified).not.toBeNull();
    expect(verified?.userId).toBe("user-12345");
    expect(verified?.email).toBe("owner@constructioncompany.com");
    expect(verified?.role).toBe("OWNER");
  });

  it("returns null for tampered or invalid tokens", async () => {
    const fakeToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.tampered.signature";
    const verified = await verifySessionToken(fakeToken);
    expect(verified).toBeNull();
  });
});
