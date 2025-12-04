// app/admin/layout.tsx
import React from "react";
import Header from "@/components/Header";

export default function AdminLayout(
  { children }: { children: React.ReactNode }
) {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Header />
      
      <main className="max-w-5xl mx-auto p-4">
        {children}
      </main>
    </div>
  );
}
