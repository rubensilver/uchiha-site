import { NextResponse } from 'next/server';
export async function GET() {
  const stream = new ReadableStream({
    start(controller) {
      let i = 0;
      const iv = setInterval(()=> {
        const line = `[${new Date().toISOString()}] sample log line #${++i}`;
        controller.enqueue(new TextEncoder().encode('data: '+line+'\n\n'));
        if(i>1000) clearInterval(iv);
      }, 1200);
    }
  });
  return new NextResponse(stream, { headers: { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache' }});
}
