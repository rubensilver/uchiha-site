export default function LandingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Seção Hero */}
      <section className="px-6 py-24 text-center">
        <h1 className="text-5xl font-extrabold text-red-600 mb-4">
          𝐁𝐨𝐭𝐬 𝐙𝐨𝐧𝐞 👾
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Tenha o controle do seu bot, gerencie mensagens, logs e operadores.
          Tudo em um único painel moderno e rápido.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <a
            href="/admin/login"
            className="px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 transition"
          >
            Acessar Painel
          </a>
          <a
            href="/about"
            className="px-6 py-3 rounded-lg border border-gray-700 hover:bg-white/5 transition"
          >
            Sobre o Projeto
          </a>
        </div>
      </section>

      {/* Seção Features */}
      <section className="px-6 py-16 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="p-6 bg-[#0f0f10] rounded-lg">
          <h3 className="font-bold text-red-500">Webhook</h3>
          <p className="text-gray-400">Receba eventos do WhatsApp Cloud API.</p>
        </div>

        <div className="p-6 bg-[#0f0f10] rounded-lg">
          <h3 className="font-bold text-red-500">Envio</h3>
          <p className="text-gray-400">
            Envie mensagens diretamente do painel.
          </p>
        </div>

        <div className="p-6 bg-[#0f0f10] rounded-lg">
          <h3 className="font-bold text-red-500">Logs</h3>
          <p className="text-gray-400">
            Visualize logs reais, histórico e atividades.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 border-t border-gray-800">
        © {new Date().getFullYear()} Bots Zone. Todos os direitos reservados.
      </footer>
    </main>
  );
}
