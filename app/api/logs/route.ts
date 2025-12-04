import { NextResponse } from "next/server";
import { DB } from "@/lib/db";

export async function GET(){
  const logs = DB.logs.all();
  return NextResponse.json({ logs });
}
