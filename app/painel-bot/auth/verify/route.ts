// app/api/painel-bot/auth/verify/route.ts
import { NextResponse } from "next/server";
import { signToken } from "@/lib/jwt"; // will adjust path below if needed

// NOTE: In your repo adjust import if needed. If your helper path is app/lib/jwt.ts then "@/lib/jwt" works when tsconfig baseUrl/paths set.
// If you don't have path alias, replace with relative: import { signToken } from "../../../lib/jwt";

export async function POST(req: Request) {
  try {
    // Check pending cookie - but NextResponse in API can read cookies from req headers
    const pinBody = await req.json();
    const { pin } = pinBody;

    const CONFIG_PIN = process.env.PANEL_PIN;

    if (!pin) return NextResponse.json({ error: "PIN required" }, { status: 400 });
    if (pin !== CONFIG_PIN) return NextResponse.json({ error: "PIN inválido" }, { status: 401 });

    const token = signToken({ role: "painel-admin" });

    const res = NextResponse.json({ ok: true });
    // set httpOnly cookie
    res.cookies.set({
      name: "pb_token",
      value: token,
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7 // 7 days
    });
    // remove pb_pending cookie
    res.cookies.set({
      name: "pb_pending",
      value: "",
      path: "/",
      maxAge: 0
    });

    return res;
  } catch (err) {
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}
