export default function PanelPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Painel • BOT ZONE</h1>

      <section className="bg-zinc-900 p-4 rounded-lg mb-6">
        <h2 className="text-xl mb-2">Ações</h2>
        <a
          href="/panel/theme"
          className="px-4 py-2 bg-red-600 rounded hover:bg-red-700"
        >
          Trocar Tema
        </a>
      </section>

      <section className="bg-zinc-900 p-4 rounded-lg">
        <h2 className="text-xl mb-2">Últimos Logs</h2>
        <p className="text-zinc-400 text-sm">Nenhum log registrado ainda.</p>
      </section>
    </div>
  );
}
