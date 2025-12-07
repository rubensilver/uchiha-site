// app/api/painel-bot/restart/route.ts
import { NextResponse } from "next/server";
import { verifyToken } from "@/app/lib/jwt";

export async function POST(req: Request) {
  const cookie = (req.headers as any).get?.("cookie") || "";
  const match = cookie.match(/pb_token=([^;]+)/);
  const token = match ? match[1] : null;
  if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const payload = verifyToken(token);
  if (!payload) return NextResponse.json({ error: "Invalid token" }, { status: 401 });

  // TODO: Call your bot backend restart endpoint here. Example:
  // await fetch(process.env.NEXT_PUBLIC_BOT_API_URL + "/admin/restart", { method: "POST", headers: { Authorization: `Bearer ${process.env.BOT_API_TOKEN}` } });

  console.log("Restart requested by painel-bot user", (payload as any).user || "(unknown)");

  return NextResponse.json({ ok: true });
}
