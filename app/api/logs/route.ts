import { NextResponse } from 'next/server';
import { getLogs } from '@/lib/logger';

export async function GET(){
  try {
    const logs = getLogs(200);
    return NextResponse.json({ logs });
  } catch(e:any){
    console.error(e);
    return NextResponse.json({ error:'failed' }, { status:500 });
  }
}
