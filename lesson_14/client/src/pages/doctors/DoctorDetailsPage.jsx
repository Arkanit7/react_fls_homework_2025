import {useDeleteDoctorMutation, useGetDoctorByIdQuery} from '@/api'
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
import {getDoctorDetailsData} from './utils'

function DoctorDetailsPage() {
  const {id} = useParams()
  const {
    data = {},
    isFetching,
    isError,
    refetch: refetchDoctor,
  } = useGetDoctorByIdQuery(id)

  const [deleteDoctor] = useDeleteDoctorMutation()
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
          onClick={refetchDoctor}
          type="button"
        >
          <RefreshCw />
          <span className="sr-only">Спробувати ще</span>
        </button>
      </Container>
    )

  /** @type {import('@/types').Doctor} */
  const doctor = data

  async function handleDeleteDoctor() {
    await deleteDoctor(id)
    navigate(navigationRoutes.doctors.index)
  }

  const doctorDetails = getDoctorDetailsData(doctor)

  return (
    <Container className="space-y-2 sm:space-y-4">
      <Typography variant="h1">{doctor.fullName}</Typography>
      <div>
        <DataGrid>
          {doctorDetails.map(({title, data}) => (
            <DataCard key={title} title={title} data={data} />
          ))}
        </DataGrid>

        <div className="divider"></div>

        <DetailsFooter
          back={navigationRoutes.doctors.index}
          edit={navigationRoutes.doctors.getEditDetails(id)}
          onDelete={handleDeleteDoctor}
        />
      </div>
    </Container>
  )
}

export default DoctorDetailsPage
