import {useId} from 'react'
import Label from './Label'
import Textarea from './Textarea'

function TextareaWithLabel({label, ...restProps}) {
  const id = useId()

  return (
    <>
      <div className="group">
        <Label htmlFor={id}>{label}</Label>
        <Textarea {...restProps} id={id} />
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

export default TextareaWithLabel
