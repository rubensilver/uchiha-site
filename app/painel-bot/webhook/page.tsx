'use client';
import { useState } from 'react';
export default function WebhookPage(){
  const [last,setLast]=useState('Nenhum evento');
  async function test(){ const res=await fetch('/api/painel-bot/webhook/test',{method:'POST'}); setLast(await res.text()); }
  return (
    <div>
      <h1>Webhook Monitor</h1>
      <div className="card">
        <p className="small">Último evento: <strong>{last}</strong></p>
        <button className="btn" onClick={test}>Enviar Evento de Teste</button>
      </div>
    </div>
  );
}
