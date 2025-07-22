import {Link} from 'react-router'
import Container from './Container'
import NavBar from './NavBar'
import NavClickable from '@/components/ui/NavClickable'
import Logo from '@/assets/images/logo.svg?react'
import ThemeToggle from './ThemeToggle'

function Header() {
  return (
    <header className="sticky top-0 z-100 bg-background py-4 shadow shadow-secondary">
      <Container>
        <div className="flex items-center gap-0.5">
          <NavClickable as={Link} variant="icon" to="/">
            <Logo />
            <span className="sr-only">на головну</span>
          </NavClickable>
          <NavBar />
          <ThemeToggle className="ml-auto" />
        </div>
      </Container>
    </header>
  )
}

export default Header
