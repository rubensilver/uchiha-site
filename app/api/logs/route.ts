import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const logs = await prisma.log.findMany({
      orderBy: { createdAt: "desc" },
      take: 50
    });

    return NextResponse.json({ logs });
  } catch (e) {
    return NextResponse.json({ error: "failed" }, { status: 500 });
  }
}
