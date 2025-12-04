'use client';
import Link from 'next/link';
import ThemeSwitcher from '@/components/ThemeSwitcher';

export default function Sidebar() {
  return (
    <aside className="panel-sidebar">
      <div className="panel-title">
        <div className="icon-box">
          <img src="/sharingan-small.svg" className="w-5 h-5" />
        </div>
        <span>BOT ZONE</span>
      </div>

      <nav>
        <ul>
          <li><Link href="/admin/dashboard">📊 Dashboard</Link></li>
          <li><Link href="/admin/theme">🎨 Temas</Link></li>
          <li><Link href="/admin/logs">📜 Logs</Link></li>
          <li><Link href="/admin/config">⚙️ Configurações</Link></li>
        </ul>
      </nav>

      <div className="panel-theme">
        <ThemeSwitcher />
      </div>

      <style jsx>{`
        .panel-sidebar {
          width: 230px;
          padding: 18px 14px;
          background: #121212;
          color: #fff;
          min-height: 100vh;
          box-shadow: 2px 0 0 rgba(255, 0, 0, 0.12) inset;
        }

        .panel-title {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.1rem;
          font-weight: bold;
          margin-bottom: 25px;
          padding-left: 4px;
        }

        .icon-box {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          background: #3b0000;
          border: 1px solid #7b0000;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        nav ul {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        nav a {
          color: inherit;
          text-decoration: none;
          padding: 10px 8px;
          border-radius: 6px;
          transition: background .25s;
        }

        nav a:hover {
          background: rgba(185, 28, 28, 0.25);
        }

        .panel-theme {
          margin-top: 30px;
        }

        @media(max-width: 900px){
          .panel-sidebar { display: none; }
        }
      `}</style>
    </aside>
  );
}
