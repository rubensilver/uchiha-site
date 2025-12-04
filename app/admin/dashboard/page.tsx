'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Dashboard() {
  const [logs, setLogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/logs')
      .then((r) => r.json())
      .then((j) => setLogs(j.logs || []))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="p-6 max-w-5xl mx-auto">

      {/* TÍTULO */}
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold text-red-600 tracking-tight">
          Painel • BOT ZONE
        </h1>
        <p className="text-zinc-400 mt-1">
          Bem-vindo ao painel administrativo do seu bot.
        </p>
      </header>

      {/* CARDS RESUMO */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">

        <div className="p-5 bg-zinc-900 border border-zinc-800 rounded-xl shadow">
          <h3 className="text-lg font-semibold">Usuário logado</h3>
          <p className="text-zinc-400 text-sm">
            {typeof window !== 'undefined'
              ? JSON.parse(localStorage.getItem('session') || '{}')?.email
              : '---'}
          </p>
        </div>

        <div className="p-5 bg-zinc-900 border border-zinc-800 rounded-xl shadow">
          <h3 className="text-lg font-semibold">Total de Logs</h3>
          <p className="text-red-500 font-bold text-xl">{logs.length}</p>
        </div>

        <div className="p-5 bg-zinc-900 border border-zinc-800 rounded-xl shadow">
          <h3 className="text-lg font-semibold">Webhook</h3>
          <p className="text-green-400 font-medium">Online</p>
        </div>

      </section>

      {/* AÇÕES */}
      <section className="mb-10 bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">Ações Rápidas</h2>

        <div className="flex flex-wrap gap-4">
          <Link href="/admin/send" className="px-5 py-3 bg-red-600 rounded-lg shadow hover:bg-red-700 transition">
            Enviar Mensagem
          </Link>

          <Link href="/admin/logs" className="px-5 py-3 bg-zinc-800 border border-zinc-700 rounded-lg hover:bg-zinc-700 transition">
            Ver Logs
          </Link>

          <Link href="/admin/theme" className="px-5 py-3 bg-zinc-800 border border-zinc-700 rounded-lg hover:bg-zinc-700 transition">
            Trocar Tema
          </Link>
        </div>
      </section>

      {/* LISTA DE LOGS */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Últimos Logs</h2>

        {loading && <p className="text-zinc-500">Carregando...</p>}

        {!loading && logs.length === 0 && (
          <p className="text-zinc-500">Nenhum log registrado ainda.</p>
        )}

        <div className="space-y-3">
          {logs.map((l, i) => (
            <div key={i} className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg">
              <div className="text-sm text-zinc-500">{l.createdAt}</div>
              <div className="font-semibold text-red-400">{l.level}</div>
              <div className="text-sm">{l.message}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
