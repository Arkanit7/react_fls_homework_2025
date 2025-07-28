import clsx from 'clsx/lite'
import styles from './Reference.module.scss'
import {Link} from 'react-router'

function Reference({className = '', as = Link, ...restProps}) {
  const Type = as
  return (
    <Type
      className={clsx(styles.reference, className)}
      to={as === Link && '#'}
      {...restProps}
    />
  )
}

export default Reference
