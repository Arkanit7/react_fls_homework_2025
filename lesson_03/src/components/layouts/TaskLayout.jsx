import Container from '@/components/Container'
import Sidebar from '@/components/composed/Sidebar'
import Spoiler from '../Spoiler'
import {LayoutList} from 'lucide-react'

function TaskLayout({tasks, currentTaskId, setCurrentTaskId}) {
  const currentIndex = tasks.findIndex((task) => task.id === currentTaskId)
  const currentTaskData = tasks[currentIndex]
  const CurrentTaskComponent = currentTaskData?.component
  const title = (
    <span className="flex gap-2 items-start">
      <LayoutList className="h-lh flex-none" />
      {currentTaskData.title}
    </span>
  )

  return (
    <div className="overflow-clip">
      <div>
        <header className="py-3 bg-gray-900 border-b border-b-gray-800">
          <Container>
            <Sidebar
              tasks={tasks}
              currentTaskId={currentTaskId}
              setCurrentTaskId={setCurrentTaskId}
            />
          </Container>
        </header>
        <main className="py-6">
          <Container>
            <div className="space-y-4">
              <Spoiler title={title} as="h1">
                <p className="text-sm">{currentTaskData.description}</p>
              </Spoiler>

              <div>
                <CurrentTaskComponent />
              </div>
            </div>
          </Container>
        </main>
      </div>
    </div>
  )
}

export default TaskLayout
