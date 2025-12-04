// lib/db.ts
import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

function p(file: string) {
  return path.join(DATA_DIR, file);
}

function load(file: string) {
  const fp = p(file);
  if (!fs.existsSync(fp)) return [];
  try {
    return JSON.parse(fs.readFileSync(fp, 'utf8'));
  } catch {
    return [];
  }
}

function save(file: string, data: any) {
  fs.writeFileSync(p(file), JSON.stringify(data, null, 2), 'utf8');
}

export function addUser(user: any) {
  const users = load('users.json');
  users.push(user);
  save('users.json', users);
  return user;
}

export function findUser(email: string) {
  const users = load('users.json');
  return users.find((u: any) => u.email === email);
}

export const DB = {
  users: {
    all: () => load('users.json'),
    save: (d: any) => save('users.json', d),
  },
  messages: {
    all: () => load('messages.json'),
    save: (d: any) => save('messages.json', d),
  },
  logs: {
    all: () => load('logs.json'),
    save: (d: any) => save('logs.json', d),
  },
};
export function addLog(data: any) {
  console.log("[LOG]", data);
  return true;
}
