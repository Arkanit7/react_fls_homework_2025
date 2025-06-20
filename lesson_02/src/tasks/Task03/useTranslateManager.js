import {useState} from 'react'
import {STATUS} from './constants'
import {shuffleArray} from '@/utils'

function useTranslateManager(list) {
  const [questionList] = useState(() => shuffleArray(list, false))
  const [questionIndex, setWordIndex] = useState(0)
  const [status, setStatus] = useState(STATUS.IDLE)
  const [phrase, setPhrase] = useState('')

  const currentQuestion = questionList[questionIndex]

  function checkAnswer() {
    const normalizedPhrase = phrase.trim().toLowerCase()

    if (currentQuestion.translateList.includes(normalizedPhrase))
      setStatus(STATUS.SUCCESS)
    else setStatus(STATUS.ERROR)
  }

  function applyReset() {
    setStatus(STATUS.IDLE)
    setPhrase('')
  }

  function handleSubmit(e) {
    e.preventDefault()

    switch (status) {
      case STATUS.ERROR:
        applyReset()
        break
      case STATUS.SUCCESS:
        applyReset()
        proceedFurther()
        break
      default:
        checkAnswer()
    }
  }

  function proceedFurther() {
    const nextIndex = questionIndex + 1

    if (nextIndex >= questionList.length) {
      setStatus(STATUS.FINISH)
      return
    }

    setWordIndex(nextIndex)
    applyReset()
  }

  return {status, phrase, setPhrase, handleSubmit, currentQuestion}
}

export default useTranslateManager
