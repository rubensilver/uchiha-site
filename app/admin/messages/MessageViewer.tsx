export default function MessageViewer({ msg }: any) {
  const isSent = msg.direction === "sent";

  return (
    <div
      className={`p-4 rounded-xl border shadow
      ${isSent ? "bg-red-900/30 border-red-800" : "bg-zinc-900 border-zinc-800"}
    `}
    >
      <div className="flex justify-between mb-2">
        <span className="text-sm text-zinc-400">
          {new Date(msg.createdAt).toLocaleString()}
        </span>

        <span
          className={`text-xs px-2 py-1 rounded
          ${isSent ? "bg-red-700 text-white" : "bg-zinc-700 text-zinc-200"}
        `}
        >
          {isSent ? "Enviada" : "Recebida"}
        </span>
      </div>

      <div className="text-white font-semibold mb-1">
        {isSent ? `Para: ${msg.to}` : `De: ${msg.to}`}
      </div>

      <div className="text-zinc-300 text-sm whitespace-pre-line">
        {msg.content}
      </div>
    </div>
  );
}
