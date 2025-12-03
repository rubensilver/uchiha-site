"use client";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string>("dark");

  useEffect(()=> {
    const t = document.documentElement.getAttribute("data-theme") || "dark";
    setTheme(t);
  }, []);

  async function change(t:string){
    await fetch("/api/theme", { method: "POST", body: JSON.stringify({ theme: t }), headers: { "Content-Type":"application/json" }});
    document.documentElement.setAttribute("data-theme", t);
    setTheme(t);
  }

  return (
    <div className="flex gap-2">
      <button onClick={()=>change("dark")} className={theme==="dark"? "btn-active":"btn"}>Dark</button>
      <button onClick={()=>change("light")} className={theme==="light"? "btn-active":"btn"}>Light</button>
    </div>
  );
}
