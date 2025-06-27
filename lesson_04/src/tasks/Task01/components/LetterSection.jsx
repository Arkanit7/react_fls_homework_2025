import {getInitials} from '@/utils'
import Badge from './Badge'

function Letter({author, time, message, likes, dislikes, increaseCount}) {
  const sendDate = new Date(time)
  const dateTimeAttribute = sendDate.toISOString()
  const displayTime = sendDate.toLocaleTimeString()

  return (
    <article className="py-4">
      <div className="flex items-start gap-2">
        <div className="grid size-10 flex-none place-items-center rounded-full bg-cyan-700">
          {getInitials(author)}
        </div>
        <div className="space-y-1">
          <header className="flex items-center gap-1">
            <h3 className="text-sm font-medium">{author}</h3>
            <time
              className="text-xs text-gray-400"
              dateTime={dateTimeAttribute}
            >
              {displayTime}
            </time>
          </header>
          <p className="text-sm whitespace-pre-wrap">{message}</p>
          <ul className="flex gap-1">
            <li>
              <Badge
                text="👍"
                count={likes}
                onClick={() => increaseCount('likes')}
              />
            </li>
            <li>
              <Badge
                text="👎"
                count={dislikes}
                onClick={() => increaseCount('dislikes')}
              />
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}
export default Letter
