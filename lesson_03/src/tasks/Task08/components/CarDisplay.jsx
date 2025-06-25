import {useState} from 'react'
import CarList from './CarList'
import FilterList from './FilterList'
import {getComputedFilters, getFilteredCars} from '../utils'
import {ListFilter} from 'lucide-react'

function CarDisplay({cars, filters}) {
  const [selectedFilters, setSelectedFilters] = useState(() => ({}))
  const filteredCars = getFilteredCars(cars, selectedFilters)
  const computedFilters = getComputedFilters(cars, filters)

  return (
    <div className="grid xs:grid-cols-[12rem_1fr] gap-4 items-start">
      <aside className="border rounded divide-y-1 divide-cyan-900 border-cyan-900">
        <h3 className="text-lg font-medium p-2 flex gap-2 items-start">
          <ListFilter className="h-lh flex-none" /> Фільтри
        </h3>
        <div className="divide-y-1 divide-cyan-900">
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
