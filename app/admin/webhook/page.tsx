"use client";
import { useState } from "react";
import BackButton from "@/components/BackButton";

export default function WebhookTestPage() {
  const [payload, setPayload] = useState(`{
  "entry": [
    {
      "changes": [
        {
          "value": {
            "messages": [
              {
                "from": "2449XXXXXXX",
                "type": "text",
                "text": { "body": "Olá, teste" }
              }
            ]
          }
        }
      ]
    }
  ]
}`);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function send() {
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("/api/webhook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: payload
      });
      const j = await res.json().catch(()=>null);
      setResult({ status: res.status, body: j });
    } catch (e) {
      setResult({ error: String(e) });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <BackButton />
      <h1 className="text-2xl font-bold mb-4 text-red-500">Teste de Webhook</h1>

      <textarea value={payload} onChange={(e)=>setPayload(e.target.value)}
        className="w-full h-64 p-3 bg-zinc-900 border border-zinc-700 rounded mb-3" />

      <div className="flex gap-3">
        <button onClick={send} className="px-4 py-2 bg-red-600 rounded" disabled={loading}>
          {loading ? "Enviando..." : "Enviar para /api/webhook"}
        </button>
        <a href="/admin/logs" className="px-4 py-2 bg-zinc-800 rounded">Ver logs</a>
      </div>

      <pre className="mt-4 p-3 bg-black/40 rounded">{JSON.stringify(result, null, 2)}</pre>
    </main>
  );
}
