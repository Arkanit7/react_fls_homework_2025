import Clickable from '@/components/ui/Clickable'
import Typography from '@/components/ui/Typography'
import {useHotelsContext} from '@/contexts/HotelsContext'
import {HOTELS_ACTIONS} from '@/lib/constants'
import {cn} from '@/lib/utils'
import {Star} from 'lucide-react'

const dateFormatter = new Intl.DateTimeFormat('uk-UA', {
  day: 'numeric',
  month: 'long',
})
const timeFormatter = new Intl.DateTimeFormat('uk-UA', {timeStyle: 'short'})
const currencyFormatter = new Intl.NumberFormat('uk-UA', {
  currency: 'UAH',
  style: 'currency',
  maximumFractionDigits: 0,
})

function HotelCard({
  id,
  isSelected,
  title,
  stars,
  checkInDate,
  checkOutDate,
  priceUah,
  thumbnail,
  place,
}) {
  const {hotelsDispatch} = useHotelsContext()

  function toggleHotelSelection() {
    hotelsDispatch({
      type: HOTELS_ACTIONS.TOGGLE_SELECTION,
      payload: {id},
    })
  }

  return (
    <article
      className={cn(
        'relative rounded-lg border border-border bg-card px-3 pt-8 pb-4',
        isSelected && 'bg-secondary',
      )}
    >
      <div className="absolute top-0 left-0 flex items-center gap-1 overflow-hidden rounded-tl-lg rounded-br-2xl bg-primary px-4 py-0.5 text-sm font-medium text-primary-foreground">
        {stars} <Star className="size-4" />
      </div>

      <div className="grid items-start gap-x-4 gap-y-4 sm:grid-cols-[var(--container-sm)_calc(var(--spacing)_*_32)] sm:justify-between">
        <div className="flex items-start gap-2 sm:gap-4">
          <div>
            <img
              className="size-30 rounded-sm object-cover"
              src={thumbnail}
              alt=""
            />
          </div>

          <div className="space-y-0.5">
            <Typography as="h2" variant="subtitle">
              {title}
            </Typography>

            <p className="font-medium text-muted-foreground">{place}</p>

            <p className="max-sm:text-sm">
              <span className="font-medium">Заселення</span>:{' '}
              {dateFormatter.format(checkInDate)}{' '}
              {timeFormatter.format(checkInDate)}
            </p>

            <p className="max-sm:text-sm">
              <span className="font-medium">Виселення</span>:{' '}
              {dateFormatter.format(checkOutDate)}{' '}
              {timeFormatter.format(checkOutDate)}
            </p>
          </div>
        </div>

        <div className="grid justify-items-center gap-2">
          <div className="text-xl font-medium">
            {currencyFormatter.format(priceUah)}
          </div>
          <Clickable className="max-sm:w-full" onClick={toggleHotelSelection}>
            {isSelected ? 'Зняти' : 'Обрати'}
          </Clickable>
        </div>
      </div>
    </article>
  )
}

export default HotelCard
