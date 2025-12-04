"use client";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHide(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loading-wrapper ${hide ? "hide" : ""}`}>
      <div className="loader-box">
        <div className="spinner"></div>

        <pre className="ascii">
{String.raw`
 INICIALIZANDO SISTEMA...
 ALOCANDO RECURSOS...
 CARREGANDO INTERFACE...
`}
        </pre>
      </div>

      <style jsx>{`
        .loading-wrapper {
          position: fixed;
          inset: 0;
          background: #000;
          color: #d1d1d1;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          transition: opacity 0.4s ease, visibility 0.4s ease;
        }

        .loading-wrapper.hide {
          opacity: 0;
          visibility: hidden;
        }

        .loader-box {
          text-align: center;
        }

        .spinner {
          margin: 0 auto 16px;
          width: 34px;
          height: 34px;
          border: 4px solid #7b0000;
          border-top-color: transparent;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .ascii {
          font-family: "JetBrains Mono", monospace;
          font-size: 12px;
          white-space: pre;
          opacity: 0.9;
        }
      `}</style>
    </div>
  );
}
