import {ChevronDown} from 'lucide-react'
import {useState} from 'react'
import clsx from 'clsx'

function Spoiler({
  isOpen: initIsOpen = false,
  title,
  children,
  type = 'h2',
  className,
}) {
  const [isOpen, setIsOpen] = useState(initIsOpen)
  const panelClasses = clsx(
    'grid transition-[grid-template-rows,visibility] duration-300',
    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr] invisible',
  )
  const iconClasses = clsx(
    'size-[1em] transition-transform duration-300',
    isOpen || '-scale-y-100',
  )
  const Type = type

  return (
    <div className={className}>
      <Type>
        <button
          onClick={() => setIsOpen((o) => !o)}
          className="text-start text-2xl w-full flex gap-2 align-baseline justify-between hover:text-cyan-400 transition-[color]"
          type="button"
          aria-expanded={isOpen}
        >
          {title}
          <span className="h-lh flex items-center flex-none">
            <ChevronDown className={iconClasses} />
          </span>
        </button>
      </Type>
      <div className={panelClasses} role="region">
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  )
}

export default Spoiler
