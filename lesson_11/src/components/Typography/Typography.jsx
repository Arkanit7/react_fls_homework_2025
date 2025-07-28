import clsx from 'clsx/lite'
import styles from './Typography.module.scss'

const VARIANTS = {
  base: styles.base,
  h1: styles.h1,
  h2: styles.h2,
  h3: styles.h3,
  h4: styles.h4,
  h5: styles.h5,
  h6: styles.h6,
  code: styles.code,
}

function Typography({
  className = '',
  as = 'p',
  variant = 'base',
  ...restProps
}) {
  const Type = as

  return <Type className={clsx(VARIANTS[variant], className)} {...restProps} />
}

export default Typography
