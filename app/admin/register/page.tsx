// app/admin/register/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [ok, setOk] = useState("");

  async function submit(e: any) {
    e.preventDefault();
    setErr("");
    setOk("");

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const json = await res.json();

    if (json.success) {
      setOk("Registrado com sucesso! Redirecionando...");
      setTimeout(() => router.push("/admin/login"), 1500);
    } else {
      setErr(json.error || "Erro ao registrar");
    }
  }

  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-red-500">Criar Administrador</h1>

      <form onSubmit={submit} className="flex flex-col gap-3 bg-zinc-900 p-6 rounded-xl border border-zinc-800">
        
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 rounded bg-black/40 border border-zinc-700"
          placeholder="Email"
          required
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-3 rounded bg-black/40 border border-zinc-700"
          placeholder="Senha"
          type="password"
          required
        />

        <button className="bg-red-600 hover:bg-red-700 py-2 rounded transition text-white">
          Registrar
        </button>

        {err && <p className="text-red-400 text-sm">{err}</p>}
        {ok && <p className="text-green-400 text-sm">{ok}</p>}
      </form>

      <p className="mt-4 text-sm text-zinc-400">
        Já tem conta? <a href="/admin/login" className="text-red-500">Entrar</a>
      </p>
    </main>
  );
}
