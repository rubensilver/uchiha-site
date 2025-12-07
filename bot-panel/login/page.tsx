const handleLogin = async () => {
  setError("");

  const req = await fetch("/api/panel/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user, pass }),
  });

  const res = await req.json();

  if (!req.ok) {
    setError(res.error || "Erro no login");
    return;
  }

  // Salvar cookie
  document.cookie = `auth_token=${res.token}; path=/; max-age=604800`;

  window.location.href = "/bot-panel/dashboard";
};
