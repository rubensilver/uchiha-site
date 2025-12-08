import { NextResponse } from 'next/server';

export async function POST(){ 
  console.log('Webhook test received');
  return new Response('Evento de teste recebido no servidor', {
    status: 200
  });
}
