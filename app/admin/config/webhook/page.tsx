// app/admin/config/webhook/page.tsx
"use client";

import { useEffect, useState } from "react";

export default function WebhookConfigPage() {
  const [url, setUrl] = useState("");
  const [msg, setMsg] = useState<string | null>(null);

  useEffect(() => {
    // tenta carregar configuração (se tiver rota)
    async function load() {
      try {
        const r = await fetch("/api/config/webhook");
        if (r.ok) {
          const j = await r.json();
          setUrl(j?.url || "");
        }
      } catch {}
    }
    load();
  }, []);

  async function save() {
    setMsg(null);
    try {
      await fetch("/api/config/webhook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      setMsg("Webhook salvo.");
    } catch {
      setMsg("Erro ao salvar webhook.");
    }
  }

  async function testWebhook() {
    setMsg("Testando...");
    try {
      const r = await fetch("/api/config/webhook/test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const j = await r.json();
      setMsg(j?.message || "Teste enviado.");
    } catch {
      setMsg("Erro ao testar webhook.");
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Webhook</h1>
      <input value={url} onChange={e => setUrl(e.target.value)} className="w-full p-3 bg-zinc-900 rounded mb-3" placeholder="https://..." />
      <div className="flex gap-3">
        <button onClick={save} className="p-3 bg-red-600 rounded">Salvar</button>
        <button onClick={testWebhook} className="p-3 bg-zinc-800 rounded">Testar webhook</button>
      </div>
      {msg && <div className="mt-4 p-3 rounded bg-zinc-900 text-sm">{msg}</div>}
    </div>
  );
          }
