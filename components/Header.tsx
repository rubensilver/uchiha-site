'use client';
import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between p-4 bg-[var(--card)] border-b">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-md bg-red-700 flex items-center justify-center text-white font-bold">U</div>
        <div className="text-lg font-semibold">BOT ZONE</div>
      </div>
      <nav className="flex items-center gap-3">
        <Link href="/" className="text-sm">Home</Link>
        <Link href="/about" className="text-sm">Sobre</Link>
        <Link href="/admin/login" className="text-sm">Painel</Link>
        <ThemeSwitcher />
      </nav>
    </header>
  );
}
