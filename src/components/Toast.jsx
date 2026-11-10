import React, { useEffect } from 'react'

export default function Toast({ message, duration = 3000, onClose }) {
  useEffect(() => {
    const t = setTimeout(() => {
      onClose && onClose()
    }, duration)
    return () => clearTimeout(t)
  }, [duration, onClose])

  return (
    <div className="app-toast">
      {message}
    </div>
  )
}
