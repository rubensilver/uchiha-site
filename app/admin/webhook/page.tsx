export default function WebhookPage() {
  const webhookUrl = "https://SEU-SITE.onrender.com/api/webhook"

  return (
    <div className="text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Webhook</h1>

      <p className="text-gray-300 mb-4">Use este URL na plataforma da Meta:</p>

      <div className="p-4 bg-[#0f0f10] border border-gray-800 rounded mb-6">
        <code className="text-green-400">{webhookUrl}</code>
      </div>

      <p className="text-gray-400">
        Quando o bot estiver conectado, os eventos aparecerão aqui.
      </p>
    </div>
  )
}
