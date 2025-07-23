const dateFormatter = new Intl.DateTimeFormat('uk-UA', {
  day: 'numeric',
  month: 'long',
})
const timeFormatter = new Intl.DateTimeFormat('uk-UA', {timeStyle: 'short'})

function PlaceInfo({place, date}) {
  return (
    <div className="flex-none sm:space-y-1">
      <div className="font-medium sm:text-lg">{timeFormatter.format(date)}</div>
      <div className="text-muted-foreground max-sm:text-sm">
        {dateFormatter.format(date)}
      </div>
      <div className="font-medium max-sm:text-sm">{place}</div>
    </div>
  )
}

export default PlaceInfo
