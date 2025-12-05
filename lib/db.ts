// lib/db.ts — versão segura para serverless
import { load, save } from "./config-storage";

let users: any[] = [];
let logs: any[] = [];
let messages: any[] = [];

export function addUser(user: any) {
  users.push(user);
  return user;
}

export function findUser(email: string) {
  return users.find((u) => u.email === email);
}

export const DB = {
  users: {
    all: () => users,
    save: (d: any[]) => (users = d),
  },

  messages: {
    all: () => messages,
    save: (d: any[]) => (messages = d),
  },

  logs: {
    all: () => logs,
    save: (d: any[]) => (logs = d),
  },

  // 🔥 AGORA O TEMA EXISTE! (consertando o erro)
  theme: {
    get() {
      return load("theme.json");
    },
    save(data: any) {
      save("theme.json", data);
    },
  },
};

export function addLog(data: any) {
  logs.unshift({
    ...data,
    createdAt: new Date().toISOString(),
  });
  logs = logs.slice(0, 1000);
  return true;
}
