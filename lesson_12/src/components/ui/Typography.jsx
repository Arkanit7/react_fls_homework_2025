import clsx from 'clsx/lite'

function Typography({as = 'p', variant = as, className = '', ...restProps}) {
  const Type = as

  return (
    <>
      <div className={clsx(variant, className)} {...restProps} />
      <style jsx>{`
        .p {
        }

        .h1 {
          font-weight: 500;
          font-size: clamp(2.5rem, 5vi, 3rem);
          line-height: 1.125;
        }

        .h2 {
          font-weight: 500;
          font-size: clamp(1.75rem, 5vi, 2rem);
          line-height: 1.25;
        }

        .h3 {
          font-weight: 500;
          font-size: clamp(1.375rem, 5vi, 1.5rem);
          line-height: 1.375;
        }

        .code {
          font-family: monospace;
        }
      `}</style>
    </>
  )
}

export default Typography
