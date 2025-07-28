import clsx from 'clsx/lite'
import styles from './Field.module.scss'

function Field({className = '', type = 'text', ...restProps}) {
  return (
    <input
      className={clsx(styles.field, className)}
      type={type}
      {...restProps}
    />
  )
}

export default Field
