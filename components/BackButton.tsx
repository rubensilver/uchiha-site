"use client";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="bg-red-700 text-white px-4 py-2 rounded mb-5 hover:bg-red-600"
    >
      ← Voltar
    </button>
  );
}
