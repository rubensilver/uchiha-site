"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Sidebar(){
  const [open, setOpen] = useState(true);
  const path = usePathname();

  useEffect(()=>{
    // remember preference
    const p = localStorage.getItem("uchiha_sidebar");
    if(p === "closed") setOpen(false);
  },[]);

  function toggle(){
    const newv = !open;
    setOpen(newv);
    localStorage.setItem("uchiha_sidebar", newv ? "open" : "closed");
  }

  return (
    <>
      <button
        aria-label="Abrir menu"
        onClick={toggle}
        className="fixed left-4 top-4 z-50 bg-red-600 text-white p-2 rounded-md shadow md:hidden"
      >
        {open ? "✕" : "≡"}
      </button>

      <aside
        className={`fixed top-0 left-0 h-full bg-zinc-900 border-r border-red-800 p-4 pt-20 transition-all duration-300 z-40
          ${open ? "w-64" : "w-16"}
        `}
      >
        <div className="flex items-center gap-3 mb-6 px-1">
          <div className={`text-red-400 font-bold ${open ? "text-lg" : "text-sm"}`}>Uchiha</div>
          {open && <div className="text-xs text-zinc-400">Painel</div>}
        </div>

        <nav className="flex flex-col gap-1">
          <Link href="/admin" className={`px-3 py-2 rounded flex items-center gap-3 ${path === "/admin" ? "bg-red-700/20" : "hover:bg-zinc-800"}`}>
            <span className="w-6 text-center">🏠</span>
            {open && <span>Dashboard</span>}
          </Link>

          <Link href="/admin/logs" className={`px-3 py-2 rounded flex items-center gap-3 ${path?.startsWith("/admin/logs") ? "bg-red-700/20" : "hover:bg-zinc-800"}`}>
            <span className="w-6 text-center">📝</span>
            {open && <span>Logs</span>}
          </Link>

          <Link href="/admin/theme" className={`px-3 py-2 rounded flex items-center gap-3 ${path?.startsWith("/admin/theme") ? "bg-red-700/20" : "hover:bg-zinc-800"}`}>
            <span className="w-6 text-center">🎨</span>
            {open && <span>Tema</span>}
          </Link>

          <Link href="/admin/settings" className={`px-3 py-2 rounded flex items-center gap-3 ${path?.startsWith("/admin/settings") ? "bg-red-700/20" : "hover:bg-zinc-800"}`}>
            <span className="w-6 text-center">⚙️</span>
            {open && <span>Configurações</span>}
          </Link>

          <Link href="/admin/users" className={`px-3 py-2 rounded flex items-center gap-3 ${path?.startsWith("/admin/users") ? "bg-red-700/20" : "hover:bg-zinc-800"}`}>
            <span className="w-6 text-center">👥</span>
            {open && <span>Utilizadores</span>}
          </Link>

          <a href="/api/admin/logout" className="mt-4 px-3 py-2 rounded bg-black/20 text-red-400">Sair</a>
        </nav>
      </aside>
    </>
  );
}
