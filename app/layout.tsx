import './globals.css'
export const metadata = { title: 'Uchiha‑Bot', description: 'Painel Uchiha-Bot' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="pt"><body>{children}</body></html>)
}
