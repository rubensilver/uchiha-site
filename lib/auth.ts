import jwt from "jsonwebtoken";

export function generateToken(data: any) {
  const secret = process.env.JWT_SECRET || "default_secret_key";

  return jwt.sign(data, secret, {
    expiresIn: "7d",
  });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (e) {
    return null;
  }
}

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 10);
}
export async function comparePassword(password:string, hash:string){
  return bcrypt.compare(password, hash);
}
