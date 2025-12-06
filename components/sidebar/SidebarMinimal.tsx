'use client';

import "@/components/sidebar-styles/minimal.css";
import "@/components/sidebar-styles/modern.css";
import "@/components/sidebar-styles/complete.css";

import { useState } from 'react';
import Link from 'next/link';
import ThemeSwitcher from '@/components/ThemeSwitcher';

export default function Sidebar({
  mode = "minimal",
  forceMode = false
}: {
  mode?: string;
  forceMode?: boolean;
}) {
  const [open, setOpen] = useState(false);

  // Se for preview → força o estilo
  const appliedMode = forceMode ? mode : mode;

  return (
    <>
      {/* BOTÃO MOBILE */}
      <button
        className="mobile-toggle"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* SIDEBAR — APENAS UM ASIDE */}
      <aside className={`panel-sidebar style-${appliedMode} ${open ? "open" : ""}`}>
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
            transition: transform .28s ease, width .28s ease;
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
