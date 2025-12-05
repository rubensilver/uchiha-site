// app/admin/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/admin/dashboard");
  }, [router]);

  return (
    <main className="p-6 text-zinc-400">
      Redirecionando para o painel...
    </main>
  );
}

/*
  🔒 Conteúdo original preservado:

  import Header from "@/components/Header";
  import Footer from "@/components/Footer";
  import BackButton from "@/components/BackButton";

  export default function AdminHome(){
    return (
      <div className="min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="py-6">
            <h1 className="text-4xl font-bold text-red-500">Painel • Uchiha</h1>
            <p className="text-zinc-300 mt-2">Visão geral e ações rápidas.</p>
          </div>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded bg-zinc-900 border border-zinc-800">
              <h3 className="font-semibold">Status</h3>
              <p className="text-sm text-zinc-400">Webhook: <span className="text-green-300">online</span></p>
            </div>

            <div className="p-4 rounded bg-zinc-900 border border-zinc-800">
              <h3 className="font-semibold">Mensagens</h3>
              <p className="text-sm text-zinc-400">Últimas 24h: 0</p>
            </div>

            <div className="p-4 rounded bg-zinc-900 border border-zinc-800">
              <h3 className="font-semibold">Logs</h3>
              <p className="text-sm text-zinc-400">Últimos eventos: ver /admin/logs</p>
            </div>
          </section>

          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-3">Ações rápidas</h2>
            <div className="flex gap-3">
              <a className="px-4 py-2 rounded bg-red-600" href="/admin/theme">Trocar Tema</a>
              <a className="px-4 py-2 rounded bg-zinc-800" href="/admin/logs">Ver Logs</a>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    );
  }
*/
