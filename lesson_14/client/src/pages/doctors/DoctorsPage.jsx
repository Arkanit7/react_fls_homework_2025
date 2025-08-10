import {useGetPaginatedDoctorsQuery} from '@/api'
import Pagination from '@/components/Pagination'
import {Container, Loader, Typography} from '@/components/ui'
import useDebounce from '@/hooks/useDebounce'
import {
  PAGINATION_DEFAULT_PAGE,
  PAGINATION_DEFAULT_ROWS_PER_PAGE,
} from '@/lib/constants'
import {navigationRoutes} from '@/router/navigation'
import {Plus, RefreshCw} from 'lucide-react'
import {useState} from 'react'
import {Link} from 'react-router'
import DoctorTableRow from './components/DoctorTableRow'

function DoctorsPage() {
  const [currentPage, setCurrentPage] = useState(PAGINATION_DEFAULT_PAGE)
  const [rowsPerPage, setRowsPerPage] = useState(
    PAGINATION_DEFAULT_ROWS_PER_PAGE,
  )
  const [searchQuery, setSearchQuery] = useState('')
  const debounceSearchQuery = useDebounce(searchQuery)

  const {
    data = {},
    isLoading,
    isError,
    refetch: refetchDoctors,
  } = useGetPaginatedDoctorsQuery({
    page: currentPage,
    size: rowsPerPage,
    name: debounceSearchQuery,
  })

  /** @type {import('@/types').DoctorsPagination} */
  const doctorsPagination = data
  const {items: doctorsList = [], totalPages} = doctorsPagination

  if (isError)
    return (
      <Container>
        <Typography className="text-warning-content">Помилка</Typography>
      </Container>
    )

  function handleSearch(e) {
    setSearchQuery(e.currentTarget.value.trim())
    setCurrentPage(PAGINATION_DEFAULT_PAGE)
  }

  const isEmpty = doctorsList.length === 0

  return (
    <Container className="space-y-4">
      <Typography variant="h2" component="h1" className="self-center">
        Лікарі
      </Typography>
      <div className="flex justify-between gap-4 max-xs:flex-col">
        <div>
          <input
            className="input max-xs:w-full"
            placeholder="Пошук"
            type="search"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>

        <div className="join">
          <button
            className="btn join-item btn-outline btn-primary"
            type="button"
            onClick={refetchDoctors}
          >
            <RefreshCw />
            <span className="sr-only">Оновити</span>
          </button>

          <Link
            className="btn join-item btn-primary max-xs:flex-auto"
            to={navigationRoutes.doctors.new}
          >
            <Plus /> Створити
          </Link>
        </div>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <div className="rounded-box border border-base-content/5 bg-base-100">
          <div className="overflow-x-auto">
            <table className="table table-zebra table-sm">
              <thead>
                <tr>
                  {[
                    'ПІБ',
                    'Спеціальність',
                    'Телефон',
                    'Кабінет',
                    'Нотатка',
                    'Дії',
                  ].map((title, i) => (
                    <th key={i}>{title}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {doctorsList.map((doctor) => (
                  <DoctorTableRow key={doctor.id} doctor={doctor} />
                ))}
              </tbody>
            </table>
          </div>
          <Pagination
            rowsPerPage={rowsPerPage}
            setRowsPerPage={setRowsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
            isEmpty={isEmpty}
          />
        </div>
      )}
    </Container>
  )
}

export default DoctorsPage
