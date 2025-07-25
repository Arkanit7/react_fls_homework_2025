import {useId, useState} from 'react'
import {ChevronDown} from 'lucide-react'
import clsx from 'clsx/lite'

/**
 * Spoiler component with variants for different styles/behaviors.
 * @param {object} props
 * @param {'default'|'compact'} [props.variant] - Visual variant of the spoiler
 */
function Spoiler({
  variant = 'default',
  isOpen: initIsOpen = false,
  title,
  children,
  as = 'h3',
  className,
}) {
  const id = useId()
  const buttonId = id + 'button'
  const panelId = id + 'panel'

  const [isOpen, setIsOpen] = useState(initIsOpen)

  // Variant-based classes
  const variantStyles = {
    compact: {
      base: '',
      panel: 'grid transition-[grid-template-rows,visibility] duration-500',
      icon: 'size-[1.25em] transition-transform duration-500',
      button:
        'text-start w-full flex gap-2 align-baseline justify-between hover:bg-cyan-300 hover:text-black hover:shadow-md hover:shadow-cyan-400/40 transition-[color,background-color,box-shadow] p-2',
      content: 'p-2',
    },
    default: {
      base: 'border border-cyan-900 bg-cyan-900/20 px-3 py-4 rounded-md',
      panel: 'grid transition-[grid-template-rows,visibility] duration-300',
      icon: 'size-[1.25em] transition-transform duration-300',
      button:
        'text-start text-xl md:text-2xl w-full flex gap-2 align-baseline justify-between hover:text-cyan-300 transition-[color] duration-300',
      content: 'pt-1.5',
    },
  }
  const styles = variantStyles[variant] || variantStyles.compact

  const baseClasses = clsx(styles.base, className)
  const panelClasses = clsx(
    styles.panel,
    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr] invisible',
  )
  const iconClasses = clsx(styles.icon, isOpen && '-scale-y-100')
  const Type = as

  return (
    <div className={baseClasses}>
      <Type>
        <button
          onClick={() => setIsOpen((o) => !o)}
          id={buttonId}
          className={styles.button}
          type="button"
          aria-controls={panelId}
          aria-expanded={isOpen}
        >
          {title}
          <span className="flex h-lh flex-none items-center">
            <ChevronDown className={iconClasses} />
          </span>
        </button>
      </Type>
      <div
        id={panelId}
        className={panelClasses}
        role="region"
        aria-labelledby={buttonId}
      >
        <div className="overflow-hidden">
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Spoiler
