import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || "uchiha-secret";

// --- HASH ---
export function hash(password: string) {
  return bcrypt.hashSync(password, 10);
}

// --- VERIFY PASSWORD ---
export function verify(password: string, hashed: string) {
  return bcrypt.compareSync(password, hashed);
}

// --- GENERATE TOKEN ---
export function generateToken(payload: any) {
  return jwt.sign(payload, SECRET, { expiresIn: "7d" });
}

// --- VERIFY TOKEN ---
export function verifyToken(token: string) {
  try {
    return jwt.verify(token, SECRET);
  } catch {
    return null;
  }
}
