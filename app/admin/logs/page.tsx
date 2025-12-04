"use client";
import { useEffect, useState } from "react";
import BackButton from "@/components/BackButton";

export default function LogsPage(){
  const [logs, setLogs] = useState<any[]>([]);
  useEffect(()=>{
    fetch('/api/logs').then(r=>r.json()).then(j=>setLogs(j.logs||[])).catch(()=>setLogs([]));
  },[]);
  return (
    <div>
      <BackButton />
      <h2 className="text-2xl font-bold">Logs Recentes</h2>
      <div className="mt-4 space-y-2">
        {logs.length === 0 && <div className="text-zinc-400">Nenhum log</div>}
        {logs.map((l, i)=>(
          <div key={i} className="p-3 bg-zinc-900 border border-zinc-800 rounded">
            <div className="text-sm text-zinc-300">{l.createdAt}</div>
            <div className="font-medium">{l.message}</div>
            <div className="text-xs text-zinc-400">{JSON.stringify(l.meta || {})}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
