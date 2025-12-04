"use client";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-[#3b0000] via-[#7b0000] to-[#3b0000] text-white shadow-sm sticky top-0 z-30">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center bg-black/20 rounded-md border border-red-800">
            {/* Sharingan svg from lib/ui */}
            <img src="/sharingan-small.svg" alt="Uchiha" className="w-6 h-6"/>
          </div>
          <div>
            <div className="font-bold text-lg">Uchiha • Painel</div>
            <div className="text-xs text-zinc-200">Admin • Painel</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block text-sm text-zinc-200">Status: <span className="text-green-300">online</span></div>
          <ThemeSwitcher />
          <Link href="/admin/settings" className="px-3 py-2 rounded bg-black/20 hover:bg-black/30 text-sm">Config</Link>
        </div>
      </div>
    </header>
  );
}
