import clsx from 'clsx/lite'
import {useEffect, useState} from 'react'
import {createPortal} from 'react-dom'

function Modal({children, isOpen: shouldOpen, onOpenChange}) {
  const [isOpen, setIsOpen] = useState(shouldOpen)

  function handleClickOutside(e) {
    if (e.target === e.currentTarget) onOpenChange(false)
  }

  function closeAfterAnimation() {
    if (!shouldOpen) setIsOpen(false)
  }

  useEffect(() => {
    if (shouldOpen) setIsOpen(true)
  }, [shouldOpen])

  useEffect(() => {
    document.body.classList.toggle('scroll-locked', isOpen)
  }, [isOpen])

  if (!isOpen) return null

  return createPortal(
    <>
      <div
        className={clsx('overlay', shouldOpen || 'is-closed')}
        onClick={handleClickOutside}
        onAnimationEnd={closeAfterAnimation}
      >
        <div className={clsx('modal', shouldOpen || 'is-closed')} role="dialog">
          {children}
        </div>
      </div>
      <style jsx global>{`
        .scroll-locked {
          overflow: hidden;
        }
      `}</style>
      <style jsx>{`
        .overlay {
          --enter-scale: 1;

          position: fixed;
          inset: 0;
          z-index: 10000;
          display: grid;
          place-items: center;
          background-color: color-mix(
            in oklab,
            var(--background) 50%,
            transparent
          );
          animation: enter 0.2s backwards;
        }

        .overlay.is-closed {
          animation: exit 0.2s forwards;
        }

        .modal {
          --enter-scale: 0.95;
          --exit-scale: 0.95;

          inline-size: min(calc(100% - 2 * var(--container-padding)), 26.5rem);
          padding: 1.5rem;
          border: 1px solid var(--border);
          border-radius: 0.5rem;
          color: var(--foreground);
          background-color: var(--background);
          animation: enter 0.2s backwards;
        }

        .modal.is-closed {
          animation: exit 0.2s forwards;
        }

        @keyframes enter {
          from {
            scale: var(--enter-scale, 1);
            opacity: 1;
          }
        }

        @keyframes exit {
          to {
            scale: var(--exit-scale, 1);
            opacity: 0;
          }
        }
      `}</style>
    </>,
    document.getElementById('portal'),
  )
}

export default Modal
