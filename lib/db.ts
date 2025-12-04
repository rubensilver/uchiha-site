import fs from "fs";
import path from "path";

// Base local (sem banco), usando arquivos JSON
const base = path.join(process.cwd(), "data");

// ----------------------------
// Funções internas
// ----------------------------
function load(file: string) {
  const p = path.join(base, file);
  if (!fs.existsSync(p)) return [];
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function save(file: string, data: any) {
  const p = path.join(base, file);
  fs.writeFileSync(p, JSON.stringify(data, null, 2));
}

// ----------------------------
// LOG SYSTEM
// ----------------------------
export function addLog(data: any) {
  console.log("[LOG]", data);
  const logs = load("logs.json");
  logs.push({ ...data, createdAt: new Date().toISOString() });
  save("logs.json", logs);
  return true;
}

// ----------------------------
// USER SYSTEM
// ----------------------------
export function findUser(email: string) {
  const users = load("users.json");
  return users.find((u: any) => u.email === email);
}

export function addUser(user: any) {
  const users = load("users.json");
  users.push(user);
  save("users.json", users);
  return true;
}

// ----------------------------
// MESSAGES
// ----------------------------
export const DB = {
  users: {
    all() { return load("users.json"); },
    save(data: any) { save("users.json", data); }
  },

  messages: {
    all() { return load("messages.json"); },
    save(data: any) { save("messages.json", data); }
  },

  logs: {
    all() { return load("logs.json"); },
    save(data: any) { save("logs.json", data); }
  }
};
