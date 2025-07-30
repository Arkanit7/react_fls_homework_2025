import {useId} from 'react'
import Field from './Field'
import Label from './Label'

function FieldWithLabel({label, ...restProps}) {
  const id = useId()

  return (
    <>
      <div className="group">
        <Label htmlFor={id}>{label}</Label>
        <Field {...restProps} id={id} />
      </div>
      <style jsx>{`
        .group {
          display: grid;
          gap: 0.25rem;
        }
      `}</style>
    </>
  )
}

export default FieldWithLabel
