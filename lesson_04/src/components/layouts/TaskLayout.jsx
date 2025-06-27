import Container from '@/components/Container'
import Header from '@/components/composed/Header'
import Spoiler from '../Spoiler'
import {Library} from 'lucide-react'

function TaskLayout({tasks, currentTaskId, setCurrentTaskId}) {
  const currentIndex = tasks.findIndex((task) => task.id === currentTaskId)
  const currentTaskData = tasks[currentIndex]
  const CurrentTaskComponent = currentTaskData?.component
  const title = (
    <span className="flex items-start gap-2">
      <Library className="h-lh flex-none" />
      {currentTaskData.title}
    </span>
  )

  return (
    <div className="min-h-dvh overflow-clip">
      <Header
        tasks={tasks}
        currentTaskId={currentTaskId}
        setCurrentTaskId={setCurrentTaskId}
        variant="sticky"
      />

      <main className="py-6">
        <Container>
          <div className="space-y-4">
            <Spoiler title={title} as="h1">
              <p>{currentTaskData.description}</p>
            </Spoiler>

            <div>
              <CurrentTaskComponent />
            </div>
          </div>
        </Container>
      </main>
    </div>
  )
}

export default TaskLayout
