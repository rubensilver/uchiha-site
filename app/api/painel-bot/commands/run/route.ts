import { NextResponse } from 'next/server';
import fs from 'fs';
const PATH = '/tmp/pb_commands.json';
function read(){ try{ return JSON.parse(fs.readFileSync(PATH,'utf8')||'[]'); }catch{ return []; } }
export async function POST(req:Request){
  const { id } = await req.json();
  const list = read();
  const cmd = list.find((c:any)=>c.id===id);
  console.log('Run command', id, cmd?.script);
  return NextResponse.json({ ok:true });
}
