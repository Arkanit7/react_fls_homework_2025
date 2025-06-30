import {useState} from 'react'
import {SECRET_NUMBER_LENGTH, TOTAL_PLAYERS} from '../constants'
import Player from './Player'
import {getUniqueDigitsList} from '@/utils'
import {getPreviousPlayerIndex, initPlayerGuessedDigits} from '../utils'
import Clickable from '@/components/Clickable'

function Digit({value}) {
  return (
    <div className="grid aspect-square min-h-16 min-w-16 flex-none place-content-center p-4 text-5xl font-extralight">
      {value}
    </div>
  )
}

function Display({digits}) {
  return (
    <div className="flex justify-center overflow-x-auto">
      <div className="flex divide-x-1 divide-cyan-900 rounded border border-cyan-900">
        {digits.map((d, i) => (
          <Digit key={i} value={d} />
        ))}
      </div>
    </div>
  )
}

function GuessGame() {
  const [playerGuessedDigits, setPlayerGuessedDigits] = useState(() =>
    initPlayerGuessedDigits(TOTAL_PLAYERS),
  )
  const allGuessedDigits = Object.values(playerGuessedDigits).flat()
  const [secretDigits, setSecretDigits] = useState(() =>
    getUniqueDigitsList(SECRET_NUMBER_LENGTH),
  )
  const displayDigits = secretDigits.map((digit) =>
    allGuessedDigits.includes(digit) ? digit : '?',
  )

  const [activePlayerIndex, setActivePlayerIndex] = useState(0)

  const previousPlayerIndex = getPreviousPlayerIndex(
    activePlayerIndex,
    TOTAL_PLAYERS,
  )
  const isGameOver = secretDigits.every((digit) =>
    allGuessedDigits.includes(digit),
  )

  function isAllowedDigit(digit) {
    if (typeof digit !== 'number')
      throw new TypeError(`The digit "${digit}" must be a number.`)

    return (
      isFinite(digit) &&
      !allGuessedDigits.includes(digit) &&
      digit % 10 === digit
    )
  }

  function cycleNextActivePlayer() {
    setActivePlayerIndex((i) => {
      const nextIndex = i + 1

      if (nextIndex >= TOTAL_PLAYERS) return 0
      return nextIndex
    })
  }

  function playDigit(digit, playerIndex) {
    if (!isAllowedDigit(digit)) return

    setPlayerGuessedDigits((d) => ({
      ...d,
      [playerIndex]: [...d[playerIndex], digit],
    }))

    cycleNextActivePlayer()
  }

  function restartGame() {
    setActivePlayerIndex(0)
    setPlayerGuessedDigits(initPlayerGuessedDigits(TOTAL_PLAYERS))
    setSecretDigits(getUniqueDigitsList(SECRET_NUMBER_LENGTH))
  }

  return (
    <div className="space-y-6">
      <Display digits={displayDigits} />
      {isGameOver ? (
        <div className="grid justify-items-center gap-4">
          <div className="text-center text-3xl font-light">
            Гравець №{previousPlayerIndex + 1} програв!
          </div>
          <Clickable onClick={restartGame} variant="outline" size="xl">
            Нова гра
          </Clickable>
        </div>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(var(--container-3xs),1fr))] gap-2 sm:gap-3">
          {Array.from({length: TOTAL_PLAYERS}, (_, i) => (
            <Player
              key={i}
              isActive={i === activePlayerIndex}
              position={i + 1}
              playDigit={(digit) => playDigit(digit, i)}
              isAllowedDigit={isAllowedDigit}
              guessedDigits={playerGuessedDigits[i].filter((digit) =>
                secretDigits.includes(digit),
              )}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default GuessGame
