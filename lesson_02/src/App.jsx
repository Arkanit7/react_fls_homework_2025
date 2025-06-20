import TaskLayout from '@/components/layouts/TaskLayout'
import {TASKS} from '@/constants'
import {useLocalStorage} from '@/hooks'

function App() {
  const [currentTaskId, setCurrentTaskId] = useLocalStorage('currentTaskId', 0)

  return (
    <>
      <TaskLayout
        tasks={TASKS}
        currentTaskId={currentTaskId}
        setCurrentTaskId={setCurrentTaskId}
      />
    </>
  )
}

export default App
