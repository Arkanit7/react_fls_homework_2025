import Pill from './Pill'
import {FEEDBACK_TYPES} from '../constants'

function WordsColumn({
  words,
  lang,
  selectedId,
  setSelectedId,
  feedbackWords,
  removedWords,
}) {
  function getFeedback(id) {
    return feedbackWords.find((w) => w[lang + 'Id'] === id)
  }

  function selectWord(id) {
    // prevent choosing a word which is still processing
    if (getFeedback(id)) return

    setSelectedId(selectedId === id ? null : id)
  }

  function getPillVariant(id) {
    if (removedWords.has(id)) return 'hidden'
    if (id === selectedId) return 'selected'

    const feedbackType = getFeedback(id)?.type

    if (feedbackType === FEEDBACK_TYPES.ERROR) return 'alert'
    if (feedbackType === FEEDBACK_TYPES.CORRECT) return 'success'
    return ''
  }

  return (
    <ul className="space-y-2">
      {words.map((word) => {
        return (
          <li key={word.id}>
            <Pill
              onClick={() => selectWord(word.id)}
              variant={getPillVariant(word.id)}
            >
              {word[lang]}
            </Pill>
          </li>
        )
      })}
    </ul>
  )
}

export default WordsColumn
