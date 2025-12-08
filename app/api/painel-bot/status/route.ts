import { NextResponse } from 'next/server';
import { verifyToken } from '../../../lib/jwt';
export async function GET(req: Request) {
  try {
    const cookie = (req.headers as any).get?.('cookie') || '';
    const m = cookie.match(/pb_token=([^;]+)/);
    const token = m ? m[1] : null;
    if(!token) return NextResponse.json({ error: 'Unauthorized' }, { status:401 });
    const payload = verifyToken(token);
    if(!payload) return NextResponse.json({ error: 'Invalid token' }, { status:401 });
    return NextResponse.json({ online: true, uptime: process.uptime(), pid: process.pid, messages: 1234 });
  } catch(e){ return NextResponse.json({ error: 'Erro interno' }, { status:500 }); }
}
