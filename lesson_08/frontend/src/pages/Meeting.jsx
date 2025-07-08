import Container from '@/components/Container'
import Typography from '@/components/Typography'
import {useLocation} from 'react-router'
import TeacherCard from './teachers/components/TeacherCard'

function Meeting() {
  const {state} = useLocation()

  let content

  if (state == null) content = <Typography>Тут поки порожньо...</Typography>
  else
    content = (
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(min(100%,_var(--container-xs)),_1fr))] gap-2 md:gap-4">
        {state.selectedTeachers.map(({id, name, photo, subject}) => (
          <TeacherCard
            key={id}
            id={id}
            photo={photo}
            name={name}
            subject={subject}
          />
        ))}
      </div>
    )

  return (
    <Container className="space-y-4">
      <Typography as="h1">Збори</Typography>
      {content}
    </Container>
  )
}

export default Meeting
