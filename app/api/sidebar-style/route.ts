import { NextResponse } from "next/server";
import { getSidebarStyle, setSidebarStyle } from "@/lib/config";

export async function GET() {
  try {
    const style = getSidebarStyle();
    return NextResponse.json({ style });
  } catch (err) {
    console.error("SIDEBAR STYLE GET ERROR:", err);
    return NextResponse.json({ style: "minimal" });
  }
}

export async function POST(req: Request) {
  try {
    const { style } = await req.json();

    if (!style) {
      return NextResponse.json({ error: "missing style" }, { status: 400 });
    }

    setSidebarStyle(style);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("SIDEBAR STYLE POST ERROR:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
