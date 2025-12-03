import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";
import { sendWhatsAppMessage } from "@/lib/whatsapp";
import { log } from "@/lib/logger";

export async function POST(req: Request) {
  // Bearer token esperado no header Authorization: Bearer <token>
  const auth = req.headers.get("authorization") || "";
  const token = auth.replace("Bearer ", "");
  const user = token ? verifyToken(token) : null;
  if (!user) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  const body = await req.json().catch(() => ({}));
  const { to, message } = body;
  if (!to || !message) return NextResponse.json({ error: "missing (to, message)" }, { status: 400 });

  try {
    const res = await sendWhatsAppMessage(to, message);
    await log("INFO", "Message sent", { to, userid: user.userId, res });
    return NextResponse.json({ success: true, res });
  } catch (e:any) {
    await log("ERROR", "Send failed", { error: e, to });
    return NextResponse.json({ error: e?.message || e }, { status: 500 });
  }
}
