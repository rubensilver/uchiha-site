"use client";

import { useState } from "react";

export default function LoginPage() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");

    const req = await fetch("/api/panel/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user, pass }),
    });

    const res = await req.json();

    if (req.status !== 200) {
      setError(res.error || "Credenciais inválidas");
      return;
    }

    window.location.href = "/bot-panel/dashboard";
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20
      }}
    >
      <div className="card" style={{ width: 350, textAlign: "center" }}>
        
        {/* Logo sharingan */}
        <img
          src="https://i.imgur.com/iea4t8v.png"
          width="110"
          className="sharingan"
          style={{ marginBottom: 15 }}
        />

        <h2 style={{ marginBottom: 15 }}>Painel Uchiha</h2>

        <input
          placeholder="Usuário"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          style={{ marginTop: 10 }}
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        {error && (
          <p style={{ color: "red", marginTop: 10, fontSize: 14 }}>{error}</p>
        )}

        <button className="btn-uchiha" onClick={handleLogin}>
          Entrar
        </button>
      </div>
    </div>
  );
}
