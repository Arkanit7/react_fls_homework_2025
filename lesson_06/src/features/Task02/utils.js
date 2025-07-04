import {SORT_ARIA_DIRECTIONS} from './constants'

export function sortData(data, {key, direction}) {
  if (direction === SORT_ARIA_DIRECTIONS.NONE) return data

  const isAscending = direction === SORT_ARIA_DIRECTIONS.ASCENDING

  const sortedData = data.toSorted((a, b) => {
    const [valueA, valueB] = [a[key], b[key]]

    let result

    if (typeof valueA === 'string') result = valueA.localeCompare(valueB)
    else result = valueA - valueB

    return isAscending ? result : -result
  })

  return sortedData
}

export function filterData(data, searchTerm) {
  const upperSearchTerm = searchTerm.toUpperCase()

  return data.filter((item) =>
    Object.values(item).some((value) =>
      String(value).toUpperCase().includes(upperSearchTerm),
    ),
  )
}

export function getNextSortDirection(prevSortDirection) {
  switch (prevSortDirection) {
    case SORT_ARIA_DIRECTIONS.DESCENDING:
      return SORT_ARIA_DIRECTIONS.ASCENDING
    case SORT_ARIA_DIRECTIONS.ASCENDING:
      return SORT_ARIA_DIRECTIONS.NONE
    default:
      return SORT_ARIA_DIRECTIONS.DESCENDING
  }
}
