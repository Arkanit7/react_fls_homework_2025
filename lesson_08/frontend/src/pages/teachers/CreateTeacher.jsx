import Container from '@/components/Container'
import Typography from '@/components/Typography'
import TeacherForm from './components/TeacherForm'
import {useTeachersApi} from '@/hooks'

function EditTeacher() {
  const {isLoading, error, createTeacher} = useTeachersApi()

  return (
    <Container className="space-y-4">
      <Typography as="h1">Додати нового вчителя</Typography>
      <TeacherForm
        request={createTeacher}
        isLoading={isLoading}
        error={error}
        submitLabel="Додати вчителя"
      />
    </Container>
  )
}

export default EditTeacher
