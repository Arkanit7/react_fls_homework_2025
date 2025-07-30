import clsx from 'clsx/lite'

function Container({className, children}) {
  return (
    <>
      <div className={clsx('container', className)}>{children}</div>
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
