import clsx from 'clsx/lite'
import styles from './Container.module.scss'

function Container({className = '', ...restProps}) {
  return <div className={clsx(styles.container, className)} {...restProps} />
}

export default Container
