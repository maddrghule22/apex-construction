import { NextRequest, NextResponse } from "next/server";
import { requireAuth, comparePassword, hashPassword } from "@/lib/auth/session";
import { changePasswordSchema } from "@/lib/validation/auth";
import { findUserByEmail, updateUserPassword } from "@/server/repositories/userRepository";

export async function POST(req: NextRequest) {
  try {
    const session = await requireAuth();
    const body = await req.json();

    const parseResult = changePasswordSchema.safeParse(body);
    if (!parseResult.success) {
      return NextResponse.json(
        { error: parseResult.error.errors[0]?.message || "Invalid input" },
        { status: 400 }
      );
    }

    const { currentPassword, newPassword } = parseResult.data;
    const user = await findUserByEmail(session.email);

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const validCurrent = await comparePassword(currentPassword, user.passwordHash);
    if (!validCurrent) {
      return NextResponse.json({ error: "Incorrect current password" }, { status: 400 });
    }

    const newHash = await hashPassword(newPassword);
    await updateUserPassword(user.id, newHash);

    return NextResponse.json({ success: true, message: "Password updated successfully" });
  } catch (err: any) {
    if (err.message === "UNAUTHORIZED") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.json({ error: "Failed to update password" }, { status: 500 });
  }
}
