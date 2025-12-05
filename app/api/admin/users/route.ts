import { NextResponse } from "next/server";
import { DB } from "@/lib/db";
import bcrypt from "bcryptjs";

export async function GET() {
  return NextResponse.json({
    users: DB.users.all()
  });
}

export async function POST(req: Request) {
  const { email, password, role } = await req.json();
  const users = DB.users.all();

  // Impedir duplicados
  if (users.find((u: any) => u.email === email)) {
    return NextResponse.json(
      { error: "User already exists" },
      { status: 409 }
    );
  }

  const hashed = await bcrypt.hash(password, 10);

  users.push({
    id: Date.now(),
    email,
    password: hashed,
    role: role || "operador",
    createdAt: new Date().toISOString()
  });

  DB.users.save(users);

  return NextResponse.json({ success: true });
}
