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
  USER_NAME,
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
    <article className="space-y-2 py-4">
      <div className="grid size-16 place-content-center rounded-full bg-cyan-950 text-5xl">
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

    const newLetter = new Letter({author: USER_NAME, message: value})

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

  function editMessageById(id, newMessage) {
    setLetters((prevLetters) =>
      prevLetters.map((l) => (l.id !== id ? l : {...l, message: newMessage})),
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
    }, BOT_RESPONSE_DELAY_MS)

    return () => clearTimeout(timeoutIdRef.current)
  }, [letters])

  return (
    <div className="mx-auto max-w-2xl divide-y-1 divide-gray-800 rounded-lg border border-gray-900 bg-black shadow-md shadow-cyan-950/10">
      <h2 className="flex items-center justify-center gap-1 p-1 text-center font-medium">
        <MessageSquareMore className="size-[1.125em]" /> {APP_NAME}
      </h2>
      <div className="grid h-[70dvh] grid-rows-[1fr_auto] pb-4">
        <div className="flex flex-col-reverse divide-y-1 divide-y-reverse divide-gray-800 overflow-auto px-3 bar-thin">
          {letters.map((letter) => (
            <LetterSection
              key={letter.id}
              {...letter}
              increaseCount={(property) =>
                increaseCountById(letter.id, property)
              }
              editMessage={(message) => editMessageById(letter.id, message)}
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
