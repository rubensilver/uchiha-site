"use client";

import SidebarMinimal from "./SidebarMinimal";
import SidebarModern from "./SidebarModern";
import SidebarComplete from "./SidebarComplete";

export default function Sidebar({
  mode = "minimal",
  forceMode = false,
}: {
  mode?: string;
  forceMode?: boolean;
}) {
  // modo final a usar
  const finalMode = mode;

  if (finalMode === "modern") {
    return <SidebarModern />;
  }

  if (finalMode === "complete") {
    return <SidebarComplete />;
  }

  // padrão
  return <SidebarMinimal />;
}
