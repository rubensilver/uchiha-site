'use client';
import Link from 'next/link';
export default function Navbar(){ 
  return (
    <nav style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:14}}>
      <div style={{display:'flex',gap:12,alignItems:'center'}}>
        <div className="logo">UB</div>
        <div>
          <div style={{fontWeight:700}}>Bots Zone</div>
          <div className="small">Painel do Bot — Pro</div>
        </div>
      </div>
      <div style={{display:'flex',gap:10,alignItems:'center'}}>
        <Link href="/"><button className="btn">Site</button></Link>
        <Link href="/painel-bot/login"><button className="btn">Login</button></Link>
      </div>
    </nav>
  );
}
