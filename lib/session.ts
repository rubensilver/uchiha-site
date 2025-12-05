// lib/session.ts

// Retorna o usuário logado (email, role, token)
export function getSessionUser() {
  if (typeof window === "undefined") return null;

  try {
    const raw = localStorage.getItem("session");
    if (!raw) return null;

    const json = JSON.parse(raw);

    // validação básica
    if (!json?.email) return null;

    return json; // { email, role, token }
  } catch {
    return null;
  }
}

// Salva todos os dados do usuário
export function setSessionUser(user: any) {
  try {
    localStorage.setItem("session", JSON.stringify(user));
  } catch {}
}

// Remove sessão
export function clearSession() {
  try {
    localStorage.removeItem("session");
  } catch {}
}
