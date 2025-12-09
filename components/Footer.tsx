import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-6 text-center text-gray-400 text-sm bg-[#0b0b0c] mt-10 border-t border-white/10">
      <div className="flex justify-center gap-6 flex-wrap">
        <Link href="/privacy">Política de Privacidade</Link>
        <Link href="/terms">Termos de Serviço</Link>
        <Link href="/cookies">Política de Cookies</Link>
        <Link href="/license">Licença</Link>
      </div>

      <p className="mt-4 opacity-70">© 2025 Uchiha Web. Todos os direitos reservados.</p>
    </footer>
  );
}
