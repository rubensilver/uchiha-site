// app/api/admin/summary/route.ts
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { DB } from "@/lib/db";

/**
 * Retorna um resumo simples:
 * - messages: total de mensagens salvas
 * - logs: total de logs
 * - users: total de utilizadores
 * - bot: status (online/offline)
 *
 * Usa o DB file-based (lib/db.ts) que você já tem no projeto.
 */

export async function GET() {
  try {
    const messages = DB.messages.all() || [];
    const logs = DB.logs.all() || [];
    const users = DB.users.all() || [];

    return NextResponse.json({
      messages: messages.length,
      logs: logs.length,
      users: users.length,
      bot: { status: "online" },
      ts: new Date().toISOString(),
    });
  } catch (err: any) {
    console.error("summary error:", err);
    return NextResponse.json({ error: "failed" }, { status: 500 });
  }
}
