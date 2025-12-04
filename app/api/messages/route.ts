import { NextResponse } from "next/server";
import { DB } from "@/lib/db";

export async function GET() {
  return NextResponse.json(DB.messages.all());
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages = DB.messages.all();

    messages.push({
      ...body,
      createdAt: new Date().toISOString()
    });

    DB.messages.save(messages);

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
