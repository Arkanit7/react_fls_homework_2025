import styles from './NewProductDialog.module.scss'
import Clickable from '@/components/Clickable'
import NewProductForm from '../NewProductForm'
import {useRef, useState} from 'react'
import {createPortal} from 'react-dom'

function NewProductDialog() {
  const [isOpen, setIsOpen] = useState(false)
  const overlayRef = useRef()

  function closeDialog() {
    document.body.classList.remove('scroll-locked')
    setIsOpen(false)
  }

  function openDialog() {
    document.body.classList.add('scroll-locked')
    setIsOpen(true)
  }

  function handleOverlayClick(e) {
    if (e.target !== overlayRef.current) return
    closeDialog()
  }

  return (
    <>
      <Clickable onClick={openDialog} variant="outline">
        Add a product
      </Clickable>
      {isOpen &&
        createPortal(
          <div
            className={styles.overlay}
            onClick={handleOverlayClick}
            ref={overlayRef}
          >
            <div className={styles.dialog} role="dialog">
              <NewProductForm closeDialog={closeDialog} />
            </div>
          </div>,
          document.getElementById('portal'),
        )}
    </>
  )
}

export default NewProductDialog
