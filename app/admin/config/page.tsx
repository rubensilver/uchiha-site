'use client';
import { useEffect, useState } from "react";

export default function ConfigPage() {
  const [mode, setMode] = useState("minimal");

  async function load() {
    const r = await fetch("/api/config/sidebar");
    const j = await r.json();
    setMode(j.mode);
  }

  async function save(newMode: string) {
    setMode(newMode);
    await fetch("/api/config/sidebar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mode: newMode })
    });
  }

  useEffect(() => { load(); }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Configurações</h1>

      <p className="mb-3 text-zinc-300">Modelo do Sidebar:</p>

      <div className="flex flex-col gap-2">

        <button
          className={`p-3 rounded ${mode === "minimal" ? "bg-red-600" : "bg-zinc-800"}`}
          onClick={() => save("minimal")}
        >
          Sidebar Minimalista
        </button>

        <button
          className={`p-3 rounded ${mode === "modern" ? "bg-red-600" : "bg-zinc-800"}`}
          onClick={() => save("modern")}
        >
          Sidebar Moderno
        </button>

        <button
          className={`p-3 rounded ${mode === "complete" ? "bg-red-600" : "bg-zinc-800"}`}
          onClick={() => save("complete")}
        >
          Sidebar Completo
        </button>

      </div>
    </div>
  );
}
