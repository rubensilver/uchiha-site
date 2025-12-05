// lib/logger.ts
"use server";

import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const LOG_FILE = path.join(DATA_DIR, "logs.json");

// garante que a pasta existe no servidor
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// garante que o arquivo exista
if (!fs.existsSync(LOG_FILE)) {
  fs.writeFileSync(LOG_FILE, "[]", "utf8");
}

// grava um log
export function addLog(entry: any) {
  try {
    const raw = fs.readFileSync(LOG_FILE, "utf8");
    const current = JSON.parse(raw);

    current.unshift({
      ...entry,
      createdAt: new Date().toISOString(),
    });

    fs.writeFileSync(LOG_FILE, JSON.stringify(current.slice(0, 300), null, 2));
  } catch (e) {
    console.error("Logger error:", e);
  }
}

// lê logs
export function getLogs(limit = 200) {
  try {
    const raw = fs.readFileSync(LOG_FILE, "utf8");
    const current = JSON.parse(raw);
    return current.slice(0, limit);
  } catch {
    return [];
  }
}
