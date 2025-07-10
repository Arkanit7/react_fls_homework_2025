import TaskLayout from '@/components/layouts/TaskLayout'
import {TASKS} from '@/constants'
import {useSessionStorage} from '@/hooks'

function App() {
  const [currentTaskId, setCurrentTaskId] = useSessionStorage(
    'currentTaskId',
    TASKS[0].id,
  )

  return (
    <>
      <TaskLayout
        tasks={TASKS}
        currentTaskId={currentTaskId}
        setCurrentTaskIdAction={setCurrentTaskId}
      />
    </>
  )
}

export default App
