import Button from '../Button'

function Sidebar({tasks, currentTaskId, setCurrentTaskId}) {
  return (
    <nav>
      <ul className="flex flex-wrap gap-2">
        {tasks.map((task, i) => (
          <li key={i}>
            <Button
              onClick={() => setCurrentTaskId(task.id)}
              variant={currentTaskId === task.id ? 'primary' : 'outline'}
              size="sm"
              className="w-full"
              aria-current={currentTaskId === task.id && 'page'}
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
