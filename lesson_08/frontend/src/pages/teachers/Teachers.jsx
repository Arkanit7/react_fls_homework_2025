import Clickable from '@/components/Clickable'
import Container from '@/components/Container'
import Loader from '@/components/Loader'
import Typography from '@/components/Typography'
import {useTeachersApi} from '@/hooks'
import frontNavigation from '@/routes/frontNavigation'
import {startTransition, useEffect, useOptimistic} from 'react'
import {Link, useNavigate} from 'react-router'
import {toast} from 'sonner'
import TeacherCard from './components/TeacherCard'
import {IS_PENDING_KEY, IS_SELECTED_KEY} from './constants'

function Teachers() {
  const navigate = useNavigate()

  const {
    data: teacherList = [],
    setData: setTeacherList,
    isLoading,
    readTeachers,
  } = useTeachersApi()

  const selectedTeachersAmount = teacherList.reduce(
    (amount, teacher) => (teacher[IS_SELECTED_KEY] ? amount + 1 : amount),
    0,
  )

  const [optimisticTeachersList, setTeacherPendingById] = useOptimistic(
    teacherList,
    (optimisticTeachersList, teacherId) =>
      optimisticTeachersList.map((teacher) =>
        teacher.id === teacherId
          ? {...teacher, [IS_PENDING_KEY]: true}
          : teacher,
      ),
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

  function removeTeacherById(id) {
    setTeacherList((prevTeachersList) =>
      prevTeachersList.filter((t) => t.id !== id),
    )
  }

  function handleDeleteTeacherById(id) {
    return () =>
      startTransition(async () => {
        try {
          setTeacherPendingById(id)
          await deleteTeacher(id)
          removeTeacherById(id)
          toast.success('Успішно видалено вчителя')
        } catch {
          toast.error('Не вдалося видалити вчителя')
          // In case of a rejection, thanks to the optimistic state, the isPending key would clean itself.
        }
      })
  }

  function selectTeacherById(id) {
    return () =>
      setTeacherList((prevTeachersList) =>
        prevTeachersList.map((t) =>
          t.id === id
            ? {
                ...t,
                [IS_SELECTED_KEY]: !t[IS_SELECTED_KEY],
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
                  ({[IS_SELECTED_KEY]: isSelected}) => isSelected,
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
            {optimisticTeachersList.map(
              ({
                id,
                name,
                photo,
                subject,
                [IS_PENDING_KEY]: isPending = false,
                [IS_SELECTED_KEY]: isSelected = false,
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
