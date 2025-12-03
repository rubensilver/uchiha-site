// app/layout.tsx
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Uchiha-Bot',
  description: 'Uchiha Bot — Site e painel prontos'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-black text-white min-h-screen antialiased">
        <Header />
        <main className="max-w-5xl mx-auto px-4 py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
