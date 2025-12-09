'use client';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [status, setStatus] = useState<any>(null);
  const [logs, setLogs] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  // Carrega status inicial
  async function loadStatus() {
    const res = await fetch('/api/painel-bot/status');
    if (res.status === 401) {
      window.location.href = '/painel-bot/login';
      return;
    }
    const data = await res.json();
    setStatus(data);
  }

  useEffect(() => {
    loadStatus();

    // Logs simulados ao vivo
    const interval = setInterval(() => {
      setLogs((prev) => [
        `[${new Date().toLocaleTimeString()}] Log de exemplo — Bot está operando...`,
        ...prev,
      ]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  async function sendControl(action: 'start'|'stop'|'restart') {
    setLoading(true);
    try {
      await fetch('/api/painel-bot/control', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action })
      });
      await loadStatus();
    } catch(e) {
      console.error(e);
    }
    setLoading(false);
  }

  return (
    <div className="text-white p-6 space-y-6">

      {/* Título */}
      <div>
        <h1 className="text-3xl font-bold">Painel do Bot — Dashboard Uchiha</h1>
        <p className="text-gray-400">Monitoramento • Controlo • Logs</p>
      </div>

      {/* Grid principal */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* CARD STATUS */}
        <div className="bg-[#0f0f10] rounded-xl border border-white/10 p-5">
          <h3 className="text-xl font-semibold mb-3">Status do Bot</h3>
          <p className="text-gray-300 text-sm">
            Online: <span className="text-red-400">{String(status?.online ?? '—')}</span>
          </p>
          <p className="text-gray-300 text-sm">
            Uptime: {status?.uptime ? Math.round(status.uptime) + 's' : '—'}
          </p>
          <p className="text-gray-300 text-sm">
            Mensagens: {status?.messages ?? '—'}
          </p>
        </div>

        {/* CARD CONTROLOS */}
        <div className="bg-[#0f0f10] rounded-xl border border-white/10 p-5">
          <h3 className="text-xl font-semibold mb-3">Controlo do Bot</h3>

          <div className="flex flex-col gap-3">

            <button
              disabled={loading}
              onClick={() => sendControl('start')}
              className="w-full bg-green-600 hover:bg-green-700 py-2 rounded-lg transition"
            >
              Iniciar Bot
            </button>

            <button
              disabled={loading}
              onClick={() => sendControl('stop')}
              className="w-full bg-yellow-600 hover:bg-yellow-700 py-2 rounded-lg transition"
            >
              Parar Bot
            </button>

            <button
              disabled={loading}
              onClick={() => sendControl('restart')}
              className="w-full bg-red-600 hover:bg-red-700 py-2 rounded-lg transition"
            >
              Reiniciar Bot
            </button>

          </div>
        </div>

        {/* CARD VARIÁVEIS */}
        <div className="bg-[#0f0f10] rounded-xl border border-white/10 p-5">
          <h3 className="text-xl font-semibold mb-3">Variáveis de Ambiente</h3>

          <ul className="text-gray-300 text-sm space-y-1">
            <li><b>Email:</b> {process.env.NEXT_PUBLIC_PANEL_EMAIL || '—'}</li>
            <li><b>API Base:</b> {process.env.NEXT_PUBLIC_BOT_API_URL || '—'}</li>
            <li><b>Modo:</b> Produção</li>
          </ul>
        </div>

      </div>

      {/* Logs */}
      <div className="bg-[#0f0f10] rounded-xl border border-white/10 p-5">
        <h3 className="text-xl font-semibold mb-3">Logs do Bot</h3>

        <div className="h-64 overflow-y-auto bg-black/20 p-3 rounded-lg text-sm leading-relaxed space-y-2">
          {logs.length === 0 && <p className="text-gray-400">Sem logs ainda…</p>}
          {logs.map((l, i) => (
            <p key={i} className="text-gray-300">{l}</p>
          ))}
        </div>
      </div>

    </div>
  );
}
