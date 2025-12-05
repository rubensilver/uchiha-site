"use client";

import { useEffect, useState } from "react";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { getSessionUser, clearSession } from "@/lib/session";
import { useRouter } from "next/navigation";

export default function ConfigPage() {
  const router = useRouter();

  const [mode, setMode] = useState("minimal");
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  // Carregar usuário + sidebar mode
  useEffect(() => {
    const u = getSessionUser();
    setUser(u);

    async function load() {
      const r = await fetch("/api/config/sidebar");
      const j = await r.json();
      setMode(j.mode);
      setLoading(false);
    }

    load();
  }, []);

  // Atualizar sidebar
  async function saveSidebar(newMode: string) {
    setMode(newMode);
    await fetch("/api/config/sidebar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mode: newMode }),
    });
  }

  function logout() {
    clearSession();
    router.replace("/admin/login");
  }

  if (loading) return <div className="text-zinc-400 p-6">Carregando…</div>;

  return (
    <div className="p-6 space-y-10">

      {/* TÍTULO */}
      <div>
        <h1 className="text-4xl font-bold text-red-500 tracking-tight">
          Configurações do Sistema
        </h1>
        <p className="text-zinc-400 mt-1">
          Ajustes gerais do painel administrativo.
        </p>
      </div>

      {/* USUÁRIO LOGADO */}
      <section className="bg-zinc-900 p-5 rounded-xl border border-zinc-800">
        <h2 className="text-2xl font-semibold mb-3">Perfil</h2>

        <p className="text-zinc-300">
          <strong>Email:</strong> {user?.email}
        </p>

        <p className="text-zinc-300 mt-1">
          <strong>Cargo:</strong> {user?.role ?? "admin"}
        </p>

        <button
          onClick={logout}
          className="mt-4 px-4 py-2 rounded bg-red-600 hover:bg-red-700 transition"
        >
          Logout
        </button>
      </section>

      {/* TEMA */}
      <section className="bg-zinc-900 p-5 rounded-xl border border-zinc-800">
        <h2 className="text-2xl font-semibold mb-3">Tema do Sistema</h2>
        <ThemeSwitcher />
      </section>

      {/* SIDEBAR MODE */}
      <section className="bg-zinc-900 p-5 rounded-xl border border-zinc-800">
        <h2 className="text-2xl font-semibold mb-4">Modelo do Sidebar</h2>

        <div className="flex flex-col gap-2">
          <button
            className={`p-3 rounded ${mode === "minimal" ? "bg-red-600" : "bg-zinc-800"}`}
            onClick={() => saveSidebar("minimal")}
          >
            Sidebar Minimalista
          </button>

          <button
            className={`p-3 rounded ${mode === "modern" ? "bg-red-600" : "bg-zinc-800"}`}
            onClick={() => saveSidebar("modern")}
          >
            Sidebar Moderno
          </button>

          <button
            className={`p-3 rounded ${mode === "complete" ? "bg-red-600" : "bg-zinc-800"}`}
            onClick={() => saveSidebar("complete")}
          >
            Sidebar Completo (Beta)
          </button>
        </div>
      </section>

      {/* FUTURAS CONFIGURAÇÕES */}
      <section className="bg-zinc-900 p-5 rounded-xl border border-zinc-800 opacity-50">
        <h2 className="text-xl font-semibold mb-2">Integração WhatsApp</h2>
        <p className="text-zinc-400">Disponível quando o app sair da restrição.</p>
      </section>

      <section className="bg-zinc-900 p-5 rounded-xl border border-zinc-800 opacity-50">
        <h2 className="text-xl font-semibold mb-2">Webhook</h2>
        <p className="text-zinc-400">Em breve habilitaremos configurações avançadas.</p>
      </section>

    </div>
  );
}
