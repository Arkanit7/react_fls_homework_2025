import {cn} from '@/lib/utils'
import Typography from './Typography'

function DataCard({className, title, data}) {
  return (
    <div
      className={cn(
        'card-border card border-base-300 bg-base-100 max-md:card-sm',
        className,
      )}
    >
      <div className="card-body gap-1 lg:gap-2">
        <Typography variant="h3" component="span">
          {title}
        </Typography>
        <span>{data}</span>
      </div>
    </div>
  )
}

export default DataCard
