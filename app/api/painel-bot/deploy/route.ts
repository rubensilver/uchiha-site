import { NextResponse } from 'next/server';
import { verifyToken } from '../../../lib/jwt';

export async function POST(req: Request) {
  try {
    // Lê e valida o cookie
    const cookie = (req.headers as any).get?.('cookie') || '';
    const m = cookie.match(/pb_token=([^;]+)/);
    const token = m ? m[1] : null;

    if (!token)
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const payload = verifyToken(token);
    if (!payload)
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });

    // Processa o arquivo enviado
    const form = await req.formData();
    const file = form.get('file') as File | null;

    if (!file)
      return NextResponse.json({ error: 'Nenhum arquivo enviado' }, { status: 400 });

    const array = await file.arrayBuffer();
    const buffer = Buffer.from(array);

    // Render só aceita escrita no /tmp
    const fs = require('fs');
    const path = `/tmp/${file.name}`;

    fs.writeFileSync(path, buffer);

    return NextResponse.json({
      ok: true,
      message: `Arquivo salvo em ${path}`,
    });

  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 });
  }
}
