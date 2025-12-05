"use client";

import { useEffect, useState } from "react";
import BackButton from "@/components/BackButton";

export default function MessagesPage() {
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/messages")
      .then((r) => r.json())
      .then((j) => setMessages(j.messages || []))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <BackButton />

      <h1 className="text-3xl font-bold text-red-500 mb-6">
        Mensagens Recebidas e Enviadas
      </h1>

      {loading && <p className="text-zinc-400">Carregando...</p>}

      {!loading && messages.length === 0 && (
        <p className="text-zinc-500">Nenhuma mensagem registrada ainda.</p>
      )}

      <div className="space-y-3">
        {messages.map((m, i) => (
          <div
            key={i}
            className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg"
          >
            <div className="text-xs text-zinc-500">{m.createdAt}</div>

            <div
              className={`font-semibold ${
                m.direction === "sent" ? "text-green-400" : "text-blue-400"
              }`}
            >
              {m.direction === "sent" ? "Enviada → Usuário" : "Recebida ← Usuário"}
            </div>

            <div className="text-sm mt-1">
              <strong>Número:</strong> {m.to || m.from}
            </div>

            <div className="text-sm mt-1 whitespace-pre-line">
              <strong>Conteúdo:</strong> {m.content}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
