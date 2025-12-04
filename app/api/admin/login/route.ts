import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { comparePassword, generateToken } from "@/lib/auth";
import { log } from "@/lib/logger";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { pin, email, password } = await req.json().catch(() => ({}));
    if (!pin) return NextResponse.json({ error: "missing" }, { status: 400 });
    if (pin !== process.env.ADMIN_PIN) return NextResponse.json({ error: "unauth" }, { status: 401 });

    // Example: create or find admin user (or use static admin). Adjust to your flow.
    // If you use email/password:
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !(await comparePassword(password, user.password))) {
      await log("WARN", "Login failed - bad credentials", { email });
      return NextResponse.json({ error: "invalid" }, { status: 401 });
    }

    const token = generateToken({ userId: String(user.id), role: user.role });
    await log("INFO", "User logged in", { userId: user.id });

    return NextResponse.json({ token });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "server" }, { status: 500 });
  }
}
