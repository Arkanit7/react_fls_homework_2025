import {cn} from '@/lib/utils'
import Typography from './Typography'

function DataCard({className, title, data}) {
  return (
    <div
      className={cn(
        'card-border card border-base-300 bg-base-100 card-sm',
        className,
      )}
    >
      <div className="card-body gap-0.25">
        <Typography className="font-secondary text-base-content">
          {title}
        </Typography>
        <span>{data}</span>
      </div>
    </div>
  )
}

export default DataCard
