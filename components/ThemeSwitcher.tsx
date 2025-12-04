'use client';
import { useState } from 'react';
import { Moon, Sun, Flame } from 'lucide-react';

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false);

  const themes = [
    { id: 'escuro', label: 'Escuro', icon: <Moon size={16} />, color: '#111' },
    { id: 'claro', label: 'Claro', icon: <Sun size={16} />, color: '#f3f3f3' },
    { id: 'uchiha', label: 'Uchiha', icon: <Flame size={16} />, color: '#b91c1c' },
  ];

  const applyTheme = (t: string) => {
    try {
      localStorage.setItem('site-theme', t);
      window.location.reload();
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
              className="flex-1 flex items-center gap-2 py-2 px-3 rounded-lg bg-black/40 border border-gray-700 hover:bg-black/60 transition"
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
