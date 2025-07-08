import Container from '@/components/Container'
import Typography from '@/components/Typography'
import TeacherForm from './components/TeacherForm'
import {useTeachersApi} from '@/hooks'
import {useEffect} from 'react'
import {useParams} from 'react-router'

function EditTeacher() {
  const {id} = useParams()

  const {
    data: teacher = {},
    isLoading,
    error,
    updateTeacher,
    readTeacher,
  } = useTeachersApi()

  useEffect(() => {
    readTeacher(id)
  }, [readTeacher, id])

  return (
    <Container className="space-y-4">
      <Typography as="h1">Редагувати вчителя</Typography>
      <TeacherForm
        request={(data) => updateTeacher(id, data)}
        teacher={teacher}
        isLoading={isLoading}
        error={error}
        submitLabel="Оновити вчителя"
      />
    </Container>
  )
}

export default EditTeacher
