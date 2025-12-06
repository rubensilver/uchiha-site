// lib/config.ts
import { load, save } from "./config-storage";

let sidebarMode = load("sidebar.json")?.mode || "minimal";

// --------------- COMPATIBILIDADE ANTIGA (NÃO MEXE) ----------------
// Alguns lugares do projeto ainda importam getSidebarStyle / setSidebarStyle
export function getSidebarStyle() {
  return sidebarMode;
}

export function setSidebarStyle(style: string) {
  sidebarMode = style;
  save("sidebar.json", { mode: style });
}

// --------------- NOVO PADRÃO (getSidebarMode) ---------------------
export function getSidebarMode() {
  return sidebarMode;
}

export function setSidebarMode(mode: string) {
  sidebarMode = mode;
  save("sidebar.json", { mode });
}
