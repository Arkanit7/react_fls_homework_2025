import {cn} from '@/lib/utils'

function DataGrid({className, ...restProps}) {
  return (
    <div
      className={cn(
        'grid grid-cols-[repeat(auto-fit,_minmax(min(100%,_var(--container-2xs)),1fr))] gap-2',
        className,
      )}
      {...restProps}
    />
  )
}

export default DataGrid
