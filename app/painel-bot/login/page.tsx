'use client';

import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [pin, setPin] = useState('');
  const [step, setStep] = useState<'cred' | 'pin'>('cred');
  const [msg, setMsg] = useState('');

  async function sendCred() {
    setMsg('');
    const res = await fetch('/api/painel-bot/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password: pass })
    });

    let data;
    try {
      data = await res.json();
    } catch {
      return setMsg('Erro ao interpretar resposta do servidor');
    }

    if (!res.ok) return setMsg(data.error || 'Credenciais inválidas');

    // Próximo passo: PIN
    setStep('pin');
  }

  async function sendPin() {
    setMsg('');
    const res = await fetch('/api/painel-bot/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pin })
    });

    let data;
    try {
      data = await res.json();
    } catch {
      return setMsg('Erro ao interpretar resposta do servidor');
    }

    if (!res.ok) return setMsg(data.error || 'PIN inválido');

    // Login finalizado – agora vai para dashboard
    window.location.href = '/painel-bot/dashboard';
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="card bg-[#0f0f10] p-6 rounded-lg border border-white/10">

        <h2 className="text-xl font-semibold text-white mb-4">Login Painel Bot</h2>

        {step === 'cred' ? (
          <>
            <input
              className="input mb-3"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <input
              className="input mb-3"
              type="password"
              placeholder="Senha"
              value={pass}
              onChange={e => setPass(e.target.value)}
            />

            <button
              className="btn w-full bg-red-600 hover:bg-red-700 rounded-lg py-2"
              onClick={sendCred}
            >
              Continuar
            </button>
          </>
        ) : (
          <>
            <p className="text-gray-400 text-sm mb-2">
              Enviámos um PIN (simulado). Insere abaixo:
            </p>

            <input
              className="input mb-3"
              placeholder="PIN"
              value={pin}
              onChange={e => setPin(e.target.value)}
            />

            <button
              className="btn w-full bg-red-600 hover:bg-red-700 rounded-lg py-2"
              onClick={sendPin}
            >
              Confirmar PIN
            </button>
          </>
        )}

        {msg && <p className="text-red-400 mt-3 text-sm">{msg}</p>}
      </div>
    </div>
  );
}
