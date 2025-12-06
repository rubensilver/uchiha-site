"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";

export default function SidebarPreview() {
  const [mode, setMode] = useState("minimal");
  const [loading, setLoading] = useState(true);

  // Carrega o modo atual do servidor
  async function load() {
    const r = await fetch("/api/config/sidebar");
    const j = await r.json();
    setMode(j.mode);
    setLoading(false);
  }

  // Salva o novo modo no servidor
  async function save(newMode: string) {
    setMode(newMode);
    await fetch("/api/config/sidebar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mode: newMode }),
    });
  }

  useEffect(() => {
    load();
  }, []);

  if (loading) {
    return (
      <div className="p-6 text-zinc-400">
        Carregando preview...
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[var(--bg)] text-[var(--text)]">

      {/* Preview do Sidebar */}
      <div className="border-r border-zinc-800">
        <Sidebar mode={mode} forceMode />
      </div>

      {/* Controles */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-4">Preview do Sidebar</h1>
        <p className="text-zinc-400 mb-6">
          Escolha um estilo e veja imediatamente como o painel ficará.
        </p>

        <div className="space-y-3 max-w-sm">

          <button
            onClick={() => save("minimal")}
            className={`w-full p-3 rounded ${
              mode === "minimal" ? "bg-red-600" : "bg-zinc-800"
            }`}
          >
            Minimalista
          </button>

          <button
            onClick={() => save("modern")}
            className={`w-full p-3 rounded ${
              mode === "modern" ? "bg-red-600" : "bg-zinc-800"
            }`}
          >
            Moderno
          </button>

          <button
            onClick={() => save("complete")}
            className={`w-full p-3 rounded ${
              mode === "complete" ? "bg-red-600" : "bg-zinc-800"
            }`}
          >
            Completo
          </button>

        </div>

      </div>
    </div>
  );
}
