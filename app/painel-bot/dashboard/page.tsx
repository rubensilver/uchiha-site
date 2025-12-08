'use client';
import { useEffect, useState } from 'react';
export default function Dashboard() {
  const [status,setStatus]=useState<any>(null);
  useEffect(()=>{(async ()=>{
    const res = await fetch('/api/painel-bot/status');
    if(res.status===401){ window.location.href='/painel-bot/login'; return; }
    const data = await res.json();
    setStatus(data);
  })()},[]);
  return (
    <div>
      <h1>Dashboard Pro</h1>
      <div style={{display:'flex',gap:12,flexWrap:'wrap',marginTop:12}}>
        <div className="card" style={{minWidth:260}}>
          <h3>Status</h3>
          <p className="small">Online: {String(status?.online ?? '—')}</p>
          <p className="small">Uptime: {status?.uptime ? Math.round(status.uptime)+'s' : '—'}</p>
          <p className="small">Mensagens: {status?.messages ?? '—'}</p>
        </div>
        <div className="card" style={{minWidth:260}}>
          <h3>Controlo</h3>
          <div style={{display:'flex',gap:8}}>
            <button className="btn" onClick={async ()=>{ await fetch('/api/painel-bot/restart',{method:'POST'}); alert('Restart pedido (placeholder)'); }}>Reiniciar</button>
            <button className="btn" onClick={async ()=>{ await fetch('/api/painel-bot/command',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({cmd:'status'})}); alert('Comando enviado'); }}>Enviar CMD</button>
          </div>
        </div>
      </div>
    </div>
  );
}
