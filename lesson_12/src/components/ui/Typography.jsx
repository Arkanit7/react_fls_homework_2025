import clsx from 'clsx/lite'

function Typography({as = 'p', variant = as, className = '', ...restProps}) {
  const Type = as

  return (
    <>
      <Type className={clsx(variant, className)} {...restProps} />
      <style jsx>{`
        .p {
          color: color-mix(in oklab, var(--foreground) 87%, var(--background));
        }

        .h1 {
          font-weight: 800;
          font-size: 2.25rem;
          line-height: 1.1;
          letter-spacing: -0.025rem;
        }

        .h2 {
          font-weight: 600;
          font-size: 1.875rem;
          line-height: 1.2;
          letter-spacing: -0.025rem;
        }

        .h3 {
          font-size: 1.5rem;
          font-weight: 600;
          line-height: 1.3;
          letter-spacing: -0.009rem;
        }

        .h4 {
          font-weight: 600;
          font-size: 1.25rem;
          line-height: 1.4;
          letter-spacing: -0.00625rem;
        }

        .code {
          padding: 0.1875rem 0.25rem;
          font-family: monospace;
          border-radius: 0.1875rem;
          background-color: var(--muted);
          color: var(--muted-foreground);
        }
      `}</style>
    </>
  )
}

export default Typography
