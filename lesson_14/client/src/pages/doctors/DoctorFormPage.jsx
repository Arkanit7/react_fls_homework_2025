import {
  useCreateDoctorMutation,
  useEditDoctorMutation,
  useGetDoctorByIdQuery,
} from '@/api/api'
import {Container, Typography} from '@/components/ui'
import InputWithLabel from '@/components/ui/InputWithLabel'
import getDoctorFormFields from './getDoctorFormFields'
import {navigationRoutes} from '@/router/navigation'
import Loader from '@/components/ui/Loader'
import {useNavigate, useParams} from 'react-router'
import {useId} from 'react'

function DoctorFormPage() {
  const bindingId = useId()
  const {id} = useParams()
  const shouldEditMode = id != null
  const title = `${shouldEditMode ? 'Редагувати' : 'Додати'} лікаря`

  const {
    data: doctor,
    isFetching,
    isError: isGetError,
  } = useGetDoctorByIdQuery(id, {
    skip: !shouldEditMode,
  })

  const navigate = useNavigate()

  const [createDoctor, {isLoading: isCreateLoading, isError: isCreateError}] =
    useCreateDoctorMutation()
  const [editDoctor, {isLoading: isEditLoading, isError: isEditError}] =
    useEditDoctorMutation()

  const isLoading = isFetching || isCreateLoading || isEditLoading
  const isError = isGetError || isCreateError || isEditError

  async function handleDoctorAction(formData) {
    const action = shouldEditMode
      ? (body) => editDoctor({id, body})
      : createDoctor

    action(Object.fromEntries(formData))
      .unwrap()
      .then(({id}) => navigate(navigationRoutes.doctors.getDetails(id)))
      .catch(() => null)
  }

  const fields = getDoctorFormFields(doctor)

  return (
    <Container className="space-y-4">
      <Typography variant="h1">{title}</Typography>

      {isLoading ? (
        <Loader />
      ) : (
        <form className="space-y-4" action={handleDoctorAction}>
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

export default DoctorFormPage
