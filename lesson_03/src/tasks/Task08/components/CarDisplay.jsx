import {useState} from 'react'
import CarList from './CarList'
import FilterList from './FilterList'
import {getComputedFilters, getFilteredCars} from '../utils'

function CarDisplay({cars, filters}) {
  const [selectedFilters, setSelectedFilters] = useState(() => ({}))
  const filteredCars = getFilteredCars(cars, selectedFilters)
  const computedFilters = getComputedFilters(cars, filters)

  return (
    <div className="grid grid-cols-[12rem_1fr] gap-4 items-start">
      <aside className="border p-2 rounded space-y-2">
        <h3 className="text-lg font-medium">Фільтри</h3>
        <div className="space-y-2">
          {[...computedFilters].map(([filter, propertiesToFilter], i) => (
            <FilterList
              key={i}
              filter={filter}
              propertiesToFilter={[...propertiesToFilter]}
              setSelectedFilters={setSelectedFilters}
            />
          ))}
        </div>
      </aside>

      <CarList cars={filteredCars} />
    </div>
  )
}

export default CarDisplay
