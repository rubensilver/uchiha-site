export default function ThemePage() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Trocar Tema</h2>

      <div className="flex gap-4">
        <a href="/api/theme?set=light" className="px-5 py-3 bg-zinc-300 text-black rounded">Claro</a>
        <a href="/api/theme?set=dark" className="px-5 py-3 bg-zinc-800 text-white rounded">Escuro</a>
        <a href="/api/theme?set=uchiha" className="px-5 py-3 bg-red-700 text-white rounded shadow-lg">Uchiha</a>
      </div>
    </div>
  );
}
