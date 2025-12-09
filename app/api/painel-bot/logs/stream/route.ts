import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // 🚀 impede pre-render e resolve o erro

export async function GET() {
  const stream = new ReadableStream({
    start(controller) {
      let i = 0;
      const iv = setInterval(() => {
        const line = `[${new Date().toISOString()}] sample log line #${++i}`;
        controller.enqueue(new TextEncoder().encode(`data: ${line}\n\n`));

        // Evita stream infinita durante o build e mantém funcional no painel
        if (i >= 200) {
          clearInterval(iv);
          controller.close();
        }
      }, 1000);
    }
  });

  return new NextResponse(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      "Connection": "keep-alive",
    }
  });
}
