import fs from 'fs';
import path from 'path';

const DATA = path.join(process.cwd(), 'data');
if (!fs.existsSync(DATA)) fs.mkdirSync(DATA, { recursive: true });

function readFile(name:string){ const p=path.join(DATA,name); if(!fs.existsSync(p)) return []; try{ return JSON.parse(fs.readFileSync(p,'utf-8')); }catch{ return []; } }
function writeFile(name:string, data:any){ const p=path.join(DATA,name); fs.writeFileSync(p, JSON.stringify(data, null, 2), 'utf-8'); }

export function findUser(email:string){
  const users = readFile('users.json');
  return users.find((u:any)=>u.email===email) || null;
}

export function addUser(user:any){
  const users = readFile('users.json');
  users.unshift(user);
  writeFile('users.json', users.slice(0,1000));
  return user;
}
