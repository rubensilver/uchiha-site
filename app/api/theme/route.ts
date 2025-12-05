import { NextResponse } from "next/server";
import { DB } from "@/lib/db";

export async function GET() {
  try {
    const config = DB.theme.get() || { theme: "dark" };
    return NextResponse.json(config);
  } catch {
    return NextResponse.json({ theme: "dark" });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);

    if (!body?.theme) {
      return NextResponse.json(
        { error: "missing theme" },
        { status: 400 }
      );
    }

    DB.theme.save({ theme: body.theme });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("THEME API ERROR:", err);
    return NextResponse.json(
      { error: "internal error" },
      { status: 500 }
    );
  }
}
