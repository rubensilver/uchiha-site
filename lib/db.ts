import fs from "fs";
import path from "path";

const base = path.join(process.cwd(), "data");

function load(file: string) {
  const p = path.join(base, file);
  if (!fs.existsSync(p)) return [];
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function save(file: string, data: any) {
  if (!fs.existsSync(base)) fs.mkdirSync(base);
  const p = path.join(base, file);
  fs.writeFileSync(p, JSON.stringify(data, null, 2));
}

// ---------------------- USERS ----------------------

export function addUser(user: any) {
  const users = load("users.json");
  users.push(user);
  save("users.json", users);
  return user;
}

export function findUser(email: string) {
  const users = load("users.json");
  return users.find((u: any) => u.email === email);
}

// ---------------------- LOGS ----------------------

export function addLog(log: any) {
  const logs = load("logs.json");
  logs.push(log);
  save("logs.json", logs);
  return true;
}

// DB OBJECT
export const DB = {
  users: {
    all() { return load("users.json"); },
    save(data: any) { save("users.json", data); }
  },
  logs: {
    all() { return load("logs.json"); },
    save(data: any) { save("logs.json", data); }
  }
};
