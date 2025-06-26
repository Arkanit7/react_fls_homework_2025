import {Car} from './models'

/**
 * Calculate all possible filter properties, based on specified filters and available values for them
 */
export function getComputedFilters(cars, filtersSchema) {
  const computedFilters = new Map()

  for (const filter of filtersSchema) {
    const properties = new Set()

    for (const car of cars) {
      properties.add(car[filter.key])
    }

    computedFilters.set(filter, properties)
  }

  return computedFilters
}

/**
 * Filter cars based on the selected filters
 *
 * @param {Car[]} cars
 * @param {Object<string, Set>} selectedFilters
 * @returns {Car[]}
 */
export function getFilteredCars(cars, selectedFilters) {
  return cars.filter((car) =>
    Object.entries(selectedFilters).every(([key, values]) => {
      if (values.size === 0) return true

      return values.has(String(car[key]))
    }),
  )
}
