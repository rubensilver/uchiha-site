// app/api/auth/me/route.ts
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";
import { cookies } from "next/headers";

export async function GET() {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get("session_token")?.value;

    if (!token) {
      return NextResponse.json({
        authenticated: false,
        user: null,
      });
    }

    const decoded: any = verifyToken(token);

    if (!decoded || typeof decoded !== "object") {
      return NextResponse.json({
        authenticated: false,
        user: null,
      });
    }

    return NextResponse.json({
      authenticated: true,
      user: {
        email: decoded.email || null,
        role: decoded.role || "admin",
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
