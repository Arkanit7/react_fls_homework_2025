import {
  useDeleteAppointmentMutation,
  useGetAppointmentByIdQuery,
  useGetDoctorByIdQuery,
  useGetPatientByIdQuery,
} from '@/api/api'
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
import {getAppointmentDetailsData} from './utils'
import {MISSING_DOCTOR_NAME, MISSING_PATIENT_NAME} from './constants'

function AppointmentDetailsPage() {
  const {id} = useParams()
  const {
    data: appointmentData,
    isFetching: isAppointmentFetching,
    isError,
    refetch: refetchAppointment,
  } = useGetAppointmentByIdQuery(id)
  /** @type {import('@/types').Appointment} */
  const appointment = appointmentData

  const [deleteAppointment] = useDeleteAppointmentMutation()
  const navigate = useNavigate()

  const {data: patientData, isLoading: isPatientLoading} =
    useGetPatientByIdQuery(appointment?.patientId, {
      skip: !appointmentData,
    })
  /** @type {import('@/types').Patient} */
  const patient = patientData

  const {data: doctorData, isLoading: isDoctorLoading} = useGetDoctorByIdQuery(
    appointment?.doctorId,
    {
      skip: !appointmentData,
    },
  )
  /** @type {import('@/types').Doctor} */
  const doctor = doctorData

  const isLoading = isAppointmentFetching || isPatientLoading || isDoctorLoading

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
        <button
          className="btn btn-square btn-ghost"
          onClick={refetchAppointment}
          type="button"
        >
          <RefreshCw />
          <span className="sr-only">Спробувати ще</span>
        </button>
      </Container>
    )

  async function handleDeleteAppointment() {
    await deleteAppointment(id)
    navigate(navigationRoutes.appointments.index)
  }

  const appointmentWithNames = {
    ...appointment,
    patientName: patient?.fullName ?? MISSING_PATIENT_NAME,
    doctorName: doctor?.fullName ?? MISSING_DOCTOR_NAME,
  }

  const appointmentDetails = getAppointmentDetailsData(appointmentWithNames)

  return (
    <Container className="space-y-2 sm:space-y-4">
      <Typography variant="h1">Зустріч №{appointment.id}</Typography>
      <div>
        <DataGrid>
          {appointmentDetails.map(({title, data}) => (
            <DataCard key={title} title={title} data={data} />
          ))}
        </DataGrid>

        <div className="divider"></div>

        <div className="flex justify-between gap-2">
          <Link
            className="btn flex-none btn-primary"
            to={navigationRoutes.appointments.index}
          >
            <ArrowLeft /> Назад
          </Link>

          <div className="flex flex-wrap justify-end gap-[inherit]">
            <Link
              className="btn btn-primary"
              to={navigationRoutes.appointments.getEditDetails(id)}
            >
              <Pencil /> Редагувати
            </Link>
            <button
              className="btn btn-error"
              onClick={handleDeleteAppointment}
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

export default AppointmentDetailsPage
