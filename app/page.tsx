// app/page.tsx
export default function Home() {
  return (
    <section className="text-white">
      <div className="bg-gradient-to-b from-black to-[#0b0b0d] rounded-lg p-8 shadow-lg">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-red-600">
          𝐁𝐨𝐭𝐬 𝐙𝐨𝐧𝐞 👾
        </h1>
        <p className="text-gray-300 max-w-2xl mb-6">
          Site e painel prontos. Controle o seu bot, veja logs e envie mensagens pelo painel.
        </p>

        <div className="flex gap-3">
          <a href="/admin/login" className="inline-block px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 transition">
            Acessar Painel
          </a>
          <a href="/about" className="inline-block px-6 py-3 rounded-lg border border-gray-700 hover:bg-white/5 transition">
            Sobre o Projeto
          </a>
        </div>
      </div>

      <section className="mt-12 grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-[#0f0f10] rounded-lg">
          <h3 className="font-bold text-red-500">Webhook</h3>
          <p className="text-gray-400">Receba eventos do WhatsApp Cloud API.</p>
        </div>
        <div className="p-6 bg-[#0f0f10] rounded-lg">
          <h3 className="font-bold text-red-500">Envio</h3>
          <p className="text-gray-400">Envie mensagens diretamente do painel.</p>
        </div>
        <div className="p-6 bg-[#0f0f10] rounded-lg">
          <h3 className="font-bold text-red-500">Logs</h3>
          <p className="text-gray-400">Visualize logs do bot e histórico.</p>
        </div>
      </section>
    </section>
  )
}
