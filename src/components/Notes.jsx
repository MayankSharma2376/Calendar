import React, { useState, useEffect } from "react"

function Notes() {

  const [note, setNote] = useState("")

  useEffect(() => {
    const saved = localStorage.getItem("note")
    if (saved) setNote(saved)
  }, [])

  const handleChange = (e) => {
    setNote(e.target.value)
    localStorage.setItem("note", e.target.value)
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">

      <h2 className="text-xl font-semibold mb-3">
        Notes
      </h2>

      <textarea
        value={note}
        onChange={handleChange}
        className="w-full h-64 border rounded-lg p-3"
        placeholder="Write your monthly notes..."
      />

    </div>
  )
}

export default Notes