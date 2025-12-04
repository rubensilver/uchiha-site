export default function DashboardHome() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Painel de Controle</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div className="p-4 bg-zinc-900 rounded-lg border border-zinc-800">
          <h3 className="text-lg font-semibold mb-2">Status</h3>
          <p>Online</p>
        </div>

        <div className="p-4 bg-zinc-900 rounded-lg border border-zinc-800">
          <h3 className="text-lg font-semibold mb-2">Mensagens</h3>
          <p>Carregando…</p>
        </div>

        <div className="p-4 bg-zinc-900 rounded-lg border border-zinc-800">
          <h3 className="text-lg font-semibold mb-2">Logs Recentes</h3>
          <p>Veja em /logs</p>
        </div>

      </div>
    </div>
  );
}
