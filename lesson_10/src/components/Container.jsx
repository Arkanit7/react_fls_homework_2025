import {cn} from '@/lib/utils'

function Container({className, ...restProps}) {
  return (
    <div className={cn('mx-auto max-w-5xl px-3', className)} {...restProps} />
  )
}

export default Container
