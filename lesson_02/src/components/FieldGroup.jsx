import {useState} from 'react'
import Field from './Field'

function FieldGroup({label, ...restProps}) {
  const [id] = useState(() => crypto.randomUUID())

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <Field id={id} {...restProps} className="w-full" />
    </>
  )
}

export default FieldGroup
