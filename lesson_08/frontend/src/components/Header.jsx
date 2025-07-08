import {Link} from 'react-router'
import logo from '@/assets/logo.svg'
import Container from './Container'
import frontRoutes from '@/routes/frontRoutes'
import NavBar from './NavBar'
import {CgMenu} from 'react-icons/cg'
import {useState} from 'react'
import {twMerge} from 'tailwind-merge'

function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  function closeMenu() {
    setMenuIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-100">
      <Container>
        <div className="rounded-b-3xl bg-primary-400 px-4 py-3 shadow-2xl">
          <div className="flex items-center justify-between gap-4">
            <Link to={frontRoutes.home} className="flex-none">
              <img src={logo} alt="TeachMeet" />
            </Link>
            <button
              className="text-3xl transition-[color] hover:text-accent-400 md:hidden"
              onClick={() => setMenuIsOpen((o) => !o)}
              aria-expanded={menuIsOpen}
              title="Відкрити/закрити меню"
              type="button"
            >
              <CgMenu />
            </button>
            <NavBar
              className={twMerge(
                'max-md:transition-[translate,_visibility] max-md:duration-500',
                menuIsOpen || 'max-md:invisible max-md:translate-x-full',
              )}
              closeMenu={closeMenu}
            />
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
