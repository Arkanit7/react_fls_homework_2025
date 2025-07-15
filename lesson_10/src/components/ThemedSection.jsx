import {useThemeContext} from '@/context/ThemeContext'
import ThemeSwitcher from './ThemeSwitcher'
import {THEMES} from '@/lib/constants'
import {cn} from '@/lib/utils'
import {ThemeProvider} from '@/context/ThemeContext'

const variants = {
  [THEMES.LIGHT]: 'bg-neutral-50',
  [THEMES.DARK]: 'bg-neutral-950',
  [THEMES.SOLARIZED]: 'bg-amber-100',
}

function ThemedSection({children, className, ...restProps}) {
  const {theme} = useThemeContext()
  console.log(theme)

  return (
    <div className={cn(variants[theme], className)} {...restProps}>
      <ThemeSwitcher />
      <div>{children}</div>
    </div>
  )
}

function ThemedSectionWrap({children, className, ...restProps}) {
  return (
    <ThemeProvider>
      <ThemedSection className={className} {...restProps}>
        {children}
      </ThemedSection>
    </ThemeProvider>
  )
}

export default ThemedSectionWrap
