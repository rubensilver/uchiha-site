// app/api/webhook/route.ts
import { NextResponse } from "next/server";
import { DB } from "@/lib/db";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const mode = searchParams.get("hub.mode");
  const challenge = searchParams.get("hub.challenge");

  if (mode === "subscribe") {
    return new Response(challenge || "", { status: 200 });
  }

  return NextResponse.json({ status: "ignored" });
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);

    // 1️⃣ Salvar log bruto
    const logs = DB.logs.all();
    logs.push({
      id: Date.now(),
      createdAt: new Date().toISOString(),
      message: "Webhook recebido",
      meta: body,
    });
    DB.logs.save(logs);

    // 2️⃣ Detectar mensagem recebida do WhatsApp
    const entry = body?.entry?.[0];
    const change = entry?.changes?.[0];
    const message = change?.value?.messages?.[0];

    if (message) {
      const from = message.from;
      const text = message.text?.body;
      const type = message.type;

      // 3️⃣ Log especial de mensagem recebida
      logs.push({
        id: Date.now() + 1,
        createdAt: new Date().toISOString(),
        message: "Mensagem recebida",
        meta: { from, text, type },
      });
      DB.logs.save(logs);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { error: "failed" },
      { status: 500 }
    );
  }
}
