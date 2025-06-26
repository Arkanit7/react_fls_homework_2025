import LetterSection from './LetterSection'
import Letter from '../models'
import MessageForm from './MessageForm'
import {MessageSquareMore} from 'lucide-react'
import {useEffect, useRef, useState} from 'react'
import {
  BOT_MESSAGES,
  BOT_NAME,
  BOT_RESPONSE_DELAY_MS,
  APP_NAME,
} from '../constants'
import {getRandomInteger} from '@/utils'

/**
 * Handles Enter key in textarea to submit form, allows Shift+Enter for newline
 * @param {React.KeyboardEvent} e
 */
function handleTextareaKeyDown(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault()
    // Find the form and trigger submit
    e.target.form?.requestSubmit()
  }
}

function GreetingsLetter() {
  return (
    <article className="py-4 space-y-2">
      <div className="bg-cyan-950 rounded-full size-16 grid place-content-center text-5xl">
        #
      </div>
      <h3 className="text-2xl font-medium">Ласкаво просимо до чату!</h3>
      <p className="text-gray-400">Це початок розмови. Пишіть першими!</p>
    </article>
  )
}

function Messenger() {
  const [letters, setLetters] = useState(() => [])
  const timeoutIdRef = useRef()

  /** @param {React.FormEvent} e */
  function handleSubmit(e) {
    e.preventDefault()
    const textEl = e.currentTarget.elements.message
    const value = textEl.value.trim()

    if (!value) return

    const newLetter = new Letter({author: 'Ви', message: value})

    setLetters((l) => [newLetter, ...l])
    textEl.value = ''
  }

  function increaseCountById(id, property) {
    setLetters((prevLetters) =>
      prevLetters.map((l) =>
        l.id === id ? {...l, [property]: l[property] + 1} : l,
      ),
    )
  }

  useEffect(() => {
    if (letters[0]?.author === BOT_NAME) return

    clearTimeout(timeoutIdRef.current)

    timeoutIdRef.current = setTimeout(() => {
      const botMessage =
        BOT_MESSAGES[getRandomInteger(0, BOT_MESSAGES.length - 1)]
      const botLetter = new Letter({author: BOT_NAME, message: botMessage})
      setLetters((l) => [botLetter, ...l])

      return () => clearTimeout(timeoutIdRef.current)
    }, BOT_RESPONSE_DELAY_MS)
  }, [letters])

  return (
    <div className="max-w-2xl mx-auto divide-y-1 bg-black divide-gray-800 border border-gray-900 shadow-md shadow-cyan-950/10 rounded-lg">
      <h2 className="text-center p-1 flex gap-1 items-center justify-center font-medium">
        <MessageSquareMore className="size-[1.125em]" /> {APP_NAME}
      </h2>
      <div className="h-[70dvh] grid grid-rows-[1fr_auto] pb-4">
        <div className="flex flex-col-reverse overflow-auto divide-y-reverse divide-y-1 divide-gray-800 bar-thin px-3">
          {letters.map((letter) => (
            <LetterSection
              key={letter.id}
              {...letter}
              increaseCount={(property) =>
                increaseCountById(letter.id, property)
              }
            />
          ))}
          <GreetingsLetter />
        </div>
        <div className="px-3">
          <MessageForm
            handleSubmit={handleSubmit}
            handleTextareaKeyDown={handleTextareaKeyDown}
          />
        </div>
      </div>
    </div>
  )
}

export default Messenger
