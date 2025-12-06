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
  const finalMode = forceMode ? mode : mode;

  if (finalMode === "modern") {
    return <SidebarModern />;
  }

  if (finalMode === "complete") {
    return <SidebarComplete />;
  }

  return <SidebarMinimal />;
}
