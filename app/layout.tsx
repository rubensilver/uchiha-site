"use client";

import "./globals.css";
import "./theme.css";
import { useState, useEffect } from "react";
import Router from "next/router";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [pageLoading, setPageLoading] = useState(false);

  // 1️⃣ Aplicar tema salvo antes de tudo
  useEffect(() => {
    try {
      const saved = localStorage.getItem("site-theme") || "dark";
      document.documentElement.setAttribute("data-theme", saved);
    } catch {}
  }, []);

  // 2️⃣ Preloader inicial
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  // 3️⃣ Loader de navegação
  useEffect(() => {
    Router.events.on("routeChangeStart", () => setPageLoading(true));
    Router.events.on("routeChangeComplete", () => setPageLoading(false));
    Router.events.on("routeChangeError", () => setPageLoading(false));

    return () => {
      Router.events.off("routeChangeStart", () => setPageLoading(true));
      Router.events.off("routeChangeComplete", () => setPageLoading(false));
      Router.events.off("routeChangeError", () => setPageLoading(false));
    };
  }, []);

  return (
    <html lang="pt" suppressHydrationWarning={true}>
      <body className="transition-colors duration-300 bg-[var(--bg)] text-[var(--text)]">

        {/* PRELOADER INICIAL */}
        {loading && (
          <div className="loader-screen">
            <img src="/sharingan-spin.svg" className="loader-icon" />
            <h2 className="loader-text">Carregando o Universo Uchiha…</h2>
          </div>
        )}

        {/* LOADER DE NAVEGAÇÃO */}
        {pageLoading && (
          <div className="page-loader">
            <img src="/sharingan-small.svg" className="page-loader-icon" />
          </div>
        )}

        {/* CONTEÚDO */}
        {!loading && children}

        <style jsx global>{`
          .loader-screen {
            position: fixed;
            inset: 0;
            background: var(--bg);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 9999;
          }

          .loader-icon {
            width: 90px;
            height: 90px;
            animation: spin 1s linear infinite;
          }

          .loader-text {
            margin-top: 16px;
            color: var(--accent);
          }

          .page-loader {
            position: fixed;
            top: 12px;
            right: 12px;
            z-index: 9999;
            background: rgba(0, 0, 0, 0.4);
            backdrop-filter: blur(4px);
            padding: 10px;
            border-radius: 50%;
            border: 1px solid var(--accent);
          }

          .page-loader-icon {
            width: 28px;
            height: 28px;
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>

      </body>
    </html>
  );
}
