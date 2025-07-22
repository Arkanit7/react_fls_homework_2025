import BusCard from '@/components/BusCard'
import Container from '@/components/Container'
import HotelCard from '@/components/HotelCard'
import Typography from '@/components/ui/Typography'
import {useBusesContext} from '@/context/BusesContext'
import {useHotelsContext} from '@/context/HotelsContext'

// eslint-disable-next-line no-unused-vars
function Section({title, items, Card}) {
  if (items.length === 0) return null

  return (
    <section className="space-y-2">
      <Typography as="h2" variant="h2">
        {title}
      </Typography>
      <div className="space-y-2 sm:space-y-4">
        {items.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </section>
  )
}

function Booking() {
  const {buses} = useBusesContext()
  const {hotels} = useHotelsContext()

  const selectedBuses = buses.filter(({isSelected}) => isSelected)
  const selectedHotels = hotels.filter(({isSelected}) => isSelected)

  const isEmpty = selectedBuses.length === 0 && selectedHotels.length === 0

  return (
    <Container className="space-y-4">
      <Typography as="h1" variant="h1">
        Бронювання
      </Typography>

      {isEmpty ? (
        <div className="text-muted-foreground">Тут поки порожньо...</div>
      ) : (
        <>
          <Section title="Автобуси" items={selectedBuses} Card={BusCard} />
          <Section title="Готелі" items={selectedHotels} Card={HotelCard} />
        </>
      )}
    </Container>
  )
}

export default Booking
