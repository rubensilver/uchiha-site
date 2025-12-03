export default function Home() {
  return (
    <main className="text-white">
      
      {/* HERO */}
      <section className="py-24 text-center bg-gradient-to-b from-black to-[#0b0b0d]">
        <h1 className="text-5xl md:text-7xl font-extrabold text-red-500 mb-4 tracking-tight">
          𝐁𝐨𝐭𝐬 𝐙𝐨𝐧𝐞 👾
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
          A plataforma perfeita para controlar seu bot, gerenciar mensagens,
          visualizar logs e administrar tudo pelo painel.
        </p>

        <div className="flex justify-center gap-4">
          <a href="/admin/login" className="px-8 py-3 rounded-lg bg-red-600 hover:bg-red-700 transition">
            Acessar Painel
          </a>
          <a href="#sobre" className="px-8 py-3 rounded-lg border border-gray-700 hover:bg-white/10 transition">
            Sobre o Projeto
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-[#0f0f10]" id="features">
        <h2 className="text-center text-3xl font-bold mb-10">Recursos do Sistema</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 bg-black/40 rounded-lg">
            <h3 className="text-red-500 font-bold text-xl mb-2">Webhook</h3>
            <p className="text-gray-400">Receba eventos do WhatsApp Cloud API em tempo real.</p>
          </div>

          <div className="p-6 bg-black/40 rounded-lg">
            <h3 className="text-red-500 font-bold text-xl mb-2">Envio</h3>
            <p className="text-gray-400">Envie mensagens diretamente do painel, em um clique.</p>
          </div>

          <div className="p-6 bg-black/40 rounded-lg">
            <h3 className="text-red-500 font-bold text-xl mb-2">Logs</h3>
            <p className="text-gray-400">Acompanhe logs, erros e histórico completo do bot.</p>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="py-20" id="sobre">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Sobre o Projeto</h2>
          <p className="text-gray-400 text-lg">
            Este sistema foi criado para oferecer uma solução completa para bots WhatsApp,
            com painel administrativo, gerenciamento de mensagens, logs e integração total
            com a API oficial do WhatsApp Cloud.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#0f0f10]">
        <h2 className="text-center text-3xl font-bold mb-10">Perguntas Frequentes</h2>

        <div className="max-w-3xl mx-auto space-y-6">
          <div className="p-5 bg-black/40 rounded-lg">
            <h3 className="text-red-500 font-bold text-xl mb-2">Preciso pagar algo?</h3>
            <p className="text-gray-400">Não. Toda a estrutura pode ser usada gratuitamente.</p>
          </div>

          <div className="p-5 bg-black/40 rounded-lg">
            <h3 className="text-red-500 font-bold text-xl mb-2">O painel funciona no celular?</h3>
            <p className="text-gray-400">Sim! Ele é totalmente responsivo.</p>
          </div>

          <div className="p-5 bg-black/40 rounded-lg">
            <h3 className="text-red-500 font-bold text-xl mb-2">Posso adicionar operadores?</h3>
            <p className="text-gray-400">Em breve! O sistema de múltiplos usuários está chegando.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-500 border-t border-gray-800">
        © {new Date().getFullYear()} Bots Zone. Todos os direitos reservados.
      </footer>
    </main>
  );
}
