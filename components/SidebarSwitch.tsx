"use client";

import Sidebar from "@/components/Sidebar"; 
import SidebarModern from "@/components/sidebar/SidebarModern";
import SidebarComplete from "@/components/sidebar/SidebarComplete";

// Props:
// mode = "minimal" | "modern" | "complete"
// forceMode = usado apenas no preview (H.11)
export default function SidebarSwitch({
  mode,
  forceMode,
}: {
  mode?: string;
  forceMode?: boolean;
}) {
  // Se for preview → ele sempre usa o mode enviado via props
  const finalMode = forceMode ? mode : undefined;

  switch (finalMode) {
    case "modern":
      return <SidebarModern />;

    case "complete":
      return <SidebarComplete />;

    // Minimal → sidebar padrão que você já tem
    default:
      return <Sidebar />;
  }
}
