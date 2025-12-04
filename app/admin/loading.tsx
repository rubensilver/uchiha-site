// app/admin/loading.tsx

export default function Loading() {
  return (
    <div className="w-full h-[70vh] flex flex-col items-center justify-center gap-4 animate-pulse">
      <div className="w-16 h-16 rounded-full border-4 border-red-700 border-t-transparent animate-spin"></div>

      <p className="text-red-500 font-semibold text-lg tracking-wide">
        Carregando Painel...
      </p>
    </div>
  );
}
