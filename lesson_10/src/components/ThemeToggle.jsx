import NavClickable from '@/components/ui/NavClickable'
import {useThemeContext} from '@/contexts/ThemeContext'
import {THEMES} from '@/lib/constants'
import {cn} from '@/lib/utils'
import {Moon, Sun} from 'lucide-react'
import {useState} from 'react'

function ThemeButton(props) {
  return (
    <button
      className="w-full rounded-sm px-2 py-1.5 text-start text-sm outline-hidden select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
      type="button"
      {...props}
    />
  )
}

function ThemeToggle({className}) {
  const {setTheme} = useThemeContext()
  const [isOpen, setIsOpen] = useState(false)

  function selectTheme(theme) {
    return () => {
      setTheme(theme)
      setIsOpen(false)
    }
  }

  return (
    <div className={cn('relative', className)}>
      <NavClickable variant="icon" onClick={() => setIsOpen((o) => !o)}>
        <Sun />
        <span className="sr-only">Обрати кольорову тему сайту</span>
      </NavClickable>

      {isOpen && (
        <div className="absolute top-[calc(100%_+_var(--spacing))] right-0 z-50">
          <ul className="min-w-[8rem] overflow-x-hidden overflow-y-auto rounded-lg border border-border bg-popover p-1 text-popover-foreground shadow-md">
            <li>
              <ThemeButton onClick={selectTheme(THEMES.SYSTEM)}>
                Системна
              </ThemeButton>
            </li>
            <li>
              <ThemeButton onClick={selectTheme(THEMES.LIGHT)}>
                Світла
              </ThemeButton>
            </li>
            <li>
              <ThemeButton onClick={selectTheme(THEMES.DARK)}>
                Темна
              </ThemeButton>
            </li>
            <li>
              <ThemeButton onClick={selectTheme(THEMES.SOLARIZED)}>
                Сонячна
              </ThemeButton>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default ThemeToggle
