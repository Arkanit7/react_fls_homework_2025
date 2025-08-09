import {Typography} from '@/components/ui'
import {
  PAGINATION_DEFAULT_PAGE,
  PAGINATION_ROWS_PER_PAGE_LIST,
} from '@/lib/constants'
import {ArrowLeft, ArrowRight} from 'lucide-react'
import {useId} from 'react'

function Pagination({
  currentPage,
  setCurrentPage,
  rowsPerPage,
  setRowsPerPage,
  totalPages,
  isEmpty,
}) {
  const id = useId()

  const isAtTheStart = currentPage <= 1
  const isAtTheEnd = currentPage >= totalPages

  if (isEmpty && !isAtTheStart) setCurrentPage((p) => p - 1)

  function handleAmountChange(e) {
    const amount = e.currentTarget.value
    setCurrentPage(PAGINATION_DEFAULT_PAGE)
    setRowsPerPage(amount)
  }

  return (
    <div className="flex items-center justify-end gap-4 border-t border-base-300 px-3 py-2.5">
      <div className="flex items-center gap-2">
        <Typography variant="body2" component="label" htmlFor={id}>
          Рядків на сторінці:
        </Typography>
        <select
          className="select w-auto select-ghost select-xs"
          id={id}
          value={rowsPerPage}
          onChange={handleAmountChange}
        >
          {PAGINATION_ROWS_PER_PAGE_LIST.map((amount) => (
            <option key={amount}>{amount}</option>
          ))}
        </select>
      </div>

      <div className="flex items-center gap-2">
        <Typography variant="body2">
          Сторінка {currentPage} з {totalPages}
        </Typography>
        <div className="flex items-center gap-2">
          <button
            className="btn btn-square btn-ghost btn-sm"
            onClick={() => setCurrentPage((p) => p - 1)}
            type="button"
            disabled={isAtTheStart}
          >
            <ArrowLeft />
            <span className="sr-only">Назад</span>
          </button>
          <button
            className="btn btn-square btn-ghost btn-sm"
            onClick={() => setCurrentPage((p) => p + 1)}
            type="button"
            disabled={isAtTheEnd}
          >
            <ArrowRight />
            <span className="sr-only">Вперед</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Pagination
