"use client";

import Link from "next/link";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function SidebarComplete() {
  return (
    <aside className="p-5 bg-[#0a0a0a] text-white min-h-screen border-r border-red-900/30">

      <div className="flex items-center gap-3 mb-6">
        <img src="/sharingan-small.svg" className="w-8 h-8" />
        <div>
          <p className="font-bold">BOT ZONE</p>
          <p className="text-xs text-red-300">Admin Premium</p>
        </div>
      </div>

      <nav className="flex flex-col gap-3">

        <Link href="/admin/dashboard">📊 Dashboard</Link>
        <Link href="/admin/theme">🎨 Temas</Link>
        <Link href="/admin/logs">📜 Logs</Link>
        <Link href="/admin/send">✉️ Enviar Mensagem</Link>

        <p className="mt-4 font-bold text-red-400">Configurações</p>

        <Link href="/admin/config/sidebar-preview">Sidebar</Link>
        <Link href="/admin/config/theme">Tema</Link>
        <Link href="/admin/config/webhook">Webhook</Link>
        <Link href="/admin/config/account">Conta</Link>
        <Link href="/admin/config/appearance">Aparência</Link>
        <Link href="/admin/config/security">Segurança</Link>

      </nav>

      <div className="mt-6">
        <ThemeSwitcher />
      </div>

    </aside>
  );
}
