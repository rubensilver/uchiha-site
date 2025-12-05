// app/api/auth/me/route.ts
import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";

export async function GET(req: Request) {
  try {
    // pegar cookie
    const cookieHeader = req.headers.get("cookie") || "";
    const cookies = Object.fromEntries(
      cookieHeader.split(";").map((c) => {
        const [key, ...v] = c.trim().split("=");
        return [key, v.join("=")];
      })
    );

    const token = cookies["session_token"];

    if (!token) {
      return NextResponse.json({ authenticated: false, user: null });
    }

    // validar jwt
    const decoded = verifyToken(token);

    if (!decoded) {
      return NextResponse.json({ authenticated: false, user: null });
    }

    // devolver dados seguros
    return NextResponse.json({
      authenticated: true,
      user: {
        email: decoded.email,
        role: decoded.role,
      },
    });
  } catch (err) {
    console.error("ME ENDPOINT ERROR:", err);
    return NextResponse.json({
      authenticated: false,
      user: null,
    });
  }
}
