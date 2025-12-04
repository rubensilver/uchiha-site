import { NextResponse } from "next/server";
import { log } from "@/lib/logger";
import { verifyToken } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const auth = req.headers.get("authorization");

    if (!auth) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = auth.replace("Bearer ", "");

    // Agora o verifyToken SEMPRE retorna JwtPayload
    const payload = verifyToken(token) as { userId?: string } | null;
const userId = payload?.userId;
if (!userId) {
  // se você aceitar admin token com userId="admin", trate isso
}

    const data = await req.json();

    await log("INFO", "Mensagem enviada", {
      userId,
      to: data.to,
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Send route error:", e);
    await log("ERROR", "Send route fail", {});
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
