// app/api/auth/logout/route.ts
import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.json({ success: true });

  // removendo cookie de sessão
  res.cookies.set("session_token", "", {
    path: "/",
    httpOnly: true,
    secure: true,
    maxAge: 0,     // expira imediatamente
  });

  return res;
}
