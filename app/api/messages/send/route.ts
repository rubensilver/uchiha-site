// app/api/messages/send/route.ts
import { NextResponse } from "next/server";
import { DB } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    if (!body) return NextResponse.json({ error: "missing body" }, { status: 400 });

    // conversationId pode vir string ou number
    const conversationId = Number(body.conversationId || body.id);
    const text = body.text;
    const from = body.from || "admin";

    if (!conversationId || !text) {
      return NextResponse.json({ error: "missing fields" }, { status: 400 });
    }

    const messages = DB.messages.all();
    const conv = messages.find((m: any) => Number(m.id) === conversationId);

    if (!conv) {
      return NextResponse.json({ error: "conversation_not_found" }, { status: 404 });
    }

    // garante array history
    conv.history = Array.isArray(conv.history) ? conv.history : [];

    // adiciona no histórico
    const newEntry = {
      id: Date.now(),
      from,
      text,
      createdAt: new Date().toISOString(),
    };
    conv.history.push(newEntry);

    conv.lastMessage = text;
    conv.updatedAt = new Date().toISOString();
    conv.unread = 0;

    // salva todo o array novamente
    DB.messages.save(messages);

    return NextResponse.json({ success: true, entry: newEntry });
  } catch (err) {
    console.error("MSG SEND ERROR:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
