import jwt from "jsonwebtoken";

export function verifyAuth(token: string) {
  try {
    return jwt.verify(token, process.env.SECRET_KEY || "");
  } catch (e) {
    return null;
  }
}
