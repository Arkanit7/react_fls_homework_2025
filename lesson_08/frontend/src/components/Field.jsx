import {twMerge} from 'tailwind-merge'

function Field({type = 'text', className, ...restProps}) {
  return (
    <input
      className={twMerge(
        'rounded-xl bg-primary-450 px-4 py-3 text-sm transition-[box-shadow] not-disabled:hover:ring not-disabled:hover:ring-accent-400 disabled:cursor-not-allowed',
        className,
      )}
      type={type}
      {...restProps}
    />
  )
}

export default Field
