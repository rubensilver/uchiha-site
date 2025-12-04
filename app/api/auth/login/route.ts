// app/api/auth/login/route.ts
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { findUser } from "@/lib/db";
import { verify, generateToken } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: "Email e senha são obrigatórios." },
        { status: 400 }
      );
    }

    const user = findUser(email);
    if (!user) {
      return NextResponse.json(
        { success: false, error: "Usuário não encontrado." },
        { status: 404 }
      );
    }

    const ok = verify(password, user.password);
    if (!ok) {
      return NextResponse.json(
        { success: false, error: "Senha incorreta." },
        { status: 401 }
      );
    }

    const token = generateToken({ email: user.email, role: user.role });

    return NextResponse.json({
      success: true,
      user: {
        email: user.email,
        role: user.role,
        token,
      },
    });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: "Erro interno no login." },
      { status: 500 }
    );
  }
}
