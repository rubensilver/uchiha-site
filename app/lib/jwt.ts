// app/lib/jwt.ts
import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || process.env.PANEL_JWT_SECRET || "change_this_secret";

export function signToken(payload: object, opts: jwt.SignOptions = { expiresIn: "7d" }) {
  return jwt.sign(payload as any, SECRET, opts);
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, SECRET as jwt.Secret);
  } catch (err) {
    return null;
  }
}
