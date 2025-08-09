import {cn} from '@/lib/utils'

function Collapse({className, title, body, name, ...restProps}) {
  return (
    <div
      className={cn(
        'collapse-plus collapse border border-base-300 bg-base-100',
        className,
      )}
      {...restProps}
    >
      <input type="radio" name={name} />
      <div className="collapse-title font-secondary text-lg font-semibold">
        {title}
      </div>
      <div className="collapse-content text-sm">{body}</div>
    </div>
  )
}

export default Collapse
