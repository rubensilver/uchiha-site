// app/api/send/route.ts
import { NextResponse } from "next/server";
import { DB } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const data = await req.json().catch(() => null);

    // 1️⃣ validação correta
    if (!data?.to || !data?.message) {
      return NextResponse.json(
        { error: "Número (to) e mensagem são obrigatórios." },
        { status: 400 }
      );
    }

    // 2️⃣ salvar log no DB (serverless-safe)
    const logs = DB.logs.all();

    logs.unshift({
      id: Date.now(),
      createdAt: new Date().toISOString(),
      message: "Mensagem enviada manualmente",
      meta: {
        to: data.to,
        message: data.message,
      },
    });

    DB.logs.save(logs.slice(0, 500)); // limitar logs

    // 3️⃣ retorno para o painel
    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("SEND ERROR:", err);

    return NextResponse.json(
      { error: "Erro interno no envio" },
      { status: 500 }
    );
  }
}
