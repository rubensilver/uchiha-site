// app/api/send/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { to, message } = await req.json();

    if (!to || !message) {
      return NextResponse.json(
        { error: "Dados faltando (to, message)" },
        { status: 400 }
      );
    }

    // Aqui você futuramente chamará seu bot:
    // await sendMessageToWhatsApp(to, message)

    return NextResponse.json({
      ok: true,
      status: "Mensagem enviada (simulação).",
      to,
      message
    });

  } catch (e) {
    return NextResponse.json(
      { error: "Erro ao enviar mensagem" },
      { status: 500 }
    );
  }
}
