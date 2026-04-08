import { useEffect, useState } from "react"

function DarkMode() {

  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
  }, [dark])

  return (
    <button
      onClick={() => setDark(!dark)}
      className="px-4 py-2 bg-black text-white rounded-lg"
    >
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  )
}

export default DarkMode