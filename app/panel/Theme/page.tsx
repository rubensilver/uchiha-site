"use client";

export default function ThemePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Trocar Tema</h1>

      <div className="flex gap-4">
        <button className="px-4 py-2 bg-zinc-200 text-black rounded">
          Claro
        </button>

        <button className="px-4 py-2 bg-zinc-700 rounded">
          Escuro
        </button>

        <button className="px-4 py-2 bg-red-600 rounded">
          Uchiha
        </button>
      </div>
    </div>
  );
}
