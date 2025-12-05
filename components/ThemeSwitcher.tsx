'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun, Flame } from 'lucide-react';

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState('uchiha');

  const themes = [
    { id: 'dark', label: 'Escuro', icon: <Moon size={16} />, color: '#111' },
    { id: 'light', label: 'Claro', icon: <Sun size={16} />, color: '#f3f3f3' },
    { id: 'uchiha', label: 'Uchiha', icon: <Flame size={16} />, color: '#b91c1c' },
  ];

  // carregar tema salvo
  useEffect(() => {
    try {
      const t = localStorage.getItem('site-theme') || 'uchiha';
      setCurrent(t);
      document.documentElement.setAttribute('data-theme', t);
    } catch {}
  }, []);

  const applyTheme = (t: string) => {
    try {
      localStorage.setItem('site-theme', t);
      document.documentElement.setAttribute('data-theme', t);
      setCurrent(t);
    } catch {}
  };

  return (
    <div className="p-3">
      <button
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="w-full py-2 px-4 rounded-lg bg-[var(--accent)] text-white font-semibold shadow"
      >
        {open ? 'Fechar Temas ▲' : 'Trocar Tema ▾'}
      </button>

      <div
        className={`transition-all duration-300 overflow-hidden ${
          open ? 'max-h-40 mt-3' : 'max-h-0'
        }`}
      >
        <div className="flex gap-3">
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => applyTheme(t.id)}
              className={`flex-1 flex items-center gap-2 py-2 px-3 rounded-lg border border-gray-700 transition
              ${current === t.id ? 'bg-red-900' : 'bg-black/40 hover:bg-black/60'}`}
            >
              <div
                className="w-4 h-4 rounded-full"
                style={{ background: t.color }}
              ></div>
              {t.icon}
              <span>{t.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
