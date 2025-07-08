import {twMerge} from 'tailwind-merge'

function Container({children, className, ...restProps}) {
  return (
    <div
      className={twMerge('mx-auto max-w-5xl px-4', className)}
      {...restProps}
    >
      {children}
    </div>
  )
}

export default Container
