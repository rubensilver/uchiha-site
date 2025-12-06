import { NextResponse } from "next/server";
import { getSidebarMode, setSidebarMode } from "@/lib/config";

export async function GET() {
  try {
    const mode = getSidebarMode();
    return NextResponse.json({ mode });
  } catch (err) {
    console.error("SIDEBAR GET ERROR:", err);
    return NextResponse.json({ mode: "minimal" });
  }
}

export async function POST(req: Request) {
  try {
    const { mode } = await req.json();

    if (!mode) {
      return NextResponse.json({ error: "missing mode" }, { status: 400 });
    }

    setSidebarMode(mode);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("SIDEBAR POST ERROR:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
