import {THEMES} from '@/lib/constants'
import {createContext, useContext, useLayoutEffect, useState} from 'react'

const initialState = {
  theme: THEMES.SYSTEM,
  setTheme: () => null,
}

const ThemeContext = createContext(initialState)

export function useThemeContext() {
  return useContext(ThemeContext)
}

export function ThemeProvider({
  defaultTheme = THEMES.SYSTEM,
  storageKey = 'ui-theme',
  children,
}) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem(storageKey) ?? defaultTheme,
  )

  useLayoutEffect(() => {
    const root = window.document.documentElement

    if (theme !== THEMES.SYSTEM) {
      root.dataset.theme = theme
      return
    }

    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)')

    /** @param {MediaQueryList | MediaQueryListEvent} e */
    function handleSystemThemeChange(e) {
      if (theme !== THEMES.SYSTEM) return

      root.dataset.theme = e.matches ? THEMES.DARK : THEMES.LIGHT
    }

    handleSystemThemeChange(mediaQueryList)

    mediaQueryList.addEventListener('change', handleSystemThemeChange)

    return () =>
      mediaQueryList.removeEventListener('change', handleSystemThemeChange)
  }, [theme])

  const contextValue = {
    theme,
    setTheme: (theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
  }

  return <ThemeContext value={contextValue}>{children}</ThemeContext>
}
