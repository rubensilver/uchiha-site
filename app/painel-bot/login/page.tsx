// app/painel-bot/login/page.tsx
"use client";
import { useState } from "react";

export default function LoginPage() {
  const [step, setStep] = useState<"login"|"pin">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");

  async function doLogin() {
    setError("");
    try {
      const res = await fetch("/api/painel-bot/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || "Erro no login"); return; }
      // login ok -> server asks for PIN step
      setStep("pin");
    } catch (e:any) {
      setError(e.message || "Network error");
    }
  }

  async function doVerifyPin() {
    setError("");
    try {
      const res = await fetch("/api/painel-bot/auth/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pin })
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || "PIN inválido"); return; }
      // success -> cookie set by server, redirect to dashboard
      window.location.href = "/painel-bot/dashboard";
    } catch (e:any) {
      setError(e.message || "Network error");
    }
  }

  return (
    <div style={{ display:"flex", minHeight:"80vh", alignItems:"center", justifyContent:"center" }}>
      <div style={{ width:360 }}>
        <div className="card" style={{ textAlign:"center" }}>
          <img src="/logo.png" alt="Uchiha" style={{ width:100, marginBottom:12 }} />
          <h2>Painel Bot — Login</h2>

          {step === "login" && <>
            <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} style={{ width:"100%", marginTop:12 }}/>
            <input placeholder="Senha" type="password" value={password} onChange={e=>setPassword(e.target.value)} style={{ width:"100%", marginTop:12 }}/>
            <button className="btn-uchiha" onClick={doLogin} style={{ width:"100%", marginTop:14 }}>Entrar</button>
          </>}

          {step === "pin" && <>
            <p>Insere o PIN enviado (ou que configuraste)</p>
            <input placeholder="PIN" value={pin} onChange={e=>setPin(e.target.value)} style={{ width:"100%", marginTop:12 }}/>
            <button className="btn-uchiha" onClick={doVerifyPin} style={{ width:"100%", marginTop:14 }}>Confirmar PIN</button>
          </>}

          {error && <p style={{ color:"#ff9999", marginTop:10 }}>{error}</p>}
        </div>
      </div>
    </div>
  );
}
