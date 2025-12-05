"use client";

import { useEffect, useState } from "react";
import BackButton from "@/components/BackButton";
import MessageViewer from "./MessageViewer";

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

      <h1 className="text-3xl font-bold text-red-500 mb-5">
        Mensagens Recebidas & Enviadas
      </h1>

      {loading && <p className="text-zinc-400">Carregando mensagens...</p>}

      {!loading && messages.length === 0 && (
        <p className="text-zinc-400">Nenhuma mensagem encontrada.</p>
      )}

      <div className="space-y-3 mt-4">
        {messages.map((msg, i) => (
          <MessageViewer key={i} msg={msg} />
        ))}
      </div>
    </main>
  );
}
