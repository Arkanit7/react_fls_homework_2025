import {getNavRoutesHandles} from '@/lib/utils'
import {routes} from '@/routes'
import {NavLink} from 'react-router'
import NavClickable from '@/components/ui/NavClickable'

function NavBar() {
  const handles = getNavRoutesHandles(routes)

  return (
    <nav>
      <ul className="flex flex-wrap gap-x-0.5">
        {handles.map(({absolutePath, title}, i) => (
          <li key={i}>
            <NavClickable as={NavLink} to={absolutePath}>
              {title}
            </NavClickable>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
