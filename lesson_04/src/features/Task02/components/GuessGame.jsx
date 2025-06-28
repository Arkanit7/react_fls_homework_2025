import {useState, useMemo} from 'react'
import {SECRET_NUMBER_LENGTH, TOTAL_PLAYERS} from '../constants'
import Player from './Player'
import {getUniqueDigitsList} from '@/utils'

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
      <div className="divide-x-1 flex divide-cyan-900 rounded border border-cyan-900">
        {digits.map((d, i) => (
          <Digit key={i} value={d} />
        ))}
      </div>
    </div>
  )
}

function GuessGame() {
  const [usedDigits, setUsedDigits] = useState(() => new Set())
  const secretDigits = useMemo(
    () => new Set(getUniqueDigitsList(SECRET_NUMBER_LENGTH)),
    [],
  )
  const [activePlayer, setActivePlayer] = useState(0)

  const isGameOver = secretDigits.isSubsetOf(usedDigits)
  const displayDigits = [...secretDigits].map((d) =>
    usedDigits.has(d) ? d : '?',
  )

  function cycleNextActivePlayer() {
    const nextActivePlayer = activePlayer + 1

    if (nextActivePlayer > TOTAL_PLAYERS - 1) setActivePlayer(0)
    else setActivePlayer(nextActivePlayer)
  }

  function playNextTurn(number) {
    if (usedDigits.has(number)) return

    setUsedDigits((d) => {
      const newUsedDigits = new Set([...d, number])

      // only cycle players if the game will continue
      if (!secretDigits.isSubsetOf(newUsedDigits)) cycleNextActivePlayer()

      return newUsedDigits
    })
  }

  return (
    <div className="space-y-6">
      <Display digits={displayDigits} />
      {isGameOver ? (
        <div className="text-center text-2xl">
          Гравець №{activePlayer + 1} програв!
        </div>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(var(--container-3xs),1fr))] gap-2 sm:gap-3">
          {Array.from({length: TOTAL_PLAYERS}, (_, i) => (
            <Player
              key={i}
              isActive={i === activePlayer}
              position={i + 1}
              usedDigits={usedDigits}
              secretDigits={secretDigits}
              playNextTurn={playNextTurn}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default GuessGame
