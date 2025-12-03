// components/Header.tsx
import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-gray-800 bg-[#070707]">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center font-bold">UB</div>
            <div>
              <div className="text-white font-semibold">𝐁𝐨𝐭𝐬 𝐙𝐨𝐧𝐞 👾</div>
              <div className="text-xs text-gray-400">Site & Painel</div>
            </div>
          </a>
        </Link>

        <nav className="flex items-center gap-4">
          <Link href="/about"><a className="text-gray-300 hover:text-white">Sobre</a></Link>
          <Link href="/admin/login"><a className="text-red-500 hover:text-red-400 font-medium">Painel</a></Link>
        </nav>
      </div>
    </header>
  )
}
