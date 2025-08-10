import {useDeletePatientMutation, useGetPatientByIdQuery} from '@/api'
import DetailsFooter from '@/components/DetailsFooter'
import {
  Container,
  DataCard,
  DataGrid,
  Loader,
  Typography,
} from '@/components/ui'
import {navigationRoutes} from '@/router/navigation'
import {RefreshCw} from 'lucide-react'
import {useNavigate, useParams} from 'react-router'
import {getPatientDetailsData} from './utils'

function PatientDetailsPage() {
  const {id} = useParams()
  const {
    data = {},
    isFetching,
    isError,
    refetch: refetchPatient,
  } = useGetPatientByIdQuery(id)

  const [deletePatient] = useDeletePatientMutation()
  const navigate = useNavigate()

  if (isFetching)
    return (
      <Container>
        <Loader />
      </Container>
    )

  if (isError)
    return (
      <Container>
        <Typography className="text-warning-content">Помилка</Typography>
        <button
          className="btn btn-square btn-ghost"
          onClick={refetchPatient}
          type="button"
        >
          <RefreshCw />
          <span className="sr-only">Спробувати ще</span>
        </button>
      </Container>
    )

  /** @type {import('@/types').Patient} */
  const patient = data

  async function handleDeletePatient() {
    await deletePatient(id)
    navigate(navigationRoutes.patients.index)
  }

  const patientDetails = getPatientDetailsData(patient)

  return (
    <Container className="space-y-2 sm:space-y-4">
      <Typography variant="h1">{patient.fullName}</Typography>
      <div>
        <DataGrid>
          {patientDetails.map(({title, data}) => (
            <DataCard key={title} title={title} data={data} />
          ))}
        </DataGrid>

        <div className="divider"></div>

        <DetailsFooter
          back={navigationRoutes.patients.index}
          edit={navigationRoutes.patients.getEditDetails(id)}
          onDelete={handleDeletePatient}
        />
      </div>
    </Container>
  )
}

export default PatientDetailsPage
