import clsx from 'clsx/lite'
import styles from './Clickable.module.scss'

const VARIANTS = {
  base: '',
  outline: styles.outline,
}

function Clickable({
  className = '',
  as = 'button',
  variant = 'base',
  ...restProps
}) {
  const Type = as

  return (
    <Type
      className={clsx(styles.clickable, VARIANTS[variant], className)}
      type={as === 'button' && 'button'}
      {...restProps}
    />
  )
}

export default Clickable
