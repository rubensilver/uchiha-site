import fs from 'fs';
import path from 'path';

const DATA = path.join(process.cwd(), 'data');
if (!fs.existsSync(DATA)) fs.mkdirSync(DATA, { recursive: true });

const LOG_FILE = path.join(DATA, 'logs.json');

// ⛔ Agora é async
export async function addLog(entry: any) {
  try {
    const exists = fs.existsSync(LOG_FILE);
    const current = exists
      ? JSON.parse(fs.readFileSync(LOG_FILE, 'utf-8'))
      : [];

    current.unshift(entry);

    fs.writeFileSync(
      LOG_FILE,
      JSON.stringify(current.slice(0, 1000), null, 2),
      'utf-8'
    );
  } catch (e) {
    console.error('logger error', e);
  }
}

// ⛔ Agora também é async
export async function getLogs(limit = 100) {
  try {
    const exists = fs.existsSync(LOG_FILE);
    const current = exists
      ? JSON.parse(fs.readFileSync(LOG_FILE, 'utf-8'))
      : [];

    return current.slice(0, limit);
  } catch (e) {
    return [];
  }
}
