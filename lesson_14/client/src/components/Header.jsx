import {Link} from 'react-router'
import NavBar from './NavBar'
import {Container} from './ui'
import {navigationRoutes} from '@/router/navigation'

function Header() {
  return (
    <header className="border-b border-base-300 py-2">
      <Container className="flex items-center justify-between gap-3">
        <Link className="flex-none" to={navigationRoutes.dashboard}>
          <img className="size-8" src="/logo.svg" alt="" />
        </Link>
        <NavBar />
      </Container>
    </header>
  )
}

export default Header
