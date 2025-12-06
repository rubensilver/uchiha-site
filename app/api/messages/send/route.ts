// app/api/messages/send/route.ts
import { NextResponse } from "next/server";
import { DB } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { conversationId, text, from } = await req.json().catch(() => ({}));

    if (!conversationId || !text) {
      return NextResponse.json(
        { error: "missing fields" },
        { status: 400 }
      );
    }

    // encontrar conversa
    const messages = DB.messages.all();
    const conv = messages.find((m: any) => m.id === conversationId);

    if (!conv) {
      return NextResponse.json(
        { error: "conversation_not_found" },
        { status: 404 }
      );
    }

    // garante que history exista
    if (!Array.isArray(conv.history)) conv.history = [];

    // adiciona no histórico
    conv.history.push({
      id: Date.now(),
      from: from || "admin",
      text,
      createdAt: new Date().toISOString(),
    });

    conv.lastMessage = text;
    conv.updatedAt = new Date().toISOString();
    conv.unread = 0;

    // salvar todo o array de mensagens atualizado
    DB.messages.save(messages);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("MSG SEND ERROR:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
