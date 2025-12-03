export default function LogsPage() {
  const logs = [
    { type: "info", message: "Painel iniciado.", time: "Agora mesmo" },
    { type: "warn", message: "Bot ainda não conectado.", time: "Há 2 min" }
  ]

  return (
    <div className="text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Logs</h1>
      <p className="text-gray-300 mb-4">Histórico do sistema:</p>

      <div className="space-y-3">
        {logs.map((log, i) => (
          <div key={i} className="p-4 bg-[#0f0f10] border border-gray-800 rounded">
            <p className="text-red-500 font-bold">{log.type.toUpperCase()}</p>
            <p className="text-gray-300">{log.message}</p>
            <p className="text-gray-500 text-sm">{log.time}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
