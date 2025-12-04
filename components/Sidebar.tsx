'use client';
import Link from 'next/link';
import ThemeSwitcher from '@/components/ThemeSwitcher';

export default function Sidebar() {
  return (
    <aside className="panel-sidebar">
      <nav>
        <ul>
          <li><Link href="/admin/dashboard">Dashboard</Link></li>
          <li><Link href="/admin/theme">Trocar Tema</Link></li>
          <li><Link href="/admin/logs">Logs</Link></li>
          <li><Link href="/admin/config">Configurações</Link></li>
        </ul>
      </nav>

      <div className="panel-theme">
        <ThemeSwitcher />
      </div>

      <style jsx>{`
        .panel-sidebar { width:220px; padding:16px; background: #121212; color:#fff; min-height:100vh; box-shadow: 2px 0 0 rgba(255,0,0,0.08) inset; }
        .panel-sidebar nav ul { list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:12px; }
        .panel-sidebar a { color:inherit; text-decoration:none; display:block; padding:8px 6px; border-radius:6px; }
        .panel-theme { margin-top:20px; }
        @media(max-width:900px){
          .panel-sidebar { display:none; }
        }
      `}</style>
    </aside>
  );
}
