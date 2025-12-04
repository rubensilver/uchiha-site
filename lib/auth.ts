import bcrypt from 'bcryptjs';

export function hash(password: string) {
  return bcrypt.hashSync(password, 10);
}

export function verify(password: string, hash: string) {
  return bcrypt.compareSync(password, hash);
}
