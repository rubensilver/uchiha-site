// app/api/painel-bot/auth/login/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    const ADMIN_EMAIL = process.env.PANEL_USER_EMAIL;
    const ADMIN_PASS = process.env.PANEL_USER_PASS;

    if (!email || !password) {
      return NextResponse.json({ error: "Dados inválidos" }, { status: 400 });
    }

    if (email !== ADMIN_EMAIL || password !== ADMIN_PASS) {
      return NextResponse.json({ error: "Credenciais incorretas" }, { status: 401 });
    }

    // Mark session as pending PIN by setting a cookie pb_pending (short-lived)
    const res = NextResponse.json({ ok: true, message: "Insira o PIN" });
    res.cookies.set({
      name: "pb_pending",
      value: "1",
      httpOnly: true,
      path: "/",
      maxAge: 300 // 5 minutes
    });

    return res;
  } catch (err) {
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}
