"use client";

import "./globals.css";
import "./theme.css";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);     // Carregamento inicial
  const [fading, setFading] = useState(false);       // Fade-out ao trocar página

  // Tela inicial de carregamento
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Fade-out quando o usuário sai da página
  useEffect(() => {
    const handleRouteChange = () => {
      setFading(true);
      setTimeout(() => setFading(false), 400);
    };

    window.addEventListener("beforeunload", handleRouteChange);
    return () => window.removeEventListener("beforeunload", handleRouteChange);
  }, []);

  return (
    <html lang="pt">
      <body
        className={`bg-[var(--bg)] text-[var(--text)] transition-opacity duration-500 ${
          fading ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* TELA DE CARREGAMENTO (Splash Screen) */}
        {loading && (
          <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white">
            <div className="w-20 h-20 animate-spin-slow mb-4">
              <img
                src="/sharingan-small.svg"
                className="w-full h-full opacity-90 drop-shadow-[0_0_6px_red]"
              />
            </div>
            <p className="text-lg tracking-wide text-zinc-300 animate-pulse">
              Carregando...
            </p>
          </div>
        )}

        {/* Conteúdo real do site */}
        <div className={`${loading ? "opacity-0" : "opacity-100"} transition-opacity duration-700`}>
          {children}
        </div>

        {/* ANIMAÇÕES */}
        <style jsx global>{`
          .animate-spin-slow {
            animation: spin 2s linear infinite;
          }

          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </body>
    </html>
  );
}
