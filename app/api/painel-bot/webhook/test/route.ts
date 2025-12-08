import { NextResponse } from 'next/server';
export async function POST(){ 
  console.log('Webhook test received');
  return NextResponse.text('Evento de teste recebido no servidor');
}
