import Container from '@/components/Container'
import Typography from '@/components/ui/Typography'
import BussCard from '@/components/BusCard'
import {useBusesContext} from '@/context/BusesContext'

function Buses() {
  const {buses} = useBusesContext()
  const isEmpty = buses.length === 0

  return (
    <Container className="space-y-4">
      <Typography as="h1" variant="h1">
        Автобуси
      </Typography>
      {isEmpty ? (
        <div className="text-muted-foreground">Тут поки порожньо...</div>
      ) : (
        <div className="space-y-2 sm:space-y-4">
          {buses.map((bus) => (
            <BussCard key={bus.id} {...bus} />
          ))}
        </div>
      )}
    </Container>
  )
}

export default Buses
