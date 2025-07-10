import clsx from 'clsx/lite'

function Container({className = '', ...restProps}) {
  return (
    <div
      className={clsx(
        'mx-auto max-w-(--container-width) px-(--page-padding)',
        className,
      )}
      {...restProps}
    />
  )
}

export default Container
