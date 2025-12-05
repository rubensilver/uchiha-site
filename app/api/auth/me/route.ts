import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";

export async function GET(req: Request) {
  try {
    // Ler cookies manualmente
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

    // Verificar JWT
    const decoded: any = verifyToken(token);

    // Se não for objeto → inválido
    if (!decoded || typeof decoded !== "object") {
      return NextResponse.json({ authenticated: false, user: null });
    }

    // Retorno seguro
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
