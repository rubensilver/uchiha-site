'use client';
import { useState } from 'react';

export default function Login() {
  const [email,setEmail]=useState('');
  const [pass,setPass]=useState('');
  const [pin,setPin]=useState('');
  const [step,setStep]=useState<'cred'|'pin'>('cred');
  const [msg,setMsg]=useState('');

  async function sendCred(){
    setMsg('');
    const res = await fetch('/api/painel-bot/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email, password:pass})});
    const text = await res.text();
    try {
      const data = JSON.parse(text);
      if(!res.ok) return setMsg(data.error || 'Credenciais inválidas');
      setStep('pin');
    } catch(e){ setMsg('Resposta inválida do servidor'); }
  }

  async function sendPin(){
    setMsg('');
    const res = await fetch('/api/painel-bot/verify',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({pin})});
    const text = await res.text();
    try {
      const data = JSON.parse(text);
      if(!res.ok) return setMsg(data.error || 'PIN inválido');
      window.location.href = '/painel-bot/dashboard';
    } catch(e){ setMsg('Resposta inválida do servidor'); }
  }

  return (
    <div style={{maxWidth:420,margin:'0 auto'}}>
      <div className="card">
        <h2>Login Painel Bot</h2>
        {step==='cred' ? <>
          <input className="input" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
          <input className="input" placeholder="Senha" type="password" value={pass} onChange={e=>setPass(e.target.value)} />
          <div style={{marginTop:10}}><button className="btn" onClick={sendCred}>Continuar</button></div>
        </> : <>
          <p className="small">Enviámos um PIN (simulação). Insere o PIN.</p>
          <input className="input" placeholder="PIN" value={pin} onChange={e=>setPin(e.target.value)} />
          <div style={{marginTop:10}}><button className="btn" onClick={sendPin}>Confirmar PIN</button></div>
        </>}
        {msg && <p style={{color:'#ff9999',marginTop:10}}>{msg}</p>}
      </div>
    </div>
  );
}
