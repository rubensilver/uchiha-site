export default function Home() {
  return (
    <section className="text-white">

      {/* TOPO DO SITE */}
      <div className="bg-gradient-to-b from-black to-[#0b0b0d] rounded-lg p-8 shadow-lg">

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-red-600">
          Bots Zone 👾
        </h1>

        <p className="text-gray-300 max-w-2xl mb-6">
          A plataforma perfeita para controlar seu bot, gerenciar mensagens,
          visualizar logs e administrar tudo pelo painel.
        </p>

        {/* 🔥 4 BOTÕES PRINCIPAIS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">

          <a
            href="/admin/login"
            className="block w-full text-center px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 transition"
          >
            Acessar Painel
          </a>

          <a
            href="/api/webhook"
            className="block w-full text-center px-6 py-3 rounded-lg bg-[#111] border border-gray-700 hover:bg-white/5 transition"
          >
            Webhook
          </a>

          <a
            href="/admin/send"
            className="block w-full text-center px-6 py-3 rounded-lg bg-[#111] border border-gray-700 hover:bg-white/5 transition"
          >
            Envio de Mensagens
          </a>

          <a
            href="/admin/logs"
            className="block w-full text-center px-6 py-3 rounded-lg bg-[#111] border border-gray-700 hover:bg-white/5 transition"
          >
            Logs do Bot
          </a>
        </div>

      </div>

      {/* SEÇÕES PADRÃO */}
      <section className="mt-12 grid md:grid-cols-3 gap-6">

        <div className="p-6 bg-[#0f0f10] rounded-lg">
          <h3 className="font-bold text-red-500">Webhook</h3>
          <p className="text-gray-400">
            Receba eventos do WhatsApp Cloud API em tempo real.
          </p>
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
            Visualize logs do bot e histórico.
          </p>
        </div>

      </section>

    </section>
  );
}
