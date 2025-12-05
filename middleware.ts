// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  // cookie onde guardamos a autenticação
  const session = req.cookies.get("session_token")?.value;

  // rotas públicas
  const publicRoutes = ["/admin/login"];

  const isPublic = publicRoutes.some((route) => url.pathname.startsWith(route));
  const isAdmin = url.pathname.startsWith("/admin");

  // Proteção das rotas
  if (isAdmin && !isPublic) {
    if (!session) {
      url.pathname = "/admin/login";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
