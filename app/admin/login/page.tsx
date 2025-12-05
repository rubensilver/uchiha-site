'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const router = useRouter();

  async function submit(e:any){
    e.preventDefault();
    setErr('');

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type':'application/json' },
      body: JSON.stringify({ email, password })
    });

    const json = await res.json();

    if (json.success){
      router.push('/admin/dashboard');
    } else {
      setErr(json.error || 'Erro');
    }
  }

  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Entrar no Painel</h1>

      <form onSubmit={submit} className="flex flex-col gap-3">
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="p-3 rounded bg-[#0f0f10]" />
        <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Senha" className="p-3 rounded bg-[#0f0f10]" />
        <button className="bg-red-600 text-white py-2 rounded">Entrar</button>

        {err && <div className="text-red-400">{err}</div>}
      </form>
    </main>
  );
}
