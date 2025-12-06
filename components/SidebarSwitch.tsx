"use client";

import Sidebar from "@/components/sidebar";
import SidebarModern from "@/components/sidebar/SidebarModern";
import SidebarComplete from "@/components/sidebar/SidebarComplete";

export default function SidebarSwitch({
  mode,
  forceMode,
}: {
  mode?: string;
  forceMode?: boolean;
}) {
  const finalMode = forceMode ? mode : undefined;

  switch (finalMode) {
    case "modern":
      return <SidebarModern />;
    case "complete":
      return <SidebarComplete />;
    default:
      return <Sidebar />;
  }
}
