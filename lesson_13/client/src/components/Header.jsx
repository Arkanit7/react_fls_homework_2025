import {Link} from 'react-router'
import Clickable from './ui/Clickable'
import Container from './ui/Container'
import NavBar from './NavBar'

function Header() {
  return (
    <>
      <header className="header">
        <Container>
          <div className="wrap">
            <Clickable as={Link} variant="icon">
              <span className="sr-only">Головна сторінка</span>
              <img src="/logo.svg" alt="Логотип React" />
            </Clickable>
            <NavBar />
          </div>
        </Container>
      </header>
      <style jsx>{`
        .header {
          border-block-end: 1px solid var(--border);
          padding-block: 0.5rem;
          position: sticky;
          inset-block-start: 0;
          background-color: var(--background);
          z-index: 100;
        }

        .wrap {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }
      `}</style>
    </>
  )
}

export default Header
