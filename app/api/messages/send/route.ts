import { NextResponse } from "next/server";
import { DB } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { conversationId, text, from } = await req.json();

    if (!conversationId || !text) {
      return NextResponse.json(
        { error: "missing fields" },
        { status: 400 }
      );
    }

    // busca conversa
    const conversations = DB.messages.all();
    const conv = conversations.find((m: any) => m.id === conversationId);

    if (!conv) {
      return NextResponse.json(
        { error: "conversation_not_found" },
        { status: 404 }
      );
    }

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

    // SALVA CORRETAMENTE AGORA ✔️
    DB.messages.save(conversations);

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("MSG SEND ERROR:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
