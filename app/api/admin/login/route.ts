import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password)
      return NextResponse.json({ error: "missing" }, { status: 400 });

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user)
      return NextResponse.json({ error: "unauthorized" }, { status: 401 });

    const ok = await bcrypt.compare(password, user.password);

    if (!ok)
      return NextResponse.json({ error: "unauthorized" }, { status: 401 });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "server" }, { status: 500 });
  }
                               }
