import clsx from 'clsx'
import {FEEDBACK_TYPES} from '../constants'

function WordItem({value, isSelected, selectWord, feedback, isRemoved}) {
  const feedbackType = feedback?.type
  const disabled = Boolean(feedbackType)
  const classes = clsx(
    isRemoved && 'invisible',
    isSelected && 'ring-2 ring-cyan-400',
    feedbackType === FEEDBACK_TYPES.ERROR && 'ring-2 ring-red-400',
    feedbackType === FEEDBACK_TYPES.CORRECT && 'ring-2 ring-green-400',
    'w-full px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors disabled:opacity-50 disabled:pointer-events-none',
  )

  return (
    <li>
      <button
        onClick={selectWord}
        className={classes}
        type="button"
        disabled={disabled}
      >
        {value}
      </button>
    </li>
  )
}

export default WordItem
