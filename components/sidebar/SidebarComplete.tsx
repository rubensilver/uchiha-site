'use client';
import Link from 'next/link';
import ThemeSwitcher from '@/components/ThemeSwitcher';

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
        <Link href="/admin/config">⚙️ Configurações</Link>
        <Link href="/admin/send">✉️ Enviar Mensagem</Link>
      </nav>
<Link
  href="/admin/config/sidebar"
  className="flex items-center gap-3 px-4 py-2 hover:bg-zinc-800 rounded-lg"
>
  <span>Configurar Sidebar</span>
</Link>

      {
  section: "Configurações",
  links: [
    { name: "Sidebar", href: "/admin/config/sidebar-preview" },
    { name: "Tema", href: "/admin/config/theme" },
    { name: "Webhook", href: "/admin/config/webhook" },
    { name: "Conta", href: "/admin/config/account" },
    { name: "Aparência", href: "/admin/config/appearance" },
    { name: "Segurança", href: "/admin/config/security" },
  ]
      }
      
      <div className="mt-6">
        <ThemeSwitcher />
      </div>
    </aside>
  );
}
