import {Moon, Sun} from 'lucide-react'

import {useState, useEffect} from 'react'

function ThemeController() {
  // Check initial theme
  const isDark =
    document.documentElement.getAttribute('data-theme') === 'synthwave'
  const [dark, setDark] = useState(isDark)

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      dark ? 'synthwave' : 'pastel',
    )
  }, [dark])

  function handleToggle() {
    setDark((prev) => !prev)
  }

  return (
    <label className="swap swap-rotate cursor-pointer">
      <input
        type="checkbox"
        checked={dark}
        onChange={handleToggle}
        aria-label="Toggle dark mode"
      />
      <Sun className="swap-on" />
      <Moon className="swap-off" />
    </label>
  )
}

export default ThemeController
