import {cn} from '@/lib/utils'

const variants = {
  h1: 'text-[clamp(var(--text-3xl),_5vi,_var(--text-5xl))] leading-none font-medium',
  h2: 'text-[clamp(var(--text-xl),_4vi,_var(--text-4xl))] leading-tight font-medium',
  h3: '',
  base: '',
  price: '',
  subtitle: 'text-[clamp(var(--text-lg),_5vi,_var(--text-2xl))] font-medium',
}

function Typography({
  variant = 'base',
  as = 'p',
  className = '',
  ...restProps
}) {
  const Type = as
  return <Type className={cn(variants[variant], className)} {...restProps} />
}

export default Typography
