import clsx from 'clsx/lite'

const BASE_CLASSES = 'border transition-colors duration-200 disabled:opacity-40'

const VARIANTS = {
  primary: 'border-transparent text-black bg-cyan-400 hover:bg-cyan-600',
  alert: 'border-transparent bg-red-600 hover:bg-red-800',
  success: 'border-transparent bg-green-500 hover:bg-green-300 text-black',
  outline:
    'border-cyan-400 hover:bg-cyan-400 hover:text-gray-950 shadow-lg shadow-cyan-400/20',
}

const SIZES = {
  sm: 'rounded-sm p-1 text-sm',
  md: 'rounded-md px-2 py-1',
  lg: 'rounded-lg px-4 py-2 text-lg',
}

function Button({
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  ...restProps
}) {
  const classes = clsx(BASE_CLASSES, VARIANTS[variant], SIZES[size], className)

  return <button className={classes} type={type} {...restProps} />
}

export default Button
