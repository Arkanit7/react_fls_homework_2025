import clsx from 'clsx/lite'

function Container({className = '', ...restProps}) {
  return (
    <div className={clsx('mx-auto max-w-4xl px-3', className)} {...restProps} />
  )
}

export default Container
