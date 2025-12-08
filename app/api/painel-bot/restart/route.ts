import { NextResponse } from 'next/server';
import { verifyToken } from '../../../lib/jwt';
export async function POST(req: Request) {
  try {
    const cookie = (req.headers as any).get?.('cookie') || '';
    const m = cookie.match(/pb_token=([^;]+)/);
    const token = m ? m[1] : null;
    if(!token) return NextResponse.json({ error: 'Unauthorized' }, { status:401 });
    const payload = verifyToken(token);
    if(!payload) return NextResponse.json({ error: 'Invalid token' }, { status:401 });
    // placeholder for real restart integration
    console.log('Restart requested by', (payload as any).role || '(unknown)');
    return NextResponse.json({ ok: true });
  } catch(e){ return NextResponse.json({ error: 'Erro interno' }, { status:500 }); }
}
