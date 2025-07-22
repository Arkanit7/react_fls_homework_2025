import {cn} from '@/lib/utils'

const VARIANTS = {
  base: '',
  icon: 'size-8 p-1.5',
}

function Clickable({
  className = '',
  variant = 'base',
  as = 'button',
  ...restProps
}) {
  const Type = as

  return (
    <Type
      className={cn(
        'flex h-8 items-center rounded-lg px-3 text-sm font-medium whitespace-nowrap transition-colors outline-none hover:bg-accent hover:text-accent-foreground focus-visible:ring-3 focus-visible:ring-ring/50 [.active]:text-foreground/60',
        VARIANTS[variant],
        className,
      )}
      {...restProps}
    />
  )
}

export default Clickable
