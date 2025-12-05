// lib/session.ts
"use client";

export function getSessionUser() {
  if (typeof window === "undefined") return null;

  try {
    const raw = localStorage.getItem("session");
    if (!raw) return null;

    return JSON.parse(raw);
  } catch (err) {
    console.error("Erro ao ler session:", err);
    return null;
  }
}

export function setSessionUser(user: any) {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem("session", JSON.stringify(user));
  } catch (err) {
    console.error("Erro ao salvar session:", err);
  }
}

export function logoutUser() {
  if (typeof window === "undefined") return;

  try {
    localStorage.removeItem("session");
    window.location.href = "/admin/login";
  } catch (err) {
    console.error("Erro ao remover session:", err);
  }
}
