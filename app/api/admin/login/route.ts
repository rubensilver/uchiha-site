import { NextResponse } from 'next/server'
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  const { email, password } = await req.json()

  // Aqui está a validação que você já usa no front
  if (email === "amandacarlos0000@gmail.com" && password === "1234") {
    return NextResponse.json({ success: true })
  }

  return NextResponse.json({ success: false, error: "Credenciais inválidas" })
}
