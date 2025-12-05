// app/api/messages/[id]/route.ts
import { NextResponse } from "next/server";
import { DB } from "@/lib/db";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id);
    const messages = DB.messages.all();
    const msg = messages.find((m: any) => m.id === id);

    if (!msg) {
      return NextResponse.json(
        { error: "Message not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: msg });
  } catch (err) {
    console.error("MESSAGE GET ERROR:", err);
    return NextResponse.json({ error: "failed" }, { status: 500 });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id);
    const body = await req.json();
    const messages = DB.messages.all();

    const index = messages.findIndex((m: any) => m.id === id);
    if (index === -1) {
      return NextResponse.json(
        { error: "Message not found" },
        { status: 404 }
      );
    }

    messages[index] = {
      ...messages[index],
      ...body,
      updatedAt: new Date().toISOString(),
    };

    DB.messages.save(messages);

    return NextResponse.json({ success: true, message: messages[index] });
  } catch (err) {
    console.error("MESSAGE PUT ERROR:", err);
    return NextResponse.json({ error: "failed" }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id);
    let messages = DB.messages.all();

    const exists = messages.some((m: any) => m.id === id);
    if (!exists) {
      return NextResponse.json(
        { error: "Message not found" },
        { status: 404 }
      );
    }

    messages = messages.filter((m: any) => m.id !== id);
    DB.messages.save(messages);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("MESSAGE DELETE ERROR:", err);
    return NextResponse.json({ error: "failed" }, { status: 500 });
  }
}
