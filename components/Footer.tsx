// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t border-gray-900 mt-12">
      <div className="max-w-5xl mx-auto px-4 py-8 text-gray-400 text-sm">
        <div>© {new Date().getFullYear()} Uchiha-Bot. Todos os direitos.</div>
      </div>
    </footer>
  )
}
