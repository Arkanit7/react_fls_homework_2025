import clsx from 'clsx/lite'

function Clickable({
  as = 'button',
  className = '',
  variant = '',
  size = '',
  ...restProps
}) {
  const Type = as

  return (
    <>
      <Type
        className={clsx(
          'button',
          variant && `button--variant--${variant}`,
          size && `button--size--${size}`,
          className,
        )}
        type={as === 'button' ? 'button' : undefined}
        {...restProps}
      />
      <style jsx global>{`
        .button *:is(svg, img) {
          flex: none;
          block-size: 100%;
        }
      `}</style>
      <style jsx>{`
        .button {
          flex: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.625em;

          block-size: 2.5em;
          padding-inline: 1em;
          text-align: center;
          border-radius: 0.375rem;
          color: var(--primary-foreground);
          background-color: var(--primary);
          outline: none;
          transition-property: color, background-color, box-shadow;
          transition-duration: 0.3s;

          font-size: 0.875rem;
          font-weight: 500;
          line-height: 1.375;
          white-space: nowrap;
        }

        .button:focus-visible {
          box-shadow:
            0 0 0 3px color-mix(in oklab, var(--ring) 50%, transparent),
            rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
        }

        .button--size--sm {
          font-size: 0.75rem;
        }

        .button--size--lg {
          font-size: 1rem;
        }

        .button--variant--outline {
          border: 1px solid var(--border);
          color: var(--foreground);
          background-color: color-mix(var(--background) 30%, transparent);
        }

        .button--variant--icon {
          padding: 0.375em;
          aspect-ratio: 1;
          color: var(--secondary-foreground);
          background-color: var(--secondary);
        }

        .button--variant--ghost {
          background-color: transparent;
          color: var(--foreground);
        }

        .button:disabled {
          pointer-events: none;
          opacity: 0.5;
        }

        @media (any-hover: hover) {
          .button:hover {
            background-color: color-mix(
              in oklab,
              var(--primary) 85%,
              transparent
            );
          }

          .button--variant--outline:hover {
            background-color: color-mix(
              in oklab,
              var(--primary) 15%,
              transparent
            );
          }

          .button--variant--icon:hover {
            background-color: color-mix(
              in oklab,
              var(--secondary) 85%,
              transparent
            );
          }

          .button--variant--ghost:hover {
            background-color: color-mix(
              in oklab,
              var(--secondary) 85%,
              transparent
            );
          }
        }
      `}</style>
    </>
  )
}

export default Clickable
