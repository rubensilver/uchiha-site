"use client"

import { useEffect } from "react"

export default function LogoutPage() {

  useEffect(() => {
    localStorage.removeItem("token")
    window.location.href = "/admin/login"
  }, [])

  return (
    <div className="text-white p-6">
      <h1 className="text-2xl">Terminando sessão...</h1>
    </div>
  )
}
