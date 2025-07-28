import clsx from 'clsx/lite'
import styles from './FieldWithLabel.module.scss'
import Field from '../Field'

function FieldWithLabel({className = '', label, ...restProps}) {
  return (
    <label className={clsx(styles.group, className)}>
      <span className={styles.label}>{label}</span>
      <Field {...restProps} />
    </label>
  )
}

export default FieldWithLabel
