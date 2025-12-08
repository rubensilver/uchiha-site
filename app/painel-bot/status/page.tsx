// app/painel-bot/status/page.tsx
'use client';
import { useEffect, useState } from 'react';

export default function StatusPage() {
  const [status, setStatus] = useState<{online?:boolean, uptime?:number, timestamp?:string}|null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string|null>(null);

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        const res = await fetch('/api/painel-bot/status');
        if (!res.ok) throw new Error('status api error');
        const data = await res.json();
        if (!mounted) return;
        setStatus(data);
      } catch (err: any) {
        setError(err?.message || String(err));
      } finally {
        setLoading(false);
      }
    }
    load();
    return () => { mounted = false; };
  }, []);

  return (
    <div>
      <h1>Status do Bot</h1>
      {loading && <div className="small">Carregando...</div>}
      {error && <div className="small" style={{color:'#ff8b8b'}}>Erro: {error}</div>}
      {status && (
        <div style={{marginTop:12}} className="grid">
          <div className="card">
            <h3>Online</h3>
            <div className="small">{String(status.online)}</div>
          </div>
          <div className="card">
            <h3>Uptime</h3>
            <div className="small">{status.uptime ? `${status.uptime} s` : '—'}</div>
          </div>
          <div className="card">
            <h3>Timestamp</h3>
            <div className="small">{status.timestamp ?? '—'}</div>
          </div>
        </div>
      )}
    </div>
  );
}
