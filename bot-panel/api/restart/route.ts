import { NextResponse } from "next/server";
import { verifyAuth } from '../../../utils/auth';

export async function POST(req: Request) {
  const auth = verifyAuth(req.headers);
  if (!auth) return new NextResponse("Unauthorized", { status: 401 });

  // Aqui tu ligas com teu backend do bot
  console.log("Reiniciando bot...");

  return NextResponse.json({ ok: true });
}
