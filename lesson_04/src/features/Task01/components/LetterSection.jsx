import {useState} from 'react'
import {getInitials} from '@/utils'
import Badge from './Badge'
import {USER_NAME} from '../constants'

function LetterSection({
  author,
  time,
  message,
  likes,
  dislikes,
  increaseCount,
  editMessage,
}) {
  const [isEditing, setIsEditing] = useState(false)

  const sendDate = new Date(time)
  const dateTimeAttribute = sendDate.toISOString()
  const displayTime = sendDate.toLocaleTimeString()

  function handleDblclick() {
    if (author !== USER_NAME) return

    setIsEditing(true)
  }

  /**
   * @param {React.KeyboardEvent} e
   */
  function handleKeyDown(e) {
    if ((e.key !== 'Enter' || e.shiftKey) && e.key !== 'Escape') return
    setIsEditing(false)

    if (e.key === 'Escape') return
    const trimmedValue = e.target.value.trim()

    if (trimmedValue === '') return
    editMessage(trimmedValue)
  }

  return (
    <article className="py-4">
      <div className="flex items-start gap-2">
        <div className="grid size-10 flex-none place-items-center rounded-full bg-cyan-700">
          {getInitials(author)}
        </div>
        <div className="flex-1 space-y-1">
          <header className="flex items-center gap-1">
            <h3 className="text-sm font-medium">{author}</h3>
            <time
              className="text-xs text-gray-400"
              dateTime={dateTimeAttribute}
            >
              {displayTime}
            </time>
          </header>
          {isEditing ? (
            <textarea
              onKeyDown={handleKeyDown}
              defaultValue={message}
              className="field-sizing-content bar-thin resize-none rounded border border-gray-800 bg-gray-950 p-2 text-sm"
              autoComplete="off"
            ></textarea>
          ) : (
            <p
              onDoubleClick={handleDblclick}
              className="whitespace-pre-wrap text-sm"
            >
              {message}
            </p>
          )}
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
export default LetterSection
