"use client";

import Link from "next/link";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function SidebarModern() {
  return (
    <aside className="p-5 bg-[#141414] text-white border-r border-red-900/30 min-h-screen">

      <h2 className="text-xl font-bold mb-6">BOT ZONE</h2>

      <nav className="flex flex-col gap-4">

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
