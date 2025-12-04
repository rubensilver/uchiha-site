"use client";
import { useState, useEffect } from "react";

export default function ThemeSwitcher(){
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("uchiha");

  useEffect(()=>{
    const t = localStorage.getItem("theme") || "uchiha";
    setTheme(t);
    document.documentElement.setAttribute("data-theme", t);
  },[]);

  function apply(t: string){
    setTheme(t);
    localStorage.setItem("theme", t);
    document.documentElement.setAttribute("data-theme", t);
    setOpen(false);
  }

  return (
    <div className="relative">
      <button onClick={()=>setOpen(!open)} className="px-3 py-2 rounded bg-black/20 flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-red-600"></span>
        <span className="text-sm">Tema</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-zinc-900 border border-zinc-800 rounded shadow p-2 z-50">
          <button onClick={()=>apply("light")} className="w-full text-left px-2 py-1 rounded hover:bg-zinc-800">Claro</button>
          <button onClick={()=>apply("dark")} className="w-full text-left px-2 py-1 rounded hover:bg-zinc-800">Escuro</button>
          <button onClick={()=>apply("uchiha")} className="w-full text-left px-2 py-1 rounded hover:bg-zinc-800 text-red-400">Uchiha</button>
        </div>
      )}
    </div>
  );
}
