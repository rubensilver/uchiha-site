// app/painel-bot/layout.tsx
import React from 'react';
import '../globals.css'; // CORRIGIDO: estava '../../globals.css'
export const metadata = { title: 'Painel Bot Pro' };
export default function PainelLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="uchiha-shell">
      <div className="container">
        <header className="header" style={{marginBottom:18}}>
          <div className="brand">
            <div className="logo">UB</div>
            <div>
              <div style={{fontWeight:800}}>Bots Zone</div>
              <div className="small">Painel do Bot — Pro Evolution</div>
            </div>
          </div>
          <div style={{display:'flex',gap:8,alignItems:'center'}}>
            <div className="small">Amanda</div>
            <div className="sharingan" title="Uchiha Theme"></div>
          </div>
        </header>
        {children}
      </div>
    </div>
  );
}
