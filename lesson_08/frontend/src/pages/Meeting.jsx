import Container from '@/components/Container'
import Typography from '@/components/Typography'
import {Link, useLocation} from 'react-router'
import TeacherCard from './teachers/components/TeacherCard'
import frontNavigation from '@/routes/frontNavigation'
import Clickable from '@/components/Clickable'

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
      <div>
        <Clickable as={Link} to={frontNavigation.teachers.index}>
          Повернутися до переліку усіх вчителів
        </Clickable>
      </div>
      {content}
    </Container>
  )
}

export default Meeting
