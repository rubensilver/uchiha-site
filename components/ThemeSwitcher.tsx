"use client";
import { useState } from "react";

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const themes = ["light", "dark", "uchiha"];

  function applyTheme(t: string) {
    try {
      // salvar no navegador
      localStorage.setItem("site-theme", t);

      // salvar cookie que o layout usa
      document.cookie = `theme=${t}; path=/; max-age=31536000`;

      // recarregar página
      window.location.reload();
    } catch (e) {}
  }

  return (
    <div className="theme-switcher">
      <button
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="ts-toggle"
      >
        {open ? "Fechar temas ▲" : "Trocar Tema ▾"}
      </button>

      <div className={`ts-panel ${open ? "open" : ""}`}>
        {themes.map((t) => (
          <button key={t} onClick={() => applyTheme(t)} className={`ts-btn ts-btn-${t}`}>
            {t[0].toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      <style jsx>{`
        .theme-switcher { padding: 8px; }
        .ts-toggle {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.2);
          color: inherit;
          padding: 8px 12px;
          border-radius: 8px;
          cursor: pointer;
        }
        .ts-panel {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.28s ease;
          margin-top: 8px;
          display: flex;
          gap: 8px;
        }
        .ts-panel.open { max-height: 200px; }
        .ts-btn {
          padding: 10px 14px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
        }
        .ts-btn-uchiha { background: #c62828; color: #fff; }
        .ts-btn-dark { background: #222; color: #fff; }
        .ts-btn-light { background: #e0e0e0; color: #000; }
      `}</style>
    </div>
  );
}
