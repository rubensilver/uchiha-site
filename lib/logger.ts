import fs from 'fs';
import path from 'path';

const DATA = path.join(process.cwd(), 'data');
if (!fs.existsSync(DATA)) fs.mkdirSync(DATA, { recursive: true });

const LOG_FILE = path.join(DATA, 'logs.json');

export function addLog(entry: any) {
  try {
    const current = fs.existsSync(LOG_FILE) ? JSON.parse(fs.readFileSync(LOG_FILE, 'utf-8')) : [];
    current.unshift(entry);
    fs.writeFileSync(LOG_FILE, JSON.stringify(current.slice(0,1000), null, 2), 'utf-8');
  } catch (e) {
    console.error('logger error', e);
  }
}

export function getLogs(limit = 100) {
  try {
    const current = fs.existsSync(LOG_FILE) ? JSON.parse(fs.readFileSync(LOG_FILE, 'utf-8')) : [];
    return current.slice(0, limit);
  } catch (e) {
    return [];
  }
}
