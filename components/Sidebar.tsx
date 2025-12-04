"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      {/* BOTÃO HAMBÚRGUER */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 left-4 z-50 bg-red-600 text-white px-3 py-2 rounded"
      >
        ≡
      </button>

      {/* SIDEBAR */}
      <aside
        className={`fixed top-0 left-0 h-full bg-black border-r border-red-700 p-6 pt-16 transition-all duration-300 z-40
        ${open ? "w-64" : "w-0 overflow-hidden"}`}
      >
        <nav className="space-y-6 text-white text-xl">
          <button
            onClick={() => router.back()}
            className="block w-full text-left bg-red-700 px-3 py-2 rounded"
          >
            ← Voltar
          </button>

          <Link href="/admin/dashboard" className="block hover:text-red-500">
            Dashboard
          </Link>

          <Link href="/admin/theme" className="block hover:text-red-500">
            Trocar Tema
          </Link>

          <Link href="/admin/logs" className="block hover:text-red-500">
            Logs
          </Link>

          <Link href="/admin/config" className="block hover:text-red-500">
            Configurações
          </Link>
        </nav>
      </aside>
    </>
  );
}
