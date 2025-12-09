export default function DataDeletionPage() {
  return (
    <main style={{ padding: 40, maxWidth: 900, margin: "0 auto", lineHeight: 1.6 }}>
      <h1>Instruções de Exclusão de Dados — Uchiha Bot</h1>
      <p>Última atualização: Dezembro de 2025</p>

      <p>Conforme exigido pelo Meta for Developers, disponibilizamos maneiras claras e acionáveis para que os utilizadores solicitem a eliminação dos seus dados.</p>

      <h2>Opções para solicitar exclusão</h2>

      <h3>1) Por email (recomendado)</h3>
      <p>Enviar para: <a href="mailto:verzinonly@gmail.com">verzinonly@gmail.com</a> ou <a href="mailto:drogadinhosilver@gmail.com">drogadinhosilver@gmail.com</a></p>
      <p><strong>Assunto:</strong> Data Deletion Request</p>
      <p><strong>Inclua no corpo do email:</strong></p>
      <ul>
        <li>Nome completo;</li>
        <li>Número de WhatsApp associado ao serviço (ex.: +2449XXXXXXXX);</li>
        <li>Uma declaração expressa de que solicita a exclusão dos seus dados.</li>
      </ul>

      <h3>2) Diretamente pelo Bot</h3>
      <p>Envie a mensagem <strong>DELETE MY DATA</strong> ao Uchiha Bot durante a conversa. Após confirmação automática ou manual vamos iniciar o processo de eliminação.</p>

      <h3>3) Prazo</h3>
      <p>Após receção e verificação do pedido, vamos proceder à eliminação no prazo máximo de <strong>48 horas</strong> (salvo requisitos legais que imponham retenção). Confirmaremos por email quando o processo estiver concluído.</p>

      <h3>4) Verificação</h3>
      <p>Para evitar exclusões indevidas, podemos pedir uma confirmação adicional (por exemplo, um código enviado via WhatsApp ou confirmação por email). Não processamos pedidos sem a verificação mínima necessária para garantir segurança e impedir abuso.</p>

      <h3>5) Endpoint de eliminação automatizada (opcional)</h3>
      <p>Se a Meta solicitar um URL de callback para confirmar eliminação, implemente um endpoint no teu backend que aceite um POST com identificação do utilizador e devolva um JSON com status de eliminação. Se quiseres, eu gero um exemplo do endpoint em Node/Express/Next API.</p>

      <h3>6) Contacto</h3>
      <p>CEO / Controlador: <strong>Rúben Silver</strong><br />
      Email: <a href="mailto:verzinonly@gmail.com">verzinonly@gmail.com</a>, <a href="mailto:drogadinhosilver@gmail.com">drogadinhosilver@gmail.com</a><br />
      Site: <a href="https://uchihaweb.onrender.com">https://uchihaweb.onrender.com</a>
      </p>
    </main>
  );
}
