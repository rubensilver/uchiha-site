import { NextResponse } from 'next/server';
export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const f = form.get('file') as any;
    if(!f) return NextResponse.text('Nenhum ficheiro', { status:400 });
    const name = f.name || ('upload_'+Date.now());
    const array = await f.arrayBuffer();
    // store in tmp (placeholder)
    const path = '/tmp/' + name;
    await Deno.writeFile ? Deno.writeFile(path, new Uint8Array(array)) : Promise.resolve();
    return NextResponse.text('Ficheiro recebido (placeholder): ' + name);
  } catch(e){
    return NextResponse.text('Erro ao receber ficheiro');
  }
}
