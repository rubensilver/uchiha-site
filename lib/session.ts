export function getSessionUser() {
  if (typeof window === "undefined") return null;

  try {
    const data = localStorage.getItem("session");
    if (!data) return null;
    return JSON.parse(data);
  } catch {
    return null;
  }
}
