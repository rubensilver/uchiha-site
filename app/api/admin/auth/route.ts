import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";

export async function POST(req: Request) {
  const { token } = await req.json().catch(() => ({}));

  if (!token)
    return NextResponse.json({ valid: false });

  const decoded = verifyToken(token);

  return NextResponse.json({ valid: !!decoded });
}
