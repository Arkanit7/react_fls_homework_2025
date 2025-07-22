import Clickable from '@/components/ui/Clickable'
import Typography from '@/components/ui/Typography'
import {useBusesContext} from '@/context/BusesContext'
import {BUSES_ACTIONS} from '@/lib/constants'
import {calcTimePassed, cn} from '@/lib/utils'

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
const durationFormatter = new Intl.DurationFormat('uk-UA', {style: 'narrow'})

function PlaceInfo({place, date}) {
  return (
    <div className="fex-none sm:space-y-1">
      <div className="font-medium sm:text-lg">{timeFormatter.format(date)}</div>
      <div className="text-muted-foreground max-sm:text-sm">
        {dateFormatter.format(date)}
      </div>
      <div className="font-medium max-sm:text-sm">{place}</div>
    </div>
  )
}

function BussCard({
  id,
  isSelected,
  departureDate,
  arrivalDate,
  departurePlace,
  arrivalPlace,
  priceUah,
}) {
  const {busesDispatch} = useBusesContext()

  function toggleBusSelection() {
    busesDispatch({
      type: BUSES_ACTIONS.TOGGLE_SELECTION,
      payload: {
        id,
      },
    })
  }

  const travelDuration = durationFormatter.format(
    calcTimePassed(arrivalDate - departureDate),
  )

  return (
    <article
      className={cn(
        'relative rounded-lg border border-border bg-card px-3 pt-8 pb-4',
        isSelected && 'bg-secondary',
      )}
    >
      <div className="absolute top-0 left-0 overflow-hidden rounded-tl-lg rounded-br-2xl bg-primary px-4 py-0.25 text-sm font-medium text-primary-foreground">
        №{id}
      </div>

      <div className="grid items-start gap-x-4 gap-y-4 sm:grid-cols-[var(--container-sm)_calc(var(--spacing)_*_32)] sm:justify-between">
        <div className="flex items-baseline gap-2 sm:gap-4">
          <PlaceInfo date={departureDate} place={departurePlace} />

          <div className="flex flex-auto items-center">
            <span className="size-3 flex-none rounded-full border-2 border-foreground sm:size-4"></span>
            <span className="flex-auto border border-dashed border-foreground"></span>
            <span className="px-2 text-xs font-medium sm:text-sm">
              {travelDuration}
            </span>
            <span className="flex-auto border border-dashed border-foreground"></span>
            <span className="size-3 flex-none rounded-full border-2 border-foreground sm:size-4"></span>
          </div>

          <PlaceInfo date={arrivalDate} place={arrivalPlace} />
        </div>

        <div className="grid justify-items-center gap-2">
          <div className="text-xl font-medium">
            {currencyFormatter.format(priceUah)}
          </div>
          <Clickable className="max-sm:w-full" onClick={toggleBusSelection}>
            {isSelected ? 'Зняти' : 'Обрати'}
          </Clickable>
        </div>
      </div>
    </article>
  )
}

export default BussCard
