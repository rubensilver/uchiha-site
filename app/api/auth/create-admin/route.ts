import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function GET() {
  const adminExists = await prisma.user.findFirst();

  if (adminExists) {
    return NextResponse.json({ error: "Admin já existe" }, { status: 400 });
  }

  const hashed = await bcrypt.hash("1234", 10);

  await prisma.user.create({
    data: {
      email: "amandacarlos0000@gmail.com",
      password: hashed,
      role: "admin",
    },
  });

  return NextResponse.json({ status: "Admin criado com sucesso" });
}
