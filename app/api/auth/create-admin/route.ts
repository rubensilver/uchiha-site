export const dynamic = "force-dynamic";

import { NextResponse } from 'next/server';
import { addUser, findUser } from '@/lib/db';
import { hash } from '@/lib/auth';

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);

    const email =
      url.searchParams.get('email') ||
      process.env.ADMIN_EMAIL ||
      'amandacarlos0000@gmail.com';

    const password =
      url.searchParams.get('password') ||
      process.env.ADMIN_PASSWORD ||
      '1234';

    if (findUser(email))
      return NextResponse.json({ status: 'already_exists' });

    const user = {
      email,
      password: hash(password),
      role: 'admin',
      createdAt: new Date().toISOString(),
    };

    addUser(user);

    return NextResponse.json({
      status: 'created',
      user: { email: user.email, role: user.role },
    });

  } catch (e: any) {
    console.error(e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
