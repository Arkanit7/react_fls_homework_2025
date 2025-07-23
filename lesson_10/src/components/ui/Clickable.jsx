import {cn} from '@/lib/utils'

const baseClasses =
  'rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-[background-color] disabled:pointer-events-none disabled:opacity-50'

const sizes = {
  default: 'py-2 px-4',
  sm: 'py-1.5 px-3',
  lg: 'py-3 px-9',
  xl: 'py-3 px-9 text-lg',
}

function Clickable({
  size = 'default',
  className = '',
  as = 'button',
  ...restProps
}) {
  const Type = as

  return (
    <Type className={cn(baseClasses, sizes[size], className)} {...restProps} />
  )
}

export default Clickable
