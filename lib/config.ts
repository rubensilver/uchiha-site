import { load, save } from "./config-storage";

// 🔥 Mantém ambos, para compatibilidade
let sidebarMode = load("sidebar.json")?.mode || "minimal";

// --------------- COMPATIBILIDADE ANTIGA (NÃO MEXE) ----------------

// Essas funções são necessárias porque outros arquivos do projeto
// ainda importam "getSidebarStyle" e "setSidebarStyle".
// Elas APENAS chamam as novas funções para evitar erro.

export function getSidebarStyle() {
  return sidebarMode;
}

export function setSidebarStyle(style: string) {
  sidebarMode = style;
  save("sidebar.json", { mode: style });
}

// --------------- NOVO PADRÃO (QUE VOCÊ CRIOU) ---------------------

export function getSidebarMode() {
  return sidebarMode;
}

export function setSidebarMode(mode: string) {
  sidebarMode = mode;
  save("sidebar.json", { mode });
}
