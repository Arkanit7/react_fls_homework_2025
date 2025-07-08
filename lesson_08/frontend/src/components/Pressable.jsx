import {twMerge} from 'tailwind-merge'

const BASE_CLASSES =
  'inline-block rounded-lg p-1.5 aspect-square text-center font-bold transition-[background-color]'

const VARIANTS = {
  primary: 'bg-accent-400 hover:bg-accent-500',
  warning: 'bg-orange-400 hover:bg-orange-500',
  info: 'bg-blue-400 hover:bg-blue-500',
  alert: 'bg-red-400 hover:bg-red-500',
}

function Pressable({
  type = 'button',
  as = 'button',
  variant = 'primary',
  className,
  ...restProps
}) {
  const Type = as

  return (
    <Type
      className={twMerge(BASE_CLASSES, VARIANTS[variant], className)}
      type={type}
      {...restProps}
    />
  )
}

export default Pressable
