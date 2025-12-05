import { NextResponse } from "next/server";
import { findUser } from "@/lib/db";
import { verify, generateToken } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const user = findUser(email);
    if (!user) {
      return NextResponse.json({ success: false, error: "Usuário não encontrado." });
    }

    const ok = verify(password, user.password);
    if (!ok) {
      return NextResponse.json({ success: false, error: "Senha incorreta." });
    }

    const token = generateToken({ email: user.email });

    const res = NextResponse.json({
      success: true,
      user: { email: user.email }
    });

    // criar cookie HTTP-Only
    res.cookies.set("session_token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 dias
    });

    return res;

  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { success: false, error: "Erro interno." },
      { status: 500 }
    );
  }
}
