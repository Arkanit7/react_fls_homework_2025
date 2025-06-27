import clsx from 'clsx/lite'
import Button from '@/components/Button'
import {ChevronRight} from 'lucide-react'

function SportsmanItem({name, isChosen, toggleChosen}) {
  const chevronClasses = clsx('size-4', isChosen && 'rotate-180')

  return (
    <div className="flex items-start justify-between py-2">
      {name}
      <Button
        onClick={toggleChosen}
        variant={isChosen ? 'alert' : 'success'}
        className="flex-none"
      >
        <ChevronRight className={chevronClasses} />
      </Button>
    </div>
  )
}

export default SportsmanItem
