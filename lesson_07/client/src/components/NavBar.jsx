import {NAV_LINKS} from '@/routes/frontRoutes'
import {NavLink} from 'react-router'

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        {NAV_LINKS.map(({to, label}, i) => (
          <NavLink key={i} to={to} className="navbar__item">
            {label}
          </NavLink>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
