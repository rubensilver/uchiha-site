'use client';

import "./globals.css";
import "./theme.css";
import { useState, useEffect } from "react";
import Router from "next/router";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);       // Preloader inicial
  const [pageLoading, setPageLoading] = useState(false); // Loader de navegação

  // 🟥 1 — PRELOADER AO ACESSAR O SITE
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1900);
    return () => clearTimeout(timer);
  }, []);

  // 🟥 2 — LOADER AO MUDAR DE PÁGINA
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
    <html lang="pt">
      <body className="bg-[var(--bg)] text-[var(--text)]">

        {/* 🔥 PRELOADER INICIAL */}
        {loading && (
          <div className="loader-screen">
            <img src="/sharingan-spin.svg" className="loader-icon" />
            <h2 className="loader-text">Carregando o Universo Uchiha…</h2>
          </div>
        )}

        {/* 🔥 LOADER DE NAVEGAÇÃO */}
        {pageLoading && (
          <div className="page-loader">
            <img src="/sharingan-small.svg" className="page-loader-icon" />
          </div>
        )}

        {/* 🔥 CONTEÚDO NORMAL */}
        {!loading && children}

        <style jsx global>{`
          /* Fundo do Preloader */
          .loader-screen {
            position: fixed;
            inset: 0;
            background: black;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            animation: fadeIn 0.3s ease;
          }

          /* Ícone Girando */
          .loader-icon {
            width: 90px;
            height: 90px;
            animation: spin 1.2s linear infinite;
          }

          .loader-text {
            margin-top: 18px;
            color: red;
            font-size: 1.1rem;
            opacity: 0.8;
          }

          /* Loader em mudança de página */
          .page-loader {
            position: fixed;
            top: 12px;
            right: 12px;
            z-index: 9999;
            background: rgba(0,0,0,0.45);
            backdrop-filter: blur(4px);
            padding: 10px;
            border-radius: 50%;
            border: 1px solid red;
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

          @keyframes fadeIn {
            from { opacity:0; }
            to { opacity:1; }
          }
        `}</style>

      </body>
    </html>
  );
}
