import React, { useState, useEffect } from "react"
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  addMonths,
  subMonths,
  isSameDay
} from "date-fns"

function Calendar() {

  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  useEffect(() => {
    const savedStart = localStorage.getItem("startDate")
    const savedEnd = localStorage.getItem("endDate")

    if (savedStart) setStartDate(new Date(savedStart))
    if (savedEnd) setEndDate(new Date(savedEnd))
  }, [])

  const handleClick = (day) => {
    if (!startDate) {
      setStartDate(day)
      localStorage.setItem("startDate", day)
    } else if (!endDate) {
      setEndDate(day)
      localStorage.setItem("endDate", day)
    } else {
      setStartDate(day)
      setEndDate(null)
    }
  }

  const start = startOfMonth(currentMonth)
  const end = endOfMonth(currentMonth)

  const days = eachDayOfInterval({ start, end })

  return (
    <div className="bg-white rounded-xl shadow-lg p-5">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">

        <button
          onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
          className="px-3 py-1 border rounded-lg"
        >
          ←
        </button>

        <h2 className="text-xl font-semibold">
          {format(currentMonth, "MMMM yyyy")}
        </h2>

        <button
          onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
          className="px-3 py-1 border rounded-lg"
        >
          →
        </button>

      </div>

      {/* Week Days */}
      <div className="grid grid-cols-7 text-center mb-3 text-gray-500 font-medium">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2">

        {days.map((day) => (

          <button
            key={day}
            onClick={() => handleClick(day)}
            className={`
            h-14 rounded-lg border hover:bg-gray-50 transition
            ${startDate && isSameDay(day, startDate) ? "bg-blue-500 text-white" : ""}
            ${endDate && isSameDay(day, endDate) ? "bg-green-500 text-white" : ""}
            ${startDate && endDate && day > startDate && day < endDate ? "bg-blue-100" : ""}
            `}
          >
            {format(day, "d")}
          </button>

        ))}

      </div>

    </div>
  )
}

export default Calendar