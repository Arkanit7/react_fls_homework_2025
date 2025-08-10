import {useLocalStorage} from '@/hooks'
import {THEME_DARK, THEME_DEFAULT, THEME_STORAGE_KEY} from '@/lib/constants'
import {Moon, Sun} from 'lucide-react'
import {useEffect} from 'react'

function ThemeController() {
  const [theme, setTheme] = useLocalStorage(THEME_STORAGE_KEY, THEME_DEFAULT)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  function toggleTheme() {
    setTheme((prevTheme) =>
      prevTheme === THEME_DEFAULT ? THEME_DARK : THEME_DEFAULT,
    )
  }

  return (
    <label className="swap swap-rotate cursor-pointer">
      <input
        type="checkbox"
        checked={theme === THEME_DARK}
        onChange={toggleTheme}
        aria-label="Toggle dark mode"
      />
      <Sun className="swap-on" />
      <Moon className="swap-off" />
    </label>
  )
}

export default ThemeController
