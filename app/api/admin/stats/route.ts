// app/api/admin/stats/route.ts
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { DB } from "@/lib/db";

export async function GET() {
  try {
    // contagens simples
    const users = DB.users.all() || [];
    const messages = DB.messages.all() || [];
    const logs = DB.logs.all() || [];

    // estatísticas basicas
    const stats = {
      usersCount: users.length,
      messagesCount: messages.length,
      logsCount: logs.length,
      messagesLast24h: messages.filter((m: any) => {
        try {
          const t = new Date(m.createdAt);
          return Date.now() - t.getTime() <= 24 * 3600 * 1000;
        } catch {
          return false;
        }
      }).length,
      lastLog: logs.length ? logs[logs.length - 1] : null,
      generatedAt: new Date().toISOString(),
    };

    return NextResponse.json({ ok: true, stats });
  } catch (err: any) {
    console.error("stats error", err);
    return NextResponse.json({ ok: false, error: err?.message || "error" }, { status: 500 });
  }
}
