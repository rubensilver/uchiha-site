"use client";

import { useState } from "react";
import BackButton from "@/components/BackButton";

export default function SendPage() {
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSend = async (e: any) => {
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
        setStatus("Mensagem enviada! ✔️");
      } else {
        setStatus("Erro: " + (data.error || "Falha ao enviar"));
      }
    } catch (err) {
      setStatus("Falha ao conectar ao servidor.");
    }
  };

  return (
    <main className="p-6 max-w-xl mx-auto">
      <BackButton />

      <h1 className="text-3xl font-bold mb-6 text-red-500">Enviar Mensagem</h1>

      <form onSubmit={handleSend} className="space-y-4">

        <input
          className="w-full p-3 rounded bg-zinc-900 border border-zinc-700"
          type="text"
          placeholder="Número com código do país (ex: 2449xxxxxx)"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />

        <textarea
          className="w-full p-3 rounded bg-zinc-900 border border-zinc-700"
          placeholder="Mensagem..."
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button
          className="w-full px-4 py-3 rounded bg-red-600 hover:bg-red-700 transition font-semibold"
          type="submit"
        >
          Enviar
        </button>

        {status && (
          <p className="mt-3 text-zinc-300 text-sm">{status}</p>
        )}
      </form>
    </main>
  );
}
