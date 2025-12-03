import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { theme } = await req.json();

  const valid = ["light", "dark", "uchiha"];
  if (!valid.includes(theme)) {
    return NextResponse.json({ error: "Tema inválido" }, { status: 400 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set("theme", theme, { path: "/", maxAge: 60 * 60 * 24 * 365 });

  return res;
}
