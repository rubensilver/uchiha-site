// lib/config.ts
import { load, save } from "./config-storage";

let sidebarStyle = load("sidebar.json")?.mode || "minimal";

export function getSidebarStyle() {
  return sidebarStyle;
}

export function setSidebarStyle(style: string) {
  sidebarStyle = style;
  save("sidebar.json", { mode: style });
}
