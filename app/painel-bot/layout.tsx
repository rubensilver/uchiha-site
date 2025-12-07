// app/painel-bot/layout.tsx
import React from "react";
import "../globals.css"; // garante que o tema global está disponível

export const metadata = {
  title: "Painel Bot",
};

export default function PainelBotLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className="uchiha-bg">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {children}
        </div>
      </body>
    </html>
  );
}
