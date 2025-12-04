'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();

  const [logs, setLogs] = useState<any[]>([]);
  const [user, setUser] = useState<any>(null);

  // Carrega usuário salvo no localStorage
  useEffect(() => {
    const session = localStorage.getItem("session");
    if (session) {
      setUser(JSON.parse(session));
    }
  }, []);

  // Carrega logs
  useEffect(() => {
    fetch('/api/logs')
      .then(r => r.json())
      .then(j => setLogs(j.logs || []));
  }, []);

  function logout() {
    localStorage.removeItem("session");
    router.push('/admin/login');
  }

  return (
    <main className="p-6">

      {/* CABEÇALHO BONITO */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-red-500">Painel • BOT ZONE</h1>

        {user && (
          <div className="flex items-center gap-3">
            <span className="text-gray-300 text-sm">
              Logado como: <b>{user.email}</b>
            </span>
            <button
              onClick={logout}
              className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded"
            >
              Sair
            </button>
          </div>
        )}
      </div>

      {/* AÇÕES RÁPIDAS */}
      <section className="mb-6 bg-[#0f0f10] p-4 rounded-lg border border-gray-800">
        <h2 className="font-semibold mb-3">Ações</h2>

        <div className="flex gap-3 flex-wrap">
          <Link href="/admin/send" className="px-4 py-2 bg-red-600 rounded hover:bg-red-700">
            Enviar Mensagem
          </Link>

          <Link href="/admin/logs" className="px-4 py-2 bg-zinc-800 rounded hover:bg-zinc-700">
            Ver Logs
          </Link>

          <Link href="/admin/theme" className="px-4 py-2 bg-zinc-800 rounded hover:bg-zinc-700">
            Trocar Tema
          </Link>

          <Link href="/admin/login" className="px-4 py-2 border border-gray-600 rounded hover:bg-white/10">
            Login
          </Link>
        </div>
      </section>

      {/* LOGS */}
      <section>
        <h3 className="font-semibold mb-2">Últimos Logs</h3>

        <div className="space-y-2">
          {logs.length === 0 && (
            <div className="text-gray-400 text-sm">Nenhum log registrado ainda.</div>
          )}

          {logs.map((l, i) => (
            <div
              key={i}
              className="p-3 rounded bg-[#0f0f10] border border-gray-800"
            >
              <div className="text-xs text-gray-400">{l.createdAt}</div>
              <div className="font-medium text-red-400">{l.level}</div>
              <div className="text-sm">{l.message}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
