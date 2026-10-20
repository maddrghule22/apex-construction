import { SignJWT, jwtVerify } from "jose";

const secretKey = process.env.JWT_SECRET || "dev-super-secure-jwt-secret-construction-platform-2025";
const key = new TextEncoder().encode(secretKey);

export interface TokenPayload {
  userId: string;
  email: string;
  name: string;
  role: "OWNER" | "MANAGER" | "STAFF";
  [key: string]: unknown;
}

export async function signSessionToken(payload: TokenPayload, expiresIn = "7d"): Promise<string> {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(expiresIn)
    .sign(key);
}

export async function verifySessionToken(token: string): Promise<TokenPayload | null> {
  try {
    const { payload } = await jwtVerify(token, key, {
      algorithms: ["HS256"],
    });
    return payload as unknown as TokenPayload;
  } catch (error) {
    return null;
  }
}
