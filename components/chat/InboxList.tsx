"use client";

import { useEffect, useState } from "react";

interface Conversation {
  id: number;
  name: string;
  lastMessage: string;
  unread: number;
  updatedAt: string;
}

export default function InboxList() {
  const [loading, setLoading] = useState(true);
  const [conversations, setConversations] = useState<Conversation[]>([]);

  async function load() {
    const r = await fetch("/api/messages");
    const j = await r.json();
    setConversations(j.conversations || []);
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  if (loading) {
    return <div className="p-4 text-zinc-400">Carregando conversas...</div>;
  }

  return (
    <div className="w-full">
      {conversations.length === 0 ? (
        <div className="p-4 text-zinc-400">Nenhuma conversa encontrada.</div>
      ) : (
        conversations.map((c) => (
          <a
            key={c.id}
            href={`/admin/chat/${c.id}`}
            className="flex items-center justify-between p-4 border-b border-zinc-800 hover:bg-zinc-900 transition"
          >
            <div>
              <p className="text-white font-semibold">{c.name}</p>
              <p className="text-zinc-400 text-sm">{c.lastMessage}</p>
            </div>

            <div className="flex flex-col items-end">
              <span className="text-xs text-zinc-500">
                {new Date(c.updatedAt).toLocaleTimeString("pt-BR", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>

              {c.unread > 0 && (
                <span className="bg-red-600 text-white rounded-full px-2 py-1 text-xs mt-1">
                  {c.unread}
                </span>
              )}
            </div>
          </a>
        ))
      )}
    </div>
  );
}
