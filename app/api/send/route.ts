import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json().catch(() => null);

    if (!data?.to || !data?.message) {
      return NextResponse.json({ error: "missing fields" }, { status: 400 });
    }

    // aqui futuramente enviaremos a mensagem para o WhatsApp Cloud API

    return NextResponse.json({ status: "ok", data });
  } catch (e) {
    return NextResponse.json({ error: "failed" }, { status: 500 });
  }
}
