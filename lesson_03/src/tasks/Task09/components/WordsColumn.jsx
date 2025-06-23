import Word from './WordItem'

function WordsColumn({words, lang, selectedId, setSelectedId, feedbackWords}) {
  function selectWord(id) {
    // prevent choosing a word which is still processing
    if (feedbackWords.some((w) => w[lang + 'Id'] === id)) return

    setSelectedId(selectedId === id ? null : id)
  }

  return (
    <ul className="space-y-2">
      {words.map((word) => (
        <Word
          key={word.id}
          isSelected={word.id === selectedId}
          feedback={feedbackWords.find((w) => w[lang + 'Id'] === word.id)}
          value={word[lang]}
          selectWord={() => selectWord(word.id)}
        />
      ))}
    </ul>
  )
}

export default WordsColumn
