'use client';
import { useEffect, useState } from 'react';
export default function Logs() {
  const [lines,setLines]=useState<string[]>([]);
  useEffect(()=>{
    const es = new EventSource('/api/painel-bot/logs/stream');
    es.onmessage = (e)=> setLines(prev=>[...prev, e.data].slice(-200));
    es.onerror = ()=> es.close();
    return ()=> es.close();
  },[]);
  return (
    <div>
      <h1>Logs (real-time)</h1>
      <div className="card" style={{height:420,overflow:'auto'}}>
        <pre style={{whiteSpace:'pre-wrap',fontSize:13}}>{lines.join('\n')}</pre>
      </div>
    </div>
  );
}
