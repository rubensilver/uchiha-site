"use client";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-[#300000] via-[#5a0000] to-[#300000] text-white shadow-md sticky top-0 z-30 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 px-4 py-3">

        {/* LOGO + NOME */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center bg-black/30 rounded-md border border-red-800 shadow-inner">
            <img src="/sharingan-small.svg" alt="Logo" className="w-6 h-6 opacity-90" />
          </div>

          <div>
            <div className="font-bold text-lg tracking-wide">BOT ZONE • Painel</div>
            <div className="text-xs text-zinc-300">Administração</div>
          </div>
        </div>

        {/* AÇÕES */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:block text-sm text-zinc-200">
            Status: <span className="text-green-400 font-semibold">online</span>
          </div>

          <ThemeSwitcher />

          <Link
            href="/admin/settings"
            className="px-3 py-2 rounded bg-black/20 hover:bg-black/30 text-sm border border-white/10"
          >
            Config
          </Link>
        </div>

      </div>
    </header>
  );
}
