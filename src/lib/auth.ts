import { hash, compare } from 'bcryptjs';

export async function hashPassword(password: string): Promise<string> {
  return hash(password, 10);
}

export async function comparePasswords(password: string, hash: string): Promise<boolean> {
  return compare(password, hash);
}

export function generateSessionToken(): string {
  return require('crypto').randomBytes(32).toString('hex');
}
