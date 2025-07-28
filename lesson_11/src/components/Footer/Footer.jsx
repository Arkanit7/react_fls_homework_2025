import clsx from 'clsx/lite'
import styles from './Footer.module.scss'
import Container from '../Container'

function Footer({className = '', ...restProps}) {
  return (
    <footer className={clsx(styles.footer, className)} {...restProps}>
      <Container>
        <div className={styles.wrap}>
          <p className={styles.copyright}>All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
