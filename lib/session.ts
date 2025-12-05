// lib/session.ts

export function getSessionUser() {
  if (typeof window === "undefined") return null;

  try {
    const raw = localStorage.getItem("session");
    if (!raw) return null;

    const json = JSON.parse(raw);
    if (!json?.email) return null;

    return json;
  } catch {
    return null;
  }
}

export function setSessionUser(user: { email: string }) {
  try {
    localStorage.setItem("session", JSON.stringify(user));
  } catch {}
}

export function clearSession() {
  try {
    localStorage.removeItem("session");
  } catch {}
}
