import { NextResponse } from 'next/server';
import { generateToken } from '@/lib/auth';

export async function POST(req: Request){
  try{
    const { email, password } = await req.json().catch(()=>({}));
    if(!email || !password) return NextResponse.json({ error:'missing' }, { status:400 });
    // fake check
    if(email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD) return NextResponse.json({ error:'unauth' }, { status:401 });
    const token = generateToken({ userId: email, role:'admin' });
    return NextResponse.json({ token });
  }catch(e:any){ return NextResponse.json({ error: e.message }, { status:500 }) }
}
