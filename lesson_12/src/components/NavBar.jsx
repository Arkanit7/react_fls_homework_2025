import clsx from 'clsx/lite'
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
            <Clickable
              className={({isActive}) => clsx(isActive && 'is-active')}
              variant="ghost"
              as={NavLink}
              key={i}
              to={absolutePath}
            >
              {title}
            </Clickable>
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
      `}</style>
    </>
  )
}

export default NavBar
