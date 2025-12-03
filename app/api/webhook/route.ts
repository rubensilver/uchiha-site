import { NextResponse } from "next/server";
import { log } from "@/lib/logger";

export async function GET(req: Request) {
  // Verificação (quando Meta pede verify token) - query params: hub.mode, hub.verify_token, hub.challenge
  const url = new URL(req.url);
  const mode = url.searchParams.get("hub.mode");
  const token = url.searchParams.get("hub.verify_token");
  const challenge = url.searchParams.get("hub.challenge");

  if (mode && token) {
    const MY_VERIFY = process.env.WA_VERIFY_TOKEN; // configure no Render
    if (mode === "subscribe" && token === MY_VERIFY) {
      await log("INFO", "Webhook verified");
      return new Response(challenge || "ok");
    }
    return NextResponse.json({ error: "failed validation" }, { status: 403 });
  }

  return NextResponse.json({ status: "ok" });
}

export async function POST(req: Request) {
  const body = await req.json().catch(()=>({}));
  await log("INFO", "Webhook received", body);
  // coloque aqui lógica para processar mensagens, eventos, etc.
  return NextResponse.json({ received: true });
}
