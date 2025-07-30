import {createPortal} from 'react-dom'
import Clickable from './Clickable'
import {X} from 'lucide-react'

function Modal({children, onClose}) {
  return createPortal(
    <>
      <div className="overlay">
        <div className="dialog" role="dialog">
          <Clickable variant="icon" onClick={onClose}>
            <X />
          </Clickable>
          {children}
        </div>
      </div>
      <style jsx>{`
        .overlay {
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
        }

        .dialog {
          inline-size: min(calc(100% - 2 * var(--container-padding)), 26.5rem);
          padding: 1.5rem;
          border: 1px solid var(--border);
          border-radius: 0.5rem;
          color: var(--foreground);
          background-color: var(--background);
        }
      `}</style>
    </>,
    document.getElementById('portal'),
  )
}

export default Modal
