import clsx from 'clsx/lite'

const BASE_CLASSES =
  'border shadow-lg transition-[color,background-color,box-shadow] duration-500 disabled:opacity-50 disabled:pointer-events-none'

const VARIANTS = {
  primary:
    'border-transparent text-black bg-cyan-500 hover:bg-cyan-300 shadow-cyan-400/20 hover:shadow-400/40',
  alert: 'border-transparent bg-red-600 hover:bg-red-800',
  success: 'border-transparent bg-green-600 hover:bg-green-300 text-black',
  outline:
    'border-cyan-700 hover:bg-cyan-300 hover:text-gray-950 shadow-cyan-400/20 hover:shadow-cyan-400/40',
}

const SIZES = {
  sm: 'rounded-sm px-2 py-1 text-sm',
  md: 'rounded-md px-2 py-1',
  lg: 'rounded-lg px-4 py-2 text-lg',
}

/**
 * Button component with variants for different styles/sizes.
 * @param {object} props
 * @param {'primary'|'alert'|'success'|'outline'} [props.variant] - Visual variant of the spoiler
 * @param {'sm'|'md'|'lg'} [props.size] - Sizes of the spoiler
 */
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
