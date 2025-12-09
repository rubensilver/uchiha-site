import Link from 'next/link';

export const dynamic = 'force-dynamic'; // garante que as envs carregam sempre

export default function PainelBotHome() {
  const env = {
    email: process.env.PANEL_USER_EMAIL,
    pass: process.env.PANEL_USER_PASS,
    pin: process.env.PANEL_PIN,
    jwt: process.env.JWT_SECRET,
    api: process.env.NEXT_PUBLIC_BOT_API_URL
  };

  return (
    <div className="text-white p-6">
      <h1 className="text-3xl font-bold">Painel Bot — Acesso Rápido</h1>
      <p className="text-gray-400 mt-1">
        Área exclusiva para gestão e controlo do teu Bot.
      </p>

      {/* DEBUG OPCIONAL — remove no deploy */}
      {/* <pre className="mt-4 bg-black/40 p-3 rounded-lg text-sm">
        {JSON.stringify(env, null, 2)}
      </pre> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">

        {/* LOGIN */}
        <div className="card p-4 bg-[#0f0f10] rounded-lg">
          <h3 className="text-xl font-semibold">Entrar</h3>
          <p className="text-gray-400 text-sm">Login seguro (Email + PIN)</p>
          <Link href="/painel-bot/login">
            <button className="btn mt-3 w-full bg-red-600 hover:bg-red-700 rounded-lg px-4 py-2">
              Acessar Painel
            </button>
          </Link>
        </div>

        {/* WEBHOOK */}
        <div className="card p-4 bg-[#0f0f10] rounded-lg">
          <h3 className="text-xl font-semibold">Webhook</h3>
          <p className="text-gray-400 text-sm">Monitor de Webhook e testes</p>
          <Link href="/painel-bot/webhook">
            <button className="btn mt-3 w-full bg-[#111] border border-gray-700 hover:bg-white/5 rounded-lg px-4 py-2">
              Abrir Webhook
            </button>
          </Link>
        </div>

        {/* LOGS */}
        <div className="card p-4 bg-[#0f0f10] rounded-lg">
          <h3 className="text-xl font-semibold">Logs</h3>
          <p className="text-gray-400 text-sm">Logs em tempo real e histórico</p>
          <Link href="/painel-bot/logs">
            <button className="btn mt-3 w-full bg-[#111] border border-gray-700 hover:bg-white/5 rounded-lg px-4 py-2">
              Abrir Logs
            </button>
          </Link>
        </div>

        {/* DEPLOY */}
        <div className="card p-4 bg-[#0f0f10] rounded-lg">
          <h3 className="text-xl font-semibold">Deploy & Backup</h3>
          <p className="text-gray-400 text-sm">Upload / Snapshots / One-click</p>
          <Link href="/painel-bot/deploy">
            <button className="btn mt-3 w-full bg-[#111] border border-gray-700 hover:bg-white/5 rounded-lg px-4 py-2">
              Deploy
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
      }
