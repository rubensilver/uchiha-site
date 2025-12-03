import { NextResponse } from "next/server";

export async function GET() {
  const theme = "light";

  // Alterna entre dark e light
  const newTheme = theme === "dark" ? "light" : "dark";

  const response = NextResponse.json({ ok: true, theme: newTheme });

  // Salva o tema em um cookie
  response.cookies.set("theme", newTheme, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365, // 1 ano
  });

  return response;
}
