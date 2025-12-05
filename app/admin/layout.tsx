"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { getSessionUser } from "@/lib/auth"; // usamos tua função oficial

export default function AdminLayout(
  { children }: { children: React.ReactNode }
) {
  const router = useRouter();

  useEffect(() => {
    const user = getSessionUser();
    if (!user) {
      router.replace("/admin/login");
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] flex">

      {/* Sidebar apenas em telas grandes */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Conteúdo principal */}
      <div className="flex-1 flex flex-col">

        {/* Header fixo */}
        <Header />

        {/* Área das páginas */}
        <main className="p-4 max-w-6xl mx-auto w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
