import { NextResponse } from 'next/server';
import fs from 'fs';

const PATH = '/tmp/pb_commands.json';

function read() {
  try { return JSON.parse(fs.readFileSync(PATH, 'utf8') || '[]'); }
  catch { return []; }
}

function write(data: any) {
  fs.writeFileSync(PATH, JSON.stringify(data, null, 2));
}

export async function GET() {
  return NextResponse.json(read());
}

export async function POST(req: Request) {
  const body = await req.json();
  const list = read();
  const id = Date.now().toString(36);
  list.push({
    id,
    name: body.name || 'cmd',
    script: body.script || ''
  });
  write(list);

  return NextResponse.json({ ok: true });
}
