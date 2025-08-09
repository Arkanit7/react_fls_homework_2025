import {cn} from '@/lib/utils'

const variants = {
  h1: 'text-base-content font-secondary text-3xl/[1.1] xs:text-4xl/[1.1] sm:text-5xl/[1] md:text-5xl/[1] lg:text-6xl/[1] xl:text-6xl/[1] tracking-tighter',
  h2: 'text-base-content font-secondary text-2xl/[1.1] md:text-3xl lg:text-4xl',
  h3: 'text-base-content text-xl/[1.15] md:text-2xl/[1.1] font-secondary',
  body1: 'text-base',
  body2: 'text-sm',
}

const defaultComponents = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  body1: 'p',
  body2: 'p',
}

function Typography({
  variant = 'body1',
  component = '',
  className = '',
  ...restProps
}) {
  const Type = component || defaultComponents[variant]
  return <Type className={cn(variants[variant], className)} {...restProps} />
}

export default Typography
