// app/admin/layout.tsx
import React from "react";
import Header from "@/components/Header";

export const metadata = {
  title: "Painel • BOT ZONE",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-6">
        {children}
      </main>
    </div>
  );
}
