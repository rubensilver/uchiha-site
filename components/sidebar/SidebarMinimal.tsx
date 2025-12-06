"use client";

import "@/components/sidebar-styles/minimal.css";
import { useState } from "react";
import Link from "next/link";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function SidebarMinimal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* BOTÃO MOBILE */}
      <button className="mobile-toggle" onClick={() => setOpen(!open)}>
        ☰
      </button>

      <aside className={`panel-sidebar style-minimal ${open ? "open" : ""}`}>
        
        <div className="panel-title">
          <div className="icon-box">
            <img src="/sharingan-small.svg" className="w-5 h-5" />
          </div>
          <span>BOT ZONE</span>
        </div>

        <nav>
          <ul>

            <li>
              <Link href="/admin/dashboard">📊 Dashboard</Link>
            </li>

            <li>
              <Link href="/admin/theme">🎨 Temas</Link>
            </li>

            <li>
              <Link href="/admin/logs">📜 Logs</Link>
            </li>

            <li>
              <Link href="/admin/send">✉️ Enviar Mensagem</Link>
            </li>

            {/* CONFIGURAÇÕES */}
            <li className="mt-4 text-red-400 font-bold">Configurações</li>

            <li><Link href="/admin/config/sidebar-preview">Sidebar</Link></li>
            <li><Link href="/admin/config/theme">Tema</Link></li>
            <li><Link href="/admin/config/webhook">Webhook</Link></li>
            <li><Link href="/admin/config/account">Conta</Link></li>
            <li><Link href="/admin/config/appearance">Aparência</Link></li>
            <li><Link href="/admin/config/security">Segurança</Link></li>

          </ul>
        </nav>

        <div className="panel-theme">
          <ThemeSwitcher />
        </div>

      </aside>

      <style jsx>{`
        .mobile-toggle {
          display: none;
          position: fixed;
          top: 14px;
          left: 14px;
          z-index: 50;
        }

        @media (max-width: 900px) {
          .mobile-toggle {
            display: block;
          }

          .panel-sidebar {
            position: fixed;
            height: 100vh;
            transform: translateX(-100%);
          }

          .panel-sidebar.open {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
