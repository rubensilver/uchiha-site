import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { generateToken, comparePassword } from "@/lib/auth";
import { log } from "@/lib/logger";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { password } = await req.json().catch(() => ({}));

  const user = await prisma.user.findFirst({
    where: { role: "admin" }
  });

  if (!user) {
    return NextResponse.json({ error: "invalid" }, { status: 401 });
  }

  const ok = await comparePassword(password, user.password);
  if (!ok) {
    await log("WARN", "Login failed: bad password");
    return NextResponse.json({ error: "invalid" }, { status: 401 });
  }

  const token = generateToken({
    userId: user.id,
    role: user.role
  });

  await log("INFO", "User logged in", { userId: user.id });

  return NextResponse.json({ token });
}
