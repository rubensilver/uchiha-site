// app/admin/config/sidebar/page.tsx
"use client";

import { useEffect, useState } from "react";

export default function SidebarConfigPage() {
  const [mode, setMode] = useState<"minimal" | "modern" | "complete">("minimal");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const r = await fetch("/api/config/sidebar");
        const j = await r.json();
        setMode(j.mode || "minimal");
      } catch (err) {
        setMode("minimal");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  async function save(newMode: string) {
    setSaving(true);
    setMsg(null);
    try {
      const r = await fetch("/api/config/sidebar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mode: newMode }),
      });
      const j = await r.json();
      if (r.ok) {
        setMode(newMode as any);
        setMsg("Salvo com sucesso!");
      } else {
        setMsg(j?.error || "Erro ao salvar");
      }
    } catch (err) {
      setMsg("Erro ao salvar (network).");
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <div className="p-6 text-zinc-400">Carregando...</div>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Configurar Sidebar</h1>
      <p className="text-zinc-400 mb-6">Escolha o layout do sidebar que o painel deve usar.</p>

      <div className="space-y-3 mb-4">
        <button
          onClick={() => save("minimal")}
          className={`w-full p-3 rounded ${mode === "minimal" ? "bg-red-600" : "bg-zinc-800"}`}
          disabled={saving}
        >
          Minimalista
        </button>

        <button
          onClick={() => save("modern")}
          className={`w-full p-3 rounded ${mode === "modern" ? "bg-red-600" : "bg-zinc-800"}`}
          disabled={saving}
        >
          Moderno
        </button>

        <button
          onClick={() => save("complete")}
          className={`w-full p-3 rounded ${mode === "complete" ? "bg-red-600" : "bg-zinc-800"}`}
          disabled={saving}
        >
          Completo
        </button>
      </div>

      {msg && <div className="p-3 rounded bg-zinc-900 text-sm">{msg}</div>}
    </div>
  );
    }
