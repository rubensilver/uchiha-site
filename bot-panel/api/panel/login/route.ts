import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    const { user, pass } = await req.json();

    const correctUser = process.env.PANEL_USER;
    const correctPass = process.env.PANEL_PASS;
    const secret = process.env.JWT_SECRET;

    if (!user || !pass)
      return NextResponse.json({ error: "Dados inválidos" }, { status: 400 });

    if (user !== correctUser || pass !== correctPass)
      return NextResponse.json({ error: "Credenciais incorretas" }, { status: 401 });

    const token = jwt.sign({ user }, secret as string, { expiresIn: "7d" });

    return NextResponse.json({ ok: true, token }, { status: 200 });

  } catch (err) {
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}
