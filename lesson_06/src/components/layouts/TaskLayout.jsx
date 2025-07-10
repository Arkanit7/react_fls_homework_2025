import Container from '@/components/Container'
import AppHeader from '@/components/composed/AppHeader'
import Spoiler from '@/components/Spoiler'
import {Library} from 'lucide-react'

function TaskLayout({tasks, currentTaskId, setCurrentTaskIdAction}) {
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
      <AppHeader
        tasks={tasks}
        currentTaskId={currentTaskId}
        setCurrentTaskIdAction={setCurrentTaskIdAction}
        variant="sticky"
      />

      <main className="py-6">
        <Container>
          <div className="space-y-4">
            <Spoiler title={title} as="h1">
              <p className="max-md:text-sm">{currentTaskData.description}</p>
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
