import frontNavigation from '@/routes/frontNavigation'
import {NavLink} from 'react-router'
import {twMerge} from 'tailwind-merge'

const mainNavigation = [
  {to: frontNavigation.home, title: 'Головна'},
  {to: frontNavigation.teachers.index, title: 'Вчителі'},
  {to: frontNavigation.meeting, title: 'Збори'},
  {to: frontNavigation.aboutApp, title: 'Про додаток'},
  {to: frontNavigation.aboutDev, title: 'Про розробника'},
]

function NavBar({className, closeMenu}) {
  return (
    <nav
      className={twMerge(
        'max-md:fixed max-md:inset-0 max-md:overflow-y-auto max-md:rounded-3xl max-md:bg-blue-400 max-md:px-4 max-md:py-20',
        className,
      )}
    >
      <ul className="flex flex-wrap gap-x-4 max-md:flex-col max-md:items-center max-md:gap-4 max-md:text-center">
        {mainNavigation.map(({to, title}, i) => (
          <li key={i}>
            <NavLink
              to={to}
              onClick={closeMenu}
              className="text-lg transition-[color] hover:text-accent-400 max-md:text-xl [.active]:text-yellow-400"
              end
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
