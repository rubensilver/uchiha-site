import { NextResponse } from "next/server";
import { DB } from "@/lib/db";

export async function GET() {
  return NextResponse.json(DB.messages.all());
}

export async function POST(req: Request) {
  const { to, content, direction } = await req.json();
  const messages = DB.messages.all();

  messages.push({
    id: Date.now(),
    to,
    content,
    direction,
    createdAt: new Date().toISOString()
  });

  DB.messages.save(messages);

  return NextResponse.json({ success: true });
}
