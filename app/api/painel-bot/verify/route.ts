import { NextResponse } from 'next/server';
import { signToken } from '../../../lib/jwt';
export async function POST(req: Request) {
  try {
    const { pin } = await req.json();
    const CONFIG_PIN = process.env.PANEL_PIN;
    if(!pin) return NextResponse.json({ error: 'PIN required' }, { status:400 });
    if(pin !== CONFIG_PIN) return NextResponse.json({ error: 'PIN inválido' }, { status:401 });
    const token = signToken({ role: 'painel-admin' });
    const res = NextResponse.json({ ok: true });
    res.cookies.set('pb_token', token, { httpOnly:true, path:'/', maxAge: 60*60*24*7 });
    res.cookies.set('pb_pending', '', { path:'/', maxAge:0 });
    return res;
  } catch(e){ return NextResponse.json({ error: 'Erro interno' }, { status:500 }); }
}
