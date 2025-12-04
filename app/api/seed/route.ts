import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

export async function GET() {
  const prisma = new PrismaClient();

  // dados fixos
  const email = "amandacarlos0000@gmail.com";
  const password = "1234";

  try {
    let admin = await prisma.user.findUnique({
      where: { email }
    });

    if (!admin) {
      const hashed = await bcrypt.hash(password, 10);

      admin = await prisma.user.create({
        data: {
          email,
          password: hashed,
          role: "ADMIN",
        },
      });
    }

    return NextResponse.json({ created: true, admin });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
