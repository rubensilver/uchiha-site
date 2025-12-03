import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { verifyToken } from "@/lib/auth";
const prisma = new PrismaClient();

export async function GET(req: Request) {
  const auth = req.headers.get("authorization") || "";
  const token = auth.replace("Bearer ", "");
  if (!verifyToken(token)) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  const logs = await prisma.log.findMany({ orderBy: { createdAt: "desc" }, take: 50 });
  return NextResponse.json({ logs });
}
