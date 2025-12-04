export default function DashboardPage() {
  return (
    <div style={{ padding: "2rem", color: "white" }}>
      <h1>Painel • BOT ZONE</h1>

      <h2 style={{ marginTop: "2rem" }}>Ações</h2>
      <button
        style={{
          background: "#e11",
          color: "white",
          padding: "10px 22px",
          borderRadius: "8px",
          border: "none",
          marginTop: "10px",
        }}
      >
        Configurações
      </button>

      <h2 style={{ marginTop: "3rem" }}>Últimos logs</h2>
      <p>Os logs aparecerão aqui…</p>
    </div>
  );
}
