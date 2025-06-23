import {useEffect, useState} from 'react'
import WordsColumn from './WordsColumn'
import {checkWordsLogic} from '../utils'

function WordsQuiz({words}) {
  const [selectedIdEn, setSelectedIdEn] = useState(null)
  const [selectedIdUk, setSelectedIdUk] = useState(null)
  // I've chosen a Set over an array for the fast element inclusion checks
  const [removedWords, setRemovedWords] = useState(() => new Set())
  const [feedbackWords, setFeedbackWords] = useState(() => [])

  const remainedWords = words.filter(({id}) => !removedWords.has(id))

  useEffect(() => {
    checkWordsLogic({
      selectedIdEn,
      selectedIdUk,
      setSelectedIdEn,
      setSelectedIdUk,
      setFeedbackWords,
      setRemovedWords,
    })
  }, [selectedIdEn, selectedIdUk])

  return (
    <div className="flex gap-2 justify-center">
      <WordsColumn
        words={remainedWords}
        lang="en"
        selectedId={selectedIdEn}
        setSelectedId={setSelectedIdEn}
        feedbackWords={feedbackWords}
      />
      <WordsColumn
        words={remainedWords}
        lang="uk"
        selectedId={selectedIdUk}
        setSelectedId={setSelectedIdUk}
        feedbackWords={feedbackWords}
      />
    </div>
  )
}

export default WordsQuiz
