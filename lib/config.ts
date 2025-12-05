// lib/config.ts

let sidebarMode = "minimal"; // padrão

export function getSidebarMode() {
  return sidebarMode;
}

export function setSidebarMode(mode: string) {
  sidebarMode = mode;
}
