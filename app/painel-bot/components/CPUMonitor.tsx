'use client';
import { useEffect, useState } from 'react';
export default function CPUMonitor(){
  const [cpu, setCpu] = useState(12);
  useEffect(()=>{
    const iv = setInterval(()=> setCpu(Math.max(2, Math.round(Math.random()*80))), 2500);
    return ()=> clearInterval(iv);
  },[]);
  return (
    <div>
      <div className="small">CPU</div>
      <div style={{background:'#111',padding:8,borderRadius:8}}>
        <div style={{width:'100%',background:'#222',height:12,borderRadius:8}}><div className="cpu-bar" style={{width:Math.min(100,cpu)+'%'}}></div></div>
        <div className="small" style={{marginTop:8}}>Uso: {cpu}%</div>
      </div>
    </div>
  );
}
