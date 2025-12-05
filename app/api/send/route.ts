// app/api/send/route.ts
import { NextResponse } from "next/server";
import { DB, addLog } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const data = await req.json().catch(() => null);

    if (!data?.to || !data?.message) {
      return NextResponse.json(
        { success: false, error: "Número (to) e mensagem são obrigatórios." },
        { status: 400 }
      );
    }

    // salva mensagem em DB.messages
    const messages = DB.messages.all();
    messages.unshift({
      id: Date.now(),
      to: data.to,
      content: data.message,
      direction: "sent",
      createdAt: new Date().toISOString()
    });
    DB.messages.save(messages.slice(0, 1000));

    // registra log padronizado
    const logs = DB.logs.all();
    logs.unshift({
      id: Date.now() + 1,
      createdAt: new Date().toISOString(),
      level: "INFO",
      message: `Mensagem enviada para ${data.to}`,
      meta: { to: data.to, message: data.message }
    });
    DB.logs.save(logs.slice(0, 1000));

    // convenience helper if you have addLog function
    try { await addLog?.({ level: "INFO", message: `Mensagem enviada para ${data.to}`, meta: { to: data.to } }); } catch {}

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("SEND ERROR:", err);
    return NextResponse.json({ success: false, error: "Erro interno no envio" }, { status: 500 });
  }
}
