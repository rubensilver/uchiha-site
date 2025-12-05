"use client";

export default function LoaderPanel() {
  return (
    <div className="w-full flex items-center justify-center py-10 opacity-80">
      <div className="flex flex-col items-center gap-3">
        <img
          src="/sharingan-spin.svg"
          className="w-12 h-12 animate-spin"
          alt="loading"
        />
        <p className="text-zinc-400 text-sm">Carregando…</p>
      </div>
    </div>
  );
}
