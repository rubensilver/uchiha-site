import jwt from 'jsonwebtoken';
const SECRET = process.env.JWT_SECRET || process.env.PANEL_JWT_SECRET || 'CHANGE_ME_SECRET';
export function signToken(payload: object, opts: any = { expiresIn: '7d' }) {
  return jwt.sign(payload as any, SECRET as any, opts);
}
export function verifyToken(token: string) {
  try { return jwt.verify(token, SECRET as any); } catch { return null; }
}
