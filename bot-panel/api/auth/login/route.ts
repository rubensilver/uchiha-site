import { NextResponse } from "next/server";
import { generateToken } from "@/utils/auth";

export async function POST(req: Request) {
  const { user, pass } = await req.json();

  if (
    user !== process.env.PANEL_USER ||
    pass !== process.env.PANEL_PASS
  ) {
    return NextResponse.json(
      { error: "Credenciais inválidas" },
      { status: 401 }
    );
  }

  return NextResponse.json({ token: generateToken() });
}
