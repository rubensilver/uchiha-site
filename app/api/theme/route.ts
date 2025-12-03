import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const { theme } = await req.json().catch(()=>({}));
  if (!theme) return NextResponse.json({ error: "missing" }, { status: 400 });
  const res = NextResponse.json({ ok: true });
  res.cookies.set({
    name: "theme",
    value: theme,
    httpOnly: false,
    path: "/",
    maxAge: 60*60*24*365,
  });
  return res;
}
