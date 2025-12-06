"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Sidebars
import SidebarMinimal from "@/components/sidebar/SidebarMinimal";
import SidebarModern from "@/components/sidebar/SidebarModern";
import SidebarComplete from "@/components/sidebar/SidebarComplete";

// Header
import Header from "@/components/Header";

// CSS dos sidebars
import "@/components/sidebar-styles/minimal.css";
import "@/components/sidebar-styles/modern.css";
import "@/components/sidebar-styles/complete.css";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const [checked, setChecked] = useState(false);
  const [sidebarMode, setSidebarMode] = useState<"minimal" | "modern" | "complete">("minimal");

  // ⛔ Verifica sessão
  useEffect(() => {
    async function verify() {
      try {
        const r = await fetch("/api/auth/me", { cache: "no-store" });
        const j = await r.json();

        if (!j.authenticated) {
          router.replace("/admin/login");
          return;
        }
      } catch {
        router.replace("/admin/login");
        return;
      }

      setChecked(true);
    }
    verify();
  }, []);

  // 🎛 Carrega Sidebar Mode da API
  useEffect(() => {
    async function loadMode() {
      try {
        const r = await fetch("/api/config/sidebar");
        const j = await r.json();
        setSidebarMode(j.mode || "minimal");
      } catch {
        setSidebarMode("minimal");
      }
    }
    loadMode();
  }, []);

  if (!checked) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-zinc-400">
        validando sessão...
      </div>
    );
  }

  // Escolher automaticamente o sidebar
  const sidebarComponent = {
    minimal: <SidebarMinimal />,
    modern: <SidebarModern />,
    complete: <SidebarComplete />,
  }[sidebarMode];

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] flex">

      {/* SIDEBAR */}
      <div className="hidden md:block">
        {sidebarComponent}
      </div>

      {/* CONTEÚDO */}
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-4 max-w-6xl mx-auto w-full">{children}</main>
      </div>
    </div>
  );
}
