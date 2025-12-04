import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { generateToken } from '@/lib/auth';
import { log } from "@/lib/logger";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { email, password } = await req.json().catch(()=>({}));
  if (!email || !password) return NextResponse.json({ error: "missing" }, { status: 400 });

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    await log("WARN", "Login failed - user not found", { email });
    return NextResponse.json({ error: "invalid" }, { status: 401 });
  }

  const ok = await comparePassword(password, user.password);
  if (!ok) {
    await log("WARN", "Login failed - bad password", { email });
    return NextResponse.json({ error: "invalid" }, { status: 401 });
  }

  const token = generateToken({ userId: "admin", role: "admin" });
  await log("INFO", "User logged in", { userId: user.id });

  return NextResponse.json({ token });
}
