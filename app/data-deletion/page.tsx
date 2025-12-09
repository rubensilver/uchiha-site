export const metadata = {
  title: "Data Deletion",
  description: "Política de Exclusão de Dados do Uchiha Bot",
};

export default function DataDeletionPage() {
  return (
    <main style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Política de Exclusão de Dados</h1>

      <p>
        De acordo com as diretrizes da Meta e boas práticas de privacidade,
        oferecemos aos usuários um método simples para solicitar a exclusão de
        todos os dados relacionados ao uso do nosso bot.
      </p>

      <h2>Quais dados coletamos?</h2>
      <ul>
        <li>ID do usuário do WhatsApp para identificação básica;</li>
        <li>Mensagens necessárias para o funcionamento do bot;</li>
        <li>Preferências de uso (quando aplicável).</li>
      </ul>

      <p>Nenhum dado sensível é armazenado.</p>

      <h2>Como solicitar exclusão de dados?</h2>
      <p>Para excluir seus dados, envie uma mensagem para:</p>
      <p><strong>Email:</strong> verzinoniy@gmail.com</p>

      <p>
        No assunto, coloque: <strong>Solicitação de Exclusão de Dados</strong>.
      </p>

      <h3>Inclua no pedido:</h3>
      <ul>
        <li>Seu número de telefone vinculado ao WhatsApp;</li>
        <li>Uma confirmação expressa de que deseja excluir seus dados.</li>
      </ul>

      <h2>Prazo para exclusão</h2>
      <p>
        Após o pedido, os dados serão removidos em até{" "}
        <strong>7 dias úteis</strong>.
      </p>

      <h2>Dúvidas?</h2>
      <p>Entre em contato pelo email acima. Estamos disponíveis para ajudar.</p>
    </main>
  );
}
