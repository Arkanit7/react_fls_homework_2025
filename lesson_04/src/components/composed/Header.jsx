import Container from '../Container'
import Button from '../Button'
import clsx from 'clsx/lite'

const BASE_CLASSES = {
  main: 'pt-4',
  panel:
    'py-3 px-3 rounded-2xl border border-cyan-950 shadow-sm shadow-cyan-950/25',
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
          <div className="flex items-center justify-between gap-4">
            <a
              className="group flex flex-none items-center gap-2 transition-[color] duration-300 hover:text-cyan-300"
              href="/"
            >
              <img
                className="animate-[spin_10s_linear_infinite_both_paused] transition-[filter] duration-300 group-hover:drop-shadow-[0_0_7px] group-hover:drop-shadow-cyan-400 group-hover:running"
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
