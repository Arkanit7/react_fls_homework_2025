import {useDeferredValue, useState, useMemo, useCallback} from 'react'
import GridRow from './GridRow'
import Field from '@/components/Field'
import {sortData, filterData, getNextSortDirection} from '../utils'
import {useInput} from '@/hooks'
import GridHeader from './GridHeader'
import {SORT_ARIA_DIRECTIONS} from '../constants'

function DataGrid({data, headers}) {
  const searchInput = useInput('')
  const deferredSearchTerm = useDeferredValue(searchInput.value)
  const filteredData = useMemo(
    () => filterData(data, deferredSearchTerm),
    [data, deferredSearchTerm],
  )

  const [sort, setSort] = useState(() => ({
    key: null,
    direction: SORT_ARIA_DIRECTIONS.NONE,
  }))
  const deferredSort = useDeferredValue(sort)
  const sortedData = useMemo(
    () => sortData(filteredData, deferredSort),
    [filteredData, deferredSort],
  )

  const adjustSort = useCallback((key) => {
    setSort((prevSort) => {
      const direction =
        prevSort.key !== key
          ? SORT_ARIA_DIRECTIONS.DESCENDING
          : getNextSortDirection(prevSort.direction)

      return {key, direction}
    })
  }, [])

  return (
    <div className="space-y-4">
      <div className="mx-auto max-w-xs">
        <Field
          size="sm"
          placeholder="Фільтрувати таблицю..."
          {...searchInput}
        />
      </div>
      <div className="-mx-(--page-padding) overflow-x-auto px-(--page-padding)">
        <table className="w-full divide-y-1 divide-cyan-900 text-sm">
          <thead>
            <tr className="transition-[background-color] hover:bg-cyan-400/10">
              {headers.map(({header, accessorKey}, i) => (
                <GridHeader
                  key={i}
                  header={header}
                  adjustSort={() => adjustSort(accessorKey)}
                  sort={sort}
                  accessorKey={accessorKey}
                />
              ))}
            </tr>
          </thead>
          <tbody className="divide-y-1 divide-cyan-900 text-neutral-200">
            {sortedData.length === 0 ? (
              <tr>
                <td
                  className="px-2 py-1 text-center text-base text-neutral-400"
                  colSpan={headers.length}
                >
                  Фільтр не повернув жодних результатів...
                </td>
              </tr>
            ) : (
              sortedData.map((item) => (
                <GridRow key={item.id} item={item} headers={headers} />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DataGrid
