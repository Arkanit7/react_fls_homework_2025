import {useThemeContext} from '@/context/ThemeContext'
import {THEMES} from '@/lib/constants'
import {cn} from '@/lib/utils'

const baseClasses = 'rounded-md text-sm font-medium'

const themeVariants = {
  [THEMES.LIGHT]: 'bg-neutral-950 text-white shadow-xs hover:bg-neutral-950/90',
  [THEMES.DARK]: 'bg-neutral-200 text-black shadow-xs hover:bg-neutral-200/60',
  [THEMES.SOLARIZED]: 'bg-amber-200 text-black shadow-xs hover:bg-amber-200/60',
}

const sizes = {
  default: 'py-2 px-4',
  sm: 'py-1.5 px-3',
  lg: 'py-3 px-6',
}

function Clickable({
  size = 'default',
  className = '',
  as = 'button',
  ...restProps
}) {
  const Type = as
  const {theme} = useThemeContext()

  return (
    <Type
      className={cn(baseClasses, themeVariants[theme], sizes[size], className)}
      {...restProps}
    />
  )
}

export default Clickable
