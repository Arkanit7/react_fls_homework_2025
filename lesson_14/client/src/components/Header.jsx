import {Link} from 'react-router'
import NavBar from './NavBar'
import {Container} from './ui'
import {navigationRoutes} from '@/router/navigation'
import ThemeController from './ThemeController'
import Logo from '@/assets/logo.svg?react'

function Header() {
  return (
    <header className="sticky top-0 z-100 border-b border-base-300 bg-base-100 py-1.5">
      <Container className="flex items-center justify-between gap-3">
        <Link className="flex-none" to={navigationRoutes.dashboard}>
          <Logo className="size-7" />
        </Link>
        <NavBar />
        <ThemeController />
      </Container>
    </header>
  )
}

export default Header
