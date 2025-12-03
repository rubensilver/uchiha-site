import jwt, { JwtPayload } from 'jsonwebtoken';
const SECRET = process.env.JWT_SECRET || 'dev_secret';
interface TokenPayload extends JwtPayload { userId: string; role?: string }
export function generateToken(payload: TokenPayload){ return jwt.sign(payload, SECRET, { expiresIn: '7d' }) }
export function verifyToken(token: string){ try{return jwt.verify(token, SECRET) as TokenPayload}catch(e){return null} }
export function extractBearerToken(header?: string){ if(!header) return null; const parts = header.split(' '); if(parts.length!==2) return null; if(parts[0]!=='Bearer') return null; return parts[1]; }
