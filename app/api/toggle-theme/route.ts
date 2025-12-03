import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const current = cookies().get("theme")?.value || "dark";

  const newTheme = current === "dark" ? "light" : "dark";

  const response = NextResponse.json({ ok: true, theme: newTheme });

  response.cookies.set("theme", newTheme, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
  });

  return response;
}
