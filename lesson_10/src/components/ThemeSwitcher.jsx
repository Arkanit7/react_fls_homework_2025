import {useThemeContext} from '@/context/ThemeContext'
import Clickable from './ui/Clickable'
import {THEMES} from '@/lib/constants'

function ThemeSwitcher() {
  const {theme, setTheme} = useThemeContext()

  function applyTheme(newTheme) {
    return () => setTheme(newTheme)
  }

  return (
    <div>
      {theme}
      <Clickable onClick={applyTheme(THEMES.DARK)}>Dark</Clickable>
      <Clickable onClick={applyTheme(THEMES.LIGHT)}>Light</Clickable>
      <Clickable onClick={applyTheme(THEMES.SOLARIZED)}>Solarized</Clickable>
    </div>
  )
}

export default ThemeSwitcher
