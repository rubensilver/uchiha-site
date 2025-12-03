"use client"

import { useState } from "react"

export default function SettingsPage() {
  const [adminEmail, setAdminEmail] = useState("")
  const [adminPassword, setAdminPassword] = useState("")
  const [jwtSecret, setJwtSecret] = useState("")
  const [status, setStatus] = useState("")

  const handleSave = (e: any) => {
    e.preventDefault()
    setStatus("Configurações salvas (simulação, sem servidor ainda) ✔️")
  }

  return (
    <div className="text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Configurações</h1>

      <form onSubmit={handleSave} className="space-y-5 max-w-xl">

        <div>
          <label className="block mb-1 text-gray-300">E-mail do Administrador</label>
          <input
            type="email"
            placeholder="admin@uchiha.com"
            value={adminEmail}
            onChange={e => setAdminEmail(e.target.value)}
            className="w-full p-3 rounded bg-black/40 border border-gray-700"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-300">Senha do Administrador</label>
          <input
            type="password"
            placeholder="••••••••"
            value={adminPassword}
            onChange={e => setAdminPassword(e.target.value)}
            className="w-full p-3 rounded bg-black/40 border border-gray-700"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-300">JWT Secret</label>
          <input
            type="text"
            placeholder="chave-super-secreta"
            value={jwtSecret}
            onChange={e => setJwtSecret(e.target.value)}
            className="w-full p-3 rounded bg-black/40 border border-gray-700"
          />
        </div>

        <button
          className="px-6 py-3 rounded bg-red-600 hover:bg-red-700 transition"
        >
          Salvar Configurações
        </button>

        {status && <p className="mt-3 text-green-400">{status}</p>}
      </form>
    </div>
  )
}
