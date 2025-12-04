import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { verifyToken } from "@/lib/auth";
const prisma = new PrismaClient();

export async function GET(req: Request) {
  const auth = req.headers.get("authorization") || "";
  const token = auth.replace("Bearer ", "");
  const payload = verifyToken(token) as { userId?: string; role?: string } | null;
  if (!payload) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  const logs = await prisma.log.findMany({ orderBy: { createdAt: "desc" }, take: 50 });
  return NextResponse.json({ logs });
}
