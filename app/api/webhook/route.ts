import { NextResponse } from 'next/server';
export async function GET(req: Request){
  const { searchParams } = new URL(req.url);
  const mode = searchParams.get('hub.mode');
  const token = searchParams.get('hub.verify_token');
  const challenge = searchParams.get('hub.challenge');
  if(mode === 'subscribe' && token === process.env.VERIFY_TOKEN) return new Response(challenge || '', { status:200 });
  return NextResponse.json({ error:'unauthorized' }, { status:403 });
}
export async function POST(req: Request){
  const body = await req.json().catch(()=>null);
  console.log('webhook', body);
  return NextResponse.json({ ok:true });
}
