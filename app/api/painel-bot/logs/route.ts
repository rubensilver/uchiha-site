import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // evita pre-render

export async function GET() {
  const sample = [
    '[2025-12-07 10:00] Bot started',
    '[2025-12-07 10:03] Received message from +244XXX',
    '[2025-12-07 10:05] Sent reply'
  ].join('\n');

  return new NextResponse(sample, {
    status: 200,
    headers: { 'Content-Type': 'text/plain' }
  });
}
