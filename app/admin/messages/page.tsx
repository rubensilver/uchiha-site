// app/admin/messages/page.tsx
"use client";
import { useEffect, useState } from "react";
import BackButton from "@/components/BackButton";
import MessagesList from "@/components/MessagesList";

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
    <main className="p-6 max-w-5xl mx-auto">
      <BackButton />

      <h1 className="text-3xl font-bold text-red-500 mb-6">Mensagens</h1>

      {loading && <p className="text-zinc-500">Carregando...</p>}

      {!loading && messages.length === 0 && (
        <p className="text-zinc-500">Nenhuma mensagem encontrada.</p>
      )}

      {!loading && messages.length > 0 && (
        <MessagesList messages={messages} />
      )}
    </main>
  );
}
