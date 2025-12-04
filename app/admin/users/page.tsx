"use client";
import BackButton from "@/components/BackButton";
import { useEffect, useState } from "react";

export default function UsersPage(){
  const [users, setUsers] = useState<any[]>([]);
  useEffect(()=>{ fetch('/api/admin/users').then(r=>r.json()).then(j=>setUsers(j.users||[])).catch(()=>setUsers([])) }, []);
  return (
    <div>
      <BackButton />
      <h2 className="text-2xl font-bold">Utilizadores</h2>
      <div className="mt-4">
        {users.length === 0 && <div className="text-zinc-400">Nenhum utilizador</div>}
        {users.map((u,i)=>(<div key={i} className="p-2 bg-zinc-900 border border-zinc-800 rounded mb-2">{u.email} • {u.role}</div>))}
      </div>
    </div>
  );
}
