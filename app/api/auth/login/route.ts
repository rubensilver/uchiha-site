import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password, pin } = await req.json();

    // Aqui você valida como quiser
    if (email === "admin@uchiha.com" && password === "1234") {
      return NextResponse.json({ success: true });
    }

    // validação de PIN opcional
    if (pin === "0000") {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { success: false, error: "Credenciais inválidas" },
      { status: 401 }
    );
  } catch (e) {
    return NextResponse.json(
      { success: false, error: "Erro no servidor" },
      { status: 500 }
    );
  }
}
