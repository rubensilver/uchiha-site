export default function AdminHome() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-5">Dashboard</h2>

      <p className="text-lg text-zinc-300">
        Bem-vindo ao Painel do BOT ZONE.
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <a className="p-5 bg-zinc-800 rounded-lg border border-red-700 hover:bg-zinc-700" href="/admin/theme">
          Trocar Tema
        </a>

        <a className="p-5 bg-zinc-800 rounded-lg border border-red-700 hover:bg-zinc-700" href="/admin/logs">
          Ver Logs
        </a>

        <a className="p-5 bg-zinc-800 rounded-lg border border-red-700 hover:bg-zinc-700" href="/admin/settings">
          Configurações
        </a>
      </div>
    </div>
  );
}
