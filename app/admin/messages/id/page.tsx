"use client";

import { useEffect, useState } from "react";
import BackButton from "@/components/BackButton";

export default function MessageDetails({ params }: any) {
  const { id } = params;

  const [msg, setMsg] = useState<any>(null);

  useEffect(() => {
    fetch(`/api/messages/${id}`)
      .then((r) => r.json())
      .then((j) => setMsg(j.message || null))
      .catch(() => setMsg(null));
  }, [id]);

  if (!msg) {
    return (
      <main className="p-6 max-w-xl mx-auto">
        <BackButton />
        <p className="text-zinc-400">Carregando...</p>
      </main>
    );
  }

  return (
    <main className="p-6 max-w-xl mx-auto">
      <BackButton />

      <h1 className="text-3xl font-bold text-red-500 mb-6">
        Detalhes da Mensagem
      </h1>

      <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl">
        <p className="text-xs text-zinc-400">{msg.createdAt}</p>

        <p className="mt-2 text-sm">
          <strong>Direção:</strong>{" "}
          {msg.direction === "sent" ? "Enviada" : "Recebida"}
        </p>

        <p className="text-sm mt-2">
          <strong>Número:</strong> {msg.from || msg.to}
        </p>

        <p className="text-sm mt-2 whitespace-pre-line">
          <strong>Conteúdo:</strong> {msg.content}
        </p>
      </div>
    </main>
  );
}
