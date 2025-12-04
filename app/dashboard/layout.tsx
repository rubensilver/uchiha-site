export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-black text-white">

      {/* MENU LATERAL */}
      <aside className="w-60 bg-zinc-900 border-r border-zinc-800 p-4 space-y-4">
        <h1 className="text-xl font-bold">BOT ZONE</h1>

        <nav className="space-y-2">
          <a href="/dashboard" className="block p-2 rounded bg-zinc-800 hover:bg-zinc-700">
            Visão Geral
          </a>

          <a href="/dashboard/logs" className="block p-2 rounded bg-zinc-800 hover:bg-zinc-700">
            Logs
          </a>

          <a href="/dashboard/settings" className="block p-2 rounded bg-zinc-800 hover:bg-zinc-700">
            Configurações
          </a>

          <a href="/dashboard/theme" className="block p-2 rounded bg-zinc-800 hover:bg-zinc-700">
            Temas
          </a>
        </nav>
      </aside>

      {/* CONTEÚDO */}
      <main className="flex-1 p-6">
        {children}
      </main>

    </div>
  );
}
