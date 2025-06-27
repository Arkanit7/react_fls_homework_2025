import {useState} from 'react'
import CarList from './CarList'
import FilterList from './FilterList'
import {getComputedFilters, getFilteredCars} from '../utils'
import {ListFilter as IconFilter} from 'lucide-react'

function CarDisplay({cars, filtersSchema}) {
  const [selectedFilters, setSelectedFilters] = useState(() => ({}))
  const filteredCars = getFilteredCars(cars, selectedFilters)
  const computedFilters = getComputedFilters(cars, filtersSchema)

  return (
    <div className="xs:grid-cols-[12rem_1fr] grid items-start gap-4">
      <aside className="divide-y-1 divide-cyan-900 rounded border border-cyan-900">
        <h3 className="flex items-start gap-2 p-2 text-lg font-medium">
          <IconFilter className="h-lh flex-none" /> Фільтри
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

      <CarList cars={filteredCars} filtersSchema={filtersSchema} />
    </div>
  )
}

export default CarDisplay
