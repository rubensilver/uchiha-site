// app/api/messages/route.ts
import { NextResponse } from 'next/server';
import { DB } from '@/lib/db';

export async function GET() {
  try {
    const messages = DB.messages.all();
    return NextResponse.json({ messages });
  } catch (err) {
    return NextResponse.json({ error: 'failed' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    const messages = DB.messages.all();
    messages.push({
      ...body,
      createdAt: new Date().toISOString(),
    });
    DB.messages.save(messages);
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
