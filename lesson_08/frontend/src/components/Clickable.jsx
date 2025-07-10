import {twMerge} from 'tailwind-merge'

const BASE_CLASSES =
  'inline-block text-center transition-colors disabled:cursor-not-allowed disabled:opacity-50'

const VARIANTS = {
  primary: 'bg-accent-400 not-disabled:hover:bg-accent-500',
  alert: 'bg-red-400 not-disabled:hover:bg-red-500',
  warning: 'bg-yellow-400 text-black not-disabled:hover:bg-yellow-500',
  outline: 'border-1 border-accent-400 not-disabled:hover:bg-accent-500',
}

const SIZES = {
  sm: 'px-3 py-1 rounded text-sm',
  md: 'font-bold px-6 py-2 rounded-lg',
  lg: 'font-bold rounded-xl px-9 py-3',
}

function Clickable({
  type = 'button',
  as = 'button',
  variant = 'primary',
  size = 'md',
  className,
  ...restProps
}) {
  const Type = as

  return (
    <Type
      className={twMerge(
        BASE_CLASSES,
        VARIANTS[variant],
        SIZES[size],
        className,
      )}
      type={as === 'button' && type}
      {...restProps}
    />
  )
}

export default Clickable
