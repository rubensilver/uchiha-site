"use client";

export default function ThemeChanger() {
  const changeTheme = async (theme: string) => {
    await fetch("/api/theme", {
      method: "POST",
      body: JSON.stringify({ theme }),
      headers: { "Content-Type": "application/json" }
    });

    window.location.reload();
  };

  return (
    <div className="p-6 bg-[var(--bg2)] rounded-lg">
      <h2 className="font-bold text-[var(--primary)] mb-3">Trocar Tema</h2>

      <div className="flex gap-3">
        <button onClick={() => changeTheme("light")} className="px-4 py-2 bg-gray-200 text-black rounded">
          Claro
        </button>

        <button onClick={() => changeTheme("dark")} className="px-4 py-2 bg-gray-800 text-white rounded">
          Escuro
        </button>

        <button onClick={() => changeTheme("uchiha")} className="px-4 py-2 bg-red-600 text-white rounded">
          Uchiha
        </button>
      </div>
    </div>
  );
}
<ThemeChanger />
