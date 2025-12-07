// app/painel-bot/dashboard/page.tsx
"use client";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [status, setStatus] = useState<any>(null);

  useEffect(()=> {
    (async ()=> {
      try {
        const res = await fetch("/api/painel-bot/status");
        if (res.status === 401) {
          window.location.href = "/painel-bot/login";
          return;
        }
        const data = await res.json();
        setStatus(data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  async function restart() {
    await fetch("/api/painel-bot/restart", { method: "POST" });
    alert("Pedido de reinício enviado (placeholder).");
  }

  return (
    <div style={{ paddingTop:20 }}>
      <h1>Painel Bot — Dashboard</h1>
      <div style={{ marginTop:12 }}>
        <div className="card">
          <p><strong>Online:</strong> {String(status?.online ?? "—")}</p>
          <p><strong>Uptime:</strong> {status?.uptime ? Math.round(status.uptime) + "s" : "—"}</p>
          <button className="btn-uchiha" onClick={restart}>Reiniciar Bot</button>
        </div>
      </div>
    </div>
  );
}
