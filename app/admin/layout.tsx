// app/admin/layout.tsx
"use client";

import React from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function AdminLayout(
  { children }: { children: React.ReactNode }
) {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] flex">

      {/* Sidebar fixa no lado esquerdo */}
      <Sidebar />

      {/* Conteúdo principal */}
      <div className="flex-1 flex flex-col">

        {/* Header fixo no topo */}
        <Header />

        {/* Conteúdo das páginas */}
        <main className="p-4 max-w-6xl mx-auto w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
