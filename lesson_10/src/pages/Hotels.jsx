import Container from '@/components/Container'
import Typography from '@/components/ui/Typography'
import HotelCard from '@/components/HotelCard'
import {useHotelsContext} from '@/context/HotelsContext'

function Hotels() {
  const {hotels} = useHotelsContext()
  const isEmpty = hotels.length === 0

  return (
    <Container className="space-y-4">
      <Typography as="h1" variant="h1">
        Готелі
      </Typography>
      {isEmpty ? (
        <div className="text-muted-foreground">Тут поки порожньо...</div>
      ) : (
        <div className="space-y-2 sm:space-y-4">
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} {...hotel} />
          ))}
        </div>
      )}
    </Container>
  )
}

export default Hotels
