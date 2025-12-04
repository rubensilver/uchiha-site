'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Dashboard(){
  const [logs, setLogs] = useState<any[]>([]);

  useEffect(()=>{
    fetch('/api/logs').then(r=>r.json()).then(j=>setLogs(j.logs||[]));
  },[]);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Painel • BOT ZONE</h1>
      <section className="mb-6">
        <h2 className="font-semibold">Ações</h2>
        <div className="flex gap-3 mt-2">
          <Link href="/admin/login" className="px-4 py-2 border rounded">Login</Link>
        </div>
      </section>

      <section>
        <h3 className="font-semibold mb-2">Últimos logs</h3>
        <div className="space-y-2">
          {logs.map((l,i)=>(
            <div key={i} className="p-3 rounded bg-[#0f0f10]">
              <div className="text-sm text-muted">{l.createdAt}</div>
              <div className="font-medium">{l.level}</div>
              <div className="text-sm">{l.message}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
