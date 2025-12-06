import { NextResponse } from "next/server";
import { DB } from "@/lib/db";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id);
    const messages = DB.messages.all();
    const message = messages.find((m: any) => m.id === id);

    if (!message) {
      return NextResponse.json(
        { error: "Mensagem não encontrada" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message });
  } catch (err) {
    console.error("MSG BY ID ERROR:", err);
    return NextResponse.json({ error: "failed" }, { status: 500 });
  }
}
