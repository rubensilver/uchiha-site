"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-red-700 text-white flex items-center px-4 py-3 shadow-lg">
      {/* MENU ICON */}
      <button
        onClick={() => setOpen(!open)}
        className="text-3xl mr-4 active:scale-90 transition"
      >
        ≡
      </button>

      <h1 className="text-xl font-bold">Painel • BOT ZONE</h1>

      {/* SIDEBAR */}
      <nav
        className={`
          fixed top-0 left-0 h-full w-64 bg-black border-r border-red-700
          text-white flex flex-col pt-20 gap-6 px-6 transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <Link href="/admin/dashboard" className="hover:text-red-400 text-lg">Dashboard</Link>
        <Link href="/admin/theme" className="hover:text-red-400 text-lg">Trocar Tema</Link>
        <Link href="/admin/logs" className="hover:text-red-400 text-lg">Logs</Link>
        <Link href="/admin/settings" className="hover:text-red-400 text-lg">Configurações</Link>

        <button
          onClick={() => setOpen(false)}
          className="mt-10 bg-red-700 px-4 py-2 rounded hover:bg-red-600"
        >
          Fechar Menu
        </button>
      </nav>
    </header>
  );
}
