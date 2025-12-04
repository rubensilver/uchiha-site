export default function PanelLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-black text-white">
      
      {/* MENU LATERAL */}
      <aside className="w-60 bg-zinc-900 p-4 flex flex-col gap-4">
        <h2 className="text-xl font-bold text-red-500">BOT ZONE</h2>

        <a href="/panel" className="text-zinc-300 hover:text-white">Dashboard</a>
        <a href="/panel/logs" className="text-zinc-300 hover:text-white">Logs</a>
        <a href="/panel/theme" className="text-zinc-300 hover:text-white">Tema</a>

        <a
          href="/api/auth/logout"
          className="mt-auto text-red-400 hover:text-red-300"
        >
          Sair
        </a>
      </aside>

      {/* CONTEÚDO */}
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}
