export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="w-full bg-red-700 px-5 py-4 shadow-lg">
        <h1 className="text-2xl font-bold tracking-wide">
          Painel • BOT ZONE
        </h1>
      </header>

      <div className="flex">
        <aside className="w-56 bg-zinc-900 border-r border-red-700 min-h-screen p-4">
          <nav className="flex flex-col gap-3">
            <a href="/admin" className="hover:text-red-500">Dashboard</a>
            <a href="/admin/theme" className="hover:text-red-500">Trocar Tema</a>
            <a href="/admin/logs" className="hover:text-red-500">Logs</a>
            <a href="/admin/settings" className="hover:text-red-500">Configurações</a>
          </nav>
        </aside>

        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
