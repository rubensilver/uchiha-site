// app/admin/config/security/page.tsx
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Link href="/admin/config">← Voltar</Link>
      <h1 className="text-2xl font-bold mb-4">Segurança</h1>
      <p className="text-zinc-400">Opções de segurança e autenticação.</p>
    </div>
  );
}
