import {THEMES} from '@/lib/constants'
import {createContext, useContext, useState} from 'react'

const initialState = {
  theme: THEMES.DARK,
  setTheme: () => null,
}

const ThemeContext = createContext(initialState)

export function useThemeContext() {
  return useContext(ThemeContext)
}

export function ThemeProvider({children}) {
  const [theme, setTheme] = useState(THEMES.DARK)

  return <ThemeContext value={{theme, setTheme}}>{children}</ThemeContext>
}
