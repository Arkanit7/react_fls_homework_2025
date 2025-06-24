import clsx from 'clsx'

const BASE_CLASSES =
  'w-full px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors disabled:opacity-50 disabled:pointer-events-none'

const VARIANTS = {
  primary: '',
  hidden: 'invisible',
  selected: 'ring-2 ring-cyan-400',
  alert: 'ring-2 ring-red-400',
  success: 'ring-2 ring-green-400',
}

function Pill({
  variant = 'primary',
  type = 'button',
  disabled,
  className,
  ...restProps
}) {
  const classes = clsx(BASE_CLASSES, VARIANTS[variant], className)

  return (
    <button
      className={classes}
      type={type}
      disabled={disabled}
      {...restProps}
    />
  )
}

export default Pill
