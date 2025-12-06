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

      {/* SIDEBAR */}
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
              <Link
  href="/admin/config/sidebar"
  className="block px-4 py-2 hover:bg-zinc-800 rounded"
>
  Configurações → Sidebar
</Link>
              <Link href="/admin/dashboard" onClick={() => setOpen(false)}>
                📊 Dashboard
              </Link>
            </li>
            <li>
              <Link href="/admin/theme" onClick={() => setOpen(false)}>
                🎨 Temas
              </Link>
            </li>
            <li>
              <Link href="/admin/logs" onClick={() => setOpen(false)}>
                📜 Logs
              </Link>
            </li>
            <li>
              <Link href="/admin/config" onClick={() => setOpen(false)}>
                ⚙️ Configurações
              </Link>
            </li>
          </ul>
        </nav>
{
  title: "Configurações",
  children: [
    { title: "Sidebar", href: "/admin/config/sidebar-preview" },
    { title: "Tema", href: "/admin/config/theme" },
    { title: "Webhook", href: "/admin/config/webhook" },
    { title: "Conta", href: "/admin/config/account" },
    { title: "Aparência", href: "/admin/config/appearance" },
    { title: "Segurança", href: "/admin/config/security" },
  ]
        }
        
        <div className="panel-theme">
          <ThemeSwitcher />
        </div>

        <style jsx>{`
          .panel-sidebar {
            transition: transform 0.28s ease, width 0.28s ease;
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

          @media (max-width: 900px) {
            .mobile-toggle {
              display: block;
            }

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
