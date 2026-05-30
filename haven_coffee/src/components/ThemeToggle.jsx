import React, { useEffect, useState } from 'react'

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    } catch (e) {
      return 'light'
    }
  })

  useEffect(() => {
    try {
      document.documentElement.setAttribute('data-theme', theme)
      localStorage.setItem('theme', theme)
    } catch (e) {
      // ignore
    }
  }, [theme])

  const toggle = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      style={{
        background: 'transparent',
        border: '2px solid rgba(255,255,255,0.12)',
        color: 'var(--nav-text)',
        padding: '6px 10px',
        borderRadius: 6,
        cursor: 'pointer'
      }}
    >
      {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
    </button>
  )
}

export default React.memo(ThemeToggle)
