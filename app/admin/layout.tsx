// app/admin/layout.tsx
import Header from "@/components/Header";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      {/* Navbar fixa */}
      <Header />

      {/* Conteúdo do painel */}
      <main className="max-w-5xl mx-auto px-4 py-6">
        {children}
      </main>
    </div>
  );
}
