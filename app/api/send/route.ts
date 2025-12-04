import { NextResponse } from "next/server";
import { DB } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const data = await req.json().catch(() => null);

    if (!data?.number || !data?.message) {
      return NextResponse.json(
        { error: "Campos faltando" },
        { status: 400 }
      );
    }

    // Salvar log
    const logs = DB.logs.all();
    logs.push({
      id: Date.now(),
      createdAt: new Date().toISOString(),
      message: "Mensagem enviada manualmente",
      meta: {
        number: data.number,
        message: data.message
      }
    });
    DB.logs.save(logs);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Erro interno" },
      { status: 500 }
    );
  }
}
