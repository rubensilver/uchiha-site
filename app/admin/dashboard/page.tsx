export default function DashboardPage() {
  return (
    <div className="text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

      <p className="text-gray-300 mb-6">
        Bem-vindo ao Painel Uchiha. Aqui você verá informações gerais
        quando o bot estiver conectado.
      </p>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="p-6 rounded bg-[#0f0f10] border border-gray-800">
          <h3 className="font-bold text-red-500 mb-2">Status</h3>
          <p className="text-gray-400">Bot desconectado</p>
        </div>

        <div className="p-6 rounded bg-[#0f0f10] border border-gray-800">
          <h3 className="font-bold text-red-500 mb-2">Mensagens recebidas</h3>
          <p className="text-gray-400">0 (em breve)</p>
        </div>

        <div className="p-6 rounded bg-[#0f0f10] border border-gray-800">
          <h3 className="font-bold text-red-500 mb-2">Mensagens enviadas</h3>
          <p className="text-gray-400">0 (em breve)</p>
        </div>

      </div>
    </div>
  )
}
