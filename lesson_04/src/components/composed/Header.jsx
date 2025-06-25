import Container from '../Container'
import Button from '../Button'
import clsx from 'clsx'

const BASE_CLASSES = {
  main: 'pt-4',
  panel:
    'py-3 px-3 rounded-2xl border border-gray-900 shadow-md shadow-cyan-950/10"',
}

const VARIANTS = {
  static: {
    main: '',
    panel: '',
  },
  sticky: {
    main: 'sticky top-0 z-100',
    panel: 'backdrop-blur',
  },
}

function Header({tasks, currentTaskId, setCurrentTaskId, variant = 'static'}) {
  return (
    <header className={clsx(BASE_CLASSES.main, VARIANTS[variant].main)}>
      <Container>
        <div className={clsx(BASE_CLASSES.panel, VARIANTS[variant].panel)}>
          <div className="flex gap-4 items-center justify-between">
            <a
              className="flex-none flex items-center gap-2 group hover:text-cyan-300 transition-[color] duration-300"
              href="/"
            >
              <img
                className="group-hover:drop-shadow-[0_0_7px] group-hover:drop-shadow-cyan-400 transition-[filter] duration-300 animate-[spin_10s_linear_infinite_both_paused] group-hover:running"
                src="/images/react.svg"
                alt=""
              />
              <span className="max-sm:hidden">React HW</span>
            </a>

            <nav>
              <ul className="flex flex-wrap gap-2">
                {tasks.map((task, i) => (
                  <li key={i}>
                    <Button
                      onClick={() => setCurrentTaskId(task.id)}
                      variant={
                        currentTaskId === task.id ? 'primary' : 'outline'
                      }
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
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
