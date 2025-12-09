import { NextResponse } from 'next/server';
import { verifyToken } from '../../../lib/jwt';

export async function POST(req: Request) {
  try {
    // Ler cookie pb_token
    const cookie = (req.headers as any).get?.('cookie') || '';
    const m = cookie.match(/pb_token=([^;]+)/);
    const token = m ? m[1] : null;

    if (!token)
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const payload = verifyToken(token);
    if (!payload)
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });

    // Receber a ação enviada do painel
    const { action } = await req.json();

    if (!action) {
      return NextResponse.json({ error: 'Missing action' }, { status: 400 });
    }

    // Apenas simulação por enquanto
    // Se depois quiser, integro com o backend real do BOT
    let result = {};

    switch (action) {
      case 'restart':
        console.log('BOT RESTART REQUESTED');
        result = { ok: true, message: 'Bot será reiniciado' };
        break;

      case 'stop':
        console.log('BOT STOP REQUESTED');
        result = { ok: true, message: 'Bot será parado' };
        break;

      case 'start':
        console.log('BOT START REQUESTED');
        result = { ok: true, message: 'Bot será iniciado' };
        break;

      default:
        return NextResponse.json(
          { error: 'Unknown action' },
          { status: 400 }
        );
    }

    return NextResponse.json(result);
  } catch (e) {
    console.error('ERRO /control:', e);
    return NextResponse.json(
      { error: 'Erro interno' },
      { status: 500 }
    );
  }
}
