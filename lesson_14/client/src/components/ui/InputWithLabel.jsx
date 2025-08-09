import {cn} from '@/lib/utils'
import {useId} from 'react'

function InputWithLabel({label, type = 'text', className = '', ...restProps}) {
  const id = useId()

  return (
    <div className="grid gap-1.5">
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <input
        className={cn('input w-full input-secondary', className)}
        type={type}
        id={id}
        {...restProps}
      />
    </div>
  )
}

export default InputWithLabel
