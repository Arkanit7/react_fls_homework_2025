import clsx from 'clsx/lite'
import styles from './NavBar.module.scss'
import {getNavRoutesHandles} from '@/lib/utils'
import routes from '@/app/routes'
import {NavLink} from 'react-router'

function NavBar({className = '', ...restProps}) {
  const navHandles = getNavRoutesHandles(routes)

  return (
    <nav className={clsx(styles.nav, className)} {...restProps}>
      <ul className={styles.list}>
        {navHandles.map(({title, absolutePath}, i) => (
          <NavLink
            className={({isActive}) =>
              clsx(styles.link, isActive && styles.active)
            }
            key={i}
            to={absolutePath}
          >
            {title}
          </NavLink>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
