"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function UsersPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/users")
      .then((r) => r.json())
      .then((j) => setUsers(j.users || []))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="p-6 max-w-5xl mx-auto">

      {/* TÍTULO */}
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-red-500">Usuários</h1>
          <p className="text-zinc-400 mt-1">Gerenciamento de administradores do painel.</p>
        </div>

        <Link
          href="/admin/register"
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow"
        >
          ➕ Novo Usuário
        </Link>
      </header>

      {/* LISTA */}
      <section className="space-y-3">
        {loading && <p className="text-zinc-500">Carregando...</p>}

        {!loading && users.length === 0 && (
          <p className="text-zinc-500">Nenhum usuário registrado.</p>
        )}

        {users.map((user, i) => (
          <div
            key={i}
            className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg"
          >
            <div className="font-semibold text-red-400">{user.email}</div>
            <div className="text-sm text-zinc-400">Cargo: {user.role}</div>
            <div className="text-xs text-zinc-500">
              Criado em: {user.createdAt ?? "–––"}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
