"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    async function check() {
      try {
        const res = await fetch("/api/auth/me", { cache: "no-store" });
        const data = await res.json();

        if (!data.authenticated) {
          router.replace("/admin/login");
          return;
        }
      } catch (e) {
        router.replace("/admin/login");
        return;
      }

      setChecked(true);
    }

    check();
  }, []);

  // enquanto valida → evita piscar a página
  if (!checked) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-zinc-400">
        validando sessão...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] flex">
      <div className="hidden md:block">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-4 max-w-6xl mx-auto w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
