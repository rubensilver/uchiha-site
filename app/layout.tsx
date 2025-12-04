"use client";

import "./globals.css";
import "./theme.css";
import { useEffect, useState } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {

  const [loading, setLoading] = useState(true);

  // Simulação de carregamento suave
  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <html lang="pt" data-theme={"dark"}>
      <body className="bg-[var(--bg)] text-[var(--text)] relative">

        {/* ========================= */}
        {/* 🔥 PRELOADER / LOADING UI */}
        {/* ========================= */}
        {loading && (
          <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50 animate-fade">
            <img
              src="/sharingan-spin.svg"
              className="w-20 h-20 animate-spin-slow"
              alt="Carregando"
            />
            <p className="mt-4 text-zinc-300 text-sm">Carregando...</p>

            <style jsx>{`
              .animate-spin-slow {
                animation: spin 2.2s linear infinite;
              }

              @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }

              .animate-fade {
                animation: fade 0.4s ease;
              }

              @keyframes fade {
                from { opacity: 0; }
                to { opacity: 1; }
              }
            `}</style>
          </div>
        )}

        {/* ========================= */}
        {/* 🔥 CONTEÚDO DO SITE       */}
        {/* Só aparece quando loading = false */}
        {/* ========================= */}
        <div className={`${loading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}`}>
          {children}
        </div>

      </body>
    </html>
  );
}
