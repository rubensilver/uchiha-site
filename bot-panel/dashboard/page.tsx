"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [status, setStatus] = useState("Carregando...");

  async function fetchStatus() {
    const token = sessionStorage.getItem("token");
    if (!token) return router.push("/bot-panel/login");

    const req = await fetch("/api/status", {
      headers: { Authorization: token },
    });

    if (req.status === 401) return router.push("/bot-panel/login");

    const data = await req.json();
    setStatus(data.status);
  }

  async function restartBot() {
    const token = sessionStorage.getItem("token");
    await fetch("/api/restart", {
      method: "POST",
      headers: { Authorization: token },
    });
    alert("Bot reiniciado!");
  }

  useEffect(() => {
    fetchStatus();
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>Painel Uchiha – Dashboard</h1>

      <p><b>Status do Bot:</b> {status}</p>

      <button onClick={restartBot}>Reiniciar Bot</button>
    </div>
  );
}
