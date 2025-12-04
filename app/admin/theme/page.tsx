"use client";
import BackButton from "@/components/BackButton";
import { useState } from "react";

export default function ThemePage() {
  const [theme, setTheme] = useState("");

  function changeTheme(t: string) {
    setTheme(t);
    localStorage.setItem("theme", t);
    document.body.className = t;
  }

  return (
    <div className="p-6 text-center text-white">
      <BackButton />

      <h1 className="text-4xl font-bold mb-6">Trocar Tema</h1>

      <div className="flex gap-4 justify-center">
        <button
          onClick={() => changeTheme("light")}
          className="bg-gray-200 text-black px-6 py-3 rounded hover:scale-105 transition"
        >
          Claro
        </button>

        <button
          onClick={() => changeTheme("dark")}
          className="bg-gray-900 text-white px-6 py-3 rounded hover:scale-105 transition"
        >
          Escuro
        </button>

        <button
          onClick={() => changeTheme("uchiha")}
          className="bg-red-700 text-white px-6 py-3 rounded hover:scale-105 transition"
        >
          Uchiha
        </button>
      </div>
    </div>
  );
}
