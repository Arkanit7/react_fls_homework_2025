import {twMerge} from 'tailwind-merge'
import Field from './Field'

function FieldGroup({label, type = 'text', className, ...restProps}) {
  return (
    <label className={twMerge('grid gap-1 font-bold', className)}>
      {label}
      <Field type={type} {...restProps} />
    </label>
  )
}

export default FieldGroup
