import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const SECRET = process.env.JWT_SECRET || "uchiha-secret";

export function verifyToken(token: string) {
  return jwt.verify(token, SECRET) as jwt.JwtPayload;
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, secret);
  } catch (e) {
    return null;
  }
}

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 10);
}

export async function comparePassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}
