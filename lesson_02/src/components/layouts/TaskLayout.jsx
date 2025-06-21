import Container from '@/components/Container'
import Sidebar from '@/components/composed/Sidebar'
import Spoiler from '../Spoiler'

function TaskLayout({tasks, currentTaskId, setCurrentTaskId}) {
  const currentIndex = tasks.findIndex((task) => task.id === currentTaskId)
  const currentTaskData = tasks[currentIndex]
  const CurrentTaskComponent = currentTaskData?.component

  return (
    <div className="overflow-clip">
      <div className="grid grid-cols-[10rem_1fr] min-h-svh">
        <aside>
          <div className="px-3 py-6 sticky top-0 h-svh bg-gray-900 overflow-auto border-e border-e-gray-800">
            <Sidebar
              tasks={tasks}
              currentTaskId={currentTaskId}
              setCurrentTaskId={setCurrentTaskId}
            />
          </div>
        </aside>
        <main className="py-6">
          <Container>
            <div className="space-y-4">
              <div className="border border-cyan-400 bg-cyan-400/20 space-y-1 p-2 rounded-md">
                <Spoiler
                  title={currentTaskData.title}
                  type="h1"
                  className="space-y-1"
                >
                  <p className="text-sm">{currentTaskData.description}</p>
                </Spoiler>
              </div>
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
