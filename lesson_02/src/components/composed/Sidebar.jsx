import Button from '../Button'

function Sidebar({tasks, currentTaskId, setCurrentTaskId}) {
  return (
    <nav>
      <ul className="grid gap-1.5">
        {tasks.map((task, i) => (
          <li key={i}>
            <Button
              onClick={() => setCurrentTaskId(task.id)}
              variant={currentTaskId === task.id ? 'primary' : 'outline'}
              size="sm"
              className="w-full"
            >
              {task.title}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Sidebar
