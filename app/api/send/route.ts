import { NextResponse } from 'next/server';
import { sendText } from '@/lib/whatsapp';
export async function POST(req: Request){
  const { to, message } = await req.json().catch(()=>({}));
  if(!to || !message) return NextResponse.json({ error:'missing' }, { status:400 });
  try{
    const r = await sendText(to, message);
    return NextResponse.json({ ok:true, r });
  }catch(e:any){ return NextResponse.json({ error: e.message }, { status:500 }) }
}
