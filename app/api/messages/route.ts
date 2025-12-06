// app/api/messages/route.ts
import { NextResponse } from "next/server";
import { DB } from "@/lib/db";

export async function GET() {
  try {
    const messages = DB.messages.all();
    return NextResponse.json({ messages });
  } catch (err) {
    console.error("MESSAGES GET ERROR:", err);
    return NextResponse.json({ error: "failed" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    if (!body) return NextResponse.json({ success: false, error: "missing body" }, { status: 400 });

    const messages = DB.messages.all();
    messages.unshift({
      id: Date.now(),
      ...body,
      createdAt: new Date().toISOString(),
    });
    DB.messages.save(messages.slice(0, 1000));
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("MESSAGES POST ERROR:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
