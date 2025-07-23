import Container from '@/components/Container'
import Typography from '@/components/ui/Typography'
import BusCard from '@/components/BusCard'
import {useBusesContext} from '@/contexts/BusesContext'
import Clickable from '@/components/ui/Clickable'
import {BUSES_ACTIONS} from '@/lib/constants'

function Buses() {
  const {buses, busesDispatch} = useBusesContext()
  const isEmpty = buses.length === 0
  const hasSelection = buses.some((bus) => bus.isSelected)

  function clearSelection() {
    busesDispatch({type: BUSES_ACTIONS.CLEAR_SELECTION})
  }

  return (
    <Container className="space-y-4">
      <Typography as="h1" variant="h1">
        Автобуси
      </Typography>
      {isEmpty ? (
        <div className="text-muted-foreground">Тут поки порожньо...</div>
      ) : (
        <>
          <div className="space-y-2 sm:space-y-4">
            {buses.map((bus) => (
              <BusCard key={bus.id} {...bus} />
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

export default Buses
