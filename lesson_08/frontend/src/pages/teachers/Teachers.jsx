import Clickable from '@/components/Clickable'
import Container from '@/components/Container'
import Loader from '@/components/Loader'
import Typography from '@/components/Typography'
import {useTeachersApi} from '@/hooks'
import frontNavigation from '@/routes/frontNavigation'
import {useEffect} from 'react'
import {Link, useNavigate} from 'react-router'
import {toast} from 'sonner'
import TeacherCard from './components/TeacherCard'
import {IS_PENDING_SYMBOL, IS_SELECTED_SYMBOL} from './constants'

function Teachers() {
  const navigate = useNavigate()

  const {
    data: teacherList = [],
    setData: setTeacherList,
    isLoading,
    readTeachers,
  } = useTeachersApi()

  const selectedTeachersAmount = teacherList.reduce(
    (amount, teacher) =>
      teacher[Symbol.for(IS_SELECTED_SYMBOL)] ? amount + 1 : amount,
    0,
  )

  const {deleteTeacher} = useTeachersApi()

  useEffect(() => {
    async function fetchTeachers() {
      try {
        await readTeachers()
      } catch {
        toast.error('Не вдалося завантажити список вчителів')
      }
    }

    fetchTeachers()
  }, [readTeachers])

  function addPendingTeacherStateById(id) {
    setTeacherList((prevTeachersList) =>
      prevTeachersList.map((t) =>
        t.id === id ? {...t, [Symbol.for(IS_PENDING_SYMBOL)]: true} : t,
      ),
    )
  }

  function removePendingTeacherStateById(id) {
    setTeacherList((prevTeachersList) =>
      prevTeachersList.map((t) =>
        t.id === id ? {...t, [Symbol.for(IS_PENDING_SYMBOL)]: false} : t,
      ),
    )
  }

  function removeTeacherById(id) {
    setTeacherList((prevTeachersList) =>
      prevTeachersList.filter((t) => t.id !== id),
    )
  }

  function handleDeleteTeacherById(id) {
    return async () => {
      try {
        addPendingTeacherStateById(id)
        await deleteTeacher(id)
        removeTeacherById(id)
        toast.success('Успішно видалено вчителя')
      } catch {
        removePendingTeacherStateById(id)
        toast.error('Не вдалося видалити вчителя')
      }
    }
  }

  function selectTeacherById(id) {
    return () =>
      setTeacherList((prevTeachersList) =>
        prevTeachersList.map((t) =>
          t.id === id
            ? {
                ...t,
                [Symbol.for(IS_SELECTED_SYMBOL)]:
                  !t[Symbol.for(IS_SELECTED_SYMBOL)],
              }
            : t,
        ),
      )
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
                selectedTeachers: teacherList.filter(
                  ({[Symbol.for(IS_SELECTED_SYMBOL)]: isSelected}) =>
                    isSelected,
                ),
              },
            })
          }
          disabled={selectedTeachersAmount === 0}
        >
          Викликати {selectedTeachersAmount} вчителя(ів) на збори
        </Clickable>
      </div>
      <div className="relative min-h-8">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(min(100%,_var(--container-sm)),_1fr))] gap-2 md:gap-4">
            {teacherList.map(
              ({
                id,
                name,
                photo,
                subject,
                [Symbol.for(IS_PENDING_SYMBOL)]: isPending = false,
                [Symbol.for(IS_SELECTED_SYMBOL)]: isSelected = false,
              }) => (
                <TeacherCard
                  variant="dashboard"
                  key={id}
                  isSelected={isSelected}
                  deleteTeacher={handleDeleteTeacherById(id)}
                  selectTeacher={selectTeacherById(id)}
                  id={id}
                  photo={photo}
                  name={name}
                  subject={subject}
                  isPending={isPending}
                />
              ),
            )}
          </div>
        )}
      </div>
    </Container>
  )
}

export default Teachers
