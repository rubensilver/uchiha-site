'use client';

import "@/components/sidebar-styles/minimal.css";
import "@/components/sidebar-styles/modern.css";
import "@/components/sidebar-styles/complete.css";
import { useState } from 'react';
import Link from 'next/link';
import ThemeSwitcher from '@/components/ThemeSwitcher';

export default function Sidebar({ mode = "minimal", forceMode = false }: { mode?: string; forceMode?: boolean }) {
  const [open, setOpen] = useState(false);

  // 🔥 SE ESTIVER EM PREVIEW, ELE VAI FORÇAR O VISUAL CORRETO
  const appliedMode = forceMode ? mode : null;

  return (
    <>
      {/* BOTÃO MOBILE */}
      <button
        className="mobile-toggle"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* SIDEBAR */}
      <aside className={`panel-sidebar ${open ? 'open' : ''} ${appliedMode ? `sidebar-${appliedMode}` : ''}`}>
        <div className="panel-title">
          <div className="icon-box">
            <img src="/sharingan-small.svg" className="w-5 h-5" />
          </div>
          <span>BOT ZONE</span>
        </div>

        <nav>
          <ul>
            <li><Link href="/admin/dashboard" onClick={() => setOpen(false)}>📊 Dashboard</Link></li>
            <li><Link href="/admin/theme" onClick={() => setOpen(false)}>🎨 Temas</Link></li>
            <li><Link href="/admin/logs" onClick={() => setOpen(false)}>📜 Logs</Link></li>
            <li><Link href="/admin/config" onClick={() => setOpen(false)}>⚙️ Configurações</Link></li>
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
            transition: transform .28s ease, width .28s ease;
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

          .mobile-toggle {
            display: none;
            position: fixed;
            top: 14px;
            left: 14px;
            z-index: 50;
            background: #7b0000;
            color: #fff;
            padding: 10px 14px;
            border-radius: 6px;
            font-size: 1.2rem;
            border: 1px solid #b91c1c;
          }

          @media(max-width: 900px){
            .mobile-toggle { display: block; }

            .panel-sidebar {
              position: fixed;
              top: 0;
              left: 0;
              height: 100vh;
              transform: translateX(-100%);
            }

            .panel-sidebar.open {
              transform: translateX(0);
            }
          }
        `}</style>
      </aside>
    </>
  );
}
