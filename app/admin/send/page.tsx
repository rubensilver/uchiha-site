"use client";

import { useState } from "react";

export default function SendPage() {
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSend = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ to: number, message }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("✔ Mensagem enviada com sucesso!");
        setNumber("");
        setMessage("");
      } else {
        setStatus("❌ Erro: " + data.error);
      }
    } catch (e) {
      setStatus("❌ Falha ao conectar ao servidor.");
    }

    setLoading(false);
  };

  return (
    <div className="p-6 max-w-xl mx-auto text-white">
      <h1 className="text-3xl font-bold mb-6 text-red-500">
        Enviar Mensagem
      </h1>

      <form onSubmit={handleSend} className="space-y-5">
        <div>
          <label className="text-sm text-gray-300">Número (com código do país)</label>
          <input
            className="w-full p-3 rounded bg-black/40 border border-red-800 focus:ring-2 focus:ring-red-600 outline-none transition"
            type="text"
            placeholder="Ex: 244948963368"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="text-sm text-gray-300">Mensagem</label>
          <textarea
            className="w-full p-3 rounded bg-black/40 border border-red-800 focus:ring-2 focus:ring-red-600 outline-none transition"
            rows={4}
            placeholder="Digite sua mensagem..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded bg-red-600 hover:bg-red-700 transition font-semibold disabled:bg-red-900"
        >
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </form>

      {status && (
        <p className="mt-4 text-center text-lg font-medium">
          {status}
        </p>
      )}
    </div>
  );
}
