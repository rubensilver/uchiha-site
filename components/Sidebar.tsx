'use client';

import Link from 'next/link';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const menu = [
    { href: '/admin/dashboard', label: '📊 Dashboard' },
    { href: '/admin/theme', label: '🎨 Temas' },
    { href: '/admin/logs', label: '📜 Logs' },
    { href: '/admin/config', label: '⚙️ Configurações' },
  ];

  return (
    <>
      {/* BOTÃO MOBILE */}
      <button 
        className="lg:hidden fixed top-4 left-4 z-50 bg-red-700 px-3 py-2 rounded text-white"
        onClick={() => setOpen(!open)}
      >
        {open ? "Fechar ✖" : "Menu ☰"}
      </button>

      {/* SIDEBAR */}
      <aside className={`panel-sidebar ${open ? 'open' : ''}`}>
        <div className="panel-title">
          <div className="icon-box">
            <img src="/sharingan-small.svg" className="w-5 h-5" />
          </div>
          <span>BOT ZONE</span>
        </div>

        <nav>
          <ul>
            {menu.map(item => (
              <li key={item.href}>
                <Link 
                  href={item.href}
                  className={pathname === item.href ? 'active' : ''}
                >
                  {item.label}
                </Link>
              </li>
            ))}
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
            position: relative;
          }

          /* MOBILE */
          @media (max-width: 900px) {
            .panel-sidebar {
              position: fixed;
              top: 0;
              left: -260px;
              height: 100vh;
              transition: left .25s ease;
              z-index: 40;
            }
            .panel-sidebar.open {
              left: 0;
            }
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
            display: block;
          }

          nav a:hover {
            background: rgba(185, 28, 28, 0.25);
          }

          nav a.active {
            background: rgba(185, 28, 28, 0.45);
            font-weight: bold;
          }

          .panel-theme {
            margin-top: 30px;
          }
        `}</style>
      </aside>
    </>
  );
}
