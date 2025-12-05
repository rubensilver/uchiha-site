"use client";

import { useState } from "react";

export default function SendMessageBox() {
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  async function send(e: any) {
    e.preventDefault();
    setStatus("Enviando...");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ to: number, message }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("✔️ Mensagem enviada");
      } else {
        setStatus("⚠️ " + (data.error || "Erro ao enviar"));
      }
    } catch {
      setStatus("❌ Erro ao conectar ao servidor");
    }
  }

  return (
    <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl">
      <h3 className="text-lg font-semibold mb-3">Enviar Mensagem</h3>

      <form onSubmit={send} className="space-y-3">
        <input
          className="w-full p-3 rounded bg-black/40 border border-zinc-700"
          placeholder="Número (2449xxxxxx)"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />

        <textarea
          className="w-full p-3 rounded bg-black/40 border border-zinc-700"
          rows={3}
          placeholder="Mensagem..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 py-2 rounded text-white"
        >
          Enviar
        </button>

        {status && <p className="text-sm text-zinc-300">{status}</p>}
      </form>
    </div>
  );
}
