import Clickable from '@/components/Clickable'
import FieldGroup from '@/components/FieldGroup'
import Loader from '@/components/Loader'
import frontNavigation from '@/routes/frontNavigation'
import {useNavigate} from 'react-router'
import {toast} from 'sonner'

function TeacherForm({request, isLoading, teacher = {}, submitLabel}) {
  const {name, subject, photo} = teacher
  const navigate = useNavigate()

  function handleAction(formData) {
    request(Object.fromEntries([...formData]))
      .then(() => {
        toast.success('Дані вчителя збережено')
        navigate(frontNavigation.teachers.index)
      })
      .catch(() => {
        toast.error('Не вдалося зберегти дані вчителя')
      })
  }

  return (
    <form
      className="relative space-y-4 rounded-3xl bg-primary-400 px-4 py-6"
      action={handleAction}
    >
      {isLoading && <Loader />}

      <p>
        <FieldGroup
          label="Ім'я"
          name="name"
          defaultValue={name}
          placeholder="Введіть ім'я вчителя"
          required
        />
      </p>
      <p>
        <FieldGroup
          label="Предмет"
          name="subject"
          defaultValue={subject}
          placeholder="Введіть предмет викладання"
          required
        />
      </p>
      <p>
        <FieldGroup
          label="Фото URL"
          type="url"
          name="photo"
          defaultValue={photo}
          placeholder="Введіть URL фотографії"
        />
      </p>
      <p>
        <Clickable type="submit">{submitLabel}</Clickable>
      </p>
    </form>
  )
}

export default TeacherForm
