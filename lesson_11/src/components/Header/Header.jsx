import clsx from 'clsx/lite'
import styles from './Header.module.scss'
import {Link} from 'react-router'
import Container from '../Container'
import NavBar from '../NavBar'

function Header({className = '', ...restProps}) {
  return (
    <header className={clsx(styles.header, className)} {...restProps}>
      <Container>
        <div className={styles.wrap}>
          <div className={styles.box}>
            <Link>
              <span className="sr-only">Home page</span>
              <img
                className={styles.brand}
                src="/images/logo.svg"
                alt="React"
              />
            </Link>
            <NavBar />
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
