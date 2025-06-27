import {useState} from 'react'
import Button from '@/components/Button'
import Field from '@/components/Field'
import clsx from 'clsx/lite'

function Player({isActive, position, usedDigits, secretDigits, nextTurn}) {
  const [userNumber, setUserNumber] = useState('')
  const [userGuessedDigits, setUserGuessedDigits] = useState(() => [])

  function isAllowedNumber() {
    return (
      userNumber.length === 1 &&
      isFinite(userNumber) &&
      !usedDigits.has(Number(userNumber))
    )
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (!isAllowedNumber()) return
    const guessedNumber = Number(userNumber)
    nextTurn(guessedNumber)
    setUserNumber('')

    if (!secretDigits.has(guessedNumber)) return
    setUserGuessedDigits((d) => [...d, guessedNumber])
  }

  const classes = clsx(
    isActive && 'ring-2 ring-cyan-400',
    'p-3 space-y-2 rounded bg-black border border-cyan-900',
  )

  return (
    <form onSubmit={handleSubmit} className={classes}>
      <h3 className="text-xl">Гравець {position}</h3>
      <p>
        <Field
          value={userNumber}
          onChange={(e) => setUserNumber(e.target.value)}
          className="w-full"
          type="number"
          disabled={!isActive}
        />
      </p>
      <p>
        <Button
          variant="outline"
          type="submit"
          disabled={!isActive || !isAllowedNumber()}
          className="w-full"
        >
          Зробити хід
        </Button>
      </p>
      {userGuessedDigits.length !== 0 && (
        <>
          <p>Вгадані числа:</p>
          <ul className="flex flex-wrap gap-1">
            {userGuessedDigits.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </>
      )}
    </form>
  )
}

export default Player
