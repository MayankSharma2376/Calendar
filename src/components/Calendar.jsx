import React, { useState, useEffect } from "react"
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  addMonths,
  subMonths,
  isSameDay,
  getDay
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

  const clearDates = () => {
    setStartDate(null)
    setEndDate(null)
    localStorage.removeItem("startDate")
    localStorage.removeItem("endDate")
  }

  const start = startOfMonth(currentMonth)
  const end = endOfMonth(currentMonth)
  const days = eachDayOfInterval({ start, end })
  const startDay = getDay(start)

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">

        <button
          onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
          className="px-4 py-2 border rounded-lg hover:bg-gray-100"
        >
          ←
        </button>

        <h2 className="text-2xl font-semibold">
          {format(currentMonth, "MMMM yyyy")}
        </h2>

        <button
          onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
          className="px-4 py-2 border rounded-lg hover:bg-gray-100"
        >
          →
        </button>

      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 mb-3 text-gray-500 text-center">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>

      {/* Calendar */}
      <div className="grid grid-cols-7 gap-3">

        {Array.from({ length: startDay }).map((_, i) => (
          <div key={i}></div>
        ))}

        {days.map((day) => (

          <button
            key={day}
            onClick={() => handleClick(day)}
            className={`
            h-20 rounded-xl border p-2 text-left
            hover:scale-105 hover:bg-gray-50 transition
            ${startDate && isSameDay(day, startDate) ? "bg-blue-500 text-white" : ""}
            ${endDate && isSameDay(day, endDate) ? "bg-green-500 text-white" : ""}
            ${startDate && endDate && day > startDate && day < endDate ? "bg-blue-100" : ""}
            `}
          >

            {format(day, "d")}

          </button>

        ))}

      </div>

      {/* Clear Button */}
      <button
        onClick={clearDates}
        className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg"
      >
        Clear Selection
      </button>

    </div>
  )
}

export default Calendar