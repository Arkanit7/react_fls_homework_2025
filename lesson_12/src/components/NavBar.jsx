import {getNavRoutesHandles} from '@/lib/utils'
import routes from '@/app/routes'
import {NavLink} from 'react-router'
import Clickable from './ui/Clickable'

function NavBar({...props}) {
  const navHandles = getNavRoutesHandles(routes)

  return (
    <>
      <nav className="nav" {...props}>
        <ul className="list">
          {navHandles.map(({title, absolutePath}, i) => (
            <li key={i}>
              <Clickable variant="ghost" as={NavLink} to={absolutePath}>
                {title}
              </Clickable>
            </li>
          ))}
        </ul>
      </nav>
      <style jsx>{`
        .list {
          display: flex;
          gap: 0.125rem;
          flex-wrap: wrap;
          align-items: start;
          justify-content: end;
        }

        .list :global(.active) {
          text-decoration: underline;
        }
      `}</style>
    </>
  )
}

export default NavBar
