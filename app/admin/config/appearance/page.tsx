// app/admin/config/appearance/page.tsx
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Link href="/admin/config">← Voltar</Link>
      <h1 className="text-2xl font-bold mb-4">Aparência</h1>
      <p className="text-zinc-400">Ajustes visuais do painel.</p>
    </div>
  );
}
