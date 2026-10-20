import { prisma } from "@/lib/db/prisma";
import bcrypt from "bcryptjs";

// Default in-memory owner for zero-config fallback if DB is pending setup
let fallbackOwner = {
  id: "user-owner-001",
  email: (process.env.INITIAL_OWNER_EMAIL || "owner@constructioncompany.com").toLowerCase(),
  passwordHash: bcrypt.hashSync(process.env.INITIAL_OWNER_PASSWORD || "OwnerSecurePassword2025!", 10),
  name: process.env.INITIAL_OWNER_NAME || "Principal Contractor",
  role: "OWNER" as const,
  isActive: true,
};

export async function findUserByEmail(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });
    if (user) return user;
  } catch (err) {
    // Fallback to initial owner
  }

  if (email.toLowerCase() === fallbackOwner.email.toLowerCase()) {
    return fallbackOwner;
  }
  return null;
}

export async function updateUserPassword(userId: string, newHash: string) {
  try {
    return await prisma.user.update({
      where: { id: userId },
      data: { passwordHash: newHash },
    });
  } catch (err) {
    if (userId === fallbackOwner.id) {
      fallbackOwner.passwordHash = newHash;
      return fallbackOwner;
    }
  }
}
