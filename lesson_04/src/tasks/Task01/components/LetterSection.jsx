import {getInitials} from '@/utils'
import Badge from './Badge'

function Letter({author, time, message, likes, dislikes, increaseCount}) {
  const sendDate = new Date(time)
  const dateTimeAttribute = sendDate.toISOString()
  const displayTime = sendDate.toLocaleTimeString()

  return (
    <article className="py-4">
      <div className="flex gap-2 items-start">
        <div className="flex-none size-10 bg-cyan-700 rounded-full grid place-items-center">
          {getInitials(author)}
        </div>
        <div className="space-y-1">
          <header className="flex gap-1 items-center">
            <h3 className="text-sm font-medium">{author}</h3>
            <time
              className="text-gray-400 text-xs"
              dateTime={dateTimeAttribute}
            >
              {displayTime}
            </time>
          </header>
          <p className="whitespace-pre-wrap text-sm">{message}</p>
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
