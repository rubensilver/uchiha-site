import { load, save } from "./config-storage";

let sidebarMode = load("sidebar.json")?.mode || "minimal";

export function getSidebarMode() {
  return sidebarMode;
}

export function setSidebarMode(mode: string) {
  sidebarMode = mode;
  save("sidebar.json", { mode });
}
