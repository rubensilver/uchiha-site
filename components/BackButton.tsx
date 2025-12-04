'use client';
import { useRouter } from 'next/navigation';

export default function BackButton({label='Voltar'}) {
  const router = useRouter();
  return (
    <button onClick={() => router.back()} className="back-btn" aria-label="Voltar">
      ← {label}
      <style jsx>{`
        .back-btn { background:transparent; border:1px solid rgba(255,255,255,0.06); color:inherit; padding:8px 12px; border-radius:8px; cursor:pointer; }
      `}</style>
    </button>
  );
}
