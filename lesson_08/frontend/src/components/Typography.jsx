import {twMerge} from 'tailwind-merge'

const VARIANTS = {
  hero: 'text-3xl md:text-4xl lg:text-5xl font-bold',
  h1: 'text-2xl md:text-3xl lg:text-4xl font-bold',
  h2: 'text-lg md:text-xl lg:text-2xl font-bold',
  h3: 'md:text-lg font-bold',
  p: 'text-sm md:text-base',
}

function Typography({as = 'p', variant = as, className = '', ...restProps}) {
  const Type = as
  return (
    <Type className={twMerge(VARIANTS[variant], className)} {...restProps} />
  )
}

export default Typography
