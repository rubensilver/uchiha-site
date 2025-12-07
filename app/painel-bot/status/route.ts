// app/api/painel-bot/status/route.ts
import { NextResponse } from "next/server";
import { verifyToken } from "@/app/lib/jwt";

export async function GET(req: Request) {
  // Read cookie pb_token from headers
  const cookie = (req.headers as any).get?.("cookie") || "";
  const match = cookie.match(/pb_token=([^;]+)/);
  const token = match ? match[1] : null;
  if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const payload = verifyToken(token);
  if (!payload) return NextResponse.json({ error: "Invalid token" }, { status: 401 });

  // return simple status — you can replace with call to bot backend
  return NextResponse.json({
    online: true,
    uptime: process.uptime(),
    pid: process.pid,
  });
}
