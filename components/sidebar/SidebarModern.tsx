'use client';
import Link from 'next/link';
import ThemeSwitcher from '@/components/ThemeSwitcher';

export default function SidebarModern() {
  return (
    <aside className="p-5 bg-[#141414] text-white border-r border-red-900/30 min-h-screen">
      <h2 className="text-xl font-bold mb-6">BOT ZONE</h2>

      <nav className="flex flex-col gap-4">
        <Link href="/admin/dashboard" className="hover:text-red-400">Dashboard</Link>
        <Link href="/admin/theme" className="hover:text-red-400">Temas</Link>
        <Link href="/admin/logs" className="hover:text-red-400">Logs</Link>
        <Link href="/admin/config" className="hover:text-red-400">Configurações</Link>
      </nav>
<Link
  href="/admin/config/sidebar"
  className="flex items-center gap-2 px-4 py-3 hover:bg-zinc-800 rounded-lg"
>
  <span>Configurar Sidebar</span>
</Link>

      {
  label: "Configurações",
  items: [
    { label: "Sidebar", href: "/admin/config/sidebar-preview" },
    { label: "Tema", href: "/admin/config/theme" },
    { label: "Webhook", href: "/admin/config/webhook" },
    { label: "Conta", href: "/admin/config/account" },
    { label: "Aparência", href: "/admin/config/appearance" },
    { label: "Segurança", href: "/admin/config/security" },
  ]
    }
      
      <div className="mt-6">
        <ThemeSwitcher />
      </div>
    </aside>
  );
}
