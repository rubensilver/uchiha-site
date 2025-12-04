import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "sidebar.json");

export async function GET() {
  try {
    const json = fs.readFileSync(filePath, "utf8");
    return NextResponse.json(JSON.parse(json));
  } catch {
    return NextResponse.json({ mode: "minimal" });
  }
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body?.mode) return NextResponse.json({ error: "missing mode" }, { status: 400 });

  fs.writeFileSync(filePath, JSON.stringify({ mode: body.mode }, null, 2));

  return NextResponse.json({ success: true });
}
