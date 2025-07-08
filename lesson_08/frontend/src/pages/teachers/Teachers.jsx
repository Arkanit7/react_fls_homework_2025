import Container from '@/components/Container'
import Typography from '@/components/Typography'
import TeacherCard from './components/TeacherCard'
import {useEffect, useState} from 'react'
import {useTeachersApi} from '@/hooks'
import Clickable from '@/components/Clickable'
import {Link, useNavigate} from 'react-router'
import frontNavigation from '@/routes/frontNavigation'
import Loader from '@/components/Loader'
import {toast} from 'sonner'

function Teachers() {
  const navigate = useNavigate()

  // ---

  const {
    data: teacherList = [],
    isLoading,
    readTeachers,
    deleteTeacher,
  } = useTeachersApi()

  useEffect(() => {
    readTeachers().catch(() =>
      toast.error('Не вдалося завантажити список вчителів'),
    )
  }, [readTeachers])

  function handleDeleteTeacherById(id) {
    return () =>
      deleteTeacher(id)
        .then(() => toast.success('Успішно видалено вчителя'))
        .catch(() => toast.error('Не вдалося видалити вчителя'))
        .then(() => readTeachers())
        .catch(() => toast.error('Не вдалося завантажити список вчителів'))
  }

  // ---

  const [selectedTeachersId, setSelectedTeachersId] = useState(() => new Set())

  function selectTeacherById(id) {
    return () => {
      setSelectedTeachersId((prevSelectedTeachersId) => {
        const prevSelectedTeachersIdCopy = new Set(prevSelectedTeachersId)

        if (prevSelectedTeachersIdCopy.has(id))
          prevSelectedTeachersIdCopy.delete(id)
        else prevSelectedTeachersIdCopy.add(id)

        return prevSelectedTeachersIdCopy
      })
    }
  }

  return (
    <Container className="space-y-4">
      <Typography as="h1">Список вчителів</Typography>
      <div className="flex flex-wrap gap-2 max-sm:flex-col">
        <Clickable as={Link} to={frontNavigation.teachers.create}>
          Додати нового вчителя
        </Clickable>
        <Clickable
          onClick={() =>
            navigate(frontNavigation.meeting, {
              state: {
                selectedTeachers: teacherList.filter(({id}) =>
                  selectedTeachersId.has(id),
                ),
              },
            })
          }
          disabled={!selectedTeachersId.size}
        >
          Викликати {selectedTeachersId.size} вчителя(ів) на збори
        </Clickable>
      </div>
      <div className="relative min-h-8">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(min(100%,_var(--container-sm)),_1fr))] gap-2 md:gap-4">
            {teacherList.map(({id, name, photo, subject}) => (
              <TeacherCard
                variant="dashboard"
                key={id}
                isSelected={selectedTeachersId.has(id)}
                deleteTeacher={handleDeleteTeacherById(id)}
                selectTeacher={selectTeacherById(id)}
                id={id}
                photo={photo}
                name={name}
                subject={subject}
              />
            ))}
          </div>
        )}
      </div>
    </Container>
  )
}

export default Teachers
