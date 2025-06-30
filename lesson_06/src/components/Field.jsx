import clsx from 'clsx/lite'

const BASE_CLASSES =
  'border-1 border-cyan-700 bg-black transition-[border-color] hover:border-cyan-500 disabled:pointer-events-none disabled:opacity-50'

const SIZES = {
  sm: 'rounded px-2 py-1 text-sm',
  md: 'rounded-lg px-4 py-2',
}

function Field({className, size = 'md', type = 'text', ...restProps}) {
  return (
    <input
      className={clsx(BASE_CLASSES, SIZES[size], className)}
      type={type}
      {...restProps}
    />
  )
}

export default Field
