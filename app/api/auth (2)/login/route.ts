import { NextResponse } from 'next/server';
import { findUser } from '@/lib/db';
import { verify } from '@/lib/auth';

export async function POST(req: Request){
  try {
    const body = await req.json().catch(()=>({}));
    const { email, password } = body;
    if(!email || !password) return NextResponse.json({ error:'missing' }, { status:400 });
    const user = findUser(email);
    if(!user) return NextResponse.json({ error:'unauthorized' }, { status:401 });
    const ok = verify(password, user.password);
    if(!ok) return NextResponse.json({ error:'unauthorized' }, { status:401 });
    return NextResponse.json({ success:true, user:{ email: user.email, role: user.role } });
  } catch(e:any){
    console.error(e);
    return NextResponse.json({ error:'server' }, { status:500 });
  }
}
