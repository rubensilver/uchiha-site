"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  async function login() {
    const req = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user, pass }),
    });

    const data = await req.json();

    if (!req.ok) return setError(data.error);

    sessionStorage.setItem("token", data.token);
    router.push("/bot-panel/dashboard");
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Painel Uchiha – Login</h1>

      <input
        placeholder="Usuário"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        style={{ display: "block" }}
      />

      <input
        type="password"
        placeholder="Senha"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        style={{ display: "block" }}
      />

      <button onClick={login}>Entrar</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
