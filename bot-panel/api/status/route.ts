import { NextResponse } from "next/server";
import { verifyAuth } from "@/utils/auth";

export async function GET(req: Request) {
  const auth = verifyAuth(req.headers);
  if (!auth) return new NextResponse("Unauthorized", { status: 401 });

  return NextResponse.json({ status: "Bot está online" });
}
