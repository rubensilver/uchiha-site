export default function CookiesPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 text-white">
      <h1 className="text-3xl font-bold mb-4">Política de Cookies</h1>

      <p className="text-gray-300 mb-4">
        Utilizamos cookies somente para melhorar a experiência no site e
        garantir funcionalidades essenciais.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. O que são Cookies?</h2>
      <p className="text-gray-300 mb-4">
        Cookies são pequenos arquivos armazenados no navegador que ajudam na
        navegação, preferências e funcionalidades.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Cookies que Usamos</h2>
      <ul className="text-gray-300 list-disc ml-6 mb-4">
        <li>Cookies de sessão</li>
        <li>Cookies essenciais do sistema</li>
        <li>Cookies de autenticação do painel</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Desativação</h2>
      <p className="text-gray-300">
        Você pode desativar cookies pelo navegador, mas isso pode afetar o
        funcionamento do site.
      </p>
    </div>
  );
}
