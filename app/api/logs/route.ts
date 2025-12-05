import { NextResponse } from "next/server";
import { getLogs } from "@/lib/logger";

export async function GET() {
  try {
    const logs = await getLogs(200);
    return NextResponse.json({ logs });
  } catch (e) {
    console.error("Logs API error:", e);
    return NextResponse.json({ logs: [] });
  }
}
