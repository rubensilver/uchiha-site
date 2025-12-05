"use client";

import { useState } from "react";
import BackButton from "@/components/BackButton";

export default function CreateUserPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("operador");

  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");

  async function submit(e: any) {
    e.preventDefault();
    setMsg("");
    setErr("");

    const res = await fetch("/api/admin/users/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, role })
    });

    const json = await res.json();

    if (json.success) {
      setMsg("Usuário criado com sucesso!");
      setEmail("");
      setPassword("");
    } else {
      setErr(json.error || "Erro ao criar usuário");
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <BackButton />

      <h1 className="text-3xl font-bold mb-4 text-red-500">Criar Usuário</h1>

      <form onSubmit={submit} className="flex flex-col gap-3 bg-zinc-900 p-6 rounded-xl border border-zinc-800">

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="p-3 rounded bg-black/40 border border-zinc-700"
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Senha"
          className="p-3 rounded bg-black/40 border border-zinc-700"
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="p-3 rounded bg-black/40 border border-zinc-700"
        >
          <option value="operador">Operador</option>
          <option value="admin">Administrador</option>
        </select>

        <button className="bg-red-600 hover:bg-red-700 py-2 rounded">
          Criar Usuário
        </button>

        {err && <p className="text-red-400">{err}</p>}
        {msg && <p className="text-green-400">{msg}</p>}
      </form>
    </div>
  );
}
