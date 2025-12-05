// app/api/auth/register/route.ts
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { addUser, findUser } from "@/lib/db";
import { hash } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const { email, password, role } = await req.json();

    // 1️⃣ validação básica
    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: "Email e senha são obrigatórios." },
        { status: 400 }
      );
    }

    // 2️⃣ evitar duplicados
    const exists = findUser(email);
    if (exists) {
      return NextResponse.json(
        { success: false, error: "Usuário já existe." },
        { status: 409 }
      );
    }

    // 3️⃣ criar usuário
    const user = {
      email,
      password: hash(password),
      role: role || "admin", // padrão: admin
      createdAt: new Date().toISOString(),
    };

    addUser(user);

    // 4️⃣ retorno seguro
    return NextResponse.json({
      success: true,
      user: {
        email: user.email,
        role: user.role,
      },
    });

  } catch (err: any) {
    console.error("REGISTER ERROR:", err);

    return NextResponse.json(
      { success: false, error: "Erro interno no registro." },
      { status: 500 }
    );
  }
}
