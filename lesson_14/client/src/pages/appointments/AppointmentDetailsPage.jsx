import {
  useDeleteAppointmentMutation,
  useGetAppointmentByIdQuery,
  useGetDoctorByIdQuery,
  useGetPatientByIdQuery,
} from '@/api'
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
import {MISSING_DOCTOR_NAME, MISSING_PATIENT_NAME} from './constants'
import {getAppointmentDetailsData} from './utils'

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

        <DetailsFooter
          back={navigationRoutes.appointments.index}
          edit={navigationRoutes.appointments.getEditDetails(id)}
          onDelete={handleDeleteAppointment}
        />
      </div>
    </Container>
  )
}

export default AppointmentDetailsPage
