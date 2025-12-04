import { verifyToken } from "@/lib/auth";
import { NextResponse } from "next/server";
import { log } from "@/lib/logger";

export async function POST(req: Request) {
  const auth = req.headers.get("authorization") || "";
  const token = auth.replace("Bearer ", "");

  const payload = verifyToken(token);

  if (!payload) {
    await log("ERROR", "Send failed: invalid token", {});
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const userId = payload.userId; // ✅ agora funciona

  try {
    const data = await req.json();

    await log("INFO", "Message sent", { userId, msg: data.message });

    return NextResponse.json({ success: true });
  } catch (e) {
    await log("ERROR", "Send failed", { userId });
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }
}
