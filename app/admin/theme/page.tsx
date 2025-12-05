"use client";

import { useEffect, useState } from "react";

export default function ThemePage() {
  const [theme, setTheme] = useState("dark");
  const themes = [
    { id: "light", name: "Claro", color: "#f3f3f3" },
    { id: "dark", name: "Escuro", color: "#0e0e0e" },
    { id: "uchiha", name: "Uchiha", color: "#b91c1c" },
  ];

  useEffect(() => {
    const t = localStorage.getItem("site-theme") || "dark";
    setTheme(t);
  }, []);

  function apply(t: string) {
    localStorage.setItem("site-theme", t);
    setTheme(t);
    window.location.reload();
  }

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold text-red-500 mb-6">
        Tema do Painel
      </h1>

      <p className="text-zinc-400 mb-4">
        Escolha o visual preferido para o painel administrativo.
      </p>

      <div className="grid sm:grid-cols-3 gap-4">
        {themes.map((t) => (
          <button
            key={t.id}
            onClick={() => apply(t.id)}
            className={`p-5 rounded-lg border transition
              ${theme === t.id ? "border-red-600 bg-red-600/20" : "border-zinc-700 bg-zinc-900"}
            `}
          >
            <div
              className="w-6 h-6 rounded-full mb-2 mx-auto"
              style={{ background: t.color }}
            />
            <div className="text-center font-semibold">{t.name}</div>
          </button>
        ))}
      </div>

    </div>
  );
}
