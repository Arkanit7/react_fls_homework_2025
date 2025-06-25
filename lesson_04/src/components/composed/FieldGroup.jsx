import {useId} from 'react'
import Field from '../Field'

function FieldGroup({label, ...restProps}) {
  const id = useId()

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <Field id={id} {...restProps} className="w-full" />
    </>
  )
}

export default FieldGroup
