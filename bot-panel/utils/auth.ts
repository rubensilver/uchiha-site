import jwt from "jsonwebtoken";

export function generateToken() {
  return jwt.sign({ ok: true }, process.env.PANEL_JWT_SECRET!, {
    expiresIn: "2h",
  });
}

export function verifyAuth(headers: Headers) {
  const token = headers.get("authorization");
  if (!token) return false;

  try {
    jwt.verify(token, process.env.PANEL_JWT_SECRET!);
    return true;
  } catch {
    return false;
  }
}
