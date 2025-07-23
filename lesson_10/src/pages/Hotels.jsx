import Container from '@/components/Container'
import Typography from '@/components/ui/Typography'
import HotelCard from '@/components/HotelCard'
import {useHotelsContext} from '@/contexts/HotelsContext'
import {HOTELS_ACTIONS} from '@/lib/constants'
import Clickable from '@/components/ui/Clickable'

function Hotels() {
  const {hotels, hotelsDispatch} = useHotelsContext()
  const isEmpty = hotels.length === 0
  const hasSelection = hotels.some((hotel) => hotel.isSelected)

  function clearSelection() {
    hotelsDispatch({type: HOTELS_ACTIONS.CLEAR_SELECTION})
  }

  return (
    <Container className="space-y-4">
      <Typography as="h1" variant="h1">
        Готелі
      </Typography>
      {isEmpty ? (
        <div className="text-muted-foreground">Тут поки порожньо...</div>
      ) : (
        <>
          <div className="space-y-2 sm:space-y-4">
            {hotels.map((hotel) => (
              <HotelCard key={hotel.id} {...hotel} />
            ))}
          </div>
          <div className="flex justify-center">
            <Clickable
              onClick={clearSelection}
              disabled={!hasSelection}
              size="lg"
            >
              Скинути
            </Clickable>
          </div>
        </>
      )}
    </Container>
  )
}

export default Hotels
