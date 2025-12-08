import { NextResponse } from 'next/server';
export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    const ADMIN_EMAIL = process.env.PANEL_USER_EMAIL;
    const ADMIN_PASS = process.env.PANEL_USER_PASS;
    if(!email || !password) return NextResponse.json({ error: 'Dados inválidos' }, { status: 400 });
    if(email !== ADMIN_EMAIL || password !== ADMIN_PASS) return NextResponse.json({ error: 'Credenciais incorretas' }, { status: 401 });
    const res = NextResponse.json({ ok: true, message: 'PIN required' });
    res.cookies.set('pb_pending', '1', { httpOnly:true, path:'/', maxAge:300 });
    return res;
  } catch(e){
    return NextResponse.json({ error: 'Erro interno' }, { status:500 });
  }
}
