// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const session = req.cookies.get("session_token")?.value;

  // Rotas que não exigem login
  const publicRoutes = ["/admin/login", "/admin/register"];

  const isPublic = publicRoutes.some((route) => url.pathname.startsWith(route));
  const isAdminRoute = url.pathname.startsWith("/admin");

  // Se for rota admin e não for pública → precisa de login
  if (isAdminRoute && !isPublic) {
    if (!session) {
      url.pathname = "/admin/login";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*", // aplica middleware em todo /admin
  ],
};
