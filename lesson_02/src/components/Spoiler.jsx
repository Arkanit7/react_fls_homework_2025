import {ChevronUpIcon} from '@heroicons/react/24/solid'
import {useLocalStorage} from '@/hooks'

function Spoiler({
  isOpen: initIsOpen = false,
  title,
  children,
  type = 'h2',
  className,
}) {
  const [isOpen, setIsOpen] = useLocalStorage('spoilerIsOpen', initIsOpen)
  const panelClasses = isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
  const iconClasses = isOpen ? '' : '-scale-y-100'
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
          <span className="self-center">{title}</span>
          <ChevronUpIcon
            className={`flex-none size-[1em] transition-transform duration-300 ${iconClasses}`}
          />
        </button>
      </Type>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ${panelClasses}`}
        role="region"
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  )
}

export default Spoiler
