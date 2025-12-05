// lib/config-storage.ts
import fs from "fs";
import path from "path";

const BASE = "/tmp"; // funciona em serverless (Vercel, Railway, Netlify, etc)

function getPath(file: string) {
  return path.join(BASE, file);
}

export function load<T = any>(file: string): T | null {
  try {
    const full = getPath(file);

    if (!fs.existsSync(full)) {
      return null;
    }

    const raw = fs.readFileSync(full, "utf8");
    return JSON.parse(raw);
  } catch (err) {
    console.error("LOAD ERROR:", err);
    return null;
  }
}

export function save(file: string, data: any) {
  try {
    const full = getPath(file);
    fs.writeFileSync(full, JSON.stringify(data, null, 2), "utf8");
    return true;
  } catch (err) {
    console.error("SAVE ERROR:", err);
    return false;
  }
}
