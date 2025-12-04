import fs from "fs";
import path from "path";

const base = path.join(process.cwd(), "data");

// Garantir que a pasta existe
if (!fs.existsSync(base)) fs.mkdirSync(base);

// Funções internas
function load(file) {
  const p = path.join(base, file);
  if (!fs.existsSync(p)) return [];
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function save(file, data) {
  const p = path.join(base, file);
  fs.writeFileSync(p, JSON.stringify(data, null, 2));
}

export const DB = {
  users: {
    all() { return load("users.json"); },
    save(data) { save("users.json", data); }
  },
  messages: {
    all() { return load("messages.json"); },
    save(data) { save("messages.json", data); }
  },
  logs: {
    all() { return load("logs.json"); },
    save(data) { save("logs.json", data); }
  }
};
