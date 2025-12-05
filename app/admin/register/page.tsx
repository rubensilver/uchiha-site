'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [ok, setOk] = useState(false);
  const router = useRouter();

  async function submit(e:any){
    e.preventDefault();
    setError('');
    setOk(false);

    const res = await fetch('/api/auth/register', {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" }
    });

    const json = await res.json();

    if (json.success){
      setOk(true);
      setTimeout(() => router.push('/admin/login'), 1200);
    } else {
      setError(json.error || 'Erro ao registrar.');
    }
  }

  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Criar Conta</h1>

      <form onSubmit={submit} className="flex flex-col gap-3">

        <input
          value={email}
          onChange={e=>setEmail(e.target.value)}
          placeholder="Email"
          className="p-3 rounded bg-[#0f0f10]"
        />

        <input
          value={password}
          type="password"
          onChange={e=>setPassword(e.target.value)}
          placeholder="Senha"
          className="p-3 rounded bg-[#0f0f10]"
        />

        <button className="bg-red-600 text-white py-2 rounded">
          Registrar
        </button>

        {error && <p className="text-red-400">{error}</p>}
        {ok && <p className="text-green-400">Registrado com sucesso! Redirecionando…</p>}
      </form>
    </main>
  );
}
