import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import { signSessionToken, verifySessionToken, TokenPayload } from "./jwt";

export const SESSION_COOKIE_NAME = "construction_session_token";

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

export async function comparePassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export async function getSession(): Promise<TokenPayload | null> {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
    if (!token) return null;
    return await verifySessionToken(token);
  } catch (error) {
    return null;
  }
}

export async function requireAuth(allowedRoles: Array<"OWNER" | "MANAGER" | "STAFF"> = ["OWNER", "MANAGER", "STAFF"]): Promise<TokenPayload> {
  const session = await getSession();
  if (!session) {
    throw new Error("UNAUTHORIZED");
  }
  if (!allowedRoles.includes(session.role)) {
    throw new Error("FORBIDDEN");
  }
  return session;
}
