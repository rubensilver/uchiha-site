// app/admin/layout.tsx
import React from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function AdminLayout(
  { children }: { children: React.ReactNode }
) {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] flex">
      
      {/* Sidebar fixa */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Área da direita (header + conteúdo) */}
      <div className="flex-1 flex flex-col">
        
        {/* Header */}
        <Header />

        {/* Conteúdo */}
        <main className="max-w-5xl mx-auto p-4">
          {children}
        </main>
      </div>
    </div>
  );
}
