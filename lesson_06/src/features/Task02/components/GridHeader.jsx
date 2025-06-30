import {ChevronsUpDown, ArrowDown, ArrowUp} from 'lucide-react'
import {SORT_ARIA_DIRECTIONS} from '../constants'

function GridHeader({adjustSort, header, accessorKey, sort}) {
  const ariaSortDirection = accessorKey === sort.key ? sort.direction : null

  let Icon
  if (accessorKey !== sort.key) Icon = ChevronsUpDown
  else if (sort.direction === SORT_ARIA_DIRECTIONS.ASCENDING) Icon = ArrowUp
  else Icon = ArrowDown

  return (
    <th className="px-2 py-1 text-white" aria-sort={ariaSortDirection}>
      <button
        onClick={adjustSort}
        className="flex items-center gap-2 transition-[color] hover:text-cyan-300"
        type="button"
      >
        {header}
        <Icon className="h-[1.125em] flex-none" />
      </button>
    </th>
  )
}

export default GridHeader
