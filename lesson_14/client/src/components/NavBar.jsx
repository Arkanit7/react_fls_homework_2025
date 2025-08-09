import {getRoutesWithTitles} from '@/lib/utils'
import routes from '@/router/routes'
import {NavLink} from 'react-router'

function NavBar() {
  const navLinks = getRoutesWithTitles(routes)

  return (
    <nav>
      <ul className="menu menu-horizontal">
        {navLinks.map(({path, title}, i) => (
          <li key={i}>
            <NavLink
              to={path}
              className={({isActive}) =>
                isActive ? 'underline underline-offset-4' : null
              }
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
