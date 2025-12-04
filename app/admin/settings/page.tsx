"use client";
import BackButton from "@/components/BackButton";
export default function SettingsPage(){
  return (
    <div>
      <BackButton />
      <h2 className="text-2xl font-bold">Configurações</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-zinc-900 rounded border border-zinc-800">
          <h3 className="font-semibold">Token do Bot</h3>
          <p className="text-sm text-zinc-400">Aqui guardarás seu token (variáveis de ambiente recomendadas).</p>
        </div>
        <div className="p-4 bg-zinc-900 rounded border border-zinc-800">
          <h3 className="font-semibold">Webhook</h3>
          <p className="text-sm text-zinc-400">Configurações do webhook e verificação.</p>
        </div>
      </div>
    </div>
  );
}
