import Button from '@/components/Button'
import {ChevronRight, ChevronLeft} from 'lucide-react'
import {CHEVRON_CLASSES} from '../constants'

function SportsmanItem({name, isChosen, toggleChosen}) {
  return (
    <div className="py-2 flex items-start justify-between">
      {name}
      <Button
        onClick={toggleChosen}
        variant={isChosen ? 'alert' : 'success'}
        className="flex-none"
      >
        {isChosen ? (
          <ChevronLeft className={CHEVRON_CLASSES} />
        ) : (
          <ChevronRight className={CHEVRON_CLASSES} />
        )}
      </Button>
    </div>
  )
}

export default SportsmanItem
