import { NextResponse } from "next/server";
import { getLogs } from "@/lib/logger";

export async function GET() {
  try {
    const logs = getLogs(200); // pega até 200 logs
    return NextResponse.json({ logs });
  } catch (e) {
    console.error("Logs API error:", e);
    return NextResponse.json({ logs: [] });
  }
}
