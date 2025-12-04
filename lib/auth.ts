import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// --- HASH / VERIFY PASSWORD ---

export function hash(password: string) {
  return bcrypt.hashSync(password, 10);
}

export function verify(password: string, hash: string) {
  return bcrypt.compareSync(password, hash);
}


// --- TEMP TOKEN SYSTEM (sem banco, sem prisma) ---

const SECRET = process.env.JWT_SECRET || "uchiha-secret"; // depois trocamos

export function generateToken(payload: any) {
  return jwt.sign(payload, SECRET, { expiresIn: "7d" });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, SECRET);
  } catch {
    return null;
  }
}

export function decodeToken(token: string) {
  try {
    return jwt.decode(token);
  } catch {
    return null;
  }
}
