import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  // validação do webhook (simples)
  if (mode === "subscribe") {
    return new Response(challenge, { status: 200 });
  }

  return NextResponse.json({ status: "ignored" });
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  console.log("WEBHOOK RECEIVED:", body);

  return NextResponse.json({ received: true });
}
