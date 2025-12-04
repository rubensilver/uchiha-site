// app/api/admin/login/route.ts
import { NextResponse } from "next/server";
import { generateToken } from "@/lib/auth";

export async function POST(req: Request) {
  const { pin } = await req.json().catch(() => ({}));
  if (!pin) return NextResponse.json({ error: "missing" }, { status: 400 });
  if (pin !== process.env.ADMIN_PIN) return NextResponse.json({ error: "unauth" }, { status: 401 });
  const token = generateToken({ userId: "admin", role: "admin" });
  return NextResponse.json({ token });
}
