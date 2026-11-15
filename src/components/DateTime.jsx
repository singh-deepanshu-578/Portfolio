import React, { useState, useEffect } from 'react'

const DateTime = () => {
  const [dateTime, setDateTime] = useState('')

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      const weekday = now.toLocaleDateString('en-US', { weekday: 'short' }).toLowerCase()
      const date = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }).toLowerCase()
      const time = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }).toLowerCase()

      setDateTime({ weekday, date, time })
    }

    updateDateTime()
    const interval = setInterval(updateDateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <time className="date-time">
      <span>{dateTime.weekday}</span>
      <span>{dateTime.date}</span>
      <strong>{dateTime.time}</strong>
    </time>
  )
}

export default DateTime