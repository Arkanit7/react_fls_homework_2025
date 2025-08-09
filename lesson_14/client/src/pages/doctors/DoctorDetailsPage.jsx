import {useDeleteDoctorMutation, useGetDoctorByIdQuery} from '@/api/api'
import {
  Container,
  Typography,
  DataCard,
  DataGrid,
  Loader,
} from '@/components/ui'
import {navigationRoutes} from '@/router/navigation'
import {ArrowLeft, Pencil, RefreshCw, Trash} from 'lucide-react'
import {Link, useNavigate, useParams} from 'react-router'
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

        <div className="flex justify-between gap-2">
          <Link
            className="btn flex-none btn-primary"
            to={navigationRoutes.doctors.index}
          >
            <ArrowLeft /> Назад
          </Link>

          <div className="flex flex-wrap justify-end gap-[inherit]">
            <Link
              className="btn btn-primary"
              to={navigationRoutes.doctors.getEditDetails(id)}
            >
              <Pencil /> Редагувати
            </Link>
            <button
              className="btn btn-error"
              onClick={handleDeleteDoctor}
              type="button"
            >
              <Trash /> Видалити
            </button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default DoctorDetailsPage
