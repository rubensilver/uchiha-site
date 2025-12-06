// app/admin/config/theme/page.tsx
"use client";

import { useEffect, useState } from "react";

export default function ThemeConfigPage() {
  const [theme, setTheme] = useState<string>("dark");
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        // tenta pegar tema do backend (se tiver)
        const r = await fetch("/api/config/theme");
        if (r.ok) {
          const j = await r.json();
          setTheme(j?.theme || "dark");
        } else {
          // fallback para localStorage
          const saved = localStorage.getItem("site-theme") || "dark";
          setTheme(saved);
        }
      } catch {
        const saved = localStorage.getItem("site-theme") || "dark";
        setTheme(saved);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  async function save(newTheme: string) {
    setMsg(null);
    try {
      // grava local primeiro
      localStorage.setItem("site-theme", newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);

      // tenta salvar em backend (se existir rota)
      await fetch("/api/config/theme", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ theme: newTheme }),
      });

      setTheme(newTheme);
      setMsg("Tema aplicado e salvo.");
    } catch {
      setMsg("Tema aplicado localmente (erro ao salvar no backend).");
    }
  }

  if (loading) return <div className="p-6 text-zinc-400">Carregando...</div>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Tema do Painel</h1>
      <p className="text-zinc-400 mb-6">Escolha o visual preferido para o painel administrativo.</p>

      <div className="space-y-3">
        <button onClick={() => save("light")} className={`w-full p-4 rounded ${theme === "light" ? "bg-red-600" : "bg-zinc-800"}`}>Claro</button>
        <button onClick={() => save("dark")} className={`w-full p-4 rounded ${theme === "dark" ? "bg-red-600" : "bg-zinc-800"}`}>Escuro</button>
        <button onClick={() => save("uchiwa")} className={`w-full p-4 rounded ${theme === "uchiwa" ? "bg-red-600" : "bg-zinc-800"}`}>Uchiha</button>
      </div>

      {msg && <div className="mt-4 p-3 rounded bg-zinc-900 text-sm">{msg}</div>}
    </div>
  );
        }
