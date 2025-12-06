// app/admin/config/account/page.tsx
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Link href="/admin/config">← Voltar</Link>
      <h1 className="text-2xl font-bold mb-4">Conta</h1>
      <p className="text-zinc-400">Gerenciar conta e credenciais.</p>
    </div>
  );
}
