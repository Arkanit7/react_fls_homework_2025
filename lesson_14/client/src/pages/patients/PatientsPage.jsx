import {useGetPaginatedPatientsQuery} from '@/api/api'
import {Container, Loader, Typography} from '@/components/ui'
import {navigationRoutes} from '@/router/navigation'
import {Plus, RefreshCw} from 'lucide-react'
import {useState} from 'react'
import {Link} from 'react-router'
import PatientTableRow from './components/PatientTableRow'
import Pagination from '@/components/Pagination'
import {
  PAGINATION_DEFAULT_PAGE,
  PAGINATION_DEFAULT_ROWS_PER_PAGE,
} from '@/lib/constants'
import useDebounce from '@/hooks/useDebounce'

function PatientsPage() {
  const [currentPage, setCurrentPage] = useState(PAGINATION_DEFAULT_PAGE)
  const [rowsPerPage, setRowsPerPage] = useState(
    PAGINATION_DEFAULT_ROWS_PER_PAGE,
  )
  const [searchQuery, setSearchQuery] = useState('')
  const debounceSearchQuery = useDebounce(searchQuery)

  const {
    data = {},
    isFetching,
    isLoading,
    isError,
    refetch: refetchPatients,
  } = useGetPaginatedPatientsQuery({
    page: currentPage,
    size: rowsPerPage,
    name: debounceSearchQuery,
  })

  /** @type {import('@/types').PatientsPagination} */
  const patientsPagination = data
  const {items: patientsList, totalPages} = patientsPagination

  if (isLoading)
    return (
      <Container>
        <Loader />
      </Container>
    )
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

  const isEmpty = patientsList.length === 0

  return (
    <Container className="space-y-4">
      <Typography variant="h2" component="h1" className="self-center">
        Пацієнти
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
            onClick={refetchPatients}
          >
            <RefreshCw />
            <span className="sr-only">Оновити</span>
          </button>

          <Link
            className="btn join-item btn-primary max-xs:flex-auto"
            to={navigationRoutes.patients.new}
          >
            <Plus /> Створити
          </Link>
        </div>
      </div>

      <div className="rounded-box border border-base-content/5 bg-base-100">
        <div className="overflow-x-auto">
          <table className="table table-zebra table-sm">
            <thead>
              <tr>
                {[
                  'ПІБ',
                  'Рік народження',
                  'Телефон',
                  'Адреса',
                  'Нотатка',
                  'Дії',
                ].map((title, i) => (
                  <th key={i}>{title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {patientsList.map((patient) => (
                <PatientTableRow key={patient.id} patient={patient} />
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
    </Container>
  )
}

export default PatientsPage
