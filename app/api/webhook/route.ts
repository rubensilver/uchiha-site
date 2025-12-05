// app/api/webhook/route.ts
import { NextResponse } from "next/server";
import { DB } from "@/lib/db";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const mode = searchParams.get("hub.mode");
    const token = searchParams.get("hub.verify_token");
    const challenge = searchParams.get("hub.challenge");

    const VERIFY_TOKEN = process.env.VERIFY_TOKEN || "UCHIHA_VERIFIED";

    if (mode === "subscribe" && token === VERIFY_TOKEN) {
      return new Response(challenge || "", { status: 200 });
    }

    return new Response("Forbidden", { status: 403 });
  } catch (err) {
    console.error("WEBHOOK GET ERROR", err);
    return new Response("Erro", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);

    // salva log bruto
    const logs = DB.logs.all();
    logs.unshift({
      id: Date.now(),
      createdAt: new Date().toISOString(),
      level: "WEBHOOK",
      message: "Webhook recebido (raw)",
      meta: body,
    });
    DB.logs.save(logs.slice(0, 1000));

    // tenta extrair mensagens no formato padrão do WhatsApp Cloud API
    const entry = body?.entry?.[0];
    const change = entry?.changes?.[0];
    const value = change?.value || {};
    const messages = value?.messages || [];
    const message = messages?.[0];

    if (message) {
      const from = message.from;
      const text = message.text?.body ?? message?.body ?? null;
      const type = message.type ?? "unknown";

      // salva message no DB.messages
      const msgs = DB.messages.all();
      msgs.unshift({
        id: Date.now() + 2,
        to: from,
        content: text ?? JSON.stringify(message),
        direction: "received",
        createdAt: new Date().toISOString()
      });
      DB.messages.save(msgs.slice(0, 1000));

      // log especial
      const l = DB.logs.all();
      l.unshift({
        id: Date.now() + 3,
        createdAt: new Date().toISOString(),
        level: "INFO",
        message: "Mensagem recebida via webhook",
        meta: { from, text, type }
      });
      DB.logs.save(l.slice(0, 1000));
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("WEBHOOK POST ERROR:", err);
    return NextResponse.json({ error: "failed" }, { status: 500 });
  }
}
