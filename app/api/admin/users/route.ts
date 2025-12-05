// app/api/admin/users/route.ts
import { NextResponse } from "next/server";
import { DB } from "@/lib/db";
import bcrypt from "bcryptjs";

export async function GET() {
  return NextResponse.json({
    users: DB.users.all()
  });
}

export async function POST(req: Request) {
  try {
    const { email, password, role } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email e senha são obrigatórios." },
        { status: 400 }
      );
    }

    const users = DB.users.all();

    if (users.find((u: any) => u.email === email)) {
      return NextResponse.json(
        { error: "Usuário já existe." },
        { status: 409 }
      );
    }

    const hashed = await bcrypt.hash(password, 10);

    users.push({
      id: Date.now(),
      email,
      password: hashed,
      role: role || "operador",
      createdAt: new Date().toISOString(),
    });

    DB.users.save(users);

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("User API Error:", e);
    return NextResponse.json(
      { error: "Erro interno." },
      { status: 500 }
    );
  }
}
