import Link from 'next/link';
export default function Home() {
  return (
    <div>
      <h1 style={{fontSize:28}}>Painel Bot — Acesso Rápido</h1>
      <p className="small">Área exclusiva para gestão e controlo do teu Bot.</p>
      <div style={{marginTop:12}} className="grid">
        <div className="card">
          <h3>Entrar</h3>
          <p className="small">Login seguro (Email + PIN)</p>
          <Link href="/painel-bot/login"><button className="btn">Acessar Painel</button></Link>
        </div>
        <div className="card">
          <h3>Webhook</h3>
          <p className="small">Monitor de Webhook e testes</p>
          <Link href="/painel-bot/webhook"><button className="btn">Abrir Webhook</button></Link>
        </div>
        <div className="card">
          <h3>Logs</h3>
          <p className="small">Logs em tempo real e histórico</p>
          <Link href="/painel-bot/logs"><button className="btn">Abrir Logs</button></Link>
        </div>
        <div className="card">
          <h3>Deploy & Backup</h3>
          <p className="small">Upload / Snapshots / One-click</p>
          <Link href="/painel-bot/deploy"><button className="btn">Deploy</button></Link>
        </div>
      </div>
    </div>
  );
}
