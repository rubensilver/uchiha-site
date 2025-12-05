import { NextResponse } from "next/server";
import { DB, addUser, findUser } from "@/lib/db";
import { hash } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const { email, password, role } = await req.json();

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

    const user = {
      email,
      password: hash(password),
      role: role || "operador",
      createdAt: new Date().toISOString(),
    };

    addUser(user);

    return NextResponse.json({
      success: true,
      user: {
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("CREATE USER ERROR:", err);
    return NextResponse.json(
      { success: false, error: "Erro interno." },
      { status: 500 }
    );
  }
}
