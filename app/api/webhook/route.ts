import { NextResponse } from 'next/server';
import { addLog } from '@/lib/db';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const mode = searchParams.get('hub.mode');
  const challenge = searchParams.get('hub.challenge');
  if (mode === 'subscribe') return new Response(challenge || '', { status: 200 });
  return NextResponse.json({ status: 'ignored' });
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    await addLog({ level: 'INFO', message: 'webhook received', meta: body ?? null, createdAt: new Date().toISOString() });
    return NextResponse.json({ received: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'failed' }, { status: 500 });
  }
}
