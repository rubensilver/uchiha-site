// components/MessagesList.tsx
"use client";

export default function MessagesList({ messages }: { messages: any[] }) {
  return (
    <div className="space-y-3">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg"
        >
          <div className="text-sm text-zinc-500">
            {msg.createdAt}
          </div>

          <div className="font-bold text-red-400">
            {msg.direction === "sent" ? "Enviada" : "Recebida"}
          </div>

          <div className="text-zinc-200">
            <strong>Para/De: </strong>
            {msg.to}
          </div>

          <div className="mt-2">
            <strong>Conteúdo:</strong>
            <p className="text-zinc-300">{msg.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
