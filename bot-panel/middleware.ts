import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.pathname;

  // Rotas liberadas
  if (url.startsWith("/bot-panel/login")) {
    return NextResponse.next();
  }

  const token = req.cookies.get("auth_token")?.value;
  if (!token) return NextResponse.redirect(new URL("/bot-panel/login", req.url));

  try {
    jwt.verify(token, process.env.JWT_SECRET as string);
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL("/bot-panel/login", req.url));
  }
}

export const config = {
  matcher: ["/bot-panel/:path*"],
};
