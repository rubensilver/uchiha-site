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

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const id = params.id;
  const list = read().filter((c: any) => c.id !== id); // agora id é string garantida
  write(list);
  return NextResponse.json({ ok: true });
}
