import CarDisplay from './components/CarDisplay'
import {CARS, FILTERS_SCHEMA} from './constants'

function Task08() {
  return <CarDisplay cars={CARS} filtersSchema={FILTERS_SCHEMA} />
}

export default Task08
