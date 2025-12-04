"use client";
import { useRouter } from "next/navigation";
export default function BackButton({label="← Voltar"}: {label?: string}){
  const router = useRouter();
  return (
    <button onClick={()=>router.back()} className="inline-flex items-center gap-2 px-3 py-2 rounded bg-red-700 hover:bg-red-600 text-white">
      {label}
    </button>
  );
}
