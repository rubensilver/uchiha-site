import { NextResponse } from "next/server";
import { addUser, findUser } from "@/lib/db";
import { hash } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: "Email e senha são obrigatórios." },
        { status: 400 }
      );
    }

    const exists = findUser(email);
    if (exists) {
      return NextResponse.json(
        { success: false, error: "Usuário já existe." },
        { status: 409 }
      );
    }

    addUser({
      email,
      password: hash(password),
      role: "admin",
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Usuário registrado com sucesso.",
    });

  } catch (e: any) {
    console.error("Register error:", e);
    return NextResponse.json(
      { success: false, error: "Erro interno ao registrar." },
      { status: 500 }
    );
  }
}
