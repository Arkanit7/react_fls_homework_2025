import WordItem from './WordItem'

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

  return (
    <ul className="space-y-2">
      {words.map((word) => {
        return (
          <WordItem
            key={word.id}
            isRemoved={removedWords.has(word.id)}
            isSelected={word.id === selectedId}
            feedback={getFeedback(word.id)}
            value={word[lang]}
            selectWord={() => selectWord(word.id)}
          />
        )
      })}
    </ul>
  )
}

export default WordsColumn
