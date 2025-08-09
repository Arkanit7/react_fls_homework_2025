import {cn} from '@/lib/utils'

function Container({className, ...restProps}) {
  return (
    <div
      className={cn('mx-auto max-w-container px-padding', className)}
      {...restProps}
    />
  )
}

export default Container
