import clsx from 'clsx/lite'

function Container({className, ...restProps}) {
  return (
    <>
      <div className={clsx('container', className)} {...restProps} />
      <style jsx>{`
        .container {
          max-inline-size: var(--container);
          padding-inline: var(--container-padding);
          margin-inline: auto;
        }
      `}</style>
    </>
  )
}

export default Container
