import {
  useCreateAppointmentMutation,
  useEditAppointmentMutation,
  useGetAllDoctorsQuery,
  useGetAllPatientsQuery,
  useGetAppointmentByIdQuery,
} from '@/api/api'
import {Container, Typography} from '@/components/ui'
import InputWithLabel from '@/components/ui/InputWithLabel'
import {getAppointmentFormFields} from './utils'
import {navigationRoutes} from '@/router/navigation'
import Loader from '@/components/ui/Loader'
import {useNavigate, useParams} from 'react-router'
import {useId} from 'react'

function AppointmentFormPage() {
  const bindingId = useId()
  const {id} = useParams()
  const shouldEditMode = id != null
  const title = `${shouldEditMode ? 'Редагувати' : 'Створити'} зустріч`

  const {
    data: appointment,
    isFetching,
    isError: isGetError,
  } = useGetAppointmentByIdQuery(id, {
    skip: !shouldEditMode,
  })

  const navigate = useNavigate()

  const [
    createAppointment,
    {isLoading: isCreateLoading, isError: isCreateError},
  ] = useCreateAppointmentMutation()
  const [editAppointment, {isLoading: isEditLoading, isError: isEditError}] =
    useEditAppointmentMutation()

  async function handleAppointmentAction(formData) {
    const action = shouldEditMode
      ? (body) => editAppointment({id, body})
      : createAppointment

    action(Object.fromEntries(formData))
      .unwrap()
      .then(({id}) => navigate(navigationRoutes.appointments.getDetails(id)))
      .catch(() => null)
  }

  const {data: patientsData = [], isLoading: isPatientsLoading} =
    useGetAllPatientsQuery()
  /** @type {import('@/types').Patient[]} */
  const patientsList = patientsData

  const {data: doctorsData = [], isLoading: isDoctorsLoading} =
    useGetAllDoctorsQuery()
  /** @type {import('@/types').Doctor[]} */
  const doctorsList = doctorsData

  const fields = getAppointmentFormFields(
    appointment,
    patientsList,
    doctorsList,
  )

  const isLoading =
    isFetching ||
    isCreateLoading ||
    isEditLoading ||
    isPatientsLoading ||
    isDoctorsLoading
  const isError = isGetError || isCreateError || isEditError

  return (
    <Container className="space-y-4">
      <Typography variant="h1">{title}</Typography>

      {isLoading ? (
        <Loader />
      ) : (
        <form className="space-y-4" action={handleAppointmentAction}>
          <div className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
            {fields.map((field) => {
              switch (field.component) {
                case 'InputWithLabel':
                  return (
                    <InputWithLabel key={field.props.name} {...field.props} />
                  )
                case 'select':
                  return (
                    <div className="grid gap-1.5" key={field.props.name}>
                      <label className="label" htmlFor={bindingId}>
                        {field.props.label}
                      </label>
                      <select
                        className="select w-full select-secondary"
                        name={field.props.name}
                        id={bindingId}
                        defaultValue={field.props.defaultValue}
                        required={field.props.required}
                      >
                        {field.props.options.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  )
                default:
                  return null
              }
            })}
          </div>
          <button className="btn btn-secondary">
            {isError ? 'Помилка' : 'Відправити'}
          </button>
        </form>
      )}
    </Container>
  )
}

export default AppointmentFormPage
