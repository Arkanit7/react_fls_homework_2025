import {cn} from '@/lib/utils'

function Stat({className, title, value, desc, icon, ...restProps}) {
  return (
    <div
      className={cn('stat border border-base-300 bg-base-100', className)}
      {...restProps}
    >
      <div className="stat-figure">{icon}</div>
      <div className="stat-title">{title}</div>
      <div className="stat-value">{value}</div>
      <div className="stat-desc">{desc}</div>
    </div>
  )
}

export default Stat
