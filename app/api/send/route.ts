import { NextResponse } from 'next/server';
import { addLog } from '@/lib/logger';

export async function POST(req: Request){
  try {
    const data = await req.json().catch(()=>null);
    if(!data?.to || !data?.message) return NextResponse.json({ error:'missing fields' }, { status:400 });
    await addLog({ level:'INFO', message:`send to ${data.to}: ${data.message}`, createdAt:new Date().toISOString() });
    return NextResponse.json({ status:'ok', data });
  } catch(e:any){
    console.error(e);
    return NextResponse.json({ error:'failed' }, { status:500 });
  }
}
