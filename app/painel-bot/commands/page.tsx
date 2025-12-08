'use client';
import { useEffect, useState } from 'react';
export default function Commands() {
  const [list,setList]=useState<any[]>([]);
  const [name,setName]=useState('');
  const [script,setScript]=useState('');
  useEffect(()=>{load();},[]);
  async function load(){ const res=await fetch('/api/painel-bot/commands'); setList(await res.json()); }
  async function addCmd(){ await fetch('/api/painel-bot/commands',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name,script})}); setName(''); setScript(''); load(); }
  async function run(id){ await fetch('/api/painel-bot/commands/run',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({id})}); alert('Executado (placeholder)'); }
  async function remove(id){ await fetch('/api/painel-bot/commands/'+id,{method:'DELETE'}); load(); }
  return (
    <div>
      <h1>Comandos</h1>
      <div className="card">
        <input className="input" placeholder="Nome" value={name} onChange={e=>setName(e.target.value)} />
        <input className="input" placeholder="Script / comando" value={script} onChange={e=>setScript(e.target.value)} />
        <div style={{marginTop:8}}><button className="btn" onClick={addCmd}>Adicionar</button></div>
      </div>
      <div style={{marginTop:12}} className="grid">
        {list.map(c=>(
          <div key={c.id} className="card">
            <h4>{c.name}</h4>
            <div className="small codebox" style={{marginTop:8}}>{c.script}</div>
            <div style={{marginTop:8,display:'flex',gap:8}}>
              <button className="btn" onClick={()=>run(c.id)}>Run</button>
              <button onClick={()=>remove(c.id)}>Remover</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
